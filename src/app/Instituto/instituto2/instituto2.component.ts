import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Instituto-instituto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instituto2.component.html',
  styleUrl: './instituto2.component.css'
})
export class Instituto2Component {

  public colegios = [

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


}
