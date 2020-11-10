export class Detail {

    _id : number
    name : String
    house : String
    role : String
    school  : String
    ministryOfMagic : Boolean
    orderOfThePhoenix : Boolean
    dumbledoresArmy : Boolean
    deathEater : Boolean
    bloodStatus : String
    species : String

    constructor(
        idDetail : number, 
        nameDetail : String, 
        houseDetail : String, 
        roleDetail : String, 
        schoolDetail : String,
        ministryOfMagicDetail : Boolean,
        orderOfThePhoenixDetail : Boolean,
        dumbledoresArmyDetail : Boolean,
        deathEaterDetail : Boolean,
        bloodStatusDetail : String,
        speciesDetail : String
        ){

        this._id = idDetail
        this.name = nameDetail
        this.house = houseDetail
        this.role = roleDetail
        this.school = schoolDetail
        this.ministryOfMagic = ministryOfMagicDetail
        this.orderOfThePhoenix = orderOfThePhoenixDetail
        this.dumbledoresArmy = dumbledoresArmyDetail
        this.deathEater = deathEaterDetail
        this.bloodStatus = bloodStatusDetail
        this.species = speciesDetail
    }
}