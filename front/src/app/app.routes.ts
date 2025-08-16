import { Routes } from '@angular/router';
import { Inicio } from './features/productos/pages/inicio/inicio.component';
import { Notfound } from './features/productos/pages/notfound/notfound.component';
import { Encuesta } from './features/productos/pages/encuesta/encuesta.component';
import { Contacto } from './features/productos/pages/contacto/contacto.component';
import { Login} from './features/productos/pages/login/login.component';
import { Dashboard } from './features/productos/pages/dashboard/dashboard.component';

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
    path:'login',
    component: Login
  },
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path:'**',
    component:Notfound,
  },

];
