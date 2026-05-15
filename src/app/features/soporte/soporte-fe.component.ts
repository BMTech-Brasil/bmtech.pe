import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-soporte-fe',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-20 relative overflow-hidden mt-20">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-6 uppercase tracking-wider backdrop-blur-md">
          <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> SUNAT / IOFE
        </div>
        <h1 class="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Auto-Soporte <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Facturación Electrónica</span>
        </h1>
        <p class="text-lg text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
          En esta sección encontrará documentos elaborados por el área de soporte de BMTech, con los cuales se establecen los mecanismos para el registro del certificado en la página de SUNAT y su correcta instalación.
        </p>
      </div>
    </section>

    <div class="bg-bm-red text-white py-4 relative z-20 shadow-md">
      <div class="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
        <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        </div>
        <p class="text-sm md:text-base font-medium">
          ¿Necesita el <strong>Facturador SUNAT</strong> para iniciar su integración?
        </p>
        <a href="#" class="bg-white text-bm-red font-bold px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition shadow-sm whitespace-nowrap">
          Descargar Aquí
        </a>
      </div>
    </div>

    <section class="py-16 bg-gray-50 border-b border-gray-200">
      <div class="container mx-auto px-6 max-w-6xl">
        <h2 class="text-2xl font-bold text-bm-blue mb-8 text-center">Procedimientos Principales</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (guide of mainGuides(); track guide.title) {
            <a [href]="guide.url" class="group bg-white rounded-2xl p-6 border-2 border-transparent hover:border-bm-red shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer transform hover:-translate-y-1">
              <div class="w-16 h-16 bg-red-50 text-bm-red rounded-full flex items-center justify-center mb-4 group-hover:bg-bm-red group-hover:text-white transition-colors duration-300" [innerHTML]="guide.icon"></div>
              <h3 class="font-bold text-gray-800 text-sm uppercase tracking-wide leading-snug group-hover:text-bm-red transition-colors">{{ guide.title }}</h3>
            </a>
          }
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="grid lg:grid-cols-3 gap-8">
          
          <div class="lg:col-span-2">
            <div class="flex items-center gap-3 mb-6">
              <svg class="w-8 h-8 text-bm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <h2 class="text-2xl font-bold text-gray-900">Herramientas Útiles</h2>
            </div>
            <p class="text-sm text-gray-600 mb-6">Se ofrece aquí respuesta a una selección de las necesidades más frecuentes planteadas por los clientes del servicio de Facturación Electrónica.</p>
            
            <div class="grid sm:grid-cols-2 gap-4">
              @for (tool of tools(); track tool.name) {
                <a [href]="tool.url" class="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white hover:border-bm-blue hover:shadow-md transition-all group cursor-pointer">
                  <div class="w-10 h-10 rounded-lg bg-blue-100 text-bm-blue flex items-center justify-center shrink-0 group-hover:bg-bm-blue group-hover:text-white transition-colors" [innerHTML]="tool.icon"></div>
                  <div>
                    <h4 class="font-bold text-gray-800 text-sm group-hover:text-bm-blue transition-colors">{{ tool.name }}</h4>
                    <span class="text-[11px] text-gray-500 uppercase font-bold tracking-wider mt-1 block">Acceder →</span>
                  </div>
                </a>
              }
            </div>
          </div>

          <div>
            <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 h-full">
              <div class="w-12 h-12 bg-bm-red text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-bm-blue mb-4">Preguntas Frecuentes</h3>
              <p class="text-sm text-gray-600 mb-8 leading-relaxed">
                En el siguiente enlace, obtendrá respuesta a una selección de las preguntas más frecuentes planteadas por los clientes del servicio de Facturación Electrónica.
              </p>
              <a href="#" class="inline-flex items-center justify-center w-full bg-bm-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors shadow-md gap-2">
                Ver Preguntas Frecuentes
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-900 text-center relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">¿Requiere ayuda de un Ingeniero?</h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Contrate nuestra Bolsa de Horas si necesita que uno de nuestros expertos configure el Facturador SUNAT o intere el certificado en su sistema ERP remotamente.
        </p>
        <a routerLink="/solutions/horasadicionales" class="inline-block bg-bm-red text-white px-8 py-3.5 rounded-lg font-bold hover:bg-red-700 transition shadow-lg shadow-red-900/20 transform hover:-translate-y-1">
          Contratar Soporte Remoto
        </a>
      </div>
    </section>
  `
})
export class SoporteFeComponent {

  mainGuides = signal([
    { 
      title: 'Registra tu Certificado en SUNAT', 
      url: '#', 
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    },
    { 
      title: 'Crea tu Usuario Secundario', 
      url: '#', 
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>'
    },
    { 
      title: 'Descarga la Raíz e Intermedio', 
      url: '#', 
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>'
    },
    { 
      title: 'Cambia el Alias del Certificado', 
      url: '#', 
      icon: '<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>'
    }
  ]);

  tools = signal([
    { 
      name: 'Certificado Digital de Prueba SUNAT', 
      url: '#', 
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>'
    },
    { 
      name: 'Convertir .PFX o .P12 a formato .CER y .KEY', 
      url: '#', 
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>'
    },
    { 
      name: 'Cambiar clave de .PFX o .P12', 
      url: '#', 
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>'
    },
    { 
      name: 'Cambiar extensión de .PFX a .P12', 
      url: '#', 
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>'
    },
    { 
      name: 'Cambiar "Alias" de .PFX o .P12', 
      url: '#', 
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>'
    },
    { 
      name: 'Descarga Certificados Uanataca', 
      url: '#', 
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>'
    }
  ]);
}