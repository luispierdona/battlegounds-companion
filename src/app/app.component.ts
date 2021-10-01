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
      icon: 'mail'
    },
    {
      title: 'Season',
      url: '/solo',
      icon: 'mail'
    },
    {
      title: 'Maps',
      url: '/maps',
      icon: 'mail'
    },
    {
      title: 'Assault Rifles',
      url: '/arstats',
      icon: 'pulse'
    },
    {
      title: 'DMR Rifles',
      url: '/dmrstats',
      icon: 'mail'
    },
    {
      title: 'LMG Rifles',
      url: '/lmgstats',
      icon: 'mail'
    },
    {
      title: 'Pistols',
      url: '/pistolstats',
      icon: 'mail'
    },
    {
      title: 'Shotguns',
      url: '/shoutgunstats',
      icon: 'mail'
    },
    {
      title: 'SMG',
      url: '/smgstats',
      icon: 'mail'
    },
    {
      title: 'Sniper Rifles',
      url: '/sniperstats',
      icon: 'star'
    }
  ];
  constructor() {}
}
