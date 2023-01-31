import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {
  firstName: string; //public par défaut
  private _lastName: string;
  isDisabled: boolean=true;
  
  constructor(){
    this.firstName = "John";
    this._lastName = "Snow"
  }

  public get lastName() : string{
    return this._lastName;
  }
}
