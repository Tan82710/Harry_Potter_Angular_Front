import { Component, OnInit } from '@angular/core';
import { ApiHPService } from '../api-hp.service';
import { Wizard } from '../Class/wizard'
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-new-wizard',
  templateUrl: './detail-new-wizard.component.html',
  styleUrls: ['./detail-new-wizard.component.css']
})
export class DetailNewWizardComponent implements OnInit {

  detailWizard : Wizard[]
  title = ''
  text = ''
  constructor(private apiHpSerice : ApiHPService, private router : Router) { }
  
  ngOnInit(): void {
    this.Detail(this.id)
    this.play()
  }

  idSplit = this.router.url.split("/wizard/")
  id = this.idSplit[1]

  Detail(id){
    this.apiHpSerice.getDataDetail(id).subscribe(
      (res) => { 
        this.detailWizard = res
        console.log(this.detailWizard)
        this.text = 'Détails du sorcier ' + this.detailWizard[0].nom  
      }
    )
  }

    //Fonction pour animation title
    play = () => {
      this.title = `<h5><strong>${this.text.slice(0, this.index)}</strong><h5>`
      this.index++
  
      if (this.index > this.text.length) {
        this.index = 0
      }
  
      clearInterval(this.timer)
      this.timer = setInterval(this.play, this.randomSpeed(50, 300))
    }
    timer = setInterval(this.play, 300)
    index = 0
    randomSpeed = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min)
    }

}
