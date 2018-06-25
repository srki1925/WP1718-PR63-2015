import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ICar, CarType } from '../../../services/interfaces';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { CarsDataService } from '../../../services/cars-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit, OnDestroy{

  car:ICar = null;
  private id : number;
  private carSubscription : Subscription;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private carsService:CarsDataService) {}

  ngOnInit() {
    this.carSubscription = this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      this.carSubscription = this.carsService.getCarByNumber(this.id).subscribe((car:ICar) =>{
        if(!car){
          this.router.navigate(['../'], {relativeTo:this.route});
        }
        this.car = car;
      });
    });
  }
  ngOnDestroy(){
    this.carSubscription.unsubscribe();
  }
  onEdit(){
    this.router.navigate(['../',this.car['CarNumber'],'edit'], {relativeTo:this.route});
  }
  onRemove(){
    this.carsService.removeCar(this.car['CarNumber']);
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
