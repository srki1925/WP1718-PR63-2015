import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RidesService } from '../../../services/rides.service';
import { ActivatedRoute } from '@angular/router';
import { ExternalApisDataService } from '../../../services/external-apis-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IRide, RideStatus } from '../../../services/interfaces';
import { stringify } from 'querystring';

@Component({
  selector: 'app-new-ride',
  templateUrl: './new-ride.component.html',
  styleUrls: ['./new-ride.component.css']
})
export class NewRideComponent implements OnInit {

  rideForm:FormGroup;
  editMode = false;
  //google maps specific
  latitude = 45.260656;
  longitude = 19.832157;
  marker:IMarker = {lat:null, lng:null};
  zoom = 14;
  chosen = false;
  draggable = true;
  error = false;
  constructor(private ridesService:RidesService,
              private route:ActivatedRoute,
              private apisServices:ExternalApisDataService,
              private http:HttpClient) { }

  ngOnInit() {
    this.rideForm = new FormGroup({
      address: new FormControl(null, Validators.required),
      cartype: new FormControl(0)
    });
  }

  onSubmit(){
    const d = new Date();
    if(!this.editMode){
      let newRide : IRide = {
        location : {
          address: this.rideForm.value.address,
          lat: this.marker.lat,
          long: this.marker.lng
        },
        comment: null,
        destination: null,
        driver: null,
        fare: 0,
        status: RideStatus.waiting,
        time: null,
        id: -1
      }
      console.log(newRide);
      this.ridesService.newRide(newRide);
    }else{

    }
  }

  onChoseLocation(event){
    this.marker.lat = event.coords.lat;
    this.marker.lng = event.coords.lng;
    this.chosen = true;
    this.getAddressFromLocation();
  }

  getAddressFromLocation(){
    //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452
    let requestString = 'https://reverse.geocoder.cit.api.here.com/6.2/reversegeocode.json?prox='+this.marker.lat+'%2C'+this.marker.lng+'%2C250&mode=retrieveAddresses&maxresults=1&gen=8&app_id='+this.apisServices.getHereAppId()+'&app_code='+this.apisServices.getHereAppCode()+'&language=en-US';
    this.http.get(requestString).subscribe((response) =>{
      console.log(response);
      const address = response['Response']['View'][0]['Result'][0]['Location']['Address']['Label'];
      this.rideForm.patchValue({address: address});
    });
  }

  getLocationFromAddres(){
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
        console.log(location);
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

