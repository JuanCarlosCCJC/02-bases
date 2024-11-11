import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  standalone: true,
  imports: [],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public nombre : String = 'Goku';
  public edad : number = 32;

  public get nombreCapitalizado():string {
    return this.nombre.toUpperCase();
  }

  public getDescripcionHeroe(): string {
    return `${this.nombre} - ${this.edad}`;
  }

}
