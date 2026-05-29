import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-soporte-ssl',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
   <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-20 pb-32 relative overflow-hidden mt-20">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-6 uppercase tracking-wider backdrop-blur-md">
          <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Centro de Ayuda
        </div>
        <h1 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Auto-Soporte <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">SSL</span>
        </h1>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          En esta sección encontrará documentos, herramientas y manuales elaborados por el área de ingeniería de BMTech para la adecuada generación, instalación y configuración de certificados SSL en múltiples plataformas.
        </p>
      </div>
    </section>

    <section class="py-16 bg-gray-50 border-b border-gray-200">
      <div class="container mx-auto px-6 max-w-6xl">
        <h2 class="text-2xl font-bold text-bm-blue mb-8 text-center">Herramientas de Diagnóstico y Conversión</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          @for (tool of tools(); track tool.name) {
            
            @if (tool.isExternal) {
              <a [href]="tool.url" target="_blank" rel="noopener noreferrer" class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-bm-blue hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-pointer min-h-[140px]">
                <span class="text-sm font-bold text-gray-700 leading-tight group-hover:text-bm-blue transition-colors">{{ tool.name }}</span>
              </a>
            } 
            @else {
              <a [routerLink]="tool.route" class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-bm-blue hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-pointer min-h-[140px]"> 
                <span class="text-sm font-bold text-gray-700 leading-tight group-hover:text-bm-blue transition-colors">{{ tool.name }}</span>
              </a>
            }

          }
        </div>
        
        <div>
          <p class="text-xs text-gray-500 mt-5 flex items-start gap-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
          <svg class="w-4 h-4 text-bm-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          * Archivo CSR en un formato reconocido por la Autoridad Certificadora. Las configuraciones aplican para entornos estándar; entornos customizados podrían diferir.
        </p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Procedimientos por Servidor</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-gray-600">Guías paso a paso para instalar su certificado SSL de forma correcta.</p>
        </div>
          
        <div class="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
          <table class="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr class="bg-gray-100 border-b border-gray-200 uppercase text-[11px] tracking-wider">
                <th class="p-4 font-bold text-gray-600">Tipo de Servidor</th>
                <th class="p-4 font-bold text-gray-600 text-center">Instalar el Certificado</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 text-sm">
              @for (server of serverGuides(); track server.name) {
                <tr class="hover:bg-blue-50/50 transition-colors">
                  <td class="p-4 font-bold text-gray-800">{{ server.name }}</td>
                  <td class="p-4 text-center">
                    @if (server.install) { 
                      <a [href]="server.install" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-[11px] font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                        VER GUÍA <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a> 
                    } @else { 
                      <span class="text-gray-400 font-medium text-xs">N/A</span> 
                    }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 border-t border-gray-200">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Configuraciones Complementarias</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-gray-600 max-w-3xl mx-auto">
            Implemente cifrado seguro (HSTS) y garantice que sus usuarios siempre naveguen por el puerto seguro (HTTPS), redireccionando correctamente el tráfico HTTP y las consultas a su IP.
          </p>
        </div>

        <div class="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
          <table class="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr class="bg-gray-100 border-b border-gray-200 uppercase text-[11px] tracking-wider">
                <th class="p-4 font-bold text-gray-600">Tipo de Servidor</th>
                <th class="p-4 font-bold text-gray-600 text-center">Cifrado Seguro (HSTS)</th>
                <th class="p-4 font-bold text-gray-600 text-center">Redirección HTTP a HTTPS</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 text-sm">
              @for (adv of advancedGuides(); track adv.name) {
                <tr class="hover:bg-blue-50/50 transition-colors">
                  <td class="p-4 font-bold text-gray-800">{{ adv.name }}</td>
                  <td class="p-4 text-center">
                    @if (adv.hsts) { <a [href]="adv.hsts" target="_blank" rel="noopener noreferrer" class="text-bm-red font-bold text-xs hover:underline">VER PDF</a> }
                    @else { <span class="text-gray-400 text-xs">N/A</span> }
                  </td>
                  <td class="p-4 text-center">
                    @if (adv.http2https) { <a [href]="adv.http2https" target="_blank" rel="noopener noreferrer" class="text-bm-red font-bold text-xs hover:underline">VER PDF</a> }
                    @else { <span class="text-gray-400 text-xs">N/A</span> }
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-900 text-center relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">¿Necesita asistencia de un Ingeniero?</h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Si su servidor tiene una arquitectura compleja o requiere apoyo en tiempo real, nuestro equipo de soporte técnico avanzado puede realizar la instalación por usted.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a routerLink="/solutions/horasadicionales" class="bg-bm-red text-white px-8 py-3.5 rounded-lg font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/20 transform hover:-translate-y-1">
            Contratar Soporte Remoto
          </a>
          <a href="mailto:soporte@bmtech.pe" class="border border-gray-600 text-gray-300 px-8 py-3.5 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition hover:-translate-y-1">
            Contactar a soporte&#64;bmtech.pe
          </a>
        </div>
      </div>
    </section>
  `
})
export class SoporteSslComponent {

  tools = signal([
    { 
      name: 'Asegura tu Servidor', 
      url:'https://entrust.ssllabs.com/', 
      isExternal: true,
      icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>'
    },
    { 
      name: 'Convertir PFX a KEY/CRT', 
      route: '/convertir-pfx',
      isExternal: false,
      icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>'
    },
    { 
      name: 'Verifica tu CSR', 
      route: '/verifica-csr', 
      isExternal: false,
      icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>'
    },
    { 
      name: 'Verifica tu Certificado', 
      route: '/verifica-certificado', 
      isExternal: false,
      icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>'
    },
    { 
      name: 'Concordancia de Llaves', 
      route: '/concordancia-llaves', 
      isExternal: false,
      icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>'
    },
    { 
      name: 'Descarga KeyStore Explorer', 
      url: 'https://keystore-explorer.org/downloads.html', 
      isExternal: true,
      icon: '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>'
    }
  ]);

  serverGuides = signal([
    { name: 'Apache CentOS', install: 'assets/guias/install-apache-centos.pdf' },
    { name: 'Apache Ubuntu', install: 'assets/guias/install-apache-ubuntu.pdf' },
    { name: 'Apache Windows', install: 'assets/guias/install-apache-windows.pdf' },
    { name: 'ArcGIS', install: 'assets/guias/install-arcgis.pdf' },
    { name: 'cPanel', install: 'assets/guias/install-cpanel.pdf' },
    { name: 'Glassfish', install: 'assets/guias/install-glassfish.pdf' },
    { name: 'IBM HTTP Server', install: 'assets/guias/install-ibm-http.pdf' },
    { name: 'JBoss', install: 'assets/guias/install-jboss.pdf' },
    { name: 'Juniper Secure Access VPN', install: 'assets/guias/install-juniper.pdf' },
    { name: 'Lotus Domino', install: 'assets/guias/install-lotus.pdf' },
    { name: 'Microsoft Exchange 2007', install: 'assets/guias/install-exchange-2007.pdf' },
    { name: 'Microsoft Exchange 2010', install: 'assets/guias/install-exchange-2010.pdf' },
    { name: 'Microsoft Exchange 2013', install: 'assets/guias/install-exchange-2013.pdf' },
    { name: 'Microsoft IIS 5 / 6', install: 'assets/guias/install-iis-5.pdf' },
    { name: 'Microsoft IIS 6.5+', install: 'assets/guias/install-iis-7.pdf' },
    { name: 'NGINX', install: 'assets/guias/install-nginx.pdf' },
    { name: 'Tomcat 8 y anteriores', install: 'assets/guias/install-tomcat-8.pdf' },
    { name: 'Tomcat 8.5+', install: 'assets/guias/install-tomcat-85.pdf' },
    { name: 'Weblogic', install: 'assets/guias/install-weblogic.pdf' },
    { name: 'WildFly', install: 'assets/guias/install-wildfly.pdf' },
    { name: 'Zimbra', install: 'assets/guias/install-zimbra.pdf' }
  ]);

  advancedGuides = signal([
    { name: 'Apache CentOS', hsts: 'assets/guias/Cifrado seguro apache.pdf', http2https: 'assets/guias/Redireccion http a https apache(httpd).pdf' },
    { name: 'Apache Ubuntu', hsts: 'assets/guias/Cifrado seguro apache.pdf', http2https: 'assets/guias/Redireccion http a https apache(apache2).pdf' },
    { name: 'Microsoft IIS 7+', hsts: 'assets/guias/Cifrado-seguro-windows-IIS.pdf', http2https: 'assets/guias/Redireccion http a https IIS 6.0.pdf' },
    { name: 'Tomcat 8.5+', hsts: 'assets/guias/Cifrado seguro Tomcat 8.5+.pdf', http2https: 'assets/guias/Redireccion-http-a-https-tomcat.pdf' },
    { name: 'Microsoft Exchange', hsts: 'assets/guias/hsts-exchange.pdf', http2https: null },
    { name: 'JBoss', hsts: 'assets/guias/Cifrado-seguro-jboss.pdf', http2https: null },
    { name: 'NGINX', hsts: 'assets/guias/Cifrado seguro nginx.pdf', http2https: 'assets/guias/Redireccion ip a dominio NGINX.pdf' }
  ]);
}