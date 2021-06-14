import { Injectable } from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async addImageForAdresseId(name: string, adresse: string, image: SafeResourceUrl ) {
    return new Promise((resolve, reject) => {
      if(image === '') {
        resolve('');
      } else {
        const imgStorageRef = firebase.storage().ref(adresse + '/' + name + '.png');
        const newPhoto: string = image.toString().substring(image.toString().indexOf('base64,') + 7, image.toString().indexOf('(see ') - 1);
        return imgStorageRef.putString(newPhoto, 'base64', {contentType: 'image/png'}).then(
            () => {
              return imgStorageRef.getDownloadURL().then(downloadUrl => {
                resolve(downloadUrl);
              });
            },
            (error) => {
              reject(error);
            }
        );
      }
    });
  }

    async addRecordForAdresseId(name: string, adresse: string, record: string ) {
        return new Promise((resolve, reject) => {
            if(record === '') {
                resolve('');
            } else {
                const waveStorageRef = firebase.storage().ref(adresse + '/' + name + '.wav');
                // tslint:disable-next-line:max-line-length
                const newWave: string = record.replace('data:audio/wav;base64,', '');
                return waveStorageRef.putString(newWave, 'base64', {contentType: 'audio/wav'}).then(
                    () => {
                        return waveStorageRef.getDownloadURL().then(downloadUrl => {
                            resolve(downloadUrl);
                        });
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        });
    }
}
