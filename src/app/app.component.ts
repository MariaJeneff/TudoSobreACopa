import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProgramacaoPage } from '../pages/programacao/programacao';
import { CopaPage } from '../pages/copa/copa';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('NAV') nav: Nav;

  public rootPage:any;

  public pages: Array<{ titulo: string, component:any, icon:string }>;
  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {

      this.rootPage = HomePage;

      this.pages = [
        { titulo: 'Home', component: HomePage, icon: 'home' },
        { titulo: 'Copa do mundo 2018', component: CopaPage, icon: 'football' },
        { titulo: 'Programação', component: ProgramacaoPage, icon: 'calendar' }
      ];

platform.ready().then(() => {
// Okay, so the platform is ready and our plugins are available.
// Here you can do any higher level native things you might need.
statusBar.styleDefault();
splashScreen.hide();
});
}
goToPage(page){

  this.nav.setRoot(page);

}

}

