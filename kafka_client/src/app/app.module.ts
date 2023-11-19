import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { PredictionCardComponent } from './components/prediction-card/prediction-card.component';
import { PredictionComponent } from './components/prediction/prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    NavbarComponent,
    PredictionCardComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
