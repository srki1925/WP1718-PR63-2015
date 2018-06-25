import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IBasicUser } from '../../../../services/interfaces';
import { Usertype } from '../../../../services/usertype.enum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private username: string;
  user :IBasicUser;
  userType : string;

  constructor(private usersService:UsersService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.username = params['username'];
      if(!params['username']){
        this.router.navigate(['../'], {relativeTo:this.route});
      }

      this.updateUser();
      
    });
  }

  onBlock(){
    console.log(this.username);
    this.usersService.blockUser(this.username)
    .subscribe(
     data => {this.updateUser()},
     error => {
       console.log(error);
       this.router.navigate(['../'], {relativeTo: this.route});
     } 
    );
  }

  onUnblock(){
    console.log(this.username);
    this.usersService.unblockUser(this.username)
    .subscribe(
      data => {this.updateUser()},
      error => {
        console.log(error);
        this.router.navigate(['../'], {relativeTo: this.route});
      } 
     );
  }

  private updateUser(){
    this.usersService.getUserBasicInfo(this.username)
    .subscribe(
      (data:IBasicUser) => {
        this.user = data;
        switch(this.user.type){
          case Usertype.Customer: this.userType = 'Customer';break;
          case Usertype.Driver: this.userType = 'Driver';break;
        }
      },
      error => {
        console.log(error);
        this.router.navigate(['../'], {relativeTo:this.route});
      }
    );
  }
}
