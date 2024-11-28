import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent implements OnInit {

public personajes: Personaje[] = [

  {nombre:"Goku",
    fuerza:50000
  },
  {nombre:"Krillin",
    fuerza:150
  },
  {nombre:"Cell",
    fuerza:150000
  },
  {nombre:"Trunks",
    fuerza:150080
  }

];

  constructor() { }

  ngOnInit() { }

}
