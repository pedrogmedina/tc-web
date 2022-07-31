import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public superMenu : boolean = false;

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

  ngOnInit(): void {
  }

  public ToggleSMenu() {
    this.superMenu = !this.superMenu;
  }
}
