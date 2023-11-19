import { Component, Input } from '@angular/core';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-prediction-card',
  templateUrl: './prediction-card.component.html',
  styleUrls: ['./prediction-card.component.css']
})
export class PredictionCardComponent {
  // client: Client = {
  //   name: 'Ahmed Bentaj Hamyani',
  //   age: 23,
  //   totalPurchase: 11039.4,
  //   accountManager: 0,
  //   numSites: 6,
  //   years: 2,
  //   onboard_date: new Date(),
  //   location: 'Anassi, Casablanca',
  //   company: 'CapgeminiTS',
  //   prediction: 1
  // }

  @Input()
  client!: Client;
}
