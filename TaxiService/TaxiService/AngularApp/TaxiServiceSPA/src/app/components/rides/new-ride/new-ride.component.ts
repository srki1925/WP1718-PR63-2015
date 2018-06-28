import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RidesService } from '../../../services/rides.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalApisDataService } from '../../../services/external-apis-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IRide, RideStatus, IRideRequest, IDriver, ILocation } from '../../../services/interfaces';
import { stringify } from 'querystring';
import { AuthService } from '../../../services/auth.service';
import { Usertype } from '../../../services/usertype.enum';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-new-ride',
  templateUrl: './new-ride.component.html',
  styleUrls: ['./new-ride.component.css']
})
export class NewRideComponent implements OnInit {

  rideForm:FormGroup;
  editMode = false;
  isDispatcher = false;
  userType : Usertype;
  availableDrivers : string[] = [];

  //destination set
  destination = false;
  rideId:number;
  //google maps specific
  latitude = 45.260656;
  longitude = 19.832157;
  marker:IMarker = {lat:null, lng:null};
  zoom = 14;
  chosen = false;
  draggable = true;
  error = false;

  constructor(private ridesService:RidesService,
              private userService:UsersService,
              private route:ActivatedRoute,
              private router:Router,
              private apisServices:ExternalApisDataService,
              private http:HttpClient,
              private authService:AuthService) { }

  ngOnInit() {
    this.rideForm = new FormGroup({
      address: new FormControl(null, Validators.required),
      cartype: new FormControl(0),
      driver: new FormControl(null),
      fare: new FormControl(Validators.required,Validators.min(0))
    });
    this.isDispatcher = this.authService.getUserType() === Usertype.Dispatcher;
    this.userType = this.authService.getUserType();
    
    this.rideId = this.route.snapshot.queryParams['id'];
    this.destination = this.route.snapshot.queryParams['destination'];
    console.log(this.rideId);
    console.log(this.destination);
  }

  onSubmit(){
    if(this.userType === Usertype.Driver){
      if(this.destination){
        const location : ILocation = {
          address: this.rideForm.value.address,
          lat: this.marker.lat,
          lng: this.marker.lng
        }
        console.log(location);
        this.ridesService.finishRide(location, this.rideId, this.rideForm.value.fare).subscribe(
          ok => {
            this.router.navigate(['../../'], {relativeTo:this.route});
          }
        );
      }else
      {
        const location : ILocation = {
          address: this.rideForm.value.address,
          lat: this.marker.lat,
          lng: this.marker.lng
        }
        this.userService.changeDriverLocation(location)
        .subscribe(
          ok =>{ this.router.navigate(['/home','rides']), {relativeTo: this.route} },
          error => {console.log(error)}
        );
      }
    }
    else{
      if(!this.editMode){
        let newRide : IRideRequest = {
          location : {
            address: this.rideForm.value.address,
            lat: this.marker.lat,
            lng: this.marker.lng
          },
          destination: null,
          driver: this.rideForm.value.driver,
          fare: 0,
          cartype: this.rideForm.value.cartype,
          rideid:null
        }
        console.log(newRide);
        this.ridesService.newRide(newRide)
        .subscribe(
          ok =>{this.router.navigate(["../"], {relativeTo:this.route})},
          error =>{
            if(error.status === 403 || error.status === 401){
              this.authService.logout();
            }
            console.log(error);
          }
        );
      }
    }
  }

  private populateDrivers(){
    this.userService.getAllDrivers()
    .subscribe(
      (data:IDriver[]) =>{
        let tmpDrivers: {username:string,distance:number}[] = [];
        let carFilter = data.filter(x => {return x.cartype == this.rideForm.value.cartype && x.Free});
        console.log(carFilter);
        carFilter.forEach((driver) =>{
          const driverDistance = {
            username: driver.username,
            distance: this.getDriverDistance(driver.location.lat, driver.location.lng)
          }
          tmpDrivers.push(driverDistance);
        });
        tmpDrivers = tmpDrivers.sort((a,b) =>{
          return a.distance - b.distance;
        })
        this.availableDrivers = tmpDrivers.map(x => x.username).slice(0,4);
        this.rideForm.patchValue({
          'driver':this.availableDrivers[0]
        })
      },
      error =>{
        console.log(error);
      }
    )
  }

  onMarkerDrag(event){
    this.marker.lat = event.coords.lat;
    this.marker.lng = event.coords.lng;
    this.getAddressFromLocation();
  }

  onChoseLocation(event){
    this.marker.lat = event.coords.lat;
    this.marker.lng = event.coords.lng;
    this.chosen = true;
    this.populateDrivers();
    this.getAddressFromLocation();
  }

  getDriverDistance(lat:number, lng:number){
    let dlat = Math.pow((this.marker.lat - lat),2);
    let dlng = Math.pow((this.marker.lng - lng),2);
    return Math.sqrt(dlat + dlng); 
  }

  getAddressFromLocation(){
    //here maps reverse geocoding api
    let requestString = 'https://reverse.geocoder.cit.api.here.com/6.2/reversegeocode.json?prox='+this.marker.lat+'%2C'+this.marker.lng+'%2C250&mode=retrieveAddresses&maxresults=1&gen=8&app_id='+this.apisServices.getHereAppId()+'&app_code='+this.apisServices.getHereAppCode()+'&language=en-US';
    this.http.get(requestString).subscribe((response) =>{
      const address = response['Response']['View'][0]['Result'][0]['Location']['Address']['Label'];
      this.rideForm.patchValue({address: address});
    });
  }

  getLocationFromAddres(){
    //here maps geocoding api
    let requestString = 'https://geocoder.cit.api.here.com/6.2/geocode.json?searchtext='+ this.rideForm.value.address +'&app_id='+this.apisServices.getHereAppId()+'&app_code='+this.apisServices.getHereAppCode()+'&gen=8';
    const headers = new HttpHeaders();
    headers.set('Accept-Language', 'en-US');
    this.http.get(requestString, {headers:headers}).subscribe((response) =>{
      const data : object[] = response['Response']['View'];
      if(data.length === 0){
        this.error = true;
      }else{
        this.error = false;
        const location = data[0]['Result'][0]['Location']['NavigationPosition'][0];
        this.marker.lat = location['Latitude'];
        this.marker.lng = location['Longitude'];
        this.chosen = true;
        //center map over marker for easier user orientation
        this.latitude = this.marker.lat;
        this.longitude = this.marker.lng;
      }
    })
  }

  onCheckAddress(event){
    this.getLocationFromAddres();
  }
}

interface IMarker{
  lat:number,
  lng:number
}

