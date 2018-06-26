import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { INewUser } from '../../../services/interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editUser:INewUser;
  registrationForm:FormGroup;
  constructor(private usersService:UsersService,
              private authService:AuthService,
              private router:Router) { }

  ngOnInit() {
    const username = this.authService.getCurrentUsername();
    this.usersService.getUser(username).subscribe(
     (data:INewUser) => {
       this.editUser = data;
      this.registrationForm.patchValue({
        'email':this.editUser.email,
        'username':this.editUser.username,
        'name':this.editUser.name,
        'lastname':this.editUser.lastname,
        'jmbg':this.editUser.jmbg,
        'phone':this.editUser.phone,
      });
     },
     error => console.log(error) 
    );

    this.registrationForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null),
      lastname: new FormControl(null),
      jmbg: new FormControl(null, [Validators.pattern('[0-9]{13,13}'), this.jmbgValidator.bind(this)]),
      phone: new FormControl(null, [Validators.required,Validators.pattern('[0-9]*')]),
      //feature if driver can change cars
      //carNumber: new FormControl(null),
    });
  }

  onEdit(){
    let editUser:INewUser = {
      username:this.editUser.username,
      password:this.registrationForm.value['password'],
      email:this.registrationForm.value['email'],
      name:this.registrationForm.value['name'],
      lastname:this.registrationForm.value['lastname'],
      jmbg:this.registrationForm.value['jmbg'],
      phone:this.registrationForm.value['phone'],
      //in future if driver can change car, change to read from form
      carId: this.editUser.carId,
      userType : this.authService.getUserType(),
      blocked: this.editUser.blocked
    };

    this.usersService.updateUser(editUser).subscribe(
      ok =>{
        this.router.navigate(['/profile']);
      },
      error => {console.log(error);}
    );
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
