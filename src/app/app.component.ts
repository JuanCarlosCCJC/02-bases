import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { contadorComponent } from './contador/components/contador.component';

import { HeroeComponent } from "./heroes/heroe/heroe.component";
import { InstitutoComponent } from "./Instituto/instituto/instituto.component";
import { Instituto2Component } from "./Instituto/instituto2/instituto2.component";
import { ListaComponent } from './heroes/lista/lista.component';
import { ContadorModule } from './contador/contador.module';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ContadorModule,HeroeComponent, InstitutoComponent, ListaComponent, Instituto2Component] //Aqui añado el componente y asi lo puedo usar en el HTML
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
