import { Routes } from '@angular/router';
import {Pag2} from './pag2/pag2'
import { Inicio } from './inicio/inicio';
export const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full'},
    {path: 'suporte', component: Pag2},
    {path: 'inicio', component: Inicio},
];
