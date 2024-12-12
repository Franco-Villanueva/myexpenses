import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './Guards/auth.guard';


export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./Shared/Ui/layout.component'),
    loadChildren: () => import('./Components/dashboard.routes'),
    canActivate: [privateGuard], // Aplica el guard para proteger esta ruta
  },
  {
    path: 'auth',
    loadChildren: () => import('./Auth/auth.routes'), // Ruta para iniciar sesión/registrarse
    canActivateChild: [publicGuard],
  },
  {
    path: '**',
    redirectTo: 'dashboard/home',
    pathMatch: 'full',
  },
];
