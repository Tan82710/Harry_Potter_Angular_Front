import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ApiHarryPotter';

  ngOnInit() : void {
    // this.playAudio();

  }

  // playAudio(){
  //   console.log('AUDIO ON')
  //   let audio = new Audio();
  //   audio.src = "../../../assets/audio/hp_song.mp3";
  //   audio.load();
  //   audio.play();
  //   console.log('END FUNCTION')
  // }
}
