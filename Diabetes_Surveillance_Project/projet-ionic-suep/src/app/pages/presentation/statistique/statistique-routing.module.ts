import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatistiquePage } from './statistique.page';

const routes: Routes = [
  {
    path: '',
    component: StatistiquePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatistiquePageRoutingModule {}
