import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ListadoComponent
  ],
  exports:[
    ListadoComponent
  ]
})
export class ProductosModule { }
