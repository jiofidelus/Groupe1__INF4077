import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../dashboard/dashboard.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(public dashboard: DashboardComponent) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  infos() {
    alert('Le diabète est une maladie chronique caractérisée par une augmentation anormale du taux de sucre ' +
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
      'Glycémie à jeun égale ou supérieure à 1,26g/l, à deux reprises, réalisée au laboratoire de biologie médicale.');
  }

}
