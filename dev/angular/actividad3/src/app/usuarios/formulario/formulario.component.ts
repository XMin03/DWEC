import { Component } from '@angular/core';
import { Usuarios } from '../interface.usuarios';
import { UsuariosService } from '../../service/usuarios.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  usuarios: Usuarios[];
  usuario:Usuarios={
    nombre:"",
    edad:0,
    profesion:"no tiene profesión"
  }
  submit(){
    if (this.usuario.nombre) {
      this.usuarios.push({...this.usuario});  
    }
  }
  constructor(private _usuarioService:UsuariosService){
    this.usuarios=_usuarioService.getAll();
  }
}
