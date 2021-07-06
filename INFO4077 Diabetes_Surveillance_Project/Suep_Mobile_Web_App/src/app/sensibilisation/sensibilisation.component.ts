import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import firebase from 'firebase';
import {Patient} from '../../models/patient';
import {SmsService} from '../services/sms.service';

@Component({
  selector: 'app-sensibilisation',
  templateUrl: './sensibilisation.component.html',
  styleUrls: ['./sensibilisation.component.scss']
})
export class SensibilisationComponent implements OnInit {

  isLoading = false;
  sensibiliseForm: FormGroup;
  patients: Patient[] = [];
  listNumber: string[] = [];
  messageAlert = '';
  couleurAlert = '';

  constructor(private formBuilder: FormBuilder, private smsService: SmsService) {
    this.sensibiliseForm = this.formBuilder.group({
      texte: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    firebase.firestore().collection('patients').where('medecin', '==', firebase.auth().currentUser.email).onSnapshot(
      (docRef) => {
        this.patients = [];
        const appel = this;
        docRef.forEach(function(doc) {
          appel.patients.push(doc.data() as Patient);
        });
      }
    );
  }

  send() {
    this.isLoading = true;
    const appel = this;
    this.patients.forEach(function(patient) {
      appel.listNumber.push(patient.telephone);
    });
    this.smsService.getData(this.listNumber, appel.sensibiliseForm.value.texte, appel.sensibiliseForm.value.username, appel.sensibiliseForm.value.password).then(
      () => {
        this.isLoading = false;
        appel.messageAlert = 'Opération éffectuée';
        appel.couleurAlert = 'alert-success';
      },
      (error) => {
        this.isLoading = false;
        // appel.messageAlert = 'Une erreur est survenue lors de l\'opération, veillez reesayer';
        // appel.couleurAlert = 'alert-danger';
      }
    );
  }

}
