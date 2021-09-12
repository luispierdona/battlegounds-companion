import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo',
  templateUrl: './solo.page.html',
  styleUrls: ['./solo.page.scss'],
})
export class SoloPage implements OnInit {

  stats = JSON.parse(localStorage.getItem('data'))?.data?.attributes?.gameModeStats;
  statsSoloFFP = this.stats['solo-fpp'];
  statsSoloTTP = this.stats?.solo;

  constructor() { }

  ngOnInit() {
  }

}
