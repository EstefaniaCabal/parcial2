import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CinemaComponent } from './pages/cinema/cinema.component';
import { LibroComponent } from './pages/libro/libro.component';
import { ProductoComponent } from './pages/producto/producto.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cinema',
        component: CinemaComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'libro',
        component: LibroComponent
    },
    {
        path: 'producto',
        component: ProductoComponent
    }, 
    {
        path: '**',
        redirectTo: 'home'
    },
  
];
