import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Boton } from '../boton.interface';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent implements OnInit {
  disabled=false;
  //Variables de instancia de comunicación con el padre
  @Input() boton:Boton={id:0,texto:'',valor:0};
  @Output() botonTarjetaPulsado:EventEmitter<Boton>;
  //Variables propias del componente
  
  constructor(app:AppComponent){
    this.botonTarjetaPulsado=new EventEmitter;
      app.deshabilitar.subscribe(
        ()=>{this.disabled=false;}
      )
  }

  ngOnInit(): void {  }

  botonPulsado(boton:HTMLButtonElement) {
    this.botonTarjetaPulsado.emit(this.boton);
    this.disabled=true;
  }
}
