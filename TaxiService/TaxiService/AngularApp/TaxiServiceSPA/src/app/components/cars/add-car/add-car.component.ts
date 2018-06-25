import { Component, OnInit } from '@angular/core';
import { ICar } from '../../../services/interfaces';
import { CarsDataService } from '../../../services/cars-data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
              private route:ActivatedRoute,
              private router:Router) {  }

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
        this.carsService.getCarByNumber(this.id).subscribe((data:ICar) =>{
          if(!data){
            this.router.navigate(['/home','cars']);
            return;
          }
          this.car = data;
          this.carForm.patchValue({
            'registration' : this.car['Registration'],
            'year': this.car['Year'],
            'type':this.car['CarType']
          });
        });
        this.carForm = new FormGroup({
          registration: new FormControl(),
          year: new FormControl(),
          type: new FormControl(),
        });
      }
    });
  }

  onSubmit(){
    let c : ICar;
    if(this.editMode){
      c = {
        carNumber : this.car['CarNumber'],
        driver : this.car['Driver'],
        carType : +this.carForm.value.type,
        registration : this.carForm.value.registration,
        year : +this.carForm.value.year
      };
      this.carsService.updateCar(c);
      this.router.navigate(['../'], {relativeTo:this.route});
    }else{
      c = {
        carNumber : null,
        driver : null,
        carType : +this.carForm.value.type,
        registration : this.carForm.value.registration,
        year : +this.carForm.value.year
      }
      this.carsService.addNewCar(c);
    }
  }
}
