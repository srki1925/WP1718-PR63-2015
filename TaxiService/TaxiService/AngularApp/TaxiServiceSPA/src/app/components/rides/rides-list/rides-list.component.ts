import { Component, OnInit, OnDestroy } from '@angular/core';
import { IRide } from '../../../services/interfaces';
import { Subscription } from 'rxjs';
import { RidesService } from '../../../services/rides.service';
import { AuthService } from '../../../services/auth.service';
import { Usertype } from '../../../services/usertype.enum';

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.css']
})
export class RidesListComponent implements OnInit, OnDestroy {

  rides: IRide[] = [];
  userType:Usertype;
  private ridesSubscription = new Subscription();
  waiting = false;
  myrides = false;
  constructor(private ridesService: RidesService,
              private authService: AuthService) { }

  ngOnInit() {
    this.userType = this.authService.getUserType();
    this.ridesSubscription = this.ridesService.ridesChanged.subscribe((rides:IRide[]) =>{
      this.rides = rides;
    });
    this.onMyRides();
  }

  ngOnDestroy(){
    this.ridesSubscription.unsubscribe();
  }

  onAllRides(){
    this.waiting = false;
    this.myrides = false;
    this.ridesService.getAllRides().subscribe(
      (data:IRide[]) =>{
        console.log(data);
        this.rides = data;
        console.log(this.rides);
      },
      error =>{
        console.log(error);
      }
    );
  }

  onWaitingRides(){
    this.waiting = true;
    this.myrides = false;
    this.ridesService.getAllWaitingRides();
  }

  onMyRides(){
    console.log('jsdfjsiod');
    this.myrides = true;
    this.waiting = false;
    this.ridesService.getMyRides();
  }
}
