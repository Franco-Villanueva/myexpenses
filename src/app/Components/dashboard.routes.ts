import { Routes } from '@angular/router';

export default [
  {
    path: 'home',
    loadComponent: () => import('./Grid/grid-list/grid-list.component'),
  },
  {
    path: 'tables',
    loadComponent: () => import('./tables/tables.component'),
  },
  {
    path: 'settings',
    loadComponent: () => import('./setting/setting.component'),
  },
] as Routes;
