import { Routes } from '@angular/router';
import { LenguajeComponent } from './componentes/lenguaje/lenguaje.component';
import { LenguajesComponent } from './componentes/lenguajes/lenguajes.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'lenguajes',component:LenguajesComponent},
    {path:'lenguaje/:id',component:LenguajeComponent},
    {path:'buscador',component:BuscadorComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}
];
