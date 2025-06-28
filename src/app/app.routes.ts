import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'reportes',
    loadChildren: () =>
      import('./features/reportes/reportes.module').then(m => m.ReportesModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth/auth.module').then(m => m.AuthModule)
  },
  
];
