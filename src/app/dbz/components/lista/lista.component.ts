import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Input()
  public listaPersonajes: Personaje[] = [{
    nombre:"Trunks",
    fuerza:3500
  }]

  // T5.2 Creo el evento donde recibo el numero
  @Output()
  public onDeletePersonaje: EventEmitter<number> = new EventEmitter();

  public eliminarPersonaje(indice:number){

    console.log(this.listaPersonajes[indice]);
    this.onDeletePersonaje.emit(indice);

  }

}
