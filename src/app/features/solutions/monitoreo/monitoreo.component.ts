import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-monitoramento',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-gray-50 border-b border-gray-200 mt-20 py-4 relative z-20 shadow-sm">
      <div class="container mx-auto px-2 md:px-6">
        <div class="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2 md:gap-4">

          @for (partner of partners(); track partner.name) {
            <div class="group flex items-center justify-center w-20 h-14 md:w-24 md:h-16 lg:w-28 lg:h-16 p-2 rounded-lg border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
               <img [src]="partner.img" [alt]="partner.name" 
                    class="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
               
               <span class="hidden text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-bm-blue transition-colors select-none text-center leading-tight">
                 {{ partner.name }}
               </span>
            </div>
          }
        </div>
      </div>
    </div>

  <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-8 uppercase tracking-wider backdrop-blur-md">
          <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> Visibilidad y Control
        </div>
        
        <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          Monitoreo y Prevención <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-bm-red">de Pérdida de Datos (DLP)</span>.
        </h1>
        
        <p class="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
          Proteja la información sensible de su empresa, gestione todos los dispositivos móviles corporativos e impulse la productividad de su equipo, ya sea que estén en la oficina o en trabajo remoto.
        </p>
      </div>
    </section>

    <section class="py-16 bg-white border-b border-gray-100">
      <div class="container mx-auto px-6 max-w-4xl text-center">
        <h2 class="text-3xl font-bold text-bm-blue mb-4">Elija la solución ideal para su desafío</h2>
        <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
        <p class="text-gray-600 text-lg">
          No existe una herramienta única que sirva para todas las situaciones. BMTech ofrece un portafolio robusto con las mejores plataformas globales para garantizar que su entorno corporativo se mantenga productivo, auditable y 100% seguro contra fugas de información.
        </p>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-3 gap-10 items-stretch">
          
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <div class="h-2 bg-orange-500"></div>
            <div class="p-8 flex-grow flex flex-col">
              <div class="flex justify-between items-start mb-6">
                <img src="partners/teramind.svg" alt="Teramind" class="h-10 w-auto object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="hidden font-bold text-xl text-gray-800 tracking-wider">TERAMIND</span>
                <span class="bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1 rounded-full border border-orange-200">DLP y Amenazas Internas</span>
              </div>
              
              <h3 class="text-2xl font-bold text-orange-600 mb-3">Teramind DLP</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                La plataforma más potente para la Prevención de Pérdida de Datos (DLP) y el Análisis de Comportamiento de Usuarios (UBA). Ideal para detectar amenazas internas, evitar que archivos confidenciales salgan de la empresa por correo electrónico, memorias USB o la nube, y grabar pantallas en video para auditoría legal.
              </p>
              
              <ul class="space-y-2 mb-8 text-sm text-gray-600">
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Prevención contra Fuga de Datos</li>
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Reconocimiento Óptico de Caracteres (OCR)</li>
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Bloqueo automático de acciones sospechosas</li>
              </ul>
              
              <a routerLink="/solutions/teramind" class="block w-full text-center bg-gray-50 border border-gray-200 text-orange-600 py-3 rounded-lg font-bold group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-colors mt-auto">
              Conocer Teramind &rarr;
              </a>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <div class="h-2 bg-green-500"></div>
            <div class="p-8 flex-grow flex flex-col">
              <div class="flex justify-between items-start mb-6">
                <img src="partners/kickidler.png" alt="Kickidler" class="h-10 w-auto object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="hidden font-bold text-xl text-gray-500 tracking-wider">KICKIDLER</span>
                <span class="bg-green-50 text-green-500 text-xs font-bold px-3 py-1 rounded-full border border-green-100">Productividad</span>
              </div>
              
              <h3 class="text-2xl font-bold text-green-500 mb-3">Kickidler</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                La solución definitiva para el monitoreo de empleados de nueva generación. Centrada en el análisis de productividad, seguimiento del tiempo de trabajo (time tracking) y control de asistencia. Excelente para gestionar equipos remotos o híbridos con informes detallados de eficiencia.
              </p>
              
              <ul class="space-y-2 mb-8 text-sm text-gray-600">
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Visualización de pantallas en tiempo real (Cuadrícula)</li>
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Análisis detallado de productividad</li>
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Registro de teclas (Keylogger) y Control Remoto</li>
              </ul>
              
               <a routerLink="/solutions/kickidler" class="block w-full text-center bg-gray-50 border border-gray-200 text-green-600 py-3 rounded-lg font-bold group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors mt-auto">
              Conocer Kickidler &rarr;
              </a>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
            <div class="h-2 bg-purple-600"></div>
            <div class="p-8 flex-grow flex flex-col">
              <div class="flex justify-between items-start mb-6">
                <img src="partners/hexnode.svg" alt="Hexnode" class="h-10 w-auto object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="hidden font-bold text-xl text-gray-800 tracking-wider">HEXNODE</span>
                <span class="bg-purple-50 text-purple-600 text-xs font-bold px-3 py-1 rounded-full border border-purple-100">UEM / MDM</span>
              </div>
              
              <h3 class="text-2xl font-bold text-purple-600 mb-3">Hexnode UEM</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                Plataforma de Gestión Unificada de Endpoints (UEM). Fundamental si su empresa proporciona teléfonos móviles, tablets o computadoras a los colaboradores. Permite bloquear, borrar datos de forma remota, forzar actualizaciones y crear el "Modo Quiosco" (Kiosk Mode) para dispositivos de punto de venta o logística.
              </p>
              
              <ul class="space-y-2 mb-8 text-sm text-gray-600">
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Gestión de Android, iOS, Windows y Mac</li>
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Kiosk Mode (Bloqueo en una sola App)</li>
                <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Implementación de Apps y políticas de seguridad</li>
              </ul>
              
              <a routerLink="/solutions/hexnode" class="block w-full text-center bg-gray-50 border border-gray-200 text-purple-600 py-3 rounded-lg font-bold group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-colors mt-auto">
              Conocer Hexnode &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-900 text-center relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-3xl font-bold text-white mb-6">¿Dudas sobre qué herramienta implementar?</h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Nuestro equipo de arquitectos de seguridad realiza una evaluación gratuita de su entorno y recomienda la solución con la mejor relación costo-beneficio para su empresa.
        </p>
        <button class="bg-bm-red text-white px-10 py-4 rounded font-bold text-lg hover:bg-red-700 transition shadow-lg transform hover:-translate-y-1">
          Hablar con un Consultor de BMTech
        </button>
      </div>
    </section>
  `
})
export class MonitoramentoComponent {

    partners = signal([
    { name: 'Sectigo', img: 'partners/sectigo.svg' },
    { name: 'Teramind', img: 'partners/teramind.svg' },
    { name: 'Hexnode', img: 'partners/hexnode.svg' },
    { name: 'KickIdler', img: 'partners/kickidler.png' },
    { name: 'Portal Flex', img: 'partners/pfx.svg' },
    { name: 'Keytalk', img: 'partners/keytalk.svg' }
  ]);
}