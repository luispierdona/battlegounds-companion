import { Component, OnInit } from '@angular/core';
import { dmrRifles } from '../models/db.model';

@Component({
  selector: 'app-dmrstats',
  templateUrl: './dmrstats.page.html',
  styleUrls: ['./dmrstats.page.scss'],
})
export class DMRstatsPage implements OnInit {

  stats = dmrRifles;
  constructor() {

  }

  ngOnInit() {

  }

}
