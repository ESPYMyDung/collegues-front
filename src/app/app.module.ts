import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { CreationCollegueComponent } from './creation-collegue/creation-collegue.component';
import { MenuComponent } from './menu/menu.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';

import { PageDetailComponent } from './page-detail/page-detail.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { CollegueConnectComponent } from './collegue-connect/collegue-connect.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreationCollegueComponent,
    MenuComponent,
    GallerieComponent,
    AccueilComponent,
    AproposComponent,
    PageDetailComponent,
    AuthentificationComponent,
    UrlValidatorDirective,
    CollegueConnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //pour faire les requetes http backend
    FormsModule, //pour genere les formulaires
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
