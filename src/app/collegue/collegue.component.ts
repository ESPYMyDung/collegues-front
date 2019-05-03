import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']

})

export class CollegueComponent implements OnInit, OnDestroy {
  @Input() col:Collegue

  affichageStandard = true

  actionSub:Subscription

  constructor(private _serv:DataService) { }

  ngOnInit()
  {
    this._serv.recupererCollegueCourant().subscribe(
      (valeurObtenue) => {this.col = valeurObtenue},
      error => {alert("oops")},
      () => {});
  }

  modifierCollegue()
  {
    this.affichageStandard = !this.affichageStandard;
  }

  creerCollegue()
  {
    alert("Création d'un nouveau collègue");
  }

  ngOnDestroy()
  {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();      
  }

}
