import { Component, ViewChild } from '@angular/core';
import { SupermenuComponent } from './components/supermenu/supermenu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public superMenu : boolean = false;
  public mobileMenu : boolean = false;

  @ViewChild(SupermenuComponent) stateMenu: any;

  headermenu: any[] = [
    {
      "page" : "Inicio"
    },
    {
      "page" : "Rutas destacadas", "submenu": true
    },
    {
      "page" : "Paises"
    },
    {
      "page" : "Sobre Tourcaravan"
    },
  ]

  constructor() { }

  stateSuperMenu($event: boolean) {
    this.superMenu = $event;
  }

  stateMobileMenu($event: boolean) {
    this.mobileMenu = $event;
  }

  public ToggleSMenu() {
    this.superMenu = !this.superMenu;
  }

  public ToggleMobileMenu() {
    this.mobileMenu = !this.mobileMenu;
  }
}
