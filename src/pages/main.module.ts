import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/layout/header/header.component';

import { AppRoutingModule } from './web-routing.module';
import { AppComponent } from './main.component';
import { FooterComponent } from 'src/layout/footer/footer.component';
import { SupermenuComponent } from 'src/layout/header/components/supermenu/supermenu.component';
import { CountriesComponent } from './countries/countries.component';
import { HomeComponent } from './home/home.component';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { TourPageComponent } from './tour-page/tour-page.component';
import { MobilemenuComponent } from 'src/layout/header/components/mobilemenu/mobilemenu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MobilemenuComponent,
    SupermenuComponent,
    FooterComponent,
    AppComponent,
    CountriesComponent,
    HomeComponent,
    TourPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
