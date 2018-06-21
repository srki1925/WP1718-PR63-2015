import { Injectable } from '@angular/core';
import { INewUser } from './interfaces';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users:INewUser[] = [];
  constructor(private authService:AuthService) { }

  addNewUser(newUser: INewUser){
    this.users.push(newUser);
  }

  removeUser(username:string){
    const index = this.users.findIndex((user:INewUser) =>{
      return user.username === username;
    })
    if(index !== -1){
      this.users.slice(index);
      this.authService.logout();
    }
  }
}
