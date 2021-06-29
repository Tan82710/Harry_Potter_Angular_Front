import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './Class/character';
import { Detail } from './Class/detail';
import { map } from 'rxjs/operators'
import { Wizard } from './Class/wizard'

@Injectable({
  providedIn: 'root'
})
export class ApiHPService {

  constructor(private http: HttpClient) { }
  postId
  detail: Detail[]

  private urlCharacters = 'http://localhost:4000/characters'
  private urlAPI = 'https://www.potterapi.com/v1/characters?key=$2a$10$W7ts/if.x2W/MDf3PtgQxuOJgOK/JZbFZAPI5FRdCCHNuVnz3QEMm'

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.urlCharacters)
  }

  getDetails(id): Observable<Detail[]> {
    return this.http.get<Detail[]>(`http://localhost:4000/details/${id}`, { responseType: 'json' })
  }

  addData(wizard: Wizard): Observable<Wizard[]> {
    console.log('addData:' + wizard)
    return this.http.post<Wizard[]>('http://localhost:4000/wizard', {
      title: 'Data', wizard: wizard
    })
  }

  getData(): Observable<Wizard[]> {
    return this.http.get<Wizard[]>('http://localhost:4000/allWizard')
  }

  getDataDetail(id): Observable<Wizard[]> {
    return this.http.get<Wizard[]>(`http://localhost:4000/wizard/${id}`)
  }

}