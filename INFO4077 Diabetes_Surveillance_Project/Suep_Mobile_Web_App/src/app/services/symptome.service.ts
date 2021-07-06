import { Injectable } from '@angular/core';
import {Symptome} from '../../models/symptome';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SymptomeService {

  constructor() { }

  // tslint:disable-next-line:typedef
  async AjouterSymptome(symp: Symptome) {
    return new Promise((resolve, reject) => {
      firebase.firestore().collection('symptomes').doc().set(Object.assign({}, symp)).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
