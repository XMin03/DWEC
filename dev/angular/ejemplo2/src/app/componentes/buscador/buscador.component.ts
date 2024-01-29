import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../servicios/lenguajes.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { LenguajeTarjetaComponent } from '../lenguaje-tarjeta/lenguaje-tarjeta.component';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [RouterLink,NgFor,LenguajeTarjetaComponent],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  lenguajes:Lenguaje[]=[];
  constructor(private _lenguajeService:LenguajesService,private _activaredRoutes:ActivatedRoute){
    _activaredRoutes.params.subscribe(p=>{
      this.lenguajes=_lenguajeService.buscarLenguajes(p['palabra']);
    })
  }
  rutaImagen(archivo:string):string{return "assets/img/"+archivo;}

}
