import { Routes } from '@angular/router';
import { GridListComponent } from './Components/Grid/grid-list/grid-list.component';
import { TablesComponent } from './Components/tables/tables.component';
import { SettingComponent } from './Components/setting/setting.component';
import { authGuard } from './Guards/auth.guard'; // Importa el guard

export const routes: Routes = [
  {
    path: 'home',
    component: GridListComponent,
    canActivate: [authGuard], // Aplica el guard para proteger esta ruta
  },
  {
    path: 'table',
    component: TablesComponent,
    canActivate: [authGuard], // Aplica el guard para proteger esta ruta
  },
  {
    path: 'settings',
    component: SettingComponent,
    canActivate: [authGuard], // Aplica el guard para proteger esta ruta
  },
  {
    path: 'auth',
    loadChildren: () => import('./Auth/auth.routes'), // Ruta para iniciar sesión/registrarse
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
