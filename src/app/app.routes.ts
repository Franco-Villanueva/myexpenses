import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TablesComponent } from './Components/tables/tables.component';
import { SettingComponent } from './Components/setting/setting.component';
import { GridListComponent } from './Components/Grid/grid-list/grid-list.component';

export const routes: Routes = [
    { 
        path: 'home', 
        component: GridListComponent 
    },
    { 
        path: 'table', 
        component: TablesComponent 
    },
    { 
        path: 'settings', 
        component: SettingComponent 
    },

    
    { 
        path: 'auth', 
        loadChildren: () => import('./Auth/auth.routes')
    },
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
];
