import { Component, OnInit } from '@angular/core';
import { pistols } from '../models/db.model';

@Component({
  selector: 'app-pistolstats',
  templateUrl: './pistolstats.page.html',
  styleUrls: ['./pistolstats.page.scss'],
})
export class PISTOLstatsPage implements OnInit {

  stats = pistols;
  constructor() {

  }

  ngOnInit() {

  }

}
