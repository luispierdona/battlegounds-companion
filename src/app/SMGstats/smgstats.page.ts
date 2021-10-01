import { Component, OnInit } from '@angular/core';
import { smgRifles } from '../models/db.model';

@Component({
  selector: 'app-smgstats',
  templateUrl: './smgstats.page.html',
  styleUrls: ['./smgstats.page.scss'],
})
export class SMGstatsPage implements OnInit {

  stats = smgRifles;
  constructor() {

  }

  ngOnInit() {

  }

}
