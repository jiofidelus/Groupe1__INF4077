import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import {Patient} from '../../../models/patient';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  constructor() { }

  public isLoading = true;
  public nombrePatient = 0;
  public doughnutChartLabels = ['Femme', 'Homme'];
  public doughnutChartData = [120, 150];
  public doughnutChartType = 'doughnut';

  ngOnInit(): void {
    firebase.firestore().collection('patients').where('medecin', '==', firebase.auth().currentUser.email).onSnapshot(
      (docRef) => {
        // tslint:disable-next-line:one-variable-per-declaration
        let cmp = 0, h = 0, f = 0;
        this.nombrePatient = docRef.docs.length;
        const appel = this;
        docRef.forEach(function(doc) {
          cmp++;
          const tmp = doc.data() as Patient;
          if (tmp.sexe === 'm') { h++; } else { f++; }
          if (cmp === docRef.docs.length) { appel.doughnutChartData = [f, h]; appel.isLoading = false; }
        });
      }
    );
  }

}
