import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './services/auth-guard.service';
import {RedirectGuardService} from './services/redirect-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    canActivate: [AuthGuard],
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'folder/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    canActivate: [RedirectGuardService],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inscription',
    canActivate: [RedirectGuardService],
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    canActivate: [RedirectGuardService],
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'add-patient',
    loadChildren: () => import('./pages/patients/add-patient/add-patient.module').then( m => m.AddPatientPageModule)
  },
  {
    path: 'apercu',
    loadChildren: () => import('./pages/patients/apercu/apercu.module').then( m => m.ApercuPageModule)
  },
  {
    path: 'statistique',
    loadChildren: () => import('./pages/presentation/statistique/statistique.module').then( m => m.StatistiquePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
