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

  constructor(private route:ActivatedRoute,
              private router:Router,
              private ridesService:RidesService,
              private authService: AuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      this.ride = this.ridesService.getRideById(this.id);
      switch(this.ride.status){
        case RideStatus.waiting : this.rideStatus = 'Waiting';break;
        case RideStatus.accepted : this.rideStatus = 'Accepted';break;
        case RideStatus.cancelled : this.rideStatus = 'Cancelled';break;
        case RideStatus.sucessful : this.rideStatus = 'Succesful';break;
        case RideStatus.failed : this.rideStatus = 'Failed';break;
        case RideStatus.processed : this.rideStatus = 'Processed';break;
        case RideStatus.ordered : this.rideStatus = 'Ordered';break;
      }
    });
    this.userType = this.authService.getUserType();
  }

  onCancel(){
    if(!this.ridesService.cancelRide(this.ride.id)){
      this.cancelFailed = true;
      setTimeout(() => {
        this.cancelFailed = false;
      }, 2000);
    }
  }
}
