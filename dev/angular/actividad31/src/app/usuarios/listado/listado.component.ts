import { Component } from '@angular/core';
import { Usuarios } from '../interface.usuarios';
import { UsuariosService } from '../../service/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  usuarios: Usuarios[];
  constructor(private _usuariosService:UsuariosService){
    this.usuarios=_usuariosService.getAll();
  }
  message:string="";
  eliminar(nombre:string){
    let indice = this.usuarios.findIndex(u => u.nombre === nombre);
    this.message="Usuario "+ (indice !== -1?"eliminado":"no encontrado")+": "+nombre;
    while (indice!=-1) {
      this._usuariosService.delete(indice);
      indice = this.usuarios.findIndex(u => u.nombre === nombre);
    }
  }
}
