import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../../services/users.service';
import { IBasicUser } from '../../../../services/interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : string[] = [];
  constructor(private userService:UsersService) { }

  ngOnInit() {
    this.users = this.userService.getAllUsersUsernames();
    this.userService.usersChanged.subscribe((changedUsersInfo) =>{
      this.users = changedUsersInfo;
    })
  }
}
