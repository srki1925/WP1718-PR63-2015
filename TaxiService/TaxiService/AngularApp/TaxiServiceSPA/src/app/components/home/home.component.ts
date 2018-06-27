import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userBlocked = false;
  username = '';
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.userBlocked = this.authService.isUserBlocked()
    this.username = this.authService.getCurrentUsername();
  }
}
