import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {


  // M5.10, aqui es donde injectamos
  constructor( private dbzService: DbzService ) { }

  // M5.12
  get personajes(): Personaje[]{

    return this.dbzService.personajes

  }

  deletePersonajePorId(id:string): void {
    this.dbzService.deletePersonajePorId(id)
  }

  onNewPersonaje(perosnaje:Personaje):void{
    this.dbzService.onNewPersonaje(perosnaje)
  }

}
