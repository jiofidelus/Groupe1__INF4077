import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { SensibilisationComponent } from './sensibilisation/sensibilisation.component';
import {HttpClientModule} from '@angular/common/http';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './patients/add-patient/add-patient.component';
//import {AgmCoreModule} from '@agm/core';
import { AccueilComponent } from './accueil/accueil.component';
import {GeolocalisationService} from './services/geolocalisation.service';
import { StatistiqueComponent } from './accueil/statistique/statistique.component';
import {ChartsModule} from 'ng2-charts';
import { ApercuComponent } from './patients/apercu/apercu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    DeconnexionComponent,
    SensibilisationComponent,
    PatientsComponent,
    AddPatientComponent,
    AccueilComponent,
    StatistiqueComponent,
    ApercuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
    //,AgmCoreModule.forRoot({apiKey: 'AIzaSyDE5mbY8o3EapKj_QqjBpy7VrYS_hRzlDU'})
  ],
  providers: [GeolocalisationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
