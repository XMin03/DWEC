import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lenguajes',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './lenguajes.component.html',
  styleUrl: './lenguajes.component.css'
})
export class LenguajesComponent {
  lenguajes=["零", "壹", "貳", "叁", "肆", "伍", "陸", "柒", "捌", "玖", "拾"];
}
