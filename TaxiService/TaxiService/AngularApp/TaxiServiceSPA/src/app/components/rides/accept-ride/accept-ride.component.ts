import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Usertype } from '../../../services/usertype.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RidesService } from '../../../services/rides.service';
import { IRide, RideStatus } from '../../../services/interfaces';
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

    this.isDriver = this.authService.getUserType() === Usertype.Driver;
    if(!this.isDriver){
      const drivers = this.userService.getAllDrivers();
      drivers.forEach((username:string)=>{
        /*const rides = this.ridesService.getAllRidesForDriver(username);
        if(!rides.find((ride:IRide)=>{return (ride.Status !== RideStatus.sucessful && ride.Status !== RideStatus.failed)})){
          this.drivers.push(username);
        }*/
      });
      if(this.drivers.length === 0){
        this.noFreeDrivers = true;
      }else{
        this.noFreeDrivers = false;
        this.acceptForm.patchValue({driver:drivers[0]});
      }
    }else{
      this.onAccept();
    }
  }

  onAccept(){
    if(!this.isDriver){
      this.ridesService.acceptRide(this.authService.getCurrentUsername(), this.acceptForm.value.driver, this.rideId,Usertype.Dispatcher);
    }else{
      this.ridesService.acceptRide(null, this.authService.getCurrentUsername(), this.rideId,Usertype.Driver);      
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
