import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddPatientPage} from './add-patient/add-patient.page';
import firebase from 'firebase';
import {Patient} from '../../models/patient';
import { ApercuPage } from './apercu/apercu.page';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {

  coordinates: any = null;
  patients: Patient[] = [];
  constructor(private modalController: ModalController) { }

  ngOnInit() {
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

  async openPageAddPatient() {
    const modal = await this.modalController.create({
      component: AddPatientPage
    });
    return await modal.present();
  }

  async openPageApercu(idPatient) {
    const modal = await this.modalController.create({
      component: ApercuPage,
      componentProps: {
        id: idPatient
    }
    });
    return await modal.present();
  }


}
