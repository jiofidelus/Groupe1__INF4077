import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Chart } from 'chart.js';
import firebase from 'firebase';
import {Patient} from '../../../models/patient';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.page.html',
  styleUrls: ['./statistique.page.scss'],
})
export class StatistiquePage implements OnInit {

  @ViewChild('pieChart', {static: true}) pieChart;
  @ViewChild('barChart', {static: true}) barChart;
  @ViewChild('lineChart', {static: true}) lineChart;

  nombrePatient = 0;

  public technologies: any = {
    technologies : [
      {
        technology : 'Homme',
        time       : 0,
        color      : 'rgba(83, 131, 185, 0.5)',
        hover      : 'rgba(122, 160, 202, 0.5)'
      },
      {
        technology : 'Femme',
        time       : 0,
        color      : 'rgba(206, 61, 95, 0.5)',
        hover      : 'rgba(199, 108, 129, 0.5)'
      }
    ]
  };

  public pieChartEl: any;
  public chartLoading: any;
  public chartLabels: any    = [];
  public chartValues: any    = [];
  public chartColours: any    = [];
  public chartHoverColours: any    = [];

  public isLoading = true;

  constructor(private modalCtrl: ModalController) { }

  ionViewDidEnter()
  {
    this.defineChartData();
    this.createPieChart();
  }

  defineChartData()
  {
    let k: any;

    // tslint:disable-next-line:forin
    for (k in this.technologies.technologies)
    {
      const tech  =      this.technologies.technologies[k];

      this.chartLabels.push(tech.technology);
      this.chartValues.push(tech.time);
      this.chartColours.push(tech.color);
      this.chartHoverColours.push(tech.hover);
    }
  }

  createPieChart()
  {

    this.pieChartEl = new Chart(this.pieChart.nativeElement,
        {
          type: 'pie',
          data: {
            labels: this.chartLabels,
            datasets: [{
              label                 : 'Daily Technology usage',
              data                  : this.chartValues,
              duration              : 2000,
              easing                : 'easeInQuart',
              backgroundColor       : this.chartColours,
              hoverBackgroundColor  : this.chartHoverColours
            }]
          },
          options : {
            maintainAspectRatio: false,
            layout: {
              padding: {
                left     : 50,
                right    : 0,
                top      : 0,
                bottom   : 0
              }
            },
            animation: {
              duration : 5000
            }
          }
        });

    this.chartLoading = this.pieChartEl.generateLegend();
  }

    ngOnInit() {
      firebase.firestore().collection('patients').where('medecin', '==', firebase.auth().currentUser.email).onSnapshot(
          (docRef) => {
            let cmp = 0;
            this.nombrePatient = docRef.docs.length;
            const appel = this;
            docRef.forEach(function(doc) {
              cmp++;
              const tmp = doc.data() as Patient;
              if (tmp.sexe === 'm') { appel.technologies.technologies[0].time++; } else { appel.technologies.technologies[1].time++; }
              if (cmp === docRef.docs.length) { appel.isLoading = false; }
            });
          }
      );
  }

  dismissModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
