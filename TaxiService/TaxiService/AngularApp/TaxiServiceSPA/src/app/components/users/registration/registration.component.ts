import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICar, INewUser } from '../../../services/interfaces';
import { CarsDataService } from '../../../services/cars-data.service';
import { UsersService } from '../../../services/users.service';
import { Usertype } from '../../../services/usertype.enum';

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
              private carsService:CarsDataService,
              private usersService:UsersService) { }

  ngOnInit() {
    //subscribe to query params to protect initialized component tampering trough query
    this.typeSubscription = this.route.queryParams.subscribe((query) =>{
      const type = query['type'];
      if(!type || (type !== 'customer' && type !== 'driver')){
        this.router.navigate([''], {relativeTo:this.route, queryParams:{type:'customer'}});
      }else{
        if(type === 'driver'){
          this.isDriver = true;
          this.freeCars = this.carsService.getFreeCars();
          if(this.freeCars.length == 0){
            this.router.navigate(['/driver-registration-error']);
          }
        }else{
          this.isDriver = false;
          this.freeCars = [];
        }
      }
    });


    this.registrationForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required), 
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null),
      lastname: new FormControl(null),
      jmbg: new FormControl(null, [Validators.pattern('[0-9]{13,13}'), this.jmbgValidator.bind(this)]),
      phone: new FormControl(null, [Validators.required,Validators.pattern('[0-9]*')]),
      carNumber: new FormControl(null),
      sex: new FormControl(0)
    });
  }

  ngOnDestroy(){
    this.typeSubscription.unsubscribe();
  }
  onRegistration(){
    let newUser:INewUser = {
      username:this.registrationForm.value['username'],
      password:this.registrationForm.value['password'],
      email:this.registrationForm.value['email'],
      name:this.registrationForm.value['name'],
      lastname:this.registrationForm.value['lastname'],
      jmbg:this.registrationForm.value['jmbg'],
      phone:this.registrationForm.value['phone'],
      carNumber:this.registrationForm.value['carNumber'],
      userType: this.isDriver ? Usertype.Driver : Usertype.Customer,
      blocked: false,
    };
    this.usersService.addNewUser(newUser);
  }

  jmbgValidator(control:FormControl) : {[s:string]:boolean}{
    if(!this.checkJmbg(control.value)){
      return {'jmbgInvalid':true};
    }
    return null;
  }
  private checkJmbg(jmbg : string) : boolean{
    if(!jmbg){
      return true;
    }
    let a = +jmbg[0];
    let b = +jmbg[1];
    let c = +jmbg[2];
    let d = +jmbg[3];
    let e = +jmbg[4];
    let f = +jmbg[5];
    let g = +jmbg[6];
    let h = +jmbg[7];
    let i = +jmbg[8];
    let j = +jmbg[9];
    let k = +jmbg[10];
    let l = +jmbg[11];
    let m = +jmbg[12];
    const checksum = 11 - ((7*(a+g)+6*(b+h)+5*(c+i)+4*(d+j)+3*(e+k)+2*(f+l)) % 11);
    if(m != checksum)
      return false;
    return true;
  }
}
