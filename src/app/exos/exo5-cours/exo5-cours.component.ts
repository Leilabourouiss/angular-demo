import { Component } from '@angular/core';

@Component({
  selector: 'app-exo5-cours',
  templateUrl: './exo5-cours.component.html',
  styleUrls: ['./exo5-cours.component.scss']
})
export class Exo5CoursComponent {

tabMenu:string []= ['HTML','CSS','JS','C#']
// isOpen : boolean = false;
// isOpen2 : boolean = false;
// isOpen3 : boolean = false;
// isOpen4 : boolean = false;
// // 

// toggleisOpen(){
//   this.isOpen = !this.isOpen;  
// }
// toggleisOpen2(){ 
//   this.isOpen2 = !this.isOpen2;
// }
// toggleisOpen3(){ 
//   this.isOpen3 = !this.isOpen3;
// }
// toggleisOpen4(){ 
//   this.isOpen4 = !this.isOpen4;
// }
  
  Cours: Cours[]= [new Cours("HTML", 'Cours HTML'),
  new Cours("CSS", "C'est joli"),
  new Cours("js", 'Les rendre dynamiques'),
  new Cours("C#", "Un super langage orienté objet")]

}

export class Cours {
  title: string;
  description: string;
  isActive: boolean;
  constructor(title: string, description:string, isActive: boolean = false) {
      this.title = title;
      this.description = description;
      this.isActive = isActive;
  }
}