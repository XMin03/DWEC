import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductosModule } from './productos/productos.module';
import { CabeceraModule } from './cabecera/cabecera.module';
import { UsuariosModule } from './usuarios/usuarios.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CabeceraModule,ProductosModule,UsuariosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-productos';
}
