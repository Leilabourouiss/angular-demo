import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-pipe-spoiler',
  templateUrl: './ex-pipe-spoiler.component.html',
  styleUrls: ['./ex-pipe-spoiler.component.scss']
})
export class ExPipeSpoilerComponent {
  isOpen : boolean = false;

  toggleisOpen(){
    this.isOpen = !this.isOpen;
  }
}
