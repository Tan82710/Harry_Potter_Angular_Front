import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiHPService } from '../api-hp.service';
import { Character } from '../Class/character';

// interface ICharacter{
//   id : number,
//   name : string,
//   house : string,
//   patronus : string,
//   species : string,
//   bloodStatus : string,
//   role : string,
//   school : string,
//   deathEater : boolean,
//   dumbledoresArmy : boolean,
//   orderOfThePhoenix : boolean,
//   ministryOfMagic : boolean,
//   wand : string,
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

    filters: string[] = ['Role', 'House', 'School', 'Blood Status', 'Species', 'Others'];

  characters: Character[] 
  id: number

  ngOnInit() : void {
    this.charactersList()
    this.playAudio();

  }

  ngDoCheck(){
    this.Img()
    this.myId()
  }

  btnClick = function(id) {
    this.router.navigateByUrl('/detail', id);
  };

  playAudio(){
    console.log('AUDIO ON')
    let audio = new Audio();
    audio.src = "../../../assets/audio/hp_song.mp3";
    audio.load();
    audio.play();
  }

  
charactersList() {
    this.apiHPService.getCharacters().subscribe(
      (res: any) => {
        this.characters = res
        console.log(this.characters)
      }
    )
  }

myId(){
  //Pour chaque élément, affecter un id
  this.characters.forEach((item, i) => {
    item._id = i  ;
  });
  console.log(this.characters)
}

  Img () {
    const arrayCharacters = this.characters.map(res => {
      if(res.house == ""){
        res.house = 'default'
      }
      return res.house;
    })    
  }

}
