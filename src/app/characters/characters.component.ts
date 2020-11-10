import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiHPService } from '../api-hp.service';
import { Character } from '../Class/character';
import {MatCheckboxModule} from '@angular/material/checkbox';


// interface ICharacter {
//   id : number;
//   name : string;
//   house : string;
//   img : string;
//   description : string;
// }

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(
    private router: Router,
    private route : ActivatedRoute, 
    private apiHPService: ApiHPService) { }

  characters: Character[] 
  id: number

  ngOnInit() : void {
    this.charactersList()
  }

  ngDoCheck(){
    this.Img()
  }

  btnClick = function(id) {
    this.router.navigateByUrl('/detail', id);
  };


charactersList() {
    this.apiHPService.getCharacters().subscribe(
      (res: any) => {
        this.characters = res
        console.log(this.characters)
      }
    )
  }

  Img () {
    const arrayCharacters = this.characters.map(res => {
      if(res.house == undefined){
        res.house = 'default'
      }
      return this.characters
    })    
  }


  // characterList : ICharacter[]= [
  //   {
  //     id : 1,
  //     name : "Harry Potter",
  //     house : "Gryffondor",
  //     img : "assets/Gryffondor.jpg",
  //     description : "BLABLA sur le personnage"
  //   },
  //   {
  //     id : 2,
  //     name : "Drago Malefoy",
  //     house : "Serpentar",
  //     img : "assets/Serpentar.jpg",
  //     description : "BLABLA sur le personnage"
  //   },
  //   {
  //     id : 3,
  //     name : "Cedric Diggory",
  //     house : "Poufsouffle",
  //     img : "assets/Poufsouffle.jpg",
  //     description : "BLABLA sur le personnage"
  //   },
  //   {
  //     id : 4,
  //     name : "Cho Chang",
  //     house : "Serdaigle",
  //     img : "assets/Serdaigle.jpg",
  //     description : "BLABLA sur le personnage"
  //   },
  //   {
  //     id : 5,
  //     name : "Cho Chang",
  //     house : "Serdaigle",
  //     img : "assets/Serdaigle.jpg",
  //     description : "BLABLA sur le personnage"
  //   },
  //   {
  //     id : 6,
  //     name : "Harry Potter",
  //     house : "Gryffondor",
  //     img : "assets/Gryffondor.jpg",
  //     description : "BLABLA sur le personnage"
  //   },
  //   {
  //     id : 7,
  //     name : "Drago Malefoy",
  //     house : "Serpentar",
  //     img : "assets/Serpentar.jpg",
  //     description : "BLABLA sur le personnage"
  //   },
  //   {
  //     id : 8,
  //     name : "Cedric Diggory",
  //     house : "Poufsouffle",
  //     img : "assets/Poufsouffle.jpg",
  //     description : "BLABLA sur le personnage"
  //   },
  //   {
  //     id : 9,
  //     name : "Cho Chang",
  //     house : "Serdaigle",
  //     img : "assets/Serdaigle.jpg",
  //     description : "BLABLA sur le personnage"
  //   },
  //   {
  //     id : 10,
  //     name : "Cho Chang",
  //     house : "Serdaigle",
  //     img : "assets/Serdaigle.jpg",
  //     description : "BLABLA sur le personnage"
  //   }
  // ]

}
