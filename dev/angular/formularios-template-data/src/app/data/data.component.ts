import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
// Como módulos, hay que importar FormsModule y ReactiveFormsModule
import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-data',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule, JsonPipe, NgClass],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

  dFormulario:FormGroup;

  datosFormulario = {
    nombre: null,
    apellidos: null,
    correo: null,
    pais: "",
    sexo: "Sin definir",
    acepta: false
  }

  datosFormularioEjemplo = {
    nombre: "Juan",
    apellidos: "Nadie",
    correo: "juannadie@nada.com",
    pais: "",
    sexo: "",
    acepta: false
  }

  paises=[
    {codigo: "ESP", nombre: "España"},
    {codigo: "FRA", nombre: "Francia"},
    {codigo: "UK", nombre: "Reino Unido"},
  ];

  sexos:string[]=["Hombre","Mujer","Sin definir"];

  constructor(){
    this.dFormulario = new FormGroup({
      'nombre': new FormControl('Carlos',[Validators.required,Validators.minLength(3)]),
      'apellidos': new FormControl('Vela',[Validators.required,Validators.minLength(3)]),
      'correo': new FormControl('ddd@ddd.dd',[
                                              Validators.required,
                                              Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'pais': new FormControl(''),
      'sexo': new FormControl('', [Validators.required]),
      'acepta': new FormControl(false, [Validators.requiredTrue]) 
    });
  }

  resetFormulario(){
    this.dFormulario.reset(this.datosFormulario);
  }

  cargarFormulario(){
    this.dFormulario.setValue(this.datosFormularioEjemplo);
  }

  enviar() {
    console.log("DATA FORM");
    console.log(this.dFormulario);
    console.log(this.dFormulario.value);
    }

}
