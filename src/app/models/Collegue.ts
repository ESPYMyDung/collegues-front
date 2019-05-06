export class Collegue
{
    constructor(
        public matricule:string,
        public nom:string,
        public prenoms:string,
        public email:string,
        public dateDeNaissance:Date,
        public photoUrl:string
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