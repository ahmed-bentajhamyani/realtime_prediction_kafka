import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(private httpClient: HttpClient) { }

  predict(data: any) {
    return this.httpClient.post("http://localhost:8080/api/send-ligne", data);
  }

  getPrediction() {
    return this.httpClient.get("http://localhost:8000/predict");
  }
}
