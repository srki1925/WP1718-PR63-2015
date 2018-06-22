import { Injectable, OnInit } from '@angular/core';
import { Usertype } from './usertype.enum';
import { CookieService } from './cookie.service';
import { Subject } from 'rxjs';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private currentUser:User = {username:null,usertype:Usertype.Guest,token:null};
  private authenticated:boolean = false;
  
  userChanged = new Subject<User>();

  constructor(private cookieService: CookieService,
              private usersService:UsersService,
              private router:Router) { 
    const cookie = cookieService.getCookie("taxiServiceData");
    if(cookie !== ""){
      const user = this.decodeCookie(cookie);
      if(user.username === 'undefined')
        this.logout();
      this.currentUser.username = user.username;
      this.currentUser.usertype = user.usertype;
      this.currentUser.token = user.token;
      this.authenticated = true;  
      this.userChanged.next(this.currentUser);
    }else{
      this.authenticated = false;
    }
  }

  authenticateUser(username:string,password:string){
    if(this.authenticated)
      return true;
    const foundUser = this.usersService.getUser(username);

    if(foundUser && foundUser.password === password){
      this.currentUser.username = username;
      this.currentUser.usertype = foundUser.userType;
      this.authenticated = true;
      const cookie = this.createCookie();
      this.cookieService.setCookie('taxiServiceData',cookie, 365);
      this.userChanged.next(this.currentUser);
      return true;
    }else{
      return false;
    }
  }

  isUserAuthenticated(){
    return this.authenticated;
  }

  removeUser(username:string){
    this.usersService.removeUser(username);
    this.logout();
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

  private createCookie() : string{
    //api token to be added later
    if(this.authenticated){
      return this.currentUser.username + ',' + this.currentUser.usertype + ',' + this.currentUser.token;
    }
    return '';
  }

  private decodeCookie(cookie:string) : User{
   const split = cookie.split(',');

   return {
     username:split[0],
     usertype:+split[1],
     token:''
   };
  }
}
  
  export interface User{
    username:string,
    usertype:Usertype,
    token:string
  }