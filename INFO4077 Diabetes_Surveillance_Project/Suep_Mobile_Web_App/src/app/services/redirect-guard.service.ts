import { Injectable } from '@angular/core';
import {AuthentificationService} from './authentification.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectGuardService  implements CanActivate {

  constructor(private authService: AuthentificationService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return new Promise((resolve, reject) => {
      this.authService.isAuthenticated().then(
        (docRef: boolean) => {
          if (docRef === true) {
            this.router.navigate(['/dashboard']);
          }
          resolve(!docRef);
        }
      );
    });
  }
}
