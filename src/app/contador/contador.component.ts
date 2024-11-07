import { Component } from "@angular/core";

@Component({

  selector: 'app-contador',             //Nombre del componente por así decirlo
  template: `<h1>{{title}}</h1>
  <hr>
  <p>Contador: {{contador}}</p>

  <button (click)="incrementarPor()">+{{x}}</button>
  <button (click)="eliminarPor()">-{{x}}</button>
  <button (click)="resetear()">Resetear</button>`,    //El template es el html por así decirlo
  standalone: true,                                   //Para que pueda funcionar

})

export class contadorComponent {
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
