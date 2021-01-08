import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deconnexion',
  templateUrl: './deconnexion.component.html',
  styleUrls: ['./deconnexion.component.scss']
})
export class DeconnexionComponent implements OnInit {

  messageAlert = '';

  constructor(private authentificationService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  async deconnexion() {
    this.authentificationService.signOut().then(
      () => {
        this.router.navigateByUrl('home');
      },
      () => {
        this.messageAlert = 'Une erreur est survenue lors de la deconnexion, veuillez reesayer';
      }
    );
  }

  // tslint:disable-next-line:typedef
  about() {
    alert('A Propos \n' +
            ' Suep v1.0 \n' +
    'Application de surveillance épidemologique (Diabete) \n' +
    ' Projet d\'étude réalisé par \n \n' +
    '• SEFFI TCHANGA PEGUY  \n' +
    '• ETALI ETALI MATHIAS JUNIOR \n' +
    '• NOUSSI NICOLAS  \n' +
    '• TEKOH PALMA ACHU  \n \n' +
    '2021 • Groupe 1');
  }

}
