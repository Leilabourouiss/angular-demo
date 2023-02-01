import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-pipe-chrono',
  templateUrl: './ex-pipe-chrono.component.html',
  styleUrls: ['./ex-pipe-chrono.component.scss']
})
export class ExPipeChronoComponent {

  seconde: number = 0 ;
  isPlayed : any;// ReturnType<typeof setInterval
  isDisabled: boolean = false;

  chrono():void{
    this.isPlayed = setInterval(()=>{
      this.seconde+=1;
    }, 1000)

    console.log(typeof this.isPlayed)// ne connait pas number --> pas toutes les classes car utilisent JS
    
  }

  chronoPause():void{
    clearInterval(this.isPlayed);
    this.isPlayed = undefined ;

  }

  resetChrono(): void{
    // clearInterval(this.isPlayed);
    // this.isPlayed = undefined ;
    this.chronoPause();
    this.seconde = 0;
  }

  buttonDisable():void{
    this.isDisabled = !this.isDisabled
  }




}
