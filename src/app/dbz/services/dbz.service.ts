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
    public onNewPersonaje( personaje: Personaje) : void {
    // public onNewPersonaje( personaje: Omit<Personaje, 'id'> ) : void {

      console.log('Main Page')
      console.log(personaje);

      // M5.11
      const newPersonaje: Personaje = {...personaje,id:uuid()}      //Asi aplastamos el id

      // Añadimos el personaje recibido. Lo recibimos por tener el Output
      this.personajes.push(newPersonaje)

    }

    //T5.2 Funcion que elimina
    public deletePersonaje(numero: number){

      //Eliminamos de la lista
      this.personajes.splice(numero,1);

    }

    //T5.4
    public deletePersonajePorId(id:string){

      //Lo que hacemos es que filter devuelve una lista según el filtro que le pongamos, si el id del personaje que estamoa iterando no es igual al id pasado por argumento devuelve true, si es igual devuelve false
      console.log("Se ha eliminado el personaje: " + id);

      console.log("Se ha eliminado el opersonaje: ", this.personajes.find(personaje => personaje.id === id)!.nombre);       //si o si = !


      this.personajes = this.personajes.filter(personaje => personaje.id !== id)

    }



}
