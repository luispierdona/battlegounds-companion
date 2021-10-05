import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }

  async openViewer(photo: string) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: './assets/maps/' + photo,
        scheme: 'dark'
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

}
