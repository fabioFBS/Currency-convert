import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertCurrencyComponent } from './pages/convert-currency/convert-currency.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'convert-currency', component: ConvertCurrencyComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
