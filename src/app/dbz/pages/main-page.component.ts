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

  // m5.7, recojo el presonaje
  public onNewPersonaje(personaje: Personaje) : void {

    console.log('Main Page')
    console.log(personaje);

    // Añadimos el personaje recibido. Lo recibimos por tener el Output
    this.personajes.push(personaje)

  }

  //T5.2 Funcion que elimina
  public deletePersonaje(numero: number){

    //Eliminamos de la lista
    this.personajes.splice(numero,1);

  }

  constructor() { }

  ngOnInit() { }

}
