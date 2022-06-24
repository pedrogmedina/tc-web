import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/layout/header/header.component';

import { AppRoutingModule } from './web-routing.module';
import { AppComponent } from './home.component';
import { FooterComponent } from 'src/layout/footer/footer.component';
import { SupermenuComponent } from 'src/layout/header/components/supermenu/supermenu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SupermenuComponent,
    FooterComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
