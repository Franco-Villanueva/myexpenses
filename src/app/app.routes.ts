import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './Guards/auth.guard'; // Importa el guard
import SettingComponent from './Components/setting/setting.component';
import TablesComponent from './Components/tables/tables.component';
import GridListComponent from './Components/Grid/grid-list/grid-list.component';

export const routes: Routes = [
  {
    path: 'home',
    component: GridListComponent,
    canActivate: [privateGuard], // Aplica el guard para proteger esta ruta
  },
  {
    path: 'table',
    component: TablesComponent,
    canActivate: [privateGuard], // Aplica el guard para proteger esta ruta
  },
  {
    path: 'settings',
    component: SettingComponent,
    canActivate: [privateGuard], // Aplica el guard para proteger esta ruta
  },
  {
    path: 'auth',
    loadChildren: () => import('./Auth/auth.routes'), // Ruta para iniciar sesión/registrarse
    canActivateChild: [publicGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
