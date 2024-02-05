import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-mainUsuario',
  standalone: true,
  imports: [FormularioComponent,ListadoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
