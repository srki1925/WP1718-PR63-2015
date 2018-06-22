import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IBasicUser } from '../../../../services/interfaces';
import { Usertype } from '../../../../services/usertype.enum';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  private username: string;
  user :IBasicUser;
  userType : string;
  notBlocked = true;
  blocked = false;

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
      switch(this.user.type){
        case Usertype.Customer: this.userType = 'Customer';break;
        case Usertype.Driver: this.userType = 'Driver';break;
      }
    });
  }

  onBlock(){
    this.usersService.blockUser(this.username);
    this.updateUser();
  }

  onUnblock(){
    this.usersService.unblockUser(this.username);
    this.updateUser();
  }

  private updateUser(){
    this.user = this.usersService.getUserBasicInfo(this.username);
  }
}
