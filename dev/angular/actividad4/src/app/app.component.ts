import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BotonesComponent } from './components/botones/botones.component';
import { Boton } from './components/boton.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, CommonModule, RouterOutlet, BotonesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //Variables de instancia de comunicación con los hijos
  @Output() deshabilitar:EventEmitter<null>
  //Variables propias del componente
  botones: Boton[] = [
    { id: 1, texto: 'Rojo', valor: 3 },
    { id: 2, texto: 'Azul', valor: 7 },
    { id: 3, texto: 'Verde', valor: 6 },
    { id: 4, texto: 'Marrón', valor: 4 },
    { id: 5, texto: 'Amarillo', valor: 8 },
    { id: 6, texto: 'Naranja', valor: 2 },
    { id: 7, texto: 'Blanco', valor: 1 },
  ];
  botonesPulsados: string[] = [];
  suma=0
  constructor() {
    this.deshabilitar=new EventEmitter;
  }
  //Métodos de instancia
  reset(){
    this.botonesPulsados= [];
    this.suma=0
    this.deshabilitar.emit();
  }
  pulsar(boton:Boton){
    this.botonesPulsados.push(boton.texto);
    this.suma=this.suma+boton.valor;
  }
}
