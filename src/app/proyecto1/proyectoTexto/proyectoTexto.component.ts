import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';

@Component({
  selector: 'app-proyectoTexto',
  templateUrl: './proyectoTexto.component.html',
  styleUrls: ['./proyectoTexto.component.css']
})
export class ProyectoTextoComponent implements OnInit {

  @Input() proyecto!: Proyecto;
  constructor() { }

  ngOnInit() {
  }

}
