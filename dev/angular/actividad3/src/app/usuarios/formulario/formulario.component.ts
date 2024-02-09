import { Component } from '@angular/core';
import { Usuarios } from '../interface.usuarios';
import { UsuariosService } from '../../service/usuarios.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  dFormulario:FormGroup;
  usuario:Usuarios={
    nombre:"",
    edad:0,
    profesion:"no tiene profesión"
  }
  submit(){
    this._usuarioService.add(this.usuario);
  }
  constructor(private _usuarioService:UsuariosService){
    this.dFormulario=new FormGroup({
      "nombre":new FormControl("",[Validators.required,Validators.minLength(3)]),
      "edad":new FormControl("",[Validators.required,Validators.min(0),Validators.pattern("^[0-9]+$")]),
      "profesion":new FormControl("no tiene profesión",[Validators.required,Validators.minLength(3)])
    });
  }
}
