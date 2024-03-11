import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PadreComponent } from './components/padre/padre.component';
import { ApirestComponent } from './components/apirest/apirest.component';
import { UsuarioComponent } from './components/apirest/usuario/usuario.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'comunicacion',component:PadreComponent},
    {path:'usuario',component:UsuarioComponent},
    {path:'usuario/:id',component:UsuarioComponent},
    {path:'apirest',component:ApirestComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}
];

