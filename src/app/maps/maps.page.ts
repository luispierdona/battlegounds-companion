import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  constructor(private photoViewer: PhotoViewer) { }

  ngOnInit() {
  }

  showPhoto(photo: string) {
    this.photoViewer.show('assets/maps/'+`${photo}`);
  }

}
