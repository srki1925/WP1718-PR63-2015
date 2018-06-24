import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  failed:boolean = false;

  constructor(private router:Router,
              private authSevice: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username' : new FormControl(null, Validators.required),
      'password' : new FormControl(null, Validators.required),
    });
  }

  onLogin(){
    this.authSevice.authStatus.subscribe((ok:boolean)=>{
      if(ok){
        this.router.navigate(['/home','drives']);
      }else{
        this.failed = true;
      }
    });
    const ok = this.authSevice.authenticateUser(this.loginForm.value['username'], this.loginForm.value['password']);
    if(ok === true){
      this.router.navigate(['/home','drives']);
    }
  }
}
