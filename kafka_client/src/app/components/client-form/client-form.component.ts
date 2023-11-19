import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientDto } from 'src/app/models/clientDto';
import { PredictionService } from 'src/app/services/prediction.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent {
  Client: Client = {
    name: '',
    age: 0,
    totalPurchase: 0,
    accountManager: 0,
    numSites: 0,
    years: 0,
    onboard_date: new Date(),
    location: '',
    company: '',
    prediction: 0
  }

  ClientDto: ClientDto = {
    age: 0,
    totalPurchase: 0,
    accountManager: 0,
    numSites: 0,
    years: 0,
  }

  constructor(private predictionService: PredictionService, private router: Router) { }

  ngOnInit(): void { }

  predict() {
    this.ClientDto.age = this.Client.age;
    this.ClientDto.totalPurchase = this.Client.totalPurchase;
    this.ClientDto.accountManager = this.Client.accountManager;
    this.ClientDto.numSites = this.Client.numSites;
    this.ClientDto.years = this.Client.years;

    this.predictionService.predict(this.ClientDto).subscribe(() => {
      this.getPrediction();
    })
  }

  getPrediction() {
    this.predictionService.getPrediction().subscribe((response: any) => {
      const prediction = response.prediction
      this.Client.prediction = prediction;
      const clientJson = JSON.stringify(this.Client);
      this.router.navigate(['/prediction'], { queryParams: { client: clientJson } });
    })
  }
}
