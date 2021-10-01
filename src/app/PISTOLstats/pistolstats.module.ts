import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PISTOLstatsPage } from './pistolstats.page';

const routes: Routes = [
  {
    path: '',
    component: PISTOLstatsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PISTOLstatsPage]
})
export class PISTOLstatsPageModule {}
