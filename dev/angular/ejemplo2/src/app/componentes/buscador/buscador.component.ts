import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../servicios/lenguajes.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [RouterLink,NgFor],
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
