import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroe-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  // Creamos el array para poder leerlo
  public nombresHeroes:string[] = ['All Might','Bakugo','Midoriya']

}
