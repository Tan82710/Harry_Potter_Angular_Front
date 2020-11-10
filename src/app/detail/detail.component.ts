import { Component, OnInit } from '@angular/core';
import { ApiHPService } from '../api-hp.service';
import { Character } from '../Class/character';
import { Detail } from '../Class/detail'
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  constructor(private apiHpSerice : ApiHPService, private router : Router) { }

  result : String[]
  detail : Detail[]

  ngOnInit(): void {
    this.Detail(this.id)
    console.log(this.router.url)
    console.log(this.idSplit[1])

  }

  idSplit = this.router.url.split("/detail/")
  id = this.idSplit[1]

    task: Task = {
      name: 'Indeterminate',
      completed: false,
      color: 'primary',
      subtasks: [
        {name: 'YES', completed: true, color: 'primary'},
        {name: 'NO', completed: false, color: 'warn'}
      ]
    };

  Detail(id){
    this.apiHpSerice.getDetails(id).subscribe(
      (res) => {
        this.detail = res
        console.log(this.detail)
      }
    )
  }

}