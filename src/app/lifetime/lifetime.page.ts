import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifetime',
  templateUrl: './lifetime.page.html',
  styleUrls: ['./lifetime.page.scss'],
})
export class LifetimePage implements OnInit {

  stats = JSON.parse(localStorage.getItem('lifestimeStats'))?.data?.attributes?.gameModeStats;
  statsSoloFFP = this.stats?.['solo-fpp'];
  statsDuoFFP = this.stats['duo-fpp'];
  statsSquadFFP = this.stats['squad-fpp'];
  statsSoloTTP = this.stats?.solo;
  statsDuoTTP = this.stats?.duo;
  statsSquadTTP = this.stats?.squad;

  public isToggled: boolean;
  constructor() {

  }

  ngOnInit() {

  }

}
