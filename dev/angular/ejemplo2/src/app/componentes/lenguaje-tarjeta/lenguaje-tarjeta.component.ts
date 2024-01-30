import { Component, Input } from '@angular/core';
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
  @Input() ruta:string|null=null;
  @Input() i:number|null=null;
  constructor (private _router:Router){}
  verMas(){
    return this._router.navigate(["lenguaje",this.i]);
  }
}
