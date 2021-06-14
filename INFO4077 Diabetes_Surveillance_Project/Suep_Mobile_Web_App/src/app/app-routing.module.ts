import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './services/auth-guard.service';
import {RedirectGuardService} from './services/redirect-guard.service';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [RedirectGuardService], component: HomeComponent },
  { path: 'register', canActivate: [RedirectGuardService], component: RegisterComponent },
  { path: 'login', canActivate: [RedirectGuardService], component: LoginComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
