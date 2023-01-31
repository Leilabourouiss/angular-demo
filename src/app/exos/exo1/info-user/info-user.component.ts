import { Component } from '@angular/core';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent {
  age : number;
  hobby : string;
  pseudo : string;

  constructor (){
    this.age = 5;
    this.hobby = "foot";
    this.pseudo = "Lb"
  }
  public getInfos(): string{
    return this.age + this.hobby + this.pseudo;
  }
}
