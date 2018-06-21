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
    CarDetailsComponent
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
