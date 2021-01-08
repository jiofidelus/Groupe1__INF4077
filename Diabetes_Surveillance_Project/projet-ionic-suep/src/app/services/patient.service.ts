import { Injectable } from '@angular/core';
import {Patient} from '../models/patient';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }

  async AjouterPatient(pat: Patient) {
    return new Promise((resolve, reject) => {
      firebase.firestore().collection('patients').doc().set(Object.assign({}, pat)).then(
          (docRef) => {
            resolve();
          },
          (error) => {
            reject(error);
          }
      );
    });
  }
}
