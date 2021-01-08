import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
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
  }
}
