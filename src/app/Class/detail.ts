export class Detail {

  _id : number
  name : string
  actor : string
  house : string
  patronus : string
  species : string
  bloodStatus : string
  school : string
  wand : string
  dateOfBirth : Date
  eyeColour : string
  gender : string
  hairColour : string
  alive : boolean
  hogwartsStaff : boolean
  hogwartsStudent : boolean


    constructor(
        idDetail : number, 
        nameDetail : string, 
        houseDetail : string, 
        patronusDetail : string,
        schoolDetail : string,
        bloodStatusDetail : string,
        speciesDetail : string,
        wandDetail : string,
        dateOfBirthDetail : Date,
        eyeColouDetail : string,
        genderDetail : string,
        hairColourDetail : string,
        aliveDetail : boolean,
        hogwartsStaffDetail : boolean,
        hogwartsStudentDetail : boolean
        ){

        this._id = idDetail
        this.name = nameDetail
        this.house = houseDetail
        this.school = schoolDetail
        this.bloodStatus = bloodStatusDetail
        this.species = speciesDetail
        this.patronus = patronusDetail
        this.wand = wandDetail
        this.dateOfBirth = dateOfBirthDetail
        this.eyeColour = eyeColouDetail
        this.gender = genderDetail
        this.hairColour = hairColourDetail
        this.alive = aliveDetail
        this.hogwartsStaff = hogwartsStaffDetail
        this.hogwartsStudent = hogwartsStudentDetail
        

    }
}