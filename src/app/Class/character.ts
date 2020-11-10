export class Character {

    _id : number
    name : String
    house : String
    img : String
    description : String

    constructor(idCharacter : number, nameCharacter : String, houseCharacter : String, imgCharacter : String, descriptionCharacter : String){

        this._id = idCharacter
        this.name = nameCharacter
        this.house = houseCharacter
        this.img = imgCharacter
        this.description = descriptionCharacter
    }
}