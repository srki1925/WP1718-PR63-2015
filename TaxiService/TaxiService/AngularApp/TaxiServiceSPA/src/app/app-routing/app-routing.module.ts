import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';


const appRoutes : Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path: '', redirectTo: 'login', pathMatch:'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

 }