import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Proyecto1Component } from './proyecto1.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ProyectoTextoComponent } from './proyectoTexto/proyectoTexto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Proyecto1Component]
})
export class Proyecto1Module { }
