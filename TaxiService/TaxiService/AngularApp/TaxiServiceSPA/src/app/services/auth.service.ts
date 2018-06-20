import { Injectable, OnInit } from '@angular/core';
import { Usertype } from './usertype.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private userType : Usertype = Usertype.Guest;
  private username : string;

  private users : {username:string,password:string}[] = [
    {username:'c', password: 'c'},
    {username:'d', password: 'd'},
    {username:'a', password: 'a'},
  ];

  constructor() { }

  authenticateUser(username:string,password:string){
    const user = {
      username: username,
      password: password
    }
    const foundUser = this.users.find((value) =>{
      return value.username === username && value.password === password;
    });

    if(foundUser){
      return true;
    }else{
      return false;
    }
  }

}
