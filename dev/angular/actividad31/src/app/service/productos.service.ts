import { Injectable } from '@angular/core';
import { Productos } from '../productos/interface.productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
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
  constructor() { }
  getAll():Productos[]{return this._productos}
  delete(index:number){
    this._productos.splice(index, 1);
  }
}
