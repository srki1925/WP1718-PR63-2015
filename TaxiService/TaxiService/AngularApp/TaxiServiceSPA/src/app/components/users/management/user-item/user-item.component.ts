import { Component, OnInit, Input } from '@angular/core';
import { IBasicUser } from '../../../../services/interfaces';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() username : IBasicUser;

  constructor() { }

  ngOnInit() {
  }

}
