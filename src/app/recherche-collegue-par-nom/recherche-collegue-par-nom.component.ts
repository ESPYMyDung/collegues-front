import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css'],
})
export class RechercheCollegueParNomComponent implements OnInit
{
  listeMatricule:string[]
  affichageMatricule = false

  constructor(private _serv:DataService, private _requete:HttpClient) { }

  ngOnInit() {}

  afficherMatricule(saisiNom:string)
  {
    this.affichageMatricule = true//!this.affichageMatricule;
    /*this.listeMatricule = */
    this._serv.rechercherParNom(saisiNom)
    // subscribe a ne mettre que losrqu'on cherche a recuperer les données
      .subscribe( listMat => {this.listeMatricule = listMat} ,
        error => {alert('oops')} );
 }

 clickMatricule(mat:string)
 {
   this._serv.afficherCollegue(mat)
    .subscribe( coll => {},
      error =>{alert('oops')} ); //pour la gestion d'erreur principalement
 }

}
