import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Usertype } from '../../../services/usertype.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RidesService } from '../../../services/rides.service';
import { IRide, RideStatus, IDriver, ILocation } from '../../../services/interfaces';
import { UsersService } from '../../../services/users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-accept-ride',
  templateUrl: './accept-ride.component.html',
  styleUrls: ['./accept-ride.component.css']
})
export class AcceptRideComponent implements OnInit {

  drivers : string[] = [];
  isDriver = false;
  noFreeDrivers = true;
  rideId:number;
  ride: IRide;
  destination:boolean;
  acceptForm = new FormGroup({
    driver : new FormControl(null, Validators.required)
  });

  constructor(private authService:AuthService,
              private userService:UsersService,
              private ridesService:RidesService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    
    this.route.params.subscribe((params:Params) =>{
      this.rideId = params.id;
    });

    this.route.queryParams.subscribe((params:Params) =>{
      this.destination = (params.destination !== null && params.destination !== undefined);
    })

    this.isDriver = this.authService.getUserType() === Usertype.Driver;
    if(this.isDriver){
      this.ridesService.acceptRide(null, this.rideId)
      .subscribe(
        ok =>{
          console.log('ok');
        }
      )
    }else{
      this.ridesService.getRideById(this.rideId).subscribe(
        (data : IRide) =>{
          this.ride = data;
          this.populateDrivers();
        }
      )
      this.onAccept();
    }
  }

  onAccept(){
    if(!this.isDriver){
        this.ridesService.acceptRide(this.acceptForm.value.driver, this.rideId).subscribe(
          ok =>{
            this.router.navigate(['../'], {relativeTo:this.route});
          } 
        ); 
    }else{
      this.ridesService.acceptRide(null, this.rideId).subscribe(
       ok =>{
         this.router.navigate(['../'], {relativeTo:this.route});
       } 
      );      
    }
  }

  private populateDrivers(){
    this.userService.getAllDrivers()
    .subscribe(
      (data:IDriver[]) =>{
        let tmpDrivers: {username:string,distance:number}[] = [];
        let Filter = data.filter(x => {return x.cartype == this.ride.CarType && x.Free});
        Filter.forEach((driver) =>{
          const driverDistance = {
            username: driver.username,
            distance: this.getDriverDistance(driver.location.lat, driver.location.lng)
          }
          tmpDrivers.push(driverDistance);
        });
        tmpDrivers = tmpDrivers.sort((a,b) =>{
          return a.distance - b.distance;
        })
        this.drivers = tmpDrivers.map(x => x.username).slice(0,4);
        console.log(this.drivers);
      },
      error =>{
        console.log(error);
      }
    )
  }

  getDriverDistance(lat:number, lng:number){
    let dlat = Math.pow((this.ride.Location.lat - lat),2);
    let dlng = Math.pow((this.ride.Location.lng - lng),2);
    return Math.sqrt(dlat + dlng); 
  }
}
