import {Component, Injectable, OnInit} from '@angular/core';
import {AlertController, ModalController, NavParams} from '@ionic/angular';
import firebase from 'firebase';
import { Patient } from 'src/app/models/patient';
import {SymptomeService} from '../../../services/symptome.service';
import {Symptome} from '../../../models/symptome';
import {AlertService} from '../../../services/alert.service';


import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import {ApiService} from '../../../services/api.service';


@Component({
  selector: 'app-apercu',
  templateUrl: './apercu.page.html',
  styleUrls: ['./apercu.page.scss'],
})
export class ApercuPage implements OnInit {

    patient: Patient = null;
    isLoading = false;
    symptomes: Symptome[] = [];

    record = null;
    recording = false;
    url;
    error;

  constructor(private apiService: ApiService, private domSanitizer: DomSanitizer, private alertService: AlertService, private symptomeService: SymptomeService, private alertController: AlertController, private navParams: NavParams, private modalCtrl: ModalController) { }

  ngOnInit() {
    firebase.firestore().collection('patients').doc(this.navParams.get('id')).onSnapshot(
      (docRef: any) => {
        this.patient = docRef.data();
        this.patient.id = docRef.id;
        firebase.firestore().collection('symptomes').where('idPatient', '==', this.navParams.get('id')).onSnapshot(
            (docRef1) => {
              this.symptomes = [];
              const appel = this;
              docRef1.forEach(function(doc) {
                const tmp = doc.data() as Symptome;
                tmp.id = doc.id;
                appel.symptomes.push(tmp);
              });
            }
        );
      }
    );
  }

  // Record voice

    sanitize(url: string) {
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    }

    initiateRecording() {
        this.recording = true;
        const mediaConstraints = {
            video: false,
            audio: true
        };
        navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
    }

    successCallback(stream) {
        const options = {
            mimeType: 'audio/wav',
            numberOfAudioChannels: 1,
            sampleRate: 16000,
        };

        const StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
        this.record = new StereoAudioRecorder(stream, options);
        this.record.record();
    }

    stopRecording() {
        this.recording = false;
        this.record.stop();
    }

    errorCallback(error) {
        this.error = 'Can not play audio in your browser';
    }

    sendRecording() {
        this.recording = false;
        this.record.stop(this.sendToServer.bind(this));
    }

    sendToServer(blob) {
        this.isLoading = true;

        const reader = new FileReader();
        const appel = this;
        reader.readAsDataURL(blob);
        reader.onloadend = function() {
            const base64data = reader.result;
            appel.apiService.addRecordForAdresseId( 'PEGUY' , 'symptomes/' + appel.patient.email + '/' + Math.floor(Math.random() * (99999 - 10001 + 1)) + 10000, base64data.toString()).then(
                (docRef: string) => {
                    const sympt = new Symptome(appel.patient.id, '', docRef);
                    appel.symptomeService.AjouterSymptome(sympt).then(
                        () => {
                            appel.alertService.print('Symptome ajouté', 'dark');
                            appel.isLoading = false;
                        },
                        (error) => {
                            appel.alertService.print('Une erreur est survenue, veuillez reesayer', 'danger');
                            appel.isLoading = false;
                        }
                    );
                },
                (error) => {
                    appel.isLoading = false;
                    appel.alertService.print('Une erreur est survenue lors de l\'opération, veillez reesayer', 'danger');
                }
            );
        };
    }
    // Fin

  async delPatient() {
      this.isLoading = true;
      firebase.firestore().collection('patients').doc(this.navParams.get('id')).delete().then(
          () => {
              this.dismissModal();
              this.alertService.print('Le patient à été supprimé', 'dark');
          },
          () => {
              this.alertService.print('Une erreur est survenue, veuillez reesayer', 'danger');
              this.isLoading = false;
          }
      );
  }

  async delSymptome(id) {
      this.isLoading = true;
      firebase.firestore().collection('symptomes').doc(id).delete().then(
          () => {
              this.isLoading = false;
              this.alertService.print('Le symptome à été supprimé', 'dark');
          },
          () => {
              this.alertService.print('Une erreur est survenue, veuillez reesayer', 'danger');
              this.isLoading = false;
          }
      );
    }

  async addDescriptionSymptome() {
    const alert = await this.alertController.create({
      header: 'Ajout symptome',
      message: 'Vous pouvez ajouter une description textuelle du symptome du patient.',
      inputs: [
        {
          name: 'symptome',
          type: 'textarea',
          placeholder: 'Description symptome'
        }],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Ajouter',
          handler: (data) => {
            this.isLoading = true;
            return new Promise(() => {
              this.symptomeService.AjouterSymptome(new Symptome(this.navParams.get('id'), data.symptome, '')).then(
                  () => {
                    this.alertService.print('Le symptome à été ajouté', 'dark');
                    this.isLoading = false;
                  },
                  () => {
                    this.alertService.print('Une erreur est survenue, veuillez reesayer', 'danger');
                    this.isLoading = false;
                  }
              );
            });
          }
        }
      ]
    });

    await alert.present();
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
