import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  navBar: string[] = ["exo1","exo5-cours","ex4-menu"];
  // méthode dynamique pour que les ajouts que l'on fait ce fait automatiquement

}
