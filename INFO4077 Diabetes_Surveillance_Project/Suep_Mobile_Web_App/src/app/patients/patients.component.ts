import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import {Patient} from '../../models/patient';
import {DashboardComponent} from '../dashboard/dashboard.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patients: Patient[] = [];

  constructor(public dashboard: DashboardComponent) { }

  ngOnInit(): void {
    firebase.firestore().collection('patients').where('medecin', '==', firebase.auth().currentUser.email).onSnapshot(
      (docRef) => {
        this.patients = [];
        const appel = this;
        docRef.forEach(function(doc) {
          const tmp = doc.data() as Patient;
          tmp.id = doc.id;
          appel.patients.push(tmp);
        });
      }
    );
  }

}
