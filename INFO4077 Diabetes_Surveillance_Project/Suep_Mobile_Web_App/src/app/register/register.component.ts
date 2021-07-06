import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  messageAlert = '';
  isLoading = false;

  constructor(private router: Router, private authService: AuthentificationService) { }

  ngOnInit(): void {
  }

  inscription(form) {
    this.isLoading = true;

    this.authService.signUpUser(form.value.nom.toLocaleLowerCase(), form.value.prenom.toLocaleLowerCase(), form.value.email.toLocaleLowerCase(), form.value.telephone, form.value.password).then(
      () => {
        this.router.navigateByUrl('dashboard');
      },
      (error) => {
        this.isLoading = false;
        if (error.toString().search('another') > -1)
          this.messageAlert = 'Email existant';
        else if (error.toString().search('formatted') > -1)
          this.messageAlert = 'Email invalide';
        else if (error.toString().search('should') > -1)
          this.messageAlert = 'Mot de passe (6+)';
        else
          this.messageAlert = 'Erreur reseau';
      }
    );
  }

}
