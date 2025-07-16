import { Routes } from '@angular/router';
import { Inicio } from './features/productos/pages/inicio/inicio';
import { Encuesta } from './features/productos/pages/encuesta/encuesta';
import { Contacto } from './features/productos/pages/contacto/contacto';
import { Notfound } from './features/productos/pages/notfound/notfound';

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
