import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
// Imporamos para poder usar el NGIF, todo lo que importemos aqui es para poder usarlo como directiva de NG en HTML

@Component({
  selector: 'app-heroes-heroe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public nombre : String = 'Goku';
  public nombre2 : String = 'Bulma';

  public edad : number = 32;

  public get nombreCapitalizado():string {
    return this.nombre.toUpperCase();
  }

  public getDescripcionHeroe(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  public cambiarNombre(): void{
    this.nombre = 'Kakarot'
  }

  public cambiarEdad(): void{
    this.edad = 45
  }

  public reestablecer():void{
    this.edad = 32
    this.nombre = 'Goku'
  }

}
