import { Component } from '@angular/core';
import { DatabaseService, Equipo, Usuario } from '../../../services/database.service';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  usuario={
    id: -1,
    nombre: "",
    equipo: -1,
    passwd: ""
  };

  equipos:Equipo[]=[];

  esNuevo=true;
  siguienteIdUsuario:number=1;

  constructor(private dbService:DatabaseService,private actRoute:ActivatedRoute,private _router:Router){
    actRoute.params.subscribe(p=>{
      let id=Number(p["id"]);
      this.esNuevo=Number.isNaN(id)
      if (this.esNuevo) {
        dbService.getUsuarios().subscribe(data => {
          this.usuario.id=(data as Usuario[]).map(u => u.id).reduce((a,b) => (a > b) ? a : b) + 1;
          this.usuario.equipo=1;
        })
      }else{
        dbService.getUsuario(id).subscribe(data=>{
          let u:Usuario[]=data as Usuario[];
          this.usuario=u[0];
        });
      }
      })
      this.dbService.getEquipos().subscribe(data => {
          this.equipos = (data as Equipo[])
        }
      );    }
    
    

  enviar(formulario:any){
    if (this.esNuevo) {
      this.dbService.crearUsuario(formulario.value).subscribe(data => {
        this.cancelar();
      })  
    }else{
      this.dbService.actualizarUsuario(formulario.value).subscribe(data => {
        this.cancelar();
      })  
    }
    
  }

  cancelar(){
    this._router.navigate(["apirest"])
  }
}
