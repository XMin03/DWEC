import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Lenguaje } from '../../servicios/lenguajes.service';

@Component({
  selector: 'app-lenguaje-tarjeta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lenguaje-tarjeta.component.html',
  styleUrl: './lenguaje-tarjeta.component.css'
})
export class LenguajeTarjetaComponent {
  @Input() lenguaje:Lenguaje|null=null;
  @Input() ruta:string="";
  @Input() i:number=0;
  @Output() botonTarjetaPulsado:EventEmitter<number>;
  constructor (private _router:Router){
    this.botonTarjetaPulsado=new EventEmitter();
  }
  verMas(){
    //return this._router.navigate(["lenguaje",this.i]);
    this.botonTarjetaPulsado.emit(this.i);
  }
}
