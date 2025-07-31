import { Routes } from '@angular/router';
import { Inicio } from './features/productos/pages/inicio/inicio.component';
import { Notfound } from './features/productos/pages/notfound/notfound.component';
import { Encuesta } from './features/productos/pages/encuesta/encuesta.component';
import { Contacto } from './features/productos/pages/contacto/contacto.component';

export const routes: Routes = [
  {
    path:'',
    component:Inicio
  },
  {
    path:'encuesta',
    component:Encuesta
  },
  {
    path:'contacto',
    component:Contacto
  },
  {
    path:'**',
    component:Notfound,
  }
];
