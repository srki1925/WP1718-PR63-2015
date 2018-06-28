import { Injectable, OnInit } from '@angular/core';
import { ICar, CarType, ApiRequest } from './interfaces';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { ExternalApisDataService } from './external-apis-data.service';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService implements OnInit {

  private cars:ICar[] = [
    {carNumber:10, carType:CarType.sedan, registration:'ns-111-aa',  driver:'d', year:2010},
    {carNumber:11, carType:CarType.van, registration:'ns-112-aa',  driver:null, year:2011},
    {carNumber:12, carType:CarType.sedan, registration:'ns-113-aa',  driver:null, year:2012},
  ];

  carsChanged = new Subject<ICar[]>();
  private carChanged = new Subject<ICar>();

  constructor(private http:HttpClient,
              private authService:AuthService,
              private externApis:ExternalApisDataService) { }

  ngOnInit(){
  }

  addNewCar(newCar:ICar){
    const url = this.externApis.getDataApiHostname() + '/cars';
    const data :ApiRequest = {
      data : newCar,
      userHash: this.authService.getApiToken()
    };
    this.http.post(url, data)
    .subscribe(
      next =>{
        this.getAllCars();
      },
      error =>{console.log(error)}
    );
  }
  
  getCarByNumber(carNumber:number){
    const url = this.externApis.getDataApiHostname() + '/cars/' + carNumber;
    return this.http.get(url);
  }

  removeCar(carId:number){
    const url = this.externApis.getDataApiHostname() + '/cars/remove';
    let data : ApiRequest = {
      userHash : this.authService.getApiToken(),
      data:carId
    };
    console.log(data.data);
    this.http.post(url, data)
    .subscribe(
      next =>{
        this.getAllCars();
      },
      error =>{console.log(error)}
    );
  }

  getCar(driver:string){
    const foundCar = this.cars.findIndex((car:ICar) =>{return car.driver === driver});
    if(foundCar != -1){
      return this.cars[foundCar];
    }else{
      return null;
    }
  }


  getAllCars(){
    const url = this.externApis.getDataApiHostname() + '/cars';
    let cars : ICar[];
    this.http.get(url).subscribe((data : ICar[]) => {
      this.carsChanged.next(data);
    });

    return this.carsChanged;
  }

  updateCar(car:ICar){
    const url = this.externApis.getDataApiHostname() + '/cars/' + car.carNumber;
    let data : ApiRequest = {
      userHash : this.authService.getApiToken(),
      data:car
    };
    this.http.put(url, data)
    .subscribe(
      next =>{
        this.getAllCars();
      },
      error =>{console.log(error)}
    );
  }
}
