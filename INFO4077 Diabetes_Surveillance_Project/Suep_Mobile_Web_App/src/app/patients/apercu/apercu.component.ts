import {Component, Input, OnInit} from '@angular/core';
import {Patient} from '../../../models/patient';
import {Symptome} from '../../../models/symptome';
import firebase from 'firebase';

import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import {ApiService} from '../../services/api.service';
import {SymptomeService} from '../../services/symptome.service';
import {DashboardComponent} from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-apercu',
  templateUrl: './apercu.component.html',
  styleUrls: ['./apercu.component.scss']
})
export class ApercuComponent implements OnInit {

  messageAlert = '';
  couleurAlert = '';

  patient: Patient = null;
  isLoading = false;
  symptomes: Symptome[] = [];

  record = null;
  recording = false;
  url;
  error;

  @Input() data;

  constructor(public dashboard: DashboardComponent, private symptomeService: SymptomeService, private apiService: ApiService, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    firebase.firestore().collection('patients').doc(this.data).onSnapshot(
      (docRef: any) => {
        this.patient = docRef.data();
        this.patient.id = docRef.id;
        firebase.firestore().collection('symptomes').where('idPatient', '==', this.data).onSnapshot(
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

  // tslint:disable-next-line:typedef
  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  // tslint:disable-next-line:typedef
  initiateRecording() {
    this.recording = true;
    const mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  // tslint:disable-next-line:typedef
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

  // tslint:disable-next-line:typedef
  stopRecording() {
    this.recording = false;
    this.record.stop();
  }

  // tslint:disable-next-line:typedef
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }

  // tslint:disable-next-line:typedef
  sendRecording() {
    this.recording = false;
    this.record.stop(this.sendToServer.bind(this));
  }

  // tslint:disable-next-line:typedef
  sendToServer(blob) {
    this.isLoading = true;

    const reader = new FileReader();
    const appel = this;
    reader.readAsDataURL(blob);
    // tslint:disable-next-line:only-arrow-functions typedef
    reader.onloadend = function() {
      const base64data = reader.result;
      // tslint:disable-next-line:max-line-length
      appel.apiService.addRecordForAdresseId( 'PEGUY' , 'symptomes/' + appel.patient.email + '/' + Math.floor(Math.random() * (99999 - 10001 + 1)) + 10000, base64data.toString()).then(
        (docRef: string) => {
          const sympt = new Symptome(appel.patient.id, '', docRef);
          appel.symptomeService.AjouterSymptome(sympt).then(
            () => {
              appel.messageAlert = 'Symptome ajouté';
              appel.couleurAlert = 'alert-success';
              appel.isLoading = false;
            },
            (error) => {
              appel.messageAlert = 'Une erreur est survenue, veuillez reesayer';
              appel.couleurAlert = 'alert-danger';
              appel.isLoading = false;
            }
          );
        },
        (error) => {
          appel.isLoading = false;
          appel.messageAlert = 'Une erreur est survenue lors de l\'opération, veillez reesayer';
          appel.couleurAlert = 'alert-danger';
        }
      );
    };
  }
  // Fin

  // tslint:disable-next-line:typedef
  async delPatient() {
    this.isLoading = true;
    firebase.firestore().collection('patients').doc(this.data).delete().then(
      () => {
        this.dashboard.currentPage = 'Patients';
      },
      () => {
        this.messageAlert = 'Une erreur est survenue, veuillez reesayer';
        this.couleurAlert = 'alert-danger';
        this.isLoading = false;
      }
    );
  }

  // tslint:disable-next-line:typedef
  async delSymptome(id) {
    this.isLoading = true;
    firebase.firestore().collection('symptomes').doc(id).delete().then(
      () => {
        this.isLoading = false;
        this.messageAlert = 'Le symptome à été supprimé';
        this.couleurAlert = 'alert-success';
      },
      () => {
        this.messageAlert = 'Une erreur est survenue, veuillez reesayer';
        this.couleurAlert = 'alert-danger';
        this.isLoading = false;
      }
    );
  }

  // tslint:disable-next-line:typedef
  async addDescriptionSymptome() {
    const text = prompt('Vous pouvez ajouter une description textuelle du symptome du patient.');
    if (text) {
      this.isLoading = true;
      this.symptomeService.AjouterSymptome(new Symptome(this.data, text, '')).then(
        () => {
          this.messageAlert = 'Le symptome à été ajouté';
          this.couleurAlert = 'alert-success';
          this.isLoading = false;
        },
        () =>{
          this.messageAlert = 'Une erreur est survenue, veuillez reesayer';
          this.couleurAlert = 'alert-danger';
          this.isLoading = false;
        }
      );
    }
  }

}
