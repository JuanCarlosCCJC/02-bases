import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
