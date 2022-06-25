import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/layout/header/header.component';

import { AppRoutingModule } from './web-routing.module';
import { AppComponent } from './main.component';
import { FooterComponent } from 'src/layout/footer/footer.component';
import { SupermenuComponent } from 'src/layout/header/components/supermenu/supermenu.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SupermenuComponent,
    FooterComponent,
    AppComponent,
    CountriesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
