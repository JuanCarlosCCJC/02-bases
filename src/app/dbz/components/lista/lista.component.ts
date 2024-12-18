import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent {

  @Input()
  public listaPersonajes: Personaje[] = []

  // T5.2 Creo el evento donde recibo el numero
  @Output()
  public onDeletePersonaje: EventEmitter<string> = new EventEmitter();

  //Ya no me hace falta
  public eliminarPersonajePorId(indiceNumerico:number){

    console.log(this.listaPersonajes[indiceNumerico].id);
    this.onDeletePersonaje.emit(this.listaPersonajes[indiceNumerico].id);         //Asi emito id en vez del indiceNumerico

  }

}
