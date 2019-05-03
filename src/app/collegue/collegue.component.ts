import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Collegue, CollModifie } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']

})

export class CollegueComponent implements OnInit, OnDestroy {
  @Input() col:Collegue
  colModif : CollModifie = new CollModifie('','');

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
    this.colModif.email = this.col.email;
    this.colModif.photoUrl = this.col.photoUrl;
    this._serv.modifierCollegueCourant(this.col.matricule,this.colModif)
      .subscribe (valeur => {alert(valeur)},
      response => {alert('erreur patch')},
      () => {} );
  }

  creerCollegue()
  {
    alert("Création d'un nouveau collègue");
  }

  afficherBouton()
  {
    this.affichageStandard = !this.affichageStandard;;
  }

  ngOnDestroy()
  {
    // désabonnement du composant avant sa destruction
    this.actionSub.unsubscribe();      
  }

}


export class modificationForm {

  // la propriété monModel est mise à jour automatiquement avec la saisie utilisateur
  // grâce au binding bi-directionnel  [(ngModel)]
 modifForm:modificationForm = new modificationForm();
}
