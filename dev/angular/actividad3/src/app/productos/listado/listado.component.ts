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
    this._productoService.productoChanged.subscribe(()=>{
      this.productos=_productoService.getAll();
    })
  }
  message:string="";
  eliminar(nombre:string){
    let b=this._productoService.delete(nombre);
    this.message="Producto "+ (b?"eliminado":"no encontrado")+": "+nombre;
  }
}
