import { Component, OnInit, Input } from '@angular/core';
import { ICar, CarType } from '../../../services/interfaces';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { CarsDataService } from '../../../services/cars-data.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car:ICar;
  private id : number;
  carType : string;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private carsService:CarsDataService) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      this.car = this.carsService.getCarByNumber(this.id);

      switch(this.car.carType){
        case CarType.sedan: this.carType = 'Sedan';break;
        case CarType.van: this.carType = 'Van';break;
        case CarType.undefined: this.carType = 'Undefined';break;
      }
    });
  }

  
  onEdit(){
    this.router.navigate(['../',this.car.carNumber,'edit'], {relativeTo:this.route});
  }
  onRemove(){
    this.carsService.removeCar(this.car.carNumber);
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
