import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListaComponent } from "./components/lista/lista.component";
import { AddPersonajeComponent } from "./components/add-personaje/add-personaje.component";
import { FormsModule } from '@angular/forms';



@NgModule({
  exports:[MainPageComponent],
  declarations: [MainPageComponent,AddPersonajeComponent,ListaComponent],
  imports: [CommonModule,FormsModule]
})
export class DbzModule { }
