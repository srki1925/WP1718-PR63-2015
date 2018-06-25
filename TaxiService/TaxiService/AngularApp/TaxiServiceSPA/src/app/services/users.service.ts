import { Injectable } from '@angular/core';
import { INewUser, IBasicUser } from './interfaces';
import { AuthService } from './auth.service';
import { Usertype } from './usertype.enum';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExternalApisDataService } from './external-apis-data.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersChanged = new Subject<string[]>();

  private users:INewUser[] = [
    {username:'c', password: 'c', userType: Usertype.Customer, carNumber:null, email:'customer@test.com', jmbg:null, name:null, lastname:null, phone:null, blocked:false},
    {username:'d', password: 'd', userType: Usertype.Driver, carNumber:10, email:'driver@test.com', jmbg:null, name:null, lastname:null, phone:null, blocked:false},
    {username:'a', password: 'a', userType: Usertype.Dispatcher, carNumber:null, email:'dispatcher@test.com', jmbg:null, name:null, lastname:null, phone:null, blocked:false},
  ];;
  constructor(private http:HttpClient,
              private authService:AuthService,
              private externApis:ExternalApisDataService) { }

  addNewUser(newUser: INewUser){
    //this.users.push(newUser);
    //this.usersChanged.next(this.getAllUsersUsernames());
    const url = this.externApis.getDataApiHostname() + '/users/create';
    this.http.post(url,newUser).subscribe(
      next =>{ console.log(next)},
      error =>{console.log(error.status)}
    );
  }

  updateUser(editUser: INewUser){
    let user = this.getUser(editUser.username);
    user.email = editUser.email;
    user.jmbg = editUser.jmbg;
    user.lastname = editUser.lastname;
    user.name = editUser.name;
    user.phone = editUser.phone;
    user.carNumber = editUser.carNumber;
  }

  removeUser(username:string){
    const index = this.users.findIndex((user:INewUser) =>{
      return user.username === username;
    })
    if(index !== -1){
      this.users.splice(index, 1);
    }
  }

  getUser(username:string){
    return this.users.find((user:INewUser) => {return user.username === username;})
  }

  getUserBasicInfo(username:string) : IBasicUser {
    const found = this.users.find((user:INewUser) => {return user.username === username});
    if(!found){
      return null;
    }
    return {
      username : found.username,
      email : found.email,
      blocked : found.blocked,
      phone : found.phone,
      type : found.userType
    }
  }

  getAllUsersUsernames() :string[]{
    let output : string[] = [];

    this.users.forEach((user:INewUser) =>{
      if(user.userType != Usertype.Dispatcher){
        output.push(user.username);
      }
    })

    return output;
  }

  blockUser(username:string){
    this.getUser(username).blocked = true;
  }

  unblockUser(username:string){
    this.getUser(username).blocked = false;
  }

  changePassword(username:string,newPassword:string){
    this.getUser(username).password = newPassword;
  }

  getAllDrivers() : string[]{
    let drivers : string[] = [];

    this.users.forEach((user:INewUser) =>{
      if(user.userType === Usertype.Driver){
        drivers.push(user.username);
      }
    })
    
    return drivers;
  }
}
