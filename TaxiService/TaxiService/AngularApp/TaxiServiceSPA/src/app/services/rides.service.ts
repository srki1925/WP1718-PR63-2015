import { Injectable } from '@angular/core';
import { IRide, RideStatus } from './interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  private rides : IRide[] = [
    { id:0, 
      driver:'d',
      comment:null,
      location:{lat:45.260030,long:19.832409, address: 'Bulevar oslobođenja 22-24, Novi Sad 21000'}, 
      destination:null,
      fare:null, 
      status:RideStatus.waiting,
      time: '01/06/2013 12:32',
    }
  ];

  ridesChanged = new Subject<IRide[]>();
  waitingRidesChanged = new Subject<IRide[]>();
  
  constructor() { }

  newRide(ride: IRide){
    this.rides.push(ride);
    if(ride.status === RideStatus.waiting){
      this.waitingRidesChanged.next(this.getAllWaitingRides());
    }
    this.ridesChanged.next(this.getAllRides());
  }

  getAllWaitingRides(){
    let output : IRide[] = [];

    this.rides.forEach((ride:IRide) =>{
      if(ride.status === RideStatus.waiting){
        output.push(ride);
      }
    });
    return output;
  }

  getAllRides(){
    return this.rides.slice();
  }

  changeRideStatus(rideId:number, status:RideStatus){
    this.rides.find((ride:IRide) =>{return ride.id === rideId}).status = status;
  }

  updateRideLocation(rideId:number,location:Location){

  }

  getRideById(id:number){
    return this.rides.find((ride : IRide) => {return ride.id === id;})
  }
}