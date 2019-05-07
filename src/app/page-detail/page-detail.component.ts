import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {
  col:Collegue = new Collegue('','','','',undefined,'');
  actionSub:Subscription

  constructor(private _serv:DataService) { }

  ngOnInit() 
  {
  this.actionSub = this._serv.recupererCollegueCourant().subscribe(
    (valeurObtenue) => {this.col = valeurObtenue},
    error => {alert(error.error)},
    () => {});
  }

  ngOnDestroy()
  {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();      
  }

}
