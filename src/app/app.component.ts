import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },

    {
      title: 'Lifetime',
      url: '/lifetime',
      icon: 'mail'
    },
    {
      title: 'Maps',
      url: '/maps',
      icon: 'mail'
    },
    {
      title: 'Solo',
      url: '/solo',
      icon: 'mail'
    },
    {
      title: 'Duo',
      url: '/duo',
      icon: 'mail'
    },
    {
      title: 'Squad',
      url: '/squad',
      icon: 'mail'
    },
    {
      title: 'Miscellaneous',
      url: '/misc',
      icon: 'mail'
    },
  ];
  constructor() {}
}
