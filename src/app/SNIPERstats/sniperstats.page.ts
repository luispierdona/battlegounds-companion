import { Component, OnInit } from '@angular/core';
import { sniperRifles } from '../models/db.model';

@Component({
  selector: 'app-sniperstats',
  templateUrl: './sniperstats.page.html',
  styleUrls: ['./sniperstats.page.scss'],
})
export class SNIPERstatsPage implements OnInit {

  stats = sniperRifles;
  constructor() {

  }

  ngOnInit() {

  }

}
