import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { DataComponent } from './data/data.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,  NgIf,
      RouterOutlet, TemplateComponent, DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'formularios';
  mostrar:string ="T"

  activar(f:string) {
    this.mostrar=f;
  }
}
