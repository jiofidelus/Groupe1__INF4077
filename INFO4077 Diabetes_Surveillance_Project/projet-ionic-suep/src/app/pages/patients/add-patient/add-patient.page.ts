import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {PatientService} from '../../../services/patient.service';
import {Patient} from '../../../models/patient';
import {AlertService} from '../../../services/alert.service';
import firebase from 'firebase';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {ApiService} from '../../../services/api.service';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.page.html',
  styleUrls: ['./add-patient.page.scss'],
})
export class AddPatientPage implements OnInit {

  isLoading = false;
  patientForm: FormGroup;
  photo: SafeResourceUrl = '';
  photoIsUpdate = false;
  coordonnee: any = null;

  constructor(private sanitizer: DomSanitizer, private apiService: ApiService, private modalCtrl: ModalController, private formBuilder: FormBuilder, private patientService: PatientService, private alertService: AlertService) {
    this.patientForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      sexe: ['', Validators.required],
      longitude: [''],
      latitude: [''],
      description: ['']
    });
  }

  ngOnInit() {
    this.getCurrentPosition();
  }

  addPatient() {
    this.isLoading = true;
    this.apiService.addImageForAdresseId( 'PEGUY' , 'comptes/' + this.patientForm.value.email + '/profil', this.photoIsUpdate ? this.photo.toString() : '').then(
        (docRef: string) => {
          const patient: Patient = new Patient(this.patientForm.value.nom, this.patientForm.value.prenom, this.patientForm.value.email, this.patientForm.value.phone, this.patientForm.value.sexe, firebase.auth().currentUser.email, this.patientForm.value.description, docRef, { latitude : this.coordonnee.coords.latitude, longitude : this.coordonnee.coords.latitude });
          this.patientService.AjouterPatient(patient).then(
              () => {
                this.alertService.print('Le patient à été ajouté', 'dark');
                this.dismissModal();
              },
              (error) => {
                this.alertService.print('Une erreur est survenue, veuillez reesayer', 'danger');
                this.isLoading = false;
              }
          );
        },
        () => {
          this.isLoading = false;
          this.alertService.print('Une erreur est survenue lors de l\'opération, veillez reesayer', 'danger');
        }
    );
  }

  oldPicture() {
    this.photo = '';
    this.photoIsUpdate = false;
  }

  clearPicture() {
    this.photo = '';
    this.photoIsUpdate = true;
  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });

    this.photoIsUpdate = true;
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  async getCurrentPosition() {
    this.coordonnee = await Geolocation.getCurrentPosition();
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
    });
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
