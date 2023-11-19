import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { PredictionComponent } from './components/prediction/prediction.component';

export const routes: Routes = [
  { path: "", component: ClientFormComponent },
  { path: "prediction", component: PredictionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
