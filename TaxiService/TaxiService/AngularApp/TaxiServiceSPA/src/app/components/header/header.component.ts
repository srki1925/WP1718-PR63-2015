import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { AuthService, User } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usertype } from '../../services/usertype.enum';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('responsiveNavbar') responsiveNavbar:ElementRef;
  userType : Usertype = Usertype.Guest;
  username : string = null;
  private userSubscription : Subscription;
  constructor(private authService:AuthService,
              private router:Router) {}

  ngOnInit() {
    this.userType = this.authService.getUserType();
    this.userSubscription = this.authService.userChanged.subscribe((user:User)=>{
      this.userType = user.usertype;
      this.username = user.username;
    });
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toogleCollapse(){
    this.responsiveNavbar.nativeElement.classList.toggle('collapse');
  }
}
