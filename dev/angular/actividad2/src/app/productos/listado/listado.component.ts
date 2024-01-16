import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  productos:any[]=[
    {nombre:"Mesa",precio:112.5,categoria:"Mobiliario"},
    {nombre:"Taladro",precio:22.5,categoria:"Herramientas"},
    {nombre:"Soplete",precio:52.75},
    {nombre:"Silla",precio:42.5,categoria:"Mobiliario"}
  ]
  eliminados:any[]=[]
  eliminar(index:number){
    this.eliminados.push(this.productos.splice(index,1)[0]);
  }
}
