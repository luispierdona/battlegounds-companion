import { Component, OnInit } from '@angular/core';
import { assaultRifles } from '../models/db.model';

@Component({
  selector: 'app-arstats',
  templateUrl: './arstats.page.html',
  styleUrls: ['./arstats.page.scss'],
})
export class ARstatsPage implements OnInit {

  stats = assaultRifles;
  constructor() {

  }

  ngOnInit() {

  }

}
