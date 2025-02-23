import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  

  
  constructor(private router: Router) { }

  botonA= "";
  
  cambiarColor(b: string){

    this.botonA = this.router.url.replace('/', '');
    let boton: HTMLElement | null = document.getElementById(b);
    let botonB: HTMLElement | null = document.getElementById(this.botonA);

    if(botonB != null){
      botonB.style.color = "white";
    }
    if(boton != null){
      boton.style.color = "#9988aa";
    }
    this.botonA = b;
  }

  cambiarColor1(){
    this.botonA = this.router.url.replace('/', '');
    let botonB: HTMLElement | null = document.getElementById(this.botonA);
    if(botonB != null){
      botonB.style.color = "white";
    }
    this.botonA = "";
  }

  proyectosGO() {

    this.router.navigate(['.']);
  
  }

  
  

  ngOnInit() {
    
    
  }

}
