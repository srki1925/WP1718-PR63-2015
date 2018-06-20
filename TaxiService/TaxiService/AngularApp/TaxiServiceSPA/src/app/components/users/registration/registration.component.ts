import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICar } from '../../../services/interfaces';
import { CarsDataService } from '../../../services/cars-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  registrationForm: FormGroup;
  isDriver = false;
  freeCars : ICar[];
  private typeSubscription:Subscription;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private carsService:CarsDataService) { }

  ngOnInit() {
    //subscribe to query params to protect initialized component tampering trough query
    this.typeSubscription = this.route.queryParams.subscribe((query) =>{
      const type = query['type'];
      if(!type || (type !== 'customer' && type !== 'driver')){
        this.router.navigate([''], {relativeTo:this.route, queryParams:{type:'customer'}});
      }else{
        if(type === 'driver'){
          this.isDriver = true;
          
        }else{
          this.isDriver = false;
        }
      }
    });

    this.freeCars = this.carsService.getFreeCars();
    console.log(this.freeCars);

    this.registrationForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required), 
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null),
      lastname: new FormControl(null),
      jmbg: new FormControl(null),
      phone: new FormControl(null, [Validators.required,Validators.pattern('[0-9]*')]),
      carNumber: new FormControl(null),
    });
  }

  ngOnDestroy(){
    this.typeSubscription.unsubscribe();
  }
  onSubmit(){
    console.log(this.registrationForm.value);
  }
}
