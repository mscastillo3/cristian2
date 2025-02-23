import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component';
import { ProyectoComponent } from './proyecto1/proyecto/proyecto.component';
import { HeaderComponent } from "./Header/Header.component";
import { BotomeComponent } from './botome/botome.component';
import { ProyectoTextoComponent } from './proyecto1/proyectoTexto/proyectoTexto.component';

@NgModule({
  declarations: [				
    AppComponent,
      PaginaComponent,
      ProyectoComponent,
      HeaderComponent,
      BotomeComponent, 
      ProyectoTextoComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
