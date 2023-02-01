import { Component } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component {
  // cacher ou afficher un élèment --> ce n'est pas du css il sera plus dans le dom --> on va le faire avec des if
  isOpen : boolean = false;
  choice: number = 1 ;

  fruits: string[] = ['Pomme', 'Poire', 'Pêche'];
  // méthode dynamique pour que les ajouts que l'on fait ce fait automatiquement
  fruitName: string ="";

  addFruit(){
    this.fruits.push(this.fruitName);
    // push qui va ajouter les élèments au tableau
    this.fruitName ="";
    // pour remettre à zéro le input une fois le fruit entrer et ne pas avoir le nom de fruit encore dans le input

  }
}
