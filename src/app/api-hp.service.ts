import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './Class/character';
import { Detail } from './Class/detail';
import { map } from 'rxjs/operators'
import {Wizard} from './wizard'

// interface WizardData {
//   id : number
//   name : string
//   ecole : string
//   maison : string
//   baguette : {bois : string, coeur : string, taille : number, souplesse : string}
//   patronus : string
//   sang : string
//   coursObli : string 
//   coursOptio : string
// }


@Injectable({
  providedIn: 'root'
})
export class ApiHPService {

  constructor(private http: HttpClient) { }
  postId
  detail : Detail[]

  private urlCharacters = 'http://localhost:4000/characters'
  private urlAPI = 'https://www.potterapi.com/v1/characters?key=$2a$10$W7ts/if.x2W/MDf3PtgQxuOJgOK/JZbFZAPI5FRdCCHNuVnz3QEMm'
  
  getCharacters() : Observable<Character[]>{
    return this.http.get<Character[]>(this.urlCharacters)
  }

  getDetails(id) : Observable<Detail[]>{
    return this.http.get<Detail[]>(`http://localhost:4000/details/${id}`, {responseType: 'json'})
  }

    addData(wizard : Wizard) : Observable<Wizard[]>{
    return this.http.post<Wizard[]>('http://localhost:4000/wizard', {
      title: 'GROS TEST', wizard : wizard
    })
  }

  getData() : Observable<Wizard[]>{
    return this.http.get<Wizard[]>('http://localhost:4000/allWizard')
  }

}