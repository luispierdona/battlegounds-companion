import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lifetime',
    loadChildren: () => import('./lifetime/lifetime.module').then( m => m.LifetimePageModule)
  },
  {
    path: 'solo',
    loadChildren: () => import('./solo/solo.module').then( m => m.SoloPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'arstats',
    loadChildren: () => import('./ARstats/arstats.module').then( m => m.ARstatsPageModule)
  },
  {
    path: 'dmrstats',
    loadChildren: () => import('./DMRstats/dmrstats.module').then( m => m.DMRstatsPageModule)
  },
  {
    path: 'lmgstats',
    loadChildren: () => import('./LMGstats/lmgstats.module').then( m => m.LMGstatsPageModule)
  },
  {
    path: 'pistolstats',
    loadChildren: () => import('./PISTOLstats/pistolstats.module').then( m => m.PISTOLstatsPageModule)
  },
  {
    path: 'shoutgunstats',
    loadChildren: () => import('./SHOUTGUNstats/shoutgunstats.module').then( m => m.SHOUTGUNstatsPageModule)
  },
  {
    path: 'smgstats',
    loadChildren: () => import('./SMGstats/smgstats.module').then( m => m.SMGstatsPageModule)
  },
  {
    path: 'sniperstats',
    loadChildren: () => import('./SNIPERstats/sniperstats.module').then( m => m.SNIPERstatsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
