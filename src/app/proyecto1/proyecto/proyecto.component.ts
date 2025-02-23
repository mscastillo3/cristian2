import { Component,Input, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  @Input() proyecto!: Proyecto;
  selected = false;
  i = 0;
  fotoSelected!: String;

  constructor() { }

  onSelected(): void {
    this.selected = true;
  } 

  onSelected2(): void {
    this.selected = false;
  } 



  next(){
    if(this.i == this.proyecto.imagenes.length - 1){
      this.fotoSelected = this.proyecto.imagenes[0];
      this.i = 0;
    }else{
      this.fotoSelected = this.proyecto.imagenes[this.i+1];
      this.i++;
    }


  }

  prev(){
    if(this.i == 0){
      this.fotoSelected = this.proyecto.imagenes[this.proyecto.imagenes.length - 1];
      this.i = this.proyecto.imagenes.length - 1;
    }else{
      this.fotoSelected = this.proyecto.imagenes[this.i-1];
      this.i--;
    }
    }

  ngOnInit() {
    this.fotoSelected = this.proyecto.imagenes[0];
  }

}
