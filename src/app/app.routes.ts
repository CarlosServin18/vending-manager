import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./features/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'reportes',
    loadChildren: () =>
      import('./features/reportes/reportes.module').then(m => m.ReportesModule)
  },
  {
    path: 'operaciones',
    loadChildren: () =>
      import('./features/operaciones/operaciones.module').then(m => m.OperacionesModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth/auth.module').then(m => m.AuthModule)
  },
  
];
