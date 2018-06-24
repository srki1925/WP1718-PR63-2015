import { Injectable } from '@angular/core';
import { IRide, RideStatus } from './interfaces';
import { Subject } from 'rxjs';
import { Usertype } from './usertype.enum';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  private rides : IRide[] = [
    { id:0, 
      driver:null,
      comment:null,
      location:{lat:45.260030,long:19.832409, address: 'Bulevar oslobođenja 22-24, Novi Sad 21000'}, 
      destination:null,
      fare:null, 
      status:RideStatus.waiting,
      time: '01/06/2013 12:32',
      dispatcher:null,
      customer:null
    },
    { id:1, 
      driver:'d',
      comment:null,
      location:{lat:45.260030,long:19.832409, address: 'Bulevar oslobođenja 22-24, Novi Sad 21000'}, 
      destination:null,
      fare:null, 
      status:RideStatus.sucessful,
      time: '01/06/2013 12:32',
      dispatcher:null,
      customer:null
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

  cancelRide(rideId:number) : boolean{
    console.log(rideId);
    let ride = this.getRideById(rideId);
    if(ride.status !== RideStatus.waiting){
      return false;
    }
    ride.status = RideStatus.cancelled;
    this.waitingRidesChanged.next(this.getAllWaitingRides());
    this.ridesChanged.next(this.getAllRides());
    return true;
  }

  updateRideLocation(rideId:number,location:Location){

  }

  getRideById(id:number){
    return this.rides.find((ride : IRide) => {return ride.id === id;})
  }

  getAllRidesForDriver(username:string) : IRide[]{
    let rides: IRide[] = [];
    this.rides.forEach((ride:IRide)=>{
      if(ride.driver == username){
        rides.push(ride);
      }
    })
    return rides;
  }

  acceptRide(dispatcher:string, driver:string, rideId:number, userType:Usertype) : boolean{
    let ride = this.rides.find((ride:IRide) =>{ 
      return ride.id == rideId;
    });
    if(!ride){
      return false;
    }
    if(userType === Usertype.Driver){
      ride.status = RideStatus.accepted;
      ride.driver = driver;
    }else{
      console.log('dispatcher');
      ride.status = RideStatus.processed;
      ride.dispatcher = dispatcher;
      ride.driver = driver;
    }
    this.ridesChanged.next(this.getAllRides());
    this.waitingRidesChanged.next(this.getAllWaitingRides());
    return true;
  }
}