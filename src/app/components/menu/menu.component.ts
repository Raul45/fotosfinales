import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rutas = [
    {
      path: '/fotos',
      nombre: 'Fotos'
    },
    {
      path: '/todos',
      nombre: 'Todos'
    },
    {
      path: '/users',
      nombre: 'Users'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
