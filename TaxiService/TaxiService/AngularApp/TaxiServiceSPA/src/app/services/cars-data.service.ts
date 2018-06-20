import { Injectable, OnInit } from '@angular/core';
import { ICar, CarType } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService implements OnInit {

  private cars:ICar[] = [
    {carNumber:10, carType:CarType.sedan, registration:'ns-111-aa',  driverId:null, year:2010},
    {carNumber:11, carType:CarType.van, registration:'ns-112-aa',  driverId:1, year:2011},
    {carNumber:12, carType:CarType.sedan, registration:'ns-113-aa',  driverId:null, year:2012},
    {carNumber:13, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
  ];

  constructor() { }

  ngOnInit(){
  }

  addNewCar(newCar:ICar){
    this.cars.push(newCar);
  }

  removeCar(carId:number){
    const index = this.cars.findIndex((car:ICar) =>{return car.carNumber === carId});
    if(index != -1){
      this.cars.splice(index);
    }
  }

  getCar(driverId:number){
    const foundCar = this.cars.findIndex((car:ICar) =>{return car.driverId === driverId});
    if(foundCar != -1){
      return this.cars[foundCar];
    }else{
      return null;
    }
  }

  getAllCars(){
    return this.cars.slice();
  }

  getFreeCars(){
    let retCars : ICar[] = [];
    this.cars.forEach((car:ICar) =>{
      if(!car.driverId){
        retCars.push(car);
      }
    });
    return retCars;
  }
}
