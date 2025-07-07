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
    path: 'usuarios',
    loadChildren: () =>
      import('./features/usuarios/usuarios.module').then(m => m.UsuariosModule)
  },
  {
    path: 'empleados',
    loadChildren: () =>
      import('./features/empleados/empleados.module').then(m => m.EmpleadosModule)
  },
  {
    path: 'almacenes',
    loadChildren: () =>
      import('./features/almacenes/almacenes.module').then(m => m.AlmacenesModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth/auth.module').then(m => m.AuthModule)
  },
  
];
