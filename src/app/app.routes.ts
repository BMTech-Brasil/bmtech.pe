import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent) 
  },
  { 
    path: 'libro-reclamaciones', 
    loadComponent: () => import('./features/libro-reclamaciones/libro-reclamaciones.component').then(c => c.LibroReclamacionesComponent) 
  },
  {
    path: 'repositorio',
    loadComponent: () => import('./features/repositorio/repositorio.component').then(c => c.RepositorioComponent)
  },
  { 
    path: 'convertir-pfx', 
    loadComponent: () => import('./features/tools/convertidor-pfx.component').then(c => c.ConvertidorPfxComponent) 
  },
  { 
    path: 'verifica-csr', 
    loadComponent: () => import('./features/tools/verificador-csr.component').then(c => c.VerificadorCsrComponent) 
  },
  { 
    path: 'verifica-certificado', 
    loadComponent: () => import('./features/tools/verificador-certificado.component').then(c => c.VerificadorCertificadoComponent) 
  },
  { 
    path: 'concordancia-llaves', 
    loadComponent: () => import('./features/tools/concordancia-llaves.component').then(c => c.ConcordanciaLlavesComponent) 
  },
  {
    path: 'solutions',
    children: [
      { path: 'teramind', loadComponent: () => import('./features/solutions/monitoreo/teramind/teramind.component').then(c => c.TeramindComponent) },
      { path: 'portal-flex', loadComponent: () => import('./features/solutions/firmadigital/portal-flex.component').then(c => c.PortalFlexComponent) },
      { path: 'sectigo', loadComponent: () => import('./features/solutions/certificados/sectigo/sectigo.component').then(c => c.SectigoComponent) },
      { path: 'scm', loadComponent: () => import('./features/solutions/certificados/sectigo/scm.component').then(c => c.ScmComponent) },
      { path: 'clm', loadComponent: () => import('./features/solutions/certificados/sectigo/clm.component').then(c => c.ClmComponent) },
      { path: 'monitoreo', loadComponent: () => import('./features/solutions/monitoreo/monitoreo.component').then(c => c.MonitoreoComponent) },
      { path: 'hexnode', loadComponent: () => import('./features/solutions/monitoreo/hexnode/hexnode.component').then(c => c.HexnodeComponent) },
      { path: 'kickidler', loadComponent: () => import('./features/solutions/monitoreo/kickidler/kickidler.component').then(c => c.KickidlerComponent) },
      { path: 'firma-digital', loadComponent: () => import('./features/solutions/firmadigital/firma-digital.component').then(c => c.FirmaDigitalComponent) },
      { path: 'digicert', loadComponent: () => import('./features/solutions/certificados/digicert.component').then(c => c.DigicertComponent) },
      { path: 'globalsign', loadComponent: () => import('./features/solutions/certificados/globalsign.component').then(c => c.GlobalsignComponent) },
      { path: 'tablex', loadComponent: () => import('./features/solutions/firmadigital/tablex.component').then(c => c.TablexComponent)},
      { path: 'horasadicionales', loadComponent: () => import('./features/soporte/horas.component').then(c => c.HorasComponent)},
      { path: 'soporte-ssl', loadComponent: () => import('./features/soporte/soporte-ssl.component').then(c => c.SoporteSslComponent)},
      { path: 'soporte-fe', loadComponent: () => import('./features/soporte/soporte-fe.component').then(c => c.SoporteFeComponent)},
    ]
  }
];