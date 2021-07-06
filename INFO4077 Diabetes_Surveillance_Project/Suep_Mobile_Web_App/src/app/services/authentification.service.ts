import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

  // tslint:disable-next-line:typedef
  async isAuthenticated() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  // tslint:disable-next-line:typedef
  async signUpUser(name, surname, adresseEmail, phone, motDePasse) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(adresseEmail, motDePasse).then(
        () => {
          // tslint:disable-next-line:max-line-length
          firebase.firestore().collection('comptes').doc(adresseEmail).set({nom: name, prenom: surname, email: adresseEmail, telephone: phone, password: motDePasse}).then(
            () => {
              resolve();
            },
            (error) => {
              reject(error);
            }
          );
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  // tslint:disable-next-line:typedef
  async resetPassword(email: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(email).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  // tslint:disable-next-line:typedef
  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  // tslint:disable-next-line:typedef
  async signOut() {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut().then(
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
