import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="row justify-content-center">Application Collegue</h1>
  <hr />

  <nav> 
    <app-menu></app-menu>
  </nav>
  <hr />

  <div class="container" m-0="0"> 
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent implements OnInit {
  unObjetCollegueFourni;

  constructor(private _serv:DataService) { }

  ngOnInit()
  {
    this.unObjetCollegueFourni = this._serv.recupererCollegueCourant();
  }
}