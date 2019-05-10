import { Note } from './Note';

export class Collegue
{
    constructor(
        public matricule:string,
        public nom:string,
        public prenoms:string,
        public email:string,
        public dateDeNaissance:Date,
        public photoUrl:string,
        public motDePasse:string,
        public autorites:string[],
    ) {}
}

export class CollModifie
{
    constructor(
        public email:string,
        public photoUrl:string
    ) {}
}

export class CollGallerie
{
    constructor(
        public matricule:string,
        public photoUrl:string
    ) {}
}

export class CollNote
{
    constructor(
        public matricule:string,
        public nom:string,
        public prenoms:string,
        public email:string,
        public dateDeNaissance:Date,
        public photoUrl:string,
        public notes:Note[]
    ) {}
}