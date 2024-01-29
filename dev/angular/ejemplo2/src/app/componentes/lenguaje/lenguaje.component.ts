import { Component } from '@angular/core';
import { Lenguaje, LenguajesService } from '../../servicios/lenguajes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lenguaje',
  standalone: true,
  imports: [],
  templateUrl: './lenguaje.component.html',
  styleUrl: './lenguaje.component.css'
})
export class LenguajeComponent {
  lenguaje:any=null;
  ruta:string="";
  constructor (private actRoute:ActivatedRoute,private _lenguajeService:LenguajesService){
    actRoute.params.subscribe(p=>{
      this.lenguaje=_lenguajeService.getLenguaje(Number(p["id"]));
      this.ruta=_lenguajeService.rutaImagen(this.lenguaje.imagen);
    })
  }
}
