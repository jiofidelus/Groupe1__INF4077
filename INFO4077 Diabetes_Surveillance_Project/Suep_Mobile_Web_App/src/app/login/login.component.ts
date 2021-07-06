import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  messageAlert = '';

  constructor(private authService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  connexion(form) {
    this.isLoading = true;
    this.authService.signInUser(form.value.identifiant, form.value.password).then(
      () => {
        this.router.navigateByUrl('dashboard');
      },
      (error) => {
        this.isLoading = false;
          if (error.toString().search('formatted') > -1)
            this.messageAlert = 'Email invalide!';
          else if (error.toString().search('no user') > -1)
            this.messageAlert = 'Informations invalides';
          else
            this.messageAlert = 'Erreur reseau';
      }
    );
  }

}
