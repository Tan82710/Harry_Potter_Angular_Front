export class Wizard {

    id : number
    name : string
    ecole : string
    maison : string
    baguette : {bois : string, coeur : string, taille : number, souplesse : string}
    patronus : string
    sang : string
    coursObli : string 
    coursOptio : string

    constructor(_id: number, _name: string, _ecole: string, _maison: string, 
                _baguette: any, _patronus: string, _sang: string, _coursObli: string, 
                _coursOptio: string){
                    
        this.id = _id
        this.name = _name
        this.ecole = _ecole
        this.maison = _maison
        this.baguette = _baguette
        this.patronus = _patronus
        this.sang = _sang
        this.coursObli = _coursObli
        this.coursOptio = _coursOptio
    }
}