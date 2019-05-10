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

  afficherMatricule(saisiNom:string)
  {
    this.affichageMatricule = true
    this._serv.rechercherParNom(saisiNom)
    // subscribe a ne mettre que losrqu'on cherche a recuperer les données
      .subscribe( listMat => {this.listeMatricule = listMat} ,
        error => {alert('oops')} );
 }

 clickMatricule(mat:string)
 {
   this._serv.rechercherParMatricule(mat)
    .subscribe( coll => {},
      error =>{alert('oops')} );
 }

}
