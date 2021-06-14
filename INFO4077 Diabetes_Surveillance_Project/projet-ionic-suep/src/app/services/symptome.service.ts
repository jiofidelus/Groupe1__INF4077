import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {Symptome} from '../models/symptome';

@Injectable({
  providedIn: 'root'
})
export class SymptomeService {

  constructor() { }

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
