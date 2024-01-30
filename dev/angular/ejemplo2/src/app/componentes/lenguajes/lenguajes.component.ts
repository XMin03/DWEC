import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../servicios/lenguajes.service';
import { LenguajeTarjetaComponent } from '../lenguaje-tarjeta/lenguaje-tarjeta.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lenguajes',
  standalone: true,
  imports: [NgFor, LenguajeTarjetaComponent],
  templateUrl: './lenguajes.component.html',
  styleUrl: './lenguajes.component.css'
})
export class LenguajesComponent {
  lenguajes: any[];
  constructor(private _lenguajesService: LenguajesService, private _router: Router) {
    this.lenguajes = this._lenguajesService.getLenguajes();
  }
  rutaImagen(imagen: string): string {
    return this._lenguajesService.rutaImagen(imagen);
  }
  verTarjeta(i:number) {
    this._router.navigate(["lenguaje",i])
  }
}
