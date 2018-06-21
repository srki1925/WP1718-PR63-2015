import { Injectable, OnInit } from '@angular/core';
import { ICar, CarType } from './interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService implements OnInit {

  private cars:ICar[] = [
    {carNumber:10, carType:CarType.sedan, registration:'ns-111-aa',  driverId:2, year:2010},
    {carNumber:11, carType:CarType.van, registration:'ns-112-aa',  driverId:null, year:2011},
    {carNumber:12, carType:CarType.sedan, registration:'ns-113-aa',  driverId:null, year:2012},
    {carNumber:13, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:14, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:15, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:16, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:17, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:18, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:19, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:20, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:21, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:22, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:23, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:24, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:25, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:26, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:27, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:28, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:29, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:30, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
    {carNumber:31, carType:CarType.van, registration:'ns-114-aa',  driverId:5, year:2013},
  ];

  carsChanged = new Subject<ICar[]>();

  constructor() { }

  ngOnInit(){
  }

  addNewCar(newCar:ICar){
    this.cars.push(newCar);
    this.carsChanged.next(this.cars.slice());
  }

  removeCar(carId:number){
    const index = this.cars.findIndex((car:ICar) =>{return car.carNumber === carId});
    if(index != -1){
      this.cars.splice(index,1);
    }
    this.carsChanged.next(this.cars.slice());
  }

  getCar(driverId:number){
    const foundCar = this.cars.findIndex((car:ICar) =>{return car.driverId === driverId});
    if(foundCar != -1){
      return this.cars[foundCar];
    }else{
      return null;
    }
  }

  getCarByNumber(carNumber:number){
    const foundCar = this.cars.findIndex((car:ICar) =>{return car.carNumber === carNumber});
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

  anyFreeCars(){
    const index = this.cars.findIndex((car:ICar) => {return car.driverId === null;})
    return index !== -1 ? true : false;
  }

  updateCar(car:ICar){
    let c = this.getCarByNumber(car.carNumber);
    c.registration = car.registration;
    c.year = car.year;
    c.carType = car.carType;
  }
}
