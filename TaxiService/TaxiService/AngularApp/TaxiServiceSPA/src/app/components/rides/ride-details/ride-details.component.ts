import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RidesService } from '../../../services/rides.service';
import { IRide, RideStatus } from '../../../services/interfaces';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css']
})
export class RideDetailsComponent implements OnInit {

  private id : number;
  ride : IRide;
  rideStatus: string;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private ridesService:RidesService) { }

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
  }

}
