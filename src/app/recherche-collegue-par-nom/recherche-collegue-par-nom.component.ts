import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css'],
})
export class RechercheCollegueParNomComponent implements OnInit
{
  listeMatricule:string[]

  affichageMatricule = false

  constructor(private _serv:DataService) { }

  ngOnInit() {}

  afficherMatricule()
  {
    this.affichageMatricule = !this.affichageMatricule;
    this.listeMatricule = this._serv.rechercherParNom("saisiNom"); // saisiNom:HTMLInputElement pour recuperre le contenu du champ
  }

}
