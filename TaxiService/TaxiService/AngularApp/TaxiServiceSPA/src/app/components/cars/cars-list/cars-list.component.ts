import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICar } from '../../../services/interfaces';
import { CarsDataService } from '../../../services/cars-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit, OnDestroy {
  cars : ICar[] = [];
  private carsSubscription : Subscription;
  constructor(private carService: CarsDataService) { }

  ngOnInit() {
    this.carsSubscription = this.carService.getAllCars().subscribe((data) =>{
      this.cars = data;
      console.log(this.cars);
    });
  }

  ngOnDestroy(){
    this.carsSubscription.unsubscribe();
  }
}
