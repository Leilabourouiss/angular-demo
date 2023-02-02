import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4-menu',
  templateUrl: './ex4-menu.component.html',
  styleUrls: ['./ex4-menu.component.scss']
})
export class Ex4MenuComponent {
  isOpen : boolean = false;


  tabLink: string[]= ['lien 1', 'lien 2', 'lien 3'];
  link:string ="";

  toggleisOpen(){
    this.isOpen = !this.isOpen;};  

}
