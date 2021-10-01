import { Component, OnInit } from '@angular/core';
import { shotgunsRifles } from '../models/db.model';

@Component({
  selector: 'app-shoutgunstats',
  templateUrl: './shoutgunstats.page.html',
  styleUrls: ['./shoutgunstats.page.scss'],
})
export class SHOUTGUNstatsPage implements OnInit {

  stats = shotgunsRifles;
  constructor() {

  }

  ngOnInit() {

  }

}
