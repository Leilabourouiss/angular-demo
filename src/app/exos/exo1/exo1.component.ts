import { Component } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component {
  placeHolder: string;
  type: string;

  constructor(){
    this.placeHolder = "placeHolder"
    this.type = "type"
  }

}

