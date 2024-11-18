import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { contadorComponent } from './contador/contador.component';
import { HeroeComponent } from "./heroes/heroe/heroe.component";
import { InstitutoComponent } from "./Instituto/instituto/instituto.component";
import { ListaComponent } from './heroes/lista/lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [contadorComponent, HeroeComponent, InstitutoComponent, ListaComponent] //Aqui añado el componente y asi lo puedo usar en el HTML
 //Aqui añado el componente y asi lo puedo usar en el HTML
})
export class AppComponent {
  public title:string = 'Mi primera App de Angular';
  public subtitle:string = 'Esto va a ser duroh.';
  public contador:number = 10;
  public x:number = 2;

  incrementarPor():void {
    this.contador+=this.x
  }

  eliminarPor():void {
    this.contador-=this.x
  }

  resetear():void {
    this.contador=0
  }

}
