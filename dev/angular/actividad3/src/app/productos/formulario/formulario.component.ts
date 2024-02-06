import { Component } from '@angular/core';
import { ProductosService } from '../../service/productos.service';
import { Productos } from '../interface.productos';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  productos: Productos[];
  producto:Productos={
    nombre:"",
    num:0,
    categoria:"no tiene categ"
  }
  submit(f:NgForm){
    if (this.producto.nombre) {
      this.productos.push({...this.producto});  
    }
    console.log(f.value);
  }
  constructor(private _productoService:ProductosService){
    this.productos=_productoService.getAll();
  }
}
