import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="row justify-content-center">Application Collegue</h1>

  <div class="container" m-0="0"> 
    <div class="row"> 

      <div class="col-sm-6">
        <app-recherche-collegue-par-nom ></app-recherche-collegue-par-nom>
      </div>

      <div class="col-sm-6">
        <app-collegue [col]="unObjetCollegueFourni"></app-collegue> <!--[col]="unObjetCollegueFourni"-->
      </div>

    </div>
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