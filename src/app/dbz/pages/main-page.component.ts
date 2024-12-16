import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent implements OnInit {


  // M5.10, aqui es donde injectamos
  constructor( public dbzService: DbzService ) { }

  ngOnInit() { }

}
