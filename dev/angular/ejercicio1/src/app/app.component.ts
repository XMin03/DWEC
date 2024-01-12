import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mattia';
  mostrar=true;
  lista=["零","壹","貳","叁","肆","伍","陸","柒","捌","玖","拾"];
  cambiar(){
    this.mostrar=!this.mostrar;
  }
}
