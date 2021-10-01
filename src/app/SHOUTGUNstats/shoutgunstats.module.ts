import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SHOUTGUNstatsPage } from './shoutgunstats.page';

const routes: Routes = [
  {
    path: '',
    component: SHOUTGUNstatsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SHOUTGUNstatsPage]
})
export class SHOUTGUNstatsPageModule {}
