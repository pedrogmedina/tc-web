import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';
import { TourPageComponent } from './tour-page/tour-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'tour/:name', component: TourPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
