import { Component, OnInit } from '@angular/core';
import { ICar } from '../../../services/interfaces';
import { CarsDataService } from '../../../services/cars-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  car: ICar;
  editMode = false;
  private id : number;
  carForm :FormGroup;
  constructor(private carsService: CarsDataService,
              private route:ActivatedRoute) {  }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      if(!this.editMode){
        this.carForm = new FormGroup({
          registration: new FormControl(null),
          year: new FormControl(null),
          type: new FormControl(0),
        });
      }else{
        this.car = this.carsService.getCarByNumber(this.id);
        this.carForm = new FormGroup({
          registration: new FormControl(this.car.registration),
          year: new FormControl(this.car.year),
          type: new FormControl(this.car.carType),
        });
      }
    });
  }

  onSubmit(){
    let c : ICar;
    if(this.editMode){
      c = {
        carNumber : this.car.carNumber,
        driverId : this.car.driverId,
        carType : +this.carForm.value.type,
        registration : this.carForm.value.registration,
        year : +this.carForm.value.year
      };
      this.carsService.updateCar(c);
    }else{
      c = {
        //TODO remove when connected with api service
        carNumber : -1,
        driverId : null,
        carType : +this.carForm.value.type,
        registration : this.carForm.value.registration,
        year : +this.carForm.value.year
      }
      this.carsService.addNewCar(c);
    }
  }
}
