import { Injectable } from '@angular/core';
import { IRide, RideStatus, ApiRequest, IRideRequest, IComment, ILocation } from './interfaces';
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

  newRide(ride: IRideRequest){
    const url = this.externApis.getDataApiHostname() + '/rides';
    const data: ApiRequest = {
      data: ride,
      userHash: this.authService.getApiToken()
    }
    return this.http.post(url, data);
  }

  getAllRidesForUser(){
    const url = this.externApis.getDataApiHostname() + '/rides/user/' + this.authService.getCurrentUsername();
    console.log(url);
    return this.http.get(url);
  }
  getAllRides(){
    const url = this.externApis.getDataApiHostname() + '/rides';
    return this.http.get(url);
  }

  finishRide(destination:ILocation, rideId:number, fare:number){
    const url = this.externApis.getDataApiHostname() + '/rides/finish';
    const request : ApiRequest = {
      userHash : this.authService.getApiToken(),
      data : {
        location : destination,
        rideId : rideId,
        fare: fare
      }
    }
    console.log(request);
    return this.http.post(url, request);
  }

  failRide(rideId:number){
    const url = this.externApis.getDataApiHostname() + '/rides/fail';
    const request : ApiRequest = {
      userHash : this.authService.getApiToken(),
      data : rideId
    }
    console.log(request);
    return this.http.post(url, request);
  }

  postComment(comment:IComment){
    const url = this.externApis.getDataApiHostname() + '/rides/comment';
    const data: ApiRequest = {
      userHash: this.authService.getApiToken(),
      data: comment
    }

    return this.http.post(url, data);
  }

  cancelRide(rideId:number){
    const url = this.externApis.getDataApiHostname() + '/rides/cancel';
    const data : ApiRequest = {
      userHash : this.authService.getApiToken(),
      data: rideId
    }

    return this.http.post(url, data);
  }

  updateRideLocation(rideId:number,location:Location){

  }

  getRideById(id:number){
    const url = this.externApis.getDataApiHostname() + '/rides/' + id;
    return this.http.get(url);
  }

  acceptRide(driver:string, rideId:number){
    const url = this.externApis.getDataApiHostname() + '/rides/accept';
    const data : IRideRequest = {
      driver : driver,
      rideid : rideId,
      cartype : null,
      destination: null,
      fare: null,
      location : null
    }
    const request : ApiRequest = {
      userHash:this.authService.getApiToken(),
      data : data
    }
    console.log(request);
    return this.http.post(url, request);
  }
}