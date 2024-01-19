import { Routes } from '@angular/router';
import { LenguajeComponent } from './componentes/lenguaje/lenguaje.component';
import { LenguajesComponent } from './componentes/lenguajes/lenguajes.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'lenguajes',component:LenguajesComponent},
    {path:'lenguaje/:id',component:LenguajeComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}
];
