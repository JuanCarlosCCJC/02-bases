import { Component } from '@angular/core';

@Component({
  selector: 'app-instituto-instituto',
  standalone: true,
  imports: [],
  templateUrl: './instituto.component.html',
  styleUrl: './instituto.component.css'
})
export class InstitutoComponent {

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
    }

  ];

  public bandera:number = 0;

  // Metodo que cambia la bandera
  public cambiarInstituto(): void {
    if (this.bandera === 0) {
      this.bandera = 1;
    } else if (this.bandera === 1) {
      this.bandera = 0;
    }
  }

  // Metodo para sacar el nombre capitalizado
  public nombreCapitalizado():string {
    return this.colegios[this.bandera].nombre.toUpperCase()
  }

}
