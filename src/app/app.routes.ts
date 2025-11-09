import { Routes } from '@angular/router';
import { layoutsRoutes } from './layouts/layoust-routes';

export const routes: Routes = [{
    path: '',
    children : layoutsRoutes
}];
