import { Injectable } from '@angular/core';
import { Usuarios } from '../usuarios/interface.usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
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
  constructor() { }
  getAll():Usuarios[]{return this._usuarios}
  delete(index:number){
    this._usuarios.splice(index, 1);
  }
}
