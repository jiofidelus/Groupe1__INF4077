import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastController: ToastController) { }

  async print(texte: string, couleur: string) {
    const toast = await this.toastController.create({
      message: texte,
      duration: 5000,
      color: couleur,
      position: 'top'
    });
    toast.present();
  }
}
