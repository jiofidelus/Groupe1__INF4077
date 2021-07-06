import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {StatistiquePage} from './statistique/statistique.page';
import {Symptome} from '../../models/symptome';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {

  constructor(private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {}

  async openPageStatistique() {
    const modal = await this.modalController.create({
      component: StatistiquePage
    });
    return await modal.present();
  }

  async infoSymptomesDiabete() {
    const alert = await this.alertController.create({
      header: 'Infos. Diabete',
      message: 'Le diabète est une maladie chronique caractérisée par une augmentation anormale du taux de sucre ' +
          'dans le sang. Véritable préoccupation de santé publique, sa prévalence ne cesse d’augmenter en raison du ' +
          'style de vie et du vieillissement de la population. Une prise en charge efficace permet au patient de vivre ' +
          'normalement et de réduire les complications qui y sont liées.\n' +
          'Symptômes :\n' +
          '\n' +
          'Diabète de type 1. L’apparition du diabète est soudaine. Elle s’accompagne des symptômes suivants : une soif anormale et une bouche sèche, un besoin fréquent d’uriner, une fatigue et un manque d’énergie, une forte perte de poids malgré un appétit augmenté, des infections récurrentes, une difficulté de cicatrisation et une vision trouble.\n' +
          '\n' +
          'Diabète de type 2. Plus sournois, ce diabète évolue durant de nombreuses années de manière silencieuse.\n' +
          '\n' +
          'Modalités de diagnostic :\n' +
          '\n' +
          'Glycémie à jeun égale ou supérieure à 1,26g/l, à deux reprises, réalisée au laboratoire de biologie médicale.',
      buttons: [
        {
          text: 'Fermer',
          role: 'cancel',
          cssClass: 'secondary'
        }
      ]
    });

    await alert.present();
  }

}
