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
  private waiting = false;

  constructor(private ridesService: RidesService,
              private authService: AuthService) { }

  ngOnInit() {
    this.userType = this.authService.getUserType();
    this.ridesSubscription = this.ridesService.ridesChanged.subscribe((rides:IRide[]) =>{
      this.rides = rides;
    });
    this.rides = this.ridesService.getAllRides();
  }

  ngOnDestroy(){
    this.ridesSubscription.unsubscribe();
  }

  onAllRides(){
    this.waiting = false;
    this.ridesSubscription.unsubscribe();
    this.ridesSubscription = this.ridesService.ridesChanged.subscribe((rides:IRide[]) =>{
      this.rides = rides;
    });
  }

  onWaitingRides(){
    this.waiting = true;
    this.ridesSubscription.unsubscribe();
    this.ridesSubscription = this.ridesService.waitingRidesChanged.subscribe((rides:IRide[]) =>{
      this.rides = rides;
    });
    this.rides = this.ridesService.getAllWaitingRides();
  }
}
