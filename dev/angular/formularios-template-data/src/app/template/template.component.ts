import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgFor, NgIf, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  datosFormulario = {
    nombre: null,
    apellidos: null,
    correo: null,
    pais: "",
    sexo: "Sin definir",
    acepta: false
  }

  paises=[
    {codigo: "ESP", nombre: "España"},
    {codigo: "FRA", nombre: "Francia"},
    {codigo: "UK", nombre: "Reino Unido"},
  ];

  sexos:string[]=["Hombre","Mujer","Sin definir"];

  construct () {
  }

  enviar(f:NgForm) {
    console.log("TEMPLATE FORM");
    console.log(f);
    console.log("Valores", f.value);
    console.log("datosFormulario", 
              this.datosFormulario)
  }
}
