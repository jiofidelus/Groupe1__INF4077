import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import {DeconnexionComponent} from '../pages/deconnexion/deconnexion.component';
import {PresentationComponent} from '../pages/presentation/presentation.component';
import {SensibilisationComponent} from '../pages/sensibilisation/sensibilisation.component';
import {PatientsComponent} from '../pages/patients/patients.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FolderPageRoutingModule,
        ReactiveFormsModule
    ],
    declarations: [FolderPage, DeconnexionComponent, PresentationComponent, SensibilisationComponent, PatientsComponent]
})
export class FolderPageModule {}
