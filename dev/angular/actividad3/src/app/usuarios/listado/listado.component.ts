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
    this._usuariosService.usuarioChanged.subscribe(()=>{
      this.usuarios=_usuariosService.getAll();
    })
  }
  message:string="";
  eliminar(nombre:string){
    let b=this._usuariosService.delete(nombre);
    this.message="Usuario "+ (b?"eliminado":"no encontrado")+": "+nombre;
  }
}
