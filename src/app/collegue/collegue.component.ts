import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { Collegue, CollModifie } from '../models/Collegue';
import { Note } from '../models/Note';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']

})
export class CollegueComponent implements OnInit, OnDestroy {
  col:Collegue = new Collegue('','','','',undefined,'',undefined, '', [])
  actionSub:Subscription

  colModif : CollModifie = new CollModifie('','');
  affichageStandard = true
  creationCollegue = false

  constructor(private _serv:DataService) { }

  ngOnInit()
  {
    this.actionSub = this._serv.recupererCollegueCourant().subscribe(
      (valeurObtenue) => {this.col = valeurObtenue},
      error => {alert(error.error)},
      () => {});
  }

  modifierCollegue()
  {
    this.colModif.email = this.col.email;
    this.colModif.photoUrl = this.col.photoUrl;
    this._serv.modifierCollegueCourant(this.col.matricule,this.colModif)
      .subscribe (valeur => {},
      response => {alert(response.error)},
      () => {} );
  }

  creerCollegue()
  {
    this.creationCollegue = true;
  }

  afficherBouton()
  {
    this.affichageStandard = !this.affichageStandard;
  }

  ngOnDestroy()
  {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();      
  }

}


