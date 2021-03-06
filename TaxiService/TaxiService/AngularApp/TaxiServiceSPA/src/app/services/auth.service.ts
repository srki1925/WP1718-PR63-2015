import { Injectable, OnInit } from '@angular/core';
import { Usertype } from './usertype.enum';
import { CookieService } from './cookie.service';
import { Subject, Observable } from 'rxjs';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
import { ExternalApisDataService } from './external-apis-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private currentUser:User = {username:null,usertype:Usertype.Guest,token:null,blocked:null};
  private authenticated:boolean = false;
  
  userChanged = new Subject<User>();
  authStatus = new Subject<boolean>();

  constructor(private cookieService: CookieService,
              private router:Router,
              private http:HttpClient,
              private externalApisDataService:ExternalApisDataService) { 

    const cookie = cookieService.getCookie("taxiServiceData");
    if(cookie !== ""){
      const user = this.decodeCookie(cookie);
      if(user.username === 'undefined')
        this.logout();
      this.currentUser.username = user.username;
      this.currentUser.usertype = user.usertype;
      this.currentUser.token = user.token;
      this.currentUser.blocked = user.blocked;
      this.authenticated = true;  
      this.userChanged.next(this.currentUser);
    }else{
      this.authenticated = false;
    }
  }

  authenticateUser(username:string,password:string) : Subject<boolean> | boolean{
    if(this.authenticated){
      return true;
    }

    const url = this.externalApisDataService.getDataApiHostname() + '/access/login';
    
    this.http.post(url, {username:username, password:password}).subscribe(
      data =>{
        this.currentUser.username = username;
        const dataSplit:string[] = (data as string).split(";");
        this.currentUser.token = dataSplit[0];
        this.currentUser.usertype = +dataSplit[1];
        this.currentUser.blocked = dataSplit[2].toLowerCase() === 'true' ? true : false;
        console.log(dataSplit[2]);
        this.authenticated = true;
        const cookie = this.createCookie();
        this.cookieService.setCookie('taxiServiceData',cookie, 365);
        this.userChanged.next(this.currentUser);
        this.authStatus.next(true);
      },
      error => {
        console.log(error.status);
        this.authStatus.next(false);
      }
    );
    return this.authStatus;
  }

  isUserAuthenticated(){
    return this.authenticated;
  }

  isUserBlocked(){
    return this.currentUser.blocked;
  }
  logout(){
    this.currentUser.username = null;
    this.currentUser.usertype = Usertype.Guest;
    this.currentUser.token = null;
    this.authenticated = false;
    this.cookieService.removeCookie('taxiServiceData');
    this.userChanged.next(this.currentUser);
    this.router.navigate(['\login']);
  }

  getUserType() : Usertype{
    return this.currentUser.usertype;
  }

  getCurrentUsername() : string{
    return this.currentUser.username;
  }

  getApiToken() : string{
    return this.currentUser.token;
  }

  private createCookie() : string{
    //api token to be added later
    if(this.authenticated){
      return this.currentUser.username + ',' + this.currentUser.usertype + ',' + this.currentUser.token + ',' + this.currentUser.blocked;
    }
    return '';
  }

  private decodeCookie(cookie:string) : User{
   const split = cookie.split(',');

   return {
     username:split[0],
     usertype:+split[1],
     token:split[2],
     blocked: split[3].toLowerCase() == "true" ? true : false,
   };
  }
}
  
//interface for user data saved in cookie
  export interface User{
    username:string,
    usertype:Usertype,
    token:string,
    blocked:boolean
  }