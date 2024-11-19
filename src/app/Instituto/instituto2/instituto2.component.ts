import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaz para el colegio
interface Colegio {
  nombre: string;
  localidad: string;
  familiasProfesionales: string[];
  logo: string;
}

@Component({
  selector: 'app-Instituto-instituto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instituto2.component.html',
  styleUrl: './instituto2.component.css'
})


export class Instituto2Component {

  public colegios: Colegio[] = [

    {
      nombre: 'IES Playamar',
      localidad: 'Torremolinos',
      familiasProfesionales: ['Informática y Comunicaciones', 'Transporte', 'Mantenimiento'],
      logo: 'logo-playamar.png'
    },
    {
      nombre: 'IES Jacaranda',
      localidad: 'Churriana',
      familiasProfesionales: ['Hostelería y Turismo'],
      logo: 'logo-jacaranda.jpeg'
    },{
      nombre: 'Jesús Marín',
      localidad: 'Málaga',
      familiasProfesionales: ['Hostelería y Turismo'],
      logo: 'logo-jacaranda.jpeg'
    },{
      nombre: 'El divino pastor',
      localidad: 'Málaga',
      familiasProfesionales: ['Hostelería y Turismo'],
      logo: 'logo-jacaranda.jpeg'
    }

  ];

  public contador = 0;

  public pila:Colegio[]=[];

  //Funciones
  public anterior(): void {

    if (this.contador > 0){
      this.contador--;
    }

  }

  public siguiente(): void {

    // Decimos menos 1 por que el length devuelve 3 pero en el array es 2 el final.
    if (this.contador < this.colegios.length - 1) {
      this.contador++;
    }

  }

  public eliminar():void{

    // Lo que hacemos es comprobar si el array tiene algun elemento
    if (this.colegios.length > 0) {

      // Splice elimina y guarda el de la posicion actual
      const centroEliminado = this.colegios.splice(this.contador, 1)[0];

      this.pila.push(centroEliminado); //! Se agrega a la pila , para hacer esto he tenido que crear la interfaz colegio sino me daba error aqui.

      // Realizo esto para ajustar el contador, ya que si elimino y el contador es mayor al maximo no puedo ejecutar bien la apalicacionn luego.
      if (this.contador >= this.colegios.length) {
        this.contador--;
      }

    }

  }

  public insertar():void{

    // Primero comprobamos que la pila tenga algun elemento
    if (this.pila.length > 0){

      // Aqui recogemos el ultimo elemento de la pila
      const centroInsertado = this.pila.pop()

      //!Splice me pide que sea de tipo Colegio si o si,por lo que tengo que verificarlo, sino me sale error y no me deja ejecutar el codigo
      if (centroInsertado !== undefined) {
        this.colegios.splice(this.contador, 0, centroInsertado);  //1 valor es la posicion, 2 el numero que vamos a eliminar, en este caso 0, 3 el elemento que vamos a añadir
      }

    }

  }


}
