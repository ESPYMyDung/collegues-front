import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

import {Subject} from "rxjs";
import { Collegue, CollModifie, CollGallerie, CollConn } from '../models/Collegue';
import { tap} from 'rxjs/operators';
import { Utilisateur } from '../models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private action = new Subject<Collegue>(); //NB : utiliser pour deux requetes differentes
  private listePhoto = new Subject<CollGallerie[]>();
  //private listeNote = new Subject<No[]>();
  private connect = new Subject<CollConn>();

  constructor(private _requete:HttpClient) { }

  // - requete GET - 
  rechercherParNom(nom: string): Observable<string[]>  
  {
    return this._requete.get<string[]>(`${environment.backendUrl}?nom=${nom}`, {withCredentials : true});
  }

  afficherPhoto() :Observable<CollGallerie[]>
  {
    return this._requete.get<CollGallerie[]>(`${environment.backendUrl}/gallerie`, {withCredentials : true})
    .pipe(tap (colGal => this.listePhoto.next(colGal) ) )
  }

  rechercherParMatricule(mat:string) :Observable<Collegue>
  {
    return this._requete.get<Collegue>(`${environment.backendUrl}/${mat}`, {withCredentials : true})
    .pipe(tap (col => this.action.next(col) ) ) //next c'est pour stocker la valeur != iterator
  }

  chercherColleguePourNote(mat:string) :Observable<Collegue>
  {
    return this._requete.get<Collegue>(`${environment.backendUrl}/gallerie/${mat}`, {withCredentials : true})
    .pipe(tap (coll => this.action.next(coll) ) )
  }

  recupererCollConn():Observable<CollConn>
  {
    return this._requete.get<CollConn>(`${environment.baseUrl}/me`, {withCredentials : true})
    .pipe(tap (coll => this.connect.next(coll) ) )
  }

  // - requete PATCH - 
  modifierCollegueCourant(mat:string, colModif:CollModifie)
  {
    return this._requete.patch<Collegue>(`${environment.backendUrl}/${mat}`, colModif, {withCredentials : true});
  }

  // - requete POST - 
  creerCollegueCourant(colCree:Collegue)
  {
    return this._requete.post<Collegue>(`${environment.backendUrl}/`, colCree, {withCredentials : true});
  }

  envoyerAuth(user:Utilisateur)
  {
    return this._requete.post<Utilisateur>(`${environment.baseUrl}/auth`, user, {withCredentials : true});
  }

  envoyerLogout()
  {
    return this._requete.post<any>(`${environment.baseUrl}/logout`, null, {withCredentials : true});
  }

  // subject -> observable
  recupererCollegueCourant() :Observable<Collegue>
  {
    return this.action.asObservable();
  }

}
