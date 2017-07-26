import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    let config = {
      apiKey: "AIzaSyAlCOCBMEyiyGEdXrxc26cdDtBIupI4GVs",
      authDomain: "ionicfirechat-e5106.firebaseapp.com",
      databaseURL: "https://ionicfirechat-e5106.firebaseio.com",
      projectId: "ionicfirechat-e5106",
      storageBucket: "ionicfirechat-e5106.appspot.com",
      messagingSenderId: "595047627486"
    };

    firebase.initializeApp(config);
  }
}

