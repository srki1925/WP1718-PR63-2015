import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HttpModule } from '@angular/http'
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CookieService } from './services/cookie.service';
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { UsersComponent } from './components/users/users.component';
import { RegistrationComponent } from './components/users/registration/registration.component';
import { NoCarsErrorComponent } from './components/errors/no-cars-error/no-cars-error.component';
import { CarsComponent } from './components/cars/cars.component';
import { AddCarComponent } from './components/cars/add-car/add-car.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { EditDriverComponent } from './components/drivers/edit-driver/edit-driver.component';
import { CarsListComponent } from './components/cars/cars-list/cars-list.component';
import { CarItemComponent } from './components/cars/car-item/car-item.component';
import { CarDetailsComponent } from './components/cars/car-details/car-details.component';
import { FullUserDetailsComponent } from './components/users/full-user-details/full-user-details.component';
import { PasswordChangeComponent } from './components/users/password-change/password-change.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { UserListComponent } from './components/users/management/user-list/user-list.component';
import { UserDetailsComponent } from './components/users/management/user-details/user-details.component';
import { UserItemComponent } from './components/users/management/user-item/user-item.component';
import { RidesComponent } from './components/rides/rides.component';
import { RidesListComponent } from './components/rides/rides-list/rides-list.component';
import { RideDetailsComponent } from './components/rides/ride-details/ride-details.component';
import { RideItemComponent } from './components/rides/ride-item/ride-item.component';
import { NewRideComponent } from './components/rides/new-ride/new-ride.component';
import { AcceptRideComponent } from './components/rides/accept-ride/accept-ride.component';
import { CommentDetailsComponent } from './components/rides/comment-details/comment-details.component';
import { AddCommentComponent } from './components/rides/add-comment/add-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    DropdownDirective,
    UsersComponent,
    RegistrationComponent,
    NoCarsErrorComponent,
    CarsComponent,
    AddCarComponent,
    DriversComponent,
    EditDriverComponent,
    CarsListComponent,
    CarItemComponent,
    CarDetailsComponent,
    FullUserDetailsComponent,
    PasswordChangeComponent,
    EditUserComponent,
    UserListComponent,
    UserDetailsComponent,
    UserItemComponent,
    RidesComponent,
    RidesListComponent,
    RideDetailsComponent,
    RideItemComponent,
    NewRideComponent,
    AcceptRideComponent,
    CommentDetailsComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
