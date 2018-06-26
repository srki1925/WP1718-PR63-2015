import { Injectable } from '@angular/core';
import { INewUser, IBasicUser, ApiRequest } from './interfaces';
import { AuthService } from './auth.service';
import { Usertype } from './usertype.enum';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExternalApisDataService } from './external-apis-data.service';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersChanged = new Subject<string[]>();
  driversChanged = new Subject<string[]>();

  private users:INewUser[] = [
    {username:'c', password: 'c', userType: Usertype.Customer, carId:null, email:'customer@test.com', jmbg:null, name:null, lastname:null, phone:null, blocked:false},
    {username:'d', password: 'd', userType: Usertype.Driver, carId:10, email:'driver@test.com', jmbg:null, name:null, lastname:null, phone:null, blocked:false},
    {username:'a', password: 'a', userType: Usertype.Dispatcher, carId:null, email:'dispatcher@test.com', jmbg:null, name:null, lastname:null, phone:null, blocked:false},
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
    const url = this.externApis.getDataApiHostname() + '/users';
    const data : ApiRequest = {
      data : editUser,
      userHash : this.authService.getApiToken()
    };
    return this.http.put(url, data);
  }

  removeUser(username:string){
    const url = this.externApis.getDataApiHostname() + '/users/remove';
    const data : ApiRequest = {
      data: username,
      userHash: this.authService.getApiToken()
    }
    this.http.post(url, data).subscribe(
      data => {this.authService.logout()},
      error => {console.log(error)}
    );
  }

  getUser(username:string){
    const data : ApiRequest = {
      data: username,
      userHash: this.authService.getApiToken()
    }
    const url = this.externApis.getDataApiHostname() + '/users/mydata'+ '?' + stringify(data);
    return this.http.get(url);
  }

  getUserBasicInfo(username:string) {
    const url = this.externApis.getDataApiHostname() + '/users/' + username;
    return this.http.get(url);
  }

  getAllUsersUsernames(){
    const url = this.externApis.getDataApiHostname() + '/users';
    this.http.get(url).subscribe(
      (data:string[]) => {this.usersChanged.next(data)},
      error => console.log(error)
    );
    return this.usersChanged;
  }

  blockUser(username:string){
    const url = this.externApis.getDataApiHostname() + '/users/block';
    const data : ApiRequest = {
      userHash: this.authService.getApiToken(),
      data: username
    };
    return this.http.post(url, data);
  }

  unblockUser(username:string){
    const url = this.externApis.getDataApiHostname() + '/users/unblock';
    const data : ApiRequest = {
      userHash: this.authService.getApiToken(),
      data: username
    };
    return this.http.post(url, data);
  }

  changePassword(username:string,newPassword:string){
    const url = this.externApis.getDataApiHostname() + '/users/changepass'
    const data : ApiRequest = {
      userHash: this.authService.getApiToken(),
      data: newPassword
    };
    return this.http.put(url, data);
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
