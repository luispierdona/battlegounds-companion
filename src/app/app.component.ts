import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Lifetime',
      url: '/lifetime',
      icon: 'person'
    },
    {
      title: 'Season',
      url: '/solo',
      icon: 'ribbon'
    },
    {
      title: 'Maps',
      url: '/maps',
      icon: 'map'
    },
    {
      title: 'Assault Rifles',
      url: '/arstats',
      icon: 'pulse'
    },
    {
      title: 'DMR Rifles',
      url: '/dmrstats',
      icon: 'pulse'
    },
    {
      title: 'LMG Rifles',
      url: '/lmgstats',
      icon: 'pulse'
    },
    {
      title: 'Pistols',
      url: '/pistolstats',
      icon: 'pulse'
    },
    {
      title: 'Shotguns',
      url: '/shoutgunstats',
      icon: 'pulse'
    },
    {
      title: 'SMG',
      url: '/smgstats',
      icon: 'pulse'
    },
    {
      title: 'Sniper Rifles',
      url: '/sniperstats',
      icon: 'pulse'
    }
  ];
  constructor() {}
}
