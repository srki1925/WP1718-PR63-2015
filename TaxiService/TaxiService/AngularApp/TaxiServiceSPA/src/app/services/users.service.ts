import { Injectable } from '@angular/core';
import { INewUser } from './interfaces';
import { AuthService } from './auth.service';
import { Usertype } from './usertype.enum';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users:INewUser[] = [
    {username:'c', password: 'c', userType: Usertype.Customer, carNumber:null, email:'customer@test.com', jmbg:null, name:null, lastname:null, phone:null},
    {username:'d', password: 'd', userType: Usertype.Driver, carNumber:10, email:'driver@test.com', jmbg:null, name:null, lastname:null, phone:null},
    {username:'a', password: 'a', userType: Usertype.Dispatcher, carNumber:null, email:'dispatcher@test.com', jmbg:null, name:null, lastname:null, phone:null},
  ];;
  constructor() { }

  addNewUser(newUser: INewUser){
    this.users.push(newUser);
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
}
