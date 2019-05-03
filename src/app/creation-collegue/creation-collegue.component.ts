import { Component, OnInit, Input} from '@angular/core';
import { Collegue} from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-creation-collegue',
  templateUrl: './creation-collegue.component.html',
  styleUrls: ['./creation-collegue.component.css']
})
export class CreationCollegueComponent implements OnInit {
  col:Collegue = new Collegue('','','','',undefined,'');

  affichageStandard = true

  constructor(private _serv:DataService) { }
  ngOnInit() {}

  creerCollegue()
  {
/*
    this._serv.creerCollegueCourant(this.col)
      .subscribe (valeur => {alert(valeur)},
      response => {alert('erreur patch')},
      () => {} );*/
  }

  afficherBouton(){}
}


export class creationForm {

  // la propriété monModel est mise à jour automatiquement avec la saisie utilisateur
  // grâce au binding bi-directionnel  [(ngModel)]
 creeForm:creationForm = new creationForm();
}