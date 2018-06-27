import { Injectable } from '@angular/core';
import { IRide, RideStatus } from './interfaces';
import { Subject } from 'rxjs';
import { Usertype } from './usertype.enum';
import { stringify } from '@angular/compiler/src/util';
import { ExternalApisDataService } from './external-apis-data.service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  ridesChanged = new Subject<IRide[]>();
  waitingRidesChanged = new Subject<IRide[]>();
  
  constructor(private externApis:ExternalApisDataService,
              private authService:AuthService,
              private http:HttpClient) { }

  newRide(ride: IRide){
    
  }

  getAllWaitingRides(){
    
  }

  getAllRidesForDriver(){
    
  }
  getAllRides(){
    const url = this.externApis.getDataApiHostname() + '/rides';
    return this.http.get(url);
  }

  getMyRides(){

  }

  changeRideStatus(rideId:number, status:RideStatus){
    
  }

  cancelRide(rideId:number) : boolean{
    return null;
  }

  updateRideLocation(rideId:number,location:Location){

  }

  getRideById(id:number){
    const url = this.externApis.getDataApiHostname() + '/rides/' + id;
    return this.http.get(url);
  }

  acceptRide(dispatcher:string, driver:string, rideId:number, userType:Usertype){
    // let ride = this.rides.find((ride:IRide) =>{ 
    //   return ride.Id == rideId;
    // });
    // if(!ride){
    //   return false;
    // }
    // if(userType === Usertype.Driver){
    //   ride.status = RideStatus.accepted;
    //   ride.driver = driver;
    // }else{
    //   console.log('dispatcher');
    //   ride.status = RideStatus.processed;
    //   ride.dispatcher = dispatcher;
    //   ride.driver = driver;
    // }
    // this.ridesChanged.next(this.getAllRides());
    // this.waitingRidesChanged.next(this.getAllWaitingRides());
    // return true;
  }
}