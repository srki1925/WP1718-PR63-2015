import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RidesService } from '../../../services/rides.service';
import { IRide, RideStatus } from '../../../services/interfaces';
import { Usertype } from '../../../services/usertype.enum';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {

  private id : number;
  ride : IRide;
  rideStatus: string;
  userType: Usertype;

  cancelFailed = false;

  driverFree = true;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private ridesService:RidesService,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      this.ridesService.getRideById(this.id).subscribe(
       (data : IRide) =>{
         console.log(data);
        this.ride = data;
        switch(this.ride.Status){
          case RideStatus.waiting : this.rideStatus = 'Waiting';break;
          case RideStatus.accepted : this.rideStatus = 'Accepted';break;
          case RideStatus.cancelled : this.rideStatus = 'Cancelled';break;
          case RideStatus.sucessful : this.rideStatus = 'Succesful';break;
          case RideStatus.failed : this.rideStatus = 'Failed';break;
          case RideStatus.processed : this.rideStatus = 'Processed';break;
          case RideStatus.ordered : this.rideStatus = 'Ordered';break;
        }
       },
       error =>{
         console.log(error);
         this.router.navigate(['../'], {relativeTo:this.route});
       }
      );
      
    });
    // this.userType = this.authService.getUserType();
    // this.ridesService.ridesChanged.subscribe((rides:IRide[]) =>{
    //   this.updateDriverStatus();
    // });
    // if(this.userType === Usertype.Driver){
    //   this.updateDriverStatus();
    // }
  }

  private updateDriverStatus() {
    /*let driverRides = this.ridesService.getAllRidesForDriver(this.authService.getCurrentUsername());
    let driverBusy = false;
    driverRides.forEach((ride: IRide) => {
      if (ride.Status !== RideStatus.waiting && ride.Status !== RideStatus.sucessful && ride.Status !== RideStatus.failed) {
        driverBusy = true;
      }
    });
    this.driverFree = !driverBusy;*/
  }

  onCancel(){
    if(!this.ridesService.cancelRide(this.ride.Id)){
      this.cancelFailed = true;
      setTimeout(() => {
        this.cancelFailed = false;
      }, 2000);
    }
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
