import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent) 
  },
  {
    path: 'solutions',
    children: [
      { path: 'teramind', loadComponent: () => import('./features/solutions/monitoreo/teramind/teramind.component').then(c => c.TeramindComponent) },
      { path: 'portal-flex', loadComponent: () => import('./features/solutions/firma digital/portal-flex.component').then(c => c.PortalFlexComponent) },
      { path: 'sectigo', loadComponent: () => import('./features/solutions/certificados/sectigo/sectigo.component').then(c => c.SectigoComponent) },
      { path: 'scm', loadComponent: () => import('./features/solutions/certificados/sectigo/scm.component').then(c => c.ScmComponent) },
      { path: 'clm', loadComponent: () => import('./features/solutions/certificados/sectigo/clm.component').then(c => c.ClmComponent) },
      { path: 'monitoramento', loadComponent: () => import('./features/solutions/monitoreo/monitoreo.component').then(c => c.MonitoramentoComponent) },
      { path: 'hexnode', loadComponent: () => import('./features/solutions/monitoreo/hexnode/hexnode.component').then(c => c.HexnodeComponent) },
      { path: 'kickidler', loadComponent: () => import('./features/solutions/monitoreo/kickidler/kickidler.component').then(c => c.KickidlerComponent) },
    ]
  }
];