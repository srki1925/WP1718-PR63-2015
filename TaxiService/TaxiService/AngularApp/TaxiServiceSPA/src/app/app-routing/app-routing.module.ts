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
import { FullUserDetailsComponent } from '../components/users/full-user-details/full-user-details.component';
import { EditUserComponent } from '../components/users/edit-user/edit-user.component';
import { PasswordChangeComponent } from '../components/users/password-change/password-change.component';
import { UserDetailsComponent } from '../components/users/management/user-details/user-details.component';
import { RidesComponent } from '../components/rides/rides.component';
import { NewRideComponent } from '../components/rides/new-ride/new-ride.component';
import { AcceptRideComponent } from '../components/rides/accept-ride/accept-ride.component';
import { RideDetailsComponent } from '../components/rides/ride-details/ride-details.component';


const appRoutes : Routes = [
  {path:'login', component: LoginComponent, canActivate:[LoginGuard]},
  {path:'registration', component: RegistrationComponent, canActivate:[LoginGuard, RegistrationGuard]},
  {path: 'profile', component: FullUserDetailsComponent, canActivate:[AuthGuard]},
  {path: 'edit-profile', component: EditUserComponent, canActivate:[AuthGuard]},
  {path: 'password-change', component: PasswordChangeComponent, canActivate:[AuthGuard]},
  {path:'driver-registration-error', component: NoCarsErrorComponent},
  {path:'home', component: HomeComponent, canActivate:[AuthGuard], children:[
    {path: 'rides', component: RidesComponent, children:[
      {path: 'new', component: NewRideComponent},
      {path: ':id/edit', component: NewRideComponent},
      {path: ':id/accept', component: AcceptRideComponent},
      {path: ':id', component: RideDetailsComponent},
    ]},
    {path: 'users', component: UsersComponent, children:[
      {path: ':username', component: UserDetailsComponent}
    ]},
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
