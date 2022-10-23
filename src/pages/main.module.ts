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

// import { Firestore, FirestoreModule } from '@angular/fire/firestore';

// TC Components
import { MobilemenuComponent } from 'src/layout/header/components/mobilemenu/mobilemenu.component';

// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    MobilemenuComponent,
    SupermenuComponent,
    FooterComponent,
    AppComponent,
    CountriesComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FormsModule
    // FirestoreModule,
  ],
  providers: [], //Firestore
  bootstrap: [AppComponent]
})
export class AppModule { }
