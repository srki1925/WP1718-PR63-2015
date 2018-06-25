import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { IBasicUser } from '../../../../services/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users : string[] = [];
  private usersSub:Subscription;
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.usersSub = this.userService.getAllUsersUsernames().subscribe((users) =>{
      this.users = users;
    });
    this.userService.usersChanged.subscribe((changedUsersInfo) =>{
      this.users = changedUsersInfo;
    })
  }

  ngOnDestroy(){
    this.usersSub.unsubscribe();
  }
}
