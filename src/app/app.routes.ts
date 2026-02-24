import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent) 
  },
  {
    path: 'solutions',
    children: [
      { path: 'teramind', loadComponent: () => import('./features/solutions/monitoramento/teramind/teramind.component').then(c => c.TeramindComponent) },
      { path: 'vmc', loadComponent: () => import('./features/solutions/vmc/vmc.component').then(c => c.VmcComponent) },
      { path: 'portal-flex', loadComponent: () => import('./features/solutions/portal-flex/portal-flex.component').then(c => c.PortalFlexComponent) },
      { path: 'sectigo', loadComponent: () => import('./features/solutions/sectigo/sectigo.component').then(c => c.SectigoComponent) },
      { path: 'scm', loadComponent: () => import('./features/solutions/scm/scm.component').then(c => c.ScmComponent) },
      { path: 'clm', loadComponent: () => import('./features/solutions/clm/clm.component').then(c => c.ClmComponent) },
      { path: 'monitoramento', loadComponent: () => import('./features/solutions/monitoramento/monitoramento.component').then(c => c.MonitoramentoComponent) },
      { path: 'hexnode', loadComponent: () => import('./features/solutions/monitoramento/hexnode/hexnode.component').then(c => c.HexnodeComponent) },
    ]
  }
];