import {Component, ElementRef, Renderer2, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../../services/patient.service';
import {Patient} from '../../../models/patient';
import firebase from 'firebase';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {ApiService} from '../../services/api.service';
import {GeolocalisationService} from '../../services/geolocalisation.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  @ViewChild('video', { static: true }) videoElement: ElementRef;
  @ViewChild('canvas', { static: true }) canvas: ElementRef;

  constraints = {
    video: {
      facingMode: 'environment',
      width: { ideal: 250 },
      height: { ideal: 250 }
    }
  };

  videoWidth = 0;
  videoHeight = 0;

  isLoading = false;
  messageAlert = '';
  patientForm: FormGroup;

  cameraStart = false;
  apercuCapture: any = null;

  coordinates: any = null;

  constructor(private geolocalisationService: GeolocalisationService, private apiService: ApiService, private formBuilder: FormBuilder, private patientService: PatientService, private dashboard: DashboardComponent, private renderer: Renderer2) {
    this.patientForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      sexe: ['', Validators.required],
      description: ['']
    });
  }

  // tslint:disable-next-line:typedef
  startCamera() {
    if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      this.cameraStart = true;
      navigator.mediaDevices.getUserMedia(this.constraints).then(this.attachVideo.bind(this)).catch(this.handleError)
    } else {
      alert('Sorry, camera not available.');
    }
  }

  // tslint:disable-next-line:typedef
  handleError(error) {
    console.log('Error: ', error);
  }

  // tslint:disable-next-line:typedef
  attachVideo(stream) {
    this.renderer.setProperty(this.videoElement.nativeElement, 'srcObject', stream);
    this.renderer.listen(this.videoElement.nativeElement, 'play', (event) => {
      this.videoHeight = this.videoElement.nativeElement.videoHeight;
      this.videoWidth = this.videoElement.nativeElement.videoWidth;
    });
  }

  ngOnInit(): void {
    this.geolocalisationService.getPosition().subscribe(
      (pos: Position) => {
        this.coordinates = {
          latitude:  +(pos.coords.latitude),
          longitude: +(pos.coords.longitude)
        };
      });
  }

  // tslint:disable-next-line:typedef
  capture(){
    this.renderer.setProperty(this.canvas.nativeElement, 'width', this.videoWidth);
    this.renderer.setProperty(this.canvas.nativeElement, 'height', this.videoHeight);
    this.canvas.nativeElement.getContext('2d').drawImage(this.videoElement.nativeElement, 0, 0);

    // tslint:disable-next-line:variable-name
    const data_uri = this.canvas.nativeElement.toDataURL('image/png');
    this.apercuCapture = data_uri
    this.cameraStart = false;
  }

  // tslint:disable-next-line:typedef
  addPatient() {
    this.isLoading = true;

    this.apiService.addImageForAdresseId( 'Patients' , firebase.auth().currentUser.email + '/' + this.patientForm.value.email + '/profil', this.apercuCapture === null ? '' : this.apercuCapture.toString()).then(
      (docRef: string) => {
        const patient: Patient = new Patient(this.patientForm.value.nom, this.patientForm.value.prenom, this.patientForm.value.email, this.patientForm.value.phone, this.patientForm.value.sexe, firebase.auth().currentUser.email, this.patientForm.value.description, docRef, this.coordinates);
        this.patientService.AjouterPatient(patient).then(
          () => {
            this.dashboard.currentPage = 'Patients';
          },
          (error) => {
            this.messageAlert = 'Une erreur est survenue, veuillez reesayer';
            this.isLoading = false;
          }
        );
      },
      (error) => {
        this.isLoading = false;
        this.messageAlert = 'Une erreur est survenue lors de l\'opération, veillez reesayer';
      }
    );
  }

}
