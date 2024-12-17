import { Routes } from '@angular/router';
import { FormDinamicoComponent } from './form-dinamico/form-dinamico.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { Perfil2fbComponent } from './perfil2fb/perfil2fb.component';

export const routes: Routes = [
    { path: 'form-dinamico', component: FormDinamicoComponent },
    { path: 'perfil-usu', component: PerfilUsuarioComponent },
    { path: 'perfil2bfb', component: Perfil2fbComponent },
];
