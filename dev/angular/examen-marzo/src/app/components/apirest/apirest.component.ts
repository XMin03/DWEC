import { Component } from '@angular/core';
import { DatabaseService, Equipo, Grupo, Usuario } from '../../services/database.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-apirest',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './apirest.component.html',
  styleUrl: './apirest.component.css'
})
export class ApirestComponent {
  //Variables de instancia (puedes usarlas o no)
  grupos: any;
  idGrupoSeleccionado: number = -1;
  equipos: any;
  idEquipoSeleccionado: number = -1;
  usuarios: Usuario[]=[];
  siguienteIdUsuario: number = 1;
  errorDB: boolean = false;

  constructor(private _databaseService: DatabaseService,private _router: Router) {
    this._databaseService.getGrupos().subscribe({
      next: (data) => {
        this.grupos = (data as Grupo[])
      },
      error: (error) => {
        //console.error(error);
        this.errorDB = true
      }
    });
  }


  //Métodos de instancia (puedes usarlos o no)
  mostrarEquiposGrupo(grupo: number) {
    this.idGrupoSeleccionado=grupo
    this._databaseService.getEquiposGrupo(grupo).subscribe({
      next: (data) => {
        this.equipos = (data as Equipo)
      },
      error: (error) => {
        //console.error(error);
        this.errorDB = true
      }
    });
  }

  mostrarUsuariosEquipo(equipo: any) {
    this.idEquipoSeleccionado=equipo

    this._databaseService.getUsuariosEquipo(equipo).subscribe({
      next: (data) => {
        this.usuarios = (data as Usuario[])
      },
      error: (error) => {
        //console.error(error);
        this.errorDB = true
      }
    });
  }

  limpiarGrupos() {
    this.idGrupoSeleccionado=-1
    this.equipos=[]
    this.limpiarEquipos()
  }

  limpiarEquipos() {
    this.idEquipoSeleccionado=-1
    this.usuarios=[]
  }

  borrarUsuario(usuario: Usuario) {
    //Mensaje de confirmación de borrado (incluir el nombre del usuario
    //en la pregunta)
    let resp: boolean = confirm(`¿Desea eliminar el usuario ${usuario.nombre}?`);
    if (resp) {
      this._databaseService.deleteUsuario(usuario.id).subscribe({
        next: (data) => {
          this.usuarios=this.usuarios.filter(u => u.id!=usuario.id)
        },
        error: (error) => {
          //console.error(error);
          this.errorDB = true
        }
      });
    }
  }
  editar(u:Usuario){
    this._router.navigate(["usuario",u.id])
  }
}
