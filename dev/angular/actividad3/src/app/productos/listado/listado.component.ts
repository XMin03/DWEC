import { Component } from '@angular/core';
import { Productos } from '../interface.productos';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  productos: Productos[];
  constructor(private _productoService:ProductosService){
    this.productos=_productoService.getAll();
  }
  message:string="";
  eliminar(nombre:string){
    let indice = this.productos.findIndex(p => p.nombre === nombre);
    this.message="Producto "+ (indice !== -1?"eliminado":"no encontrado")+": "+nombre;
    while (indice!=-1) {
      this._productoService.delete(indice);
      indice = this.productos.findIndex(p => p.nombre === nombre);
    }
  }
}
