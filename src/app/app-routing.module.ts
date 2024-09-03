import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Country } from './models/country';
import { CountryListComponent } from './country-list/country-list.component';
import { CityListComponent } from './city-list/city-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'city', pathMatch: 'full' },

  { path: 'country', component: CountryListComponent },
  { path: 'city', component: CityListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
