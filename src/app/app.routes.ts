import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then((c) => c.Home) },
  {
    path: 'favorite',
    loadComponent: () => import('./pages/favorite/favorite').then((c) => c.Favorite),
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart').then((c) => c.Cart),
  },
];
