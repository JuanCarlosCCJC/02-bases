import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  standalone: false,
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {

  // Evento que envia la informacion, nos emite un obejeto, en este caso personaje
  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje : Personaje = {
    nombre:'',
    fuerza: 0
  }

  public addPersonaje(): void {

    // M5.8
    // debugger;

    console.log('AddPersonaje');

    console.log(this.personaje);

    if(this.personaje.nombre.length === 0) return;

    // Esto es del M5.7
    this.onNewPersonaje.emit(this.personaje)

    // Creamos otro personaje en vez de actualizarlo como abajo, asi en los input de Chrome se pone todo por defecto
    this.personaje = {
      nombre:'',
      fuerza:0
    }

    // Hacemos esto para limpiar en en Chrome (M5.7), si dejamos esto lo quehacemos al enviar el personaje es mandarlo actualizado, por mandarlo por referencia
    // this.personaje.nombre ='';
    // this.personaje.fuerza - 0

  }

}
