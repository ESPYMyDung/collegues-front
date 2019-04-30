import { Component, OnInit, Input } from '@angular/core';
//import { Collegue } from '../models/Collegue';
import { listeMatricule } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css'],
})
export class RechercheCollegueParNomComponent implements OnInit
{
  //@Input() col:Collegue
  @Input() liste = listeMatricule

  affichageMatricule = false

  constructor() { }

  ngOnInit() {}

  
  afficherMatricule()
  {
    this.affichageMatricule = !this.affichageMatricule;
  }

}
