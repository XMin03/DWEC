import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  mostrar : boolean = true;
  lista:String[] = ["零", "壹", "貳", "叁", "肆", "伍", "陸", "柒", "捌", "玖", "拾"];
  cambiar() {
    this.mostrar = !this.mostrar;
  }
}
