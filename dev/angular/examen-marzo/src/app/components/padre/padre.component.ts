import { Component, EventEmitter } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { NgFor, NgIf } from '@angular/common';

const DIAS:string[]=['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];
const ESTACIONES:string[] = ['primavera', 'verano', 'otoño', 'invierno'];

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent,NgFor,NgIf],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  habilitar:EventEmitter<any>= new EventEmitter();

  seleccionado_dias:boolean=true;
  botones_por_pulsar:string[] = [];
  botones_pulsados:string[] = [];
  ngOnInit(){
    this.useDias();
  }
  useDias(){
    if (this.botones_por_pulsar!=DIAS) {
      this.botones_por_pulsar=DIAS
      this.botones_pulsados= [];  
    }
  }
  useEstaciones(){
    if (this.botones_por_pulsar!=ESTACIONES) {
      this.botones_por_pulsar=ESTACIONES
      this.botones_pulsados= [];
    }
  }
  constructor(){

  }
  reset(){
    this.botones_pulsados= [];
    this.habilitar.emit();
  }
  suma(indice:number){
    this.botones_pulsados.push(this.botones_por_pulsar.at(indice)as string)
  }
}
