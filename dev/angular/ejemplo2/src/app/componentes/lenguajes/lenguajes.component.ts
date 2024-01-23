import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Lenguaje, LenguajesService } from '../../servicios/lenguajes.service';

@Component({
  selector: 'app-lenguajes',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './lenguajes.component.html',
  styleUrl: './lenguajes.component.css'
})
export class LenguajesComponent {
  lenguajes:Lenguaje[];
  constructor (private _lenguajesService:LenguajesService){
    this.lenguajes=this._lenguajesService.getLenguajes();
  }
  rutaImagen(imagen:string):string{
    return this._lenguajesService.rutaImagen(imagen);
  }
}
