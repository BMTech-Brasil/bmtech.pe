import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repositorio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden mt-20">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-6 uppercase tracking-wider backdrop-blur-md">
          <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> Documentación Oficial
        </div>
        <h1 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Repositorio <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">BMCERT CA</span>
        </h1>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          En este sitio se publican los archivos, manuales y documentos normativos referentes a la Entidad de Certificación BMCERT y su acreditación oficial.
        </p>
      </div>
    </section>

    <section class="py-12 bg-gray-50 relative z-20 -mt-10 border-b border-gray-200">
      <div class="container mx-auto px-4 md:px-6 max-w-5xl">
        
        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-10">
          
          <div class="bg-gray-100 border-b border-gray-200 p-6 flex items-center gap-4">
            <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-bm-blue">Enlaces y Documentos</h2>
              <p class="text-sm text-gray-500">Documentación normativa y jerarquía de confianza pública.</p>
            </div>
          </div>
          
          <div class="p-6 md:p-8">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              @for (doc of documentos(); track doc.titulo) {
                <a [href]="doc.url" [attr.download]="doc.formato === 'P7B' ? '' : null" target="_blank" rel="noopener noreferrer" class="group bg-gray-50 border border-gray-200 rounded-xl p-5 flex flex-col items-start gap-4 hover:bg-white hover:border-bm-blue hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div>
                    <h3 class="font-bold text-gray-800 text-sm mb-2 group-hover:text-bm-blue transition-colors leading-snug">{{ doc.titulo }}</h3>
                    <p class="text-xs text-gray-500 mb-4">{{ doc.desc }}</p>
                    <span class="text-[11px] font-bold text-bm-blue uppercase tracking-wider flex items-center gap-1 group-hover:text-bm-red transition-colors">
                      Descargar {{ doc.formato }}
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    </span>
                  </div>
                </a>
              }

            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-10">
          <div class="bg-gray-50 border-b border-gray-200 p-6 flex items-center gap-4">
            <div class="w-12 h-12 bg-gray-200 text-gray-500 rounded-lg flex items-center justify-center shrink-0 border border-gray-300 shadow-sm">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-700">Documentos Anteriores</h2>
              <p class="text-sm text-gray-500">Versiones previas del repositorio documental.</p>
            </div>
          </div>
          
          <div class="p-6 md:p-8">
            <ul class="space-y-4">
              @for (doc of documentosAnteriores(); track doc.titulo) {
                <li class="flex items-start">
                  <a [href]="doc.url" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-bm-blue hover:text-bm-red transition-colors font-medium">
                    <svg class="w-5 h-5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    <span class="underline underline-offset-4 decoration-blue-200 hover:decoration-bm-red">{{ doc.titulo }}</span>
                  </a>
                </li>
              }
            </ul>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          
          <div class="bg-gray-100 border-b border-gray-200 p-6 flex items-center gap-4">
            <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-bm-blue">Entidades de Registro</h2>
              <p class="text-sm text-gray-500">Red de entidades autorizadas bajo nuestra acreditación.</p>
            </div>
          </div>
          
          <div class="p-6 md:p-8">
            <div class="grid gap-4">
              
              @for (entidad of entidadesRegistro(); track entidad.nombre) {
                <div class="flex items-center justify-between p-5 bg-gray-50 border border-gray-200 rounded-lg hover:border-bm-blue transition-colors">
                  <div class="flex items-center gap-4">
                    <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                    <span class="font-bold text-gray-800 text-sm md:text-base">{{ entidad.nombre }}</span>
                  </div>
                  <span class="text-xs font-bold bg-green-100 text-green-700 px-4 py-1.5 rounded-full uppercase tracking-wider border border-green-200">{{ entidad.estado }}</span>
                </div>
              }

            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class RepositorioComponent {
  
  documentos = signal([
    {
      titulo: 'Certificados Raíz e Intermediario públicos',
      desc: 'Descargue la jerarquía de confianza de BMCERT CA para validación.',
      url: 'assets/repositorio/BMCertChain.p7b',
      formato: 'P7B',
      icono: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>'
    },
    {
      titulo: 'Declaración de Prácticas de Certificación',
      desc: 'Documento normativo (DPC) sobre las operaciones de certificación.',
      url: 'assets/repositorio/CPS_BMCERT.pdf',
      formato: 'PDF',
      icono: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>'
    },
    {
      titulo: 'Políticas de Certificación',
      desc: 'Lineamientos aplicables a los distintos tipos de certificados digitales.',
      url: 'assets/repositorio/Polit-de-Certi-CP-BMCERT.pdf',
      formato: 'PDF',
      icono: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>'
    }
  ]);

  documentosAnteriores = signal([
    {
      titulo: 'Declaración de Prácticas de Certificación versión 1.1',
      url: 'assets/repositorio/CPS_BMCERT_v1.1.pdf'
    },
    {
      titulo: 'Declaración de Prácticas de Certificación versión 1.2',
      url: 'assets/repositorio/CPS_BMCERT_v1.2.pdf'
    }
  ]);

  entidadesRegistro = signal([
    {
      nombre: 'ER ABC IDENTIDAD DIGITAL S.A.C.',
      estado: 'Autorizada'
    }
  ]);
}