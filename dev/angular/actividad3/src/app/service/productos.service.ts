import { EventEmitter, Injectable, Output } from '@angular/core';
import { Productos } from '../productos/interface.productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  @Output() productoChanged:EventEmitter<null>
  private _productos: Productos[] = [
    {
      nombre: "laca",
      num: 56,
      categoria: "no tiene categ"
    },
    {
      nombre: "peine",
      num: 12,
      categoria: "baño"
    },
    {
      nombre: "otro",
      num: 12,
      categoria: "baño"
    },
    {
      nombre: "aaa",
      num: 23,
      categoria: "no tiene categ"
    },
    {
      nombre: "ratón",
      num: 12,
      categoria: "no tiene categ"
    }
  ]
  constructor() { 
    this.productoChanged=new EventEmitter;
  }
  getAll():Productos[]{return this._productos}
  add(p:Productos){
    this._productos.push({...p});  
  }
  delete(name:string){
    let indice = this._productos.findIndex(p => p.nombre === name);
    this._productos=this._productos.filter((p)=>p.nombre!=name);
    this.productoChanged.emit();
    return indice!=-1;
  }
}
