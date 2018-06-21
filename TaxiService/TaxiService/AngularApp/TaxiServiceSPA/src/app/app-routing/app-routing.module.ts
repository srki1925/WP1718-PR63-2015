import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuard } from '../route-guards/auth.guard';
import { UsersComponent } from '../components/users/users.component';
import { LoginGuard } from '../route-guards/login.guard';
import { RegistrationComponent } from '../components/users/registration/registration.component';
import { RegistrationGuard } from '../route-guards/registration.guard';
import { NoCarsErrorComponent } from '../components/errors/no-cars-error/no-cars-error.component';
import { CarsComponent } from '../components/cars/cars.component';
import { AddCarComponent } from '../components/cars/add-car/add-car.component';
import { CarDetailsComponent } from '../components/cars/car-details/car-details.component';


const appRoutes : Routes = [
  {path:'login', component: LoginComponent, canActivate:[LoginGuard]},
  {path:'registration', component: RegistrationComponent, canActivate:[LoginGuard, RegistrationGuard]},
  {path:'driver-registration-error', component: NoCarsErrorComponent},
  {path:'home', component: HomeComponent, canActivate:[AuthGuard], children:[
    {path: 'users', component: UsersComponent},
    {path: 'cars', component: CarsComponent, children:[
      {path: 'new', component: AddCarComponent},
      {path: ':id/edit', component: AddCarComponent},
      {path: ':id', component: CarDetailsComponent}
    ]}
  ]},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: '**', redirectTo:'home' }
];

@NgModule({
  imports: [
  RouterModule.forRoot(appRoutes, {useHash:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

 }
