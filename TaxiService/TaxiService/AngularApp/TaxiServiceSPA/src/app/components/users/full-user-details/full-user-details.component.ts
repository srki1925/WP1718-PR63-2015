import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { UsersService } from '../../../services/users.service';
import { INewUser } from '../../../services/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-user-details',
  templateUrl: './full-user-details.component.html',
  styleUrls: ['./full-user-details.component.css']
})
export class FullUserDetailsComponent implements OnInit {

  user : INewUser = {
    name:null,
    lastname:null,
    blocked:null,
    phone:null,
    CarNumber:null,
    email:null,
    jmbg:null,
    password:null,
    username:null,
    userType:null,
  }
  constructor(private authService:AuthService,
              private usersService:UsersService,
              private router:Router) { }

  ngOnInit() {
    const username = this.authService.getCurrentUsername();
    this.usersService.getUser(username)
    .subscribe(
     (data:INewUser) => {
        this.user = data;
        console.log(data);
     },
     error => console.log(error), 
    );
  }

  onUserChange(){
    this.router.navigate(['/edit-profile']);
  }

  onPasswordChange(){
    this.router.navigate(['password-change']);
  }
}
