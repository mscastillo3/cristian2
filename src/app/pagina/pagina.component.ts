import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto1/proyecto';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor() { }

  proyectos:Array<Proyecto> = [];
  selected: boolean = false;
  selectedProyecto!:Proyecto ;

  onSelected(proyecto: Proyecto): void {
    this.selected = true;
    this.selectedProyecto = proyecto;
  } 

  ngOnInit() {
    this.selected  = false;
    this.proyectos.push(new Proyecto("Proyecto 1", ["Texto 1", "Texto 2"], ["https://es.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/beauty-magazine/slideshows/beginner-yoga-poses-for-stress/loreal-paris-slideshow-10-yoga-poses-to-de-stress-with-this-weekend-slide-6.jpg?rev=fa2c964aa8d041a1b8e3094358ed4dc8&cx=0.49&cy=0.54&cw=1510&ch=815&hash=0BE910B4E177E50FA837C43B5EE036FCA1083DCC", "https://www.revistayogaspirit.es/wp-content/uploads/2024/01/slider_ys.jpg"], "Imagen 1", "Subtitulo 1"));
    this.proyectos.push(new Proyecto("Proyecto 2", ["Texto 1", "Texto 2"], ["Imagen 1", "Imagen 2"], "Imagen 1", "Subtitulo 2"));
    this.proyectos.push(new Proyecto("Proyecto 3", ["Texto 1", "Texto 2"], ["Imagen 1", "Imagen 2"], "Imagen 1", "Subtitulo 3"));
    this.proyectos.push(new Proyecto("Proyecto 4", ["Texto 1", "Texto 2"], ["Imagen 1", "Imagen 2"], "Imagen 1", "Subtitulo 4"));
    this.proyectos.push(new Proyecto("Proyecto 5", ["Texto 1", "Texto 2"], ["Imagen 1", "Imagen 2"], "Imagen 1", "Subtitulo 5"));
    this.proyectos.push(new Proyecto("Proyecto 5", ["Texto 1", "Texto 2"], ["Imagen 1", "Imagen 2"], "Imagen 1", "Subtitulo 5"));
  }

  

}
