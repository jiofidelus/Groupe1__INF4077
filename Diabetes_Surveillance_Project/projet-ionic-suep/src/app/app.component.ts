import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Accueil',
      url: '/folder/',
      icon: 'home'
    },
    {
      title: 'Patients',
      url: '/folder/Patients',
      icon: 'people'
    },
    {
      title: 'Sensibilisation',
      url: '/folder/Sensibilisation',
      icon: 'paper-plane'
    },
    {
      title: 'Déconnexion',
      url: '/folder/Deconnexion',
      icon: 'log-out'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public afficheMenu = true;
  public noConnect = ['home', 'connexion', 'inscription'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      const firebaseConfig = {
        apiKey: 'AIzaSyC5aHhF8X6XoOfr9XPPhYcoUCn68r-FNLU',
        authDomain: 'suep-b6065.firebaseapp.com',
        projectId: 'suep-b6065',
        storageBucket: 'suep-b6065.appspot.com',
        messagingSenderId: '209741952034',
        appId: '1:209741952034:web:5188a3ed46ba0b636b067b'
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      // Activation de la persistance de donnée
      firebase.firestore().enablePersistence();

      if (!this.noConnect.includes(window.location.href.split('/')[window.location.href.split('/').length - 1])) { this.afficheMenu = false; }

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
