import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  passwordChangeForm : FormGroup;

  constructor(private usersService:UsersService,
              private authService:AuthService) { }

  ngOnInit() {
    this.passwordChangeForm = new FormGroup({
      password: new FormControl(null, Validators.required),
      
    });
    //added like this since we need the first password field (and form) initialize
    //when checking validity of password confirmation
    this.passwordChangeForm.addControl('confirm', new FormControl(null, [Validators.required, this.confirmError.bind(this)]));
  }

  confirmError(control:FormControl) : {[s:string]:boolean}{
    if(control.value !== this.passwordChangeForm.value.password){
      return {'confirmError' : true};
    }
    return null;
  }

  onConfirm(){
    const username = this.authService.getCurrentUsername();
    this.usersService.changePassword(username, this.passwordChangeForm.value.password);
    this.authService.logout();
  }
}
