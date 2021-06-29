export class Wizard {

    id : number
    nom : string
    ecole : string
    maison : string
    // baguette : {bois : string, coeur : string, taille : number, souplesse : string}
    bois : string
    coeur : string
    taille : number
    souplesse : string
    patronus : string
    sang : string
    coursObli : string 
    coursOptio : string

    constructor(_id: number, _nom: string, _ecole: string, _maison: string, 
                _bois : string, _coeur : string, _taille : number, _souplesse : string, 
                _patronus: string, _sang: string, _coursObli: string, _coursOptio: string){
                    
        this.id = _id
        this.nom = _nom
        this.ecole = _ecole
        this.maison = _maison
        this.bois = _bois
        this.coeur = _coeur
        this.taille = _taille
        this.souplesse = _souplesse
        // this.baguette = _baguette
        this.patronus = _patronus
        this.sang = _sang
        this.coursObli = _coursObli
        this.coursOptio = _coursOptio
    }
}