import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PlayerService } from '../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  sv: string;
  username: string;

  constructor(
    private loadingController: LoadingController,
    private playerService: PlayerService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  async login() {
    console.log('login');
    try {
      this.presentLoading();
      // USER ID
      const userID = await this.playerService.getUserID(this.username, this.sv);
      // this.userId = userIDProm?.data[0]?.id;
      // console.log('🚀 userId', this.userId);
      console.log(userID);
      localStorage.setItem('usrId', JSON.stringify(userID?.data[0]?.id));

      // LIFETIME STATS
      const lifetimeStats = await this.playerService.getLifeTimeStats(userID?.data[0]?.id);
      console.log(lifetimeStats);
      localStorage.setItem('lifestimeStats', JSON.stringify(lifetimeStats));

      // SEASONS
      const seasons = await this.playerService.getAllSeasons(this.sv);
      console.log(seasons);
      localStorage.setItem('allSeasons', JSON.stringify(seasons));
      const currentSeasonArray: any[] = seasons?.data;
      const currentSeason = currentSeasonArray.filter( x => x?.attributes?.isCurrentSeason === true );
      console.log(currentSeason);
      localStorage.setItem('lastSeason', JSON.stringify(currentSeason[0]?.id));

      // PLAYER DATA
      const playerData = await this.playerService.getData(userID?.data[0]?.id, this.sv, currentSeason[0]?.id);
      console.log(playerData);
      localStorage.setItem('data', JSON.stringify(playerData));

      this.closeLoading();
      this.router.navigate(['lifetime']);

    } catch (error) {
      console.log(error);
      this.notFoundUser();
      this.closeLoading();
    }

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Getting amazing data',
    });
    return await loading.present();
  }

  async closeLoading() {
    this.loadingController.dismiss();
  }

  async notFoundUser() {
    const loading = await this.loadingController.create({
      message: 'User Not Found :(',
      spinner: 'circles',
      duration: 2000
    });
    return await loading.present();
  }

}
