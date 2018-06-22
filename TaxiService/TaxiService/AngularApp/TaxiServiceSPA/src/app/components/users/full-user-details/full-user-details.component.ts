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

  user : INewUser;
  constructor(private authService:AuthService,
              private usersService:UsersService,
              private router:Router) { }

  ngOnInit() {
    const username = this.authService.getCurrentUsername();
    this.user = this.usersService.getUser(username);
  }

  onUserChange(){
    this.router.navigate(['/edit-profile']);
  }

  onPasswordChange(){
    this.router.navigate(['password-change']);
  }
}
