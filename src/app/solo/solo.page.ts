import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solo',
  templateUrl: './solo.page.html',
  styleUrls: ['./solo.page.scss'],
})
export class SoloPage implements OnInit {

  stats = JSON.parse(localStorage.getItem('data'))?.data?.attributes?.gameModeStats;
  public isToggled: boolean;

  statsSoloFPP = this.stats['solo-fpp'];
  statsSoloTPP = this.stats?.solo;

  statsDuoFPP = this.stats['duo-fpp'];
  statsDuoTPP = this.stats?.duo;

  statsSquadFPP = this.stats['squad-fpp'];
  statsSquadTPP = this.stats?.squad;

  constructor() { }

  ngOnInit() {
  }

}
