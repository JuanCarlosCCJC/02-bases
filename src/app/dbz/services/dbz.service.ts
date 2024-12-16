// Material 5.10
import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid'        //M5.11


// Injectable es para que lo use como un servicio, para que podeamos usar la instacia del servicio en cualquier momento
@Injectable({providedIn: 'root'})
export class DbzService {


  constructor() { }

  // Todo esto nos lo traemos desde el main-page.component.ts
  public personajes: Personaje[] = [

    {
      id:uuid(),
      nombre:"Goku",
      fuerza:50000
    },
    {
      id:uuid(),
      nombre:"Krillin",
      fuerza:150
    },
    {
      id:uuid(),
      nombre:"Cell",
      fuerza:150000
    },
    {
      id:uuid(),
      nombre:"Trunks",
      fuerza:150080
    }

  ];

    // m5.7, recojo el presonaje
    public onNewPersonaje(personaje: Personaje) : void {

      console.log('Main Page')
      console.log(personaje);

      // M5.11
      const newPersonaje: Personaje = {id:uuid(),...personaje}        // Lo que hacemos es pasar todo y a parte meter el id con el uuid()

      // Añadimos el personaje recibido. Lo recibimos por tener el Output
      this.personajes.push(newPersonaje)

    }

    //T5.2 Funcion que elimina
    public deletePersonaje(numero: number){

      //Eliminamos de la lista
      this.personajes.splice(numero,1);

    }

}
