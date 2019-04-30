import { Injectable } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { listeMatricule } from '../mock/matricules.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rechercherParNom(nom: string): string[]  {
    return listeMatricule 
  }

  recupererCollegueCourant(){
    return collegueMock
  }
}
