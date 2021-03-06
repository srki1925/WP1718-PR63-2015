import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { AuthService, User } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usertype } from '../../services/usertype.enum';
import { Subscriber, Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('responsiveNavbar') responsiveNavbar:ElementRef;
  userType : Usertype = Usertype.Guest;
  username : string = null;
  userBlocked: boolean;
  private userSubscription : Subscription;
  constructor(private authService:AuthService,
              private router:Router,
              private usersService:UsersService) {}

  ngOnInit() {
      this.userType = this.authService.getUserType();
      this.userSubscription = this.authService.userChanged
      .subscribe((user:User)=>{
        this.userType = user.usertype;
        this.username = user.username;
        this.userBlocked = user.blocked;
      });
      this.userBlocked = this.authService.isUserBlocked();
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onDeleteAccount(){
    this.usersService.removeUser(this.authService.getCurrentUsername());
  }

  toogleCollapse(){
    this.responsiveNavbar.nativeElement.classList.toggle('collapse');
  }
}
