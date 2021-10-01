import { Component, OnInit } from '@angular/core';
import { lmgRifles } from '../models/db.model';

@Component({
  selector: 'app-lmgstats',
  templateUrl: './lmgstats.page.html',
  styleUrls: ['./lmgstats.page.scss'],
})
export class LMGstatsPage implements OnInit {

  stats = lmgRifles;
  constructor() {

  }

  ngOnInit() {

  }

}
