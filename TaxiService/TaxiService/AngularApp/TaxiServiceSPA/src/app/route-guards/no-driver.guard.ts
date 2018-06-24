import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Usertype } from '../services/usertype.enum';

@Injectable({
  providedIn: 'root'
})
export class NoDriverGuard implements CanActivate {
  constructor(private authService:AuthService,
              private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authService.getUserType() === Usertype.Driver){
        this.router.navigate(['/home', 'rides']);
      }else{
        return true;
      }
  }
}
