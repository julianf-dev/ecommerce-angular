import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./../dashboard/dashboard.routes').then(m => m.routes),
        title: 'App - Dashboard'
      },
      {
        path: 'products',
        loadChildren: () => import('./../products/products.routes').then(m => m.routes),
        title: 'App - Products'
      },
      {
        path: 'categories',
        loadChildren: () => import('./../categories/categories.routes').then(m => m.routes),
        title: 'App - Categories'
      },
      {
        path: 'users',
        loadChildren: () => import('./../users/users.routes').then(m => m.routes),
        title: 'App - Users'
      },
      {
        path: 'gallery',
        loadComponent: () => import('src/app/pages/gallery/gallery.component'),
        title: 'App - Gallery'
      },
    ]
  }
];
