import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {AlertController, NavController} from '@ionic/angular';
import {AlertService} from '../../services/alert.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.scss'],
})
export class DeconnexionComponent implements OnInit {

  constructor(private alertController: AlertController, private authentificationService: AuthentificationService, private navCtrl: NavController, private alert: AlertService, private appComponent: AppComponent) { }

  ngOnInit() {}

  async deconnexion() {
    this.authentificationService.signOut().then(
        () => {
          this.navCtrl.navigateBack('home');
          this.appComponent.afficheMenu = true;
        },
        () => {
          this.alert.print('Une erreur est survenue lors de la deconnexion, veuillez reesayer', 'danger');
        }
    );
  }

    async about() {
        const alert = await this.alertController.create({
            header: 'A Propos',
            message: '<h6> Suep v1.0 </h6>' +
                '<small>Application de surveillance épidemologique (Diabete) </small> <br>' +
                '<small> Projet d\'étude réalisé par </small> <br> <br>' +
                '<small>• SEFFI TCHANGA PEGUY </small> <br>' +
                '<small>• ETALI ETALI MATHIAS JUNIOR</small><br>' +
                '<small>• NOUSSI NICOLAS </small><br>' +
                '<small>• TEKOH PALMA ACHU </small> <br><br>' +
                '<small>2021 • Groupe 1</small>',
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
