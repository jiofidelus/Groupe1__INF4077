import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApercuPageRoutingModule } from './apercu-routing.module';

import { ApercuPage } from './apercu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApercuPageRoutingModule
  ],
  declarations: [ApercuPage]
})
export class ApercuPageModule {}
