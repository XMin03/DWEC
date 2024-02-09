import { EventEmitter, Injectable, Output } from '@angular/core';
import { Usuarios } from '../usuarios/interface.usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  @Output() usuarioChanged:EventEmitter<null>

  private _usuarios: Usuarios[] = [
    {
      nombre: "Manuel",
      edad: 56,
      profesion: "no tiene profesión"
    },
    {
      nombre: "Antonio",
      edad: 28,
      profesion: "no tiene profesión"
    }
  ]
  constructor() { 
    this.usuarioChanged=new EventEmitter;

  }
  getAll():Usuarios[]{return this._usuarios}  
  add(u:Usuarios){
    this._usuarios.push({...u});
  }
  delete(name:string){
    let indice = this._usuarios.findIndex(u => u.nombre === name);
    this._usuarios=this._usuarios.filter(u=>u.nombre!=name);
    this.usuarioChanged.emit();
    return indice!=-1;
  }
}
