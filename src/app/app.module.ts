import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { DataService } from './services/data.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //pour faire les requetes http backend
    FormsModule //pour gereg les formulaires
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
