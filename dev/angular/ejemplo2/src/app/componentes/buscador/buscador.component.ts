import { Component } from '@angular/core';
import { Lenguaje } from '../../servicios/lenguajes.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  lenguajes:Lenguaje[]=[];
  constructor(){}
}
