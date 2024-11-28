import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  standalone: false,
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {

  // Evento que envia la informacion
  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje : Personaje = {
    nombre:'',
    fuerza: 0
  }

  public addPersonaje(): void {

    console.log('AddPersonaje');

    console.log(this.personaje);

    if(this.personaje.nombre.length === 0) return;

    // Esto es del M5.7
    this.onNewPersonaje.emit(this.personaje)

    // Hacemos esto para limpiar en en Chrome (M5.7)
    this.personaje.nombre ='';
    this.personaje.fuerza - 0

  }

}
