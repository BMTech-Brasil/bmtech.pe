import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import emailjs from '@emailjs/browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teramind',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
      <div class="bg-gray-50 border-b border-gray-200 mt-20 py-4 relative z-20 shadow-sm">
        <div class="container mx-auto px-2 md:px-6">
          <div class="flex flex-wrap lg:flex-nowrap justify-center items-start gap-8 md:gap-12">
          @for (group of partnerGroups(); track group.category) {
            <div class="flex flex-col items-center">
              <span class="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-200 pb-1 px-4">
                {{ group.category }}
              </span>
              
              <div class="flex flex-wrap justify-center gap-2 md:gap-4">
                @for (partner of group.items; track partner.name) {
                  <a [routerLink]="partner.url" class="group flex items-center justify-center w-20 h-14 md:w-24 md:h-16 lg:w-28 lg:h-16 p-2 rounded-lg border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer" [title]="partner.name">
                     <img [src]="partner.img" [alt]="partner.name" 
                          class="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                          onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                    
                     <span class="hidden text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-bm-blue transition-colors select-none text-center leading-tight">
                       {{ partner.name }}
                     </span>
                  </a>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>

    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center"><div>
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-orange-200 mb-6 uppercase tracking-wider">
            <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span> Prevención de Pérdida de Datos
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">Monitoreo de Usuarios & <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white">Prevención de Pérdida de Datos</span>
          </h1>
          <p class="text-lg text-gray-300 mb-8 leading-relaxed">
            Detecte amenazas internas, prevenga fugas de datos (DLP) y optimice la productividad de su equipo con la plataforma líder a nivel mundial.
          </p> 
          
          <div class="flex flex-wrap gap-4">
            <button (click)="openContactModal('Demostración de Teramind', $event)" class="bg-bm-red hover:bg-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded font-bold transition shadow-lg whitespace-nowrap">
              Agendar Demostración
            </button>
            <button (click)="openContactModal('Prueba de 15 días - Teramind', $event)" class="bg-white hover:bg-gray-100 text-bm-blue px-6 py-3 md:px-8 md:py-4 rounded font-bold transition shadow-lg whitespace-nowrap">
              Prueba de 15 Días
            </button>
            <button (click)="scrollToFeatures()" class="border border-white/30 hover:bg-white/10 text-white px-6 py-3 md:px-8 md:py-4 rounded font-bold transition whitespace-nowrap">
              Ver Funcionalidades
            </button>
          </div>

        </div>

        <div class="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20 shadow-2xl relative z-20">
          <div class="aspect-video rounded-lg overflow-hidden relative bg-black shadow-inner">
            <iframe [src]="safeVideoUrl" title="Presentación Teramind" class="absolute inset-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <section id="funcionalidades" class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">¿Por qué elegir Teramind?</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto"></div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-8 rounded-xl hover:-translate-y-2 transition duration-300 border-t-4 border-bm-blue shadow-sm hover:shadow-md">
            <h3 class="text-2xl font-bold text-bm-blue mb-4">Monitoreo de Actividad</h3>
            <p class="text-gray-600 text-base leading-relaxed">
              Grabe sesiones de pantalla, monitoree correos electrónicos, chats, transferencias de archivos e impresiones en tiempo real. Sepa exactamente qué ocurre en su red.
            </p>
          </div>

          <div class="bg-gray-50 p-8 rounded-xl hover:-translate-y-2 transition duration-300 border-t-4 border-bm-red shadow-sm hover:shadow-md">
            <h3 class="text-2xl font-bold text-bm-blue mb-4">DLP (Prevención de Pérdida de Datos)</h3>
            <p class="text-gray-600 text-base leading-relaxed">
              Bloquee automáticamente acciones sospechosas. Evite que datos sensibles (DNI, tarjetas, proyectos) sean copiados a USB o enviados por correo electrónico.
            </p>
          </div>

          <div class="bg-gray-50 p-8 rounded-xl hover:-translate-y-2 transition duration-300 border-t-4 border-bm-blue shadow-sm hover:shadow-md">
            <h3 class="text-2xl font-bold text-bm-blue mb-4">Análisis de Productividad</h3>
            <p class="text-gray-600 text-base leading-relaxed">
              Identifique cuellos de botella en el flujo de trabajo, analice el tiempo activo vs. inactivo y optimice el rendimiento de equipos remotos y presenciales.
            </p>
          </div>  
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-white mb-4">Niveles Teramind: Compare las Funcionalidades</h2>
          <p class="text-gray-300">Elija la versión ideal según la madurez de seguridad de su empresa.</p>
        </div>

        <div class="overflow-x-auto shadow-xl rounded-xl border border-gray-100 bg-white max-w-5xl mx-auto">
          <table class="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr class="bg-bm-blue text-white">
                <th class="p-4 font-bold text-sm uppercase tracking-wider w-1/4 rounded-tl-xl">Funcionalidad de Seguridad</th>
                <th class="p-4 font-bold text-center w-[18%] bg-white/5">Starter</th>
                <th class="p-4 font-bold text-center w-[18%] bg-white/10">UAM</th>
                <th class="p-4 font-bold text-center w-[18%] bg-white/5">DLP</th>
                <th class="p-4 font-bold text-center w-[18%] bg-bm-red rounded-tr-xl">Enterprise</th>
              </tr>
            </thead>
            <tbody class="text-sm text-gray-700 divide-y divide-gray-100">
              
              <tr class="hover:bg-gray-50 transition group">
                <td class="p-4 font-medium text-gray-800">Grabación de Pantalla y Reproducción</td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center bg-red-50/30 group-hover:bg-red-50/50"><svg class="w-5 h-5 mx-auto text-bm-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></td>
              </tr>

              <tr class="hover:bg-gray-50 transition group">
                <td class="p-4 font-medium text-gray-800">Monitoreo de Apps/Sitios Web</td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center bg-red-50/30 group-hover:bg-red-50/50"><svg class="w-5 h-5 mx-auto text-bm-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></td>
              </tr>

              <tr class="hover:bg-gray-50 transition group">
                <td class="p-4 font-medium text-gray-800">Análisis de Productividad</td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center bg-red-50/30 group-hover:bg-red-50/50"><svg class="w-5 h-5 mx-auto text-bm-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></td>
              </tr>

              <tr class="hover:bg-gray-50 transition group">
                <td class="p-4 font-medium text-gray-800">Gestión de Sesiones en Nube/RDP</td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center bg-red-50/30 group-hover:bg-red-50/50"><svg class="w-5 h-5 mx-auto text-bm-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></td>
              </tr>

              <tr class="hover:bg-gray-50 transition group">
                <td class="p-4 font-medium text-gray-800">Prevención de Pérdida de Datos (DLP)</td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center bg-red-50/30 group-hover:bg-red-50/50"><svg class="w-5 h-5 mx-auto text-bm-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></td>
              </tr>

              <tr class="hover:bg-gray-50 transition group">
                <td class="p-4 font-medium text-gray-800">Monitoreo de Transferencias (USB/Nube)</td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center bg-red-50/30 group-hover:bg-red-50/50"><svg class="w-5 h-5 mx-auto text-bm-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></td>
              </tr>

              <tr class="hover:bg-gray-50 transition group">
                <td class="p-4 font-medium text-gray-800">Monitoreo de Correo Electrónico</td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center bg-red-50/30 group-hover:bg-red-50/50"><svg class="w-5 h-5 mx-auto text-bm-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></td>
              </tr>

              <tr class="hover:bg-gray-50 transition group">
                <td class="p-4 font-medium text-gray-800">Reglas de Bloqueo y Alertas</td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></td>
                <td class="p-4 text-center bg-red-50/30 group-hover:bg-red-50/50"><svg class="w-5 h-5 mx-auto text-bm-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></td>
              </tr>

              <tr class="hover:bg-gray-50 transition group">
                <td class="p-4 font-medium text-gray-800">Análisis Forense y Cumplimiento</td>
                <td class="p-4 text-center"><span class="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200">Básico</span></td>
                <td class="p-4 text-center"><span class="text-xs font-bold text-bm-blue bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">Avanzado</span></td>
                <td class="p-4 text-center"><span class="text-xs font-bold text-bm-blue bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">Máximo</span></td>
                <td class="p-4 text-center bg-red-50/30 group-hover:bg-red-50/50"><span class="text-xs font-bold text-white bg-bm-red px-3 py-1.5 rounded-full shadow-sm">Total</span></td>
              </tr>

              <tr class="hover:bg-gray-50 transition group border-b border-gray-100">
                <td class="p-4 font-medium text-gray-800">OCR (Texto en Imágenes)</td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></td>
                <td class="p-4 text-center"><svg class="w-5 h-5 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></td>
                <td class="p-4 text-center bg-red-50/30 group-hover:bg-red-50/50"><svg class="w-5 h-5 mx-auto text-bm-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></td>
              </tr>
              
              <tr class="bg-gray-50">
                <td class="p-4"></td>
                <td class="p-4 text-center">
                  <button (click)="openContactModal('Teramind Starter', $event)" class="text-xs font-bold text-bm-blue border-2 border-bm-blue px-4 py-2.5 rounded hover:bg-bm-blue hover:text-white transition w-full">Cotización</button>
                </td>
                <td class="p-4 text-center">
                  <button (click)="openContactModal('Teramind UAM', $event)" class="text-xs font-bold text-bm-blue border-2 border-bm-blue px-4 py-2.5 rounded hover:bg-bm-blue hover:text-white transition w-full">Cotización</button>
                </td>
                <td class="p-4 text-center">
                  <button (click)="openContactModal('Teramind DLP', $event)" class="text-xs font-bold text-bm-blue border-2 border-bm-blue px-4 py-2.5 rounded hover:bg-bm-blue hover:text-white transition w-full">Cotización</button>
                </td>
                <td class="p-4 text-center bg-red-50/30">
                  <button (click)="openContactModal('Teramind Enterprise', $event)" class="text-xs font-bold text-white bg-bm-red border-2 border-bm-red px-4 py-2.5 rounded hover:bg-red-800 hover:border-red-800 transition w-full shadow-md">Cotización</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-16 border-y border-gray-200">
      <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-bm-blue mb-6">Cumplimiento Garantizado</h2>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <span class="text-green-600 font-bold">✓</span>
              <span class="text-gray-700">Cumplimiento total con la <strong>Ley de Protección de Datos Personales</strong></span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-600 font-bold">✓</span>
              <span class="text-gray-700">Auditoría forense detallada</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-600 font-bold">✓</span>
              <span class="text-gray-700">Reportes automatizados para gerentes</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <p class="text-bm-blue font-bold text-xl mb-2">Reconocido Mundialmente</p>
          <p class="text-gray-500 mb-6">Elegida como la mejor solución de Insider Threat por Gartner Peer Insights.</p>
          <div class="flex justify-center gap-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div class="flex flex-col items-center gap-2">
              <div class="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center p-2.5 shadow-sm">
                <img src="ibm.svg" alt="IBM" class="w-full h-full object-contain">
              </div>
              <span class="text-[10px] font-bold text-gray-500 uppercase tracking-wider">IBM</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <div class="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center p-2 shadow-sm">
                <img src="upwork.svg" alt="UpWork" class="w-full h-full object-contain">
              </div>
              <span class="text-[10px] font-bold text-gray-500 uppercase tracking-wider">UpWork</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <div class="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center p-2 shadow-sm">
                <img src="bnp.svg" alt="BNP Paribas" class="w-full h-full object-contain">
              </div>
              <span class="text-[10px] font-bold text-gray-500 uppercase tracking-wider text-center leading-tight">BNP<br>Paribas</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    @if (activeModal() !== null) {
      <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>
        
        <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 transform transition-all animate-fade-in-up max-h-[90vh] overflow-y-auto">
          
          <button (click)="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          @if (activeModal() === 'CONTACT') {
            <div>
              <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Solicitar Cotización</h3>
              <p class="text-gray-600 mb-6">Complete los datos a continuación para recibir una propuesta comercial y orientación sobre la solución <strong>{{ selectedProductName() }}</strong>.</p>
              
              <form (submit)="onSubmitContact($event)" class="space-y-4">
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Nombre Completo *</label>
                    <input type="text" name="user_name" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Correo Corporativo *</label>
                    <input type="email" name="user_email" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Teléfono / WhatsApp *</label>
                    <input type="tel" name="user_phone" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Nombre de la Empresa</label>
                    <input type="text" name="company_name" [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Producto Deseado</label>
                  <input type="text" name="product_subject" [value]="selectedProductName()" readonly class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed outline-none">
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Detalles del Proyecto (Opcional)</label>
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="¿Cuántos usuarios desea monitorear? ¿Necesita DLP?" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
                </div>

                <button type="submit" [disabled]="isSubmitting() || submitSuccess()" 
                        [ngClass]="{'bg-green-500 hover:bg-green-600': submitSuccess(), 'bg-bm-blue hover:bg-blue-900': !submitSuccess()}"
                        class="w-full text-white font-bold py-3 px-4 rounded transition shadow-md flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  
                  @if (isSubmitting()) {
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  } @else if (submitSuccess()) {
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    ¡Solicitud Enviada!
                  } @else {
                    Enviar Solicitud
                  }
                </button>
              </form>
            </div>
          }
        </div>
      </div>
    }
    `
})
export class TeramindComponent {
  partnerGroups = signal([
    {
      category: 'SSL',
      items: [
        { name: 'Sectigo', img: 'partners/sectigo.svg', url: '/solutions/sectigo' },
        { name: 'GlobalSign', img: 'partners/globalsign.svg', url: '/solutions/globalsign' },
        { name: 'DigiCert', img: 'partners/digicert.svg', url: '/solutions/digicert' }
      ]
    },
    {
      category: 'Firma Digital',
      items: [
        { name: 'PFX', img: 'partners/pfx.svg', url: '/solutions/portal-flex' },
        { name: 'Tablex', img: 'partners/tablex.svg', url: '/solutions/tablex' }
      ]
    },
    {
      category: 'Monitoreo',
      items: [
        { name: 'Teramind', img: 'partners/teramind.svg', url: '/solutions/teramind' },
        { name: 'Hexnode', img: 'partners/hexnode.svg', url: '/solutions/hexnode' },
        { name: 'KickIdler', img: 'partners/kickidler.png', url: '/solutions/kickidler' }
      ]
    }
  ]);

  private sanitizer = inject(DomSanitizer);
  videoId = 'MchiQp7d57s';

  get safeVideoUrl(): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${this.videoId}?rel=0&modestbranding=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  activeModal = signal<'CONTACT' | null>(null);
  selectedProductName = signal<string>('');
  isSubmitting = signal(false);
  submitSuccess = signal(false);

  openContactModal(productName: string, event: Event) {
    event.preventDefault();
    this.selectedProductName.set(productName);
    this.activeModal.set('CONTACT');
    this.submitSuccess.set(false);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.activeModal.set(null);
    document.body.style.overflow = 'auto';
  }

  scrollToFeatures() {
    const element = document.getElementById('funcionalidades');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  async onSubmitContact(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    
    this.isSubmitting.set(true);

    try {
      await emailjs.sendForm(
        'service_4c3w7jo',
        'template_8m2pl9r',
        form,
        'R_3WXFqcku2A9Eysn'
      );
      
      this.submitSuccess.set(true);
      
      setTimeout(() => {
        this.closeModal();
        this.submitSuccess.set(false);
        form.reset();
      }, 3000);

    } catch (error) {
      console.error('Error al enviar el correo mediante EmailJS', error);
      alert('Ocurrió un error de comunicación. Por favor, inténtelo nuevamente o contáctenos por WhatsApp.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}