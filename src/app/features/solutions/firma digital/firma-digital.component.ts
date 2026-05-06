import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-firma-digital',
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
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-blue-100 mb-6 uppercase tracking-wider">
            <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> INDECOPI / IOFE
          </div>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Firma Digital con el mismo <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Valor Legal y Probatorio</span>.
          </h1>
          <p class="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            Agiliza tus trámites, firma contratos y factura electrónicamente con total seguridad. Nuestros Certificados Digitales cumplen con la <strong>Ley N° 27269</strong> de Firmas y Certificados Digitales del Perú.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button (click)="openContactModal('Cotización Firma Digital', $event)" class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-lg shadow-red-900/20 transform hover:-translate-y-1">
              Solicitar Cotización
            </button>
          </div>
        </div>

        <div class="hidden lg:flex justify-center relative perspective-1000">
          <div class="relative z-10 transform transition-transform duration-500 hover:scale-105">
            <div class="bg-white rounded-xl shadow-2xl p-6 w-80 border border-gray-200">
              <div class="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div class="h-2 bg-gray-100 rounded w-full mb-2"></div>
              <div class="h-2 bg-gray-100 rounded w-5/6 mb-2"></div>
              <div class="h-2 bg-gray-100 rounded w-full mb-8"></div>
              
              <div class="border-2 border-dashed border-green-500 p-4 rounded-lg bg-green-50 flex items-center gap-3">
                <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <p class="text-xs font-bold text-green-700">Firmado Digitalmente</p>
                  <p class="text-[10px] text-green-600">Válido por INDECOPI</p>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full -z-10"></div>
        </div>
      </div>
    </section>

    <section class="bg-white py-12 border-b border-gray-100 shadow-sm relative z-20 -mt-2">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
          <div class="px-4">
            <p class="text-4xl font-bold text-bm-blue mb-1">Ley</p>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-500">N° 27269</p>
            <p class="text-[10px] text-gray-400 mt-2">Mismo valor que la firma manuscrita.</p>
          </div>
          <div class="px-4">
            <p class="text-4xl font-bold text-bm-blue mb-1">SUNAT</p>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-500">Facturación</p>
            <p class="text-[10px] text-gray-400 mt-2">100% compatible con emisión electrónica.</p>
          </div>
          <div class="px-4">
            <p class="text-4xl font-bold text-bm-blue mb-1">OSCE</p>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-500">Contrataciones</p>
            <p class="text-[10px] text-gray-400 mt-2">Válido para licitaciones con el Estado.</p>
          </div>
          <div class="px-4">
            <p class="text-4xl font-bold text-bm-blue mb-1">Cero</p>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-500">Repudio</p>
            <p class="text-[10px] text-gray-400 mt-2">Garantiza la autoría e integridad del documento.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Portabilidad y Seguridad en tus manos</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-gray-600 text-lg">
            Nuestros certificados digitales se entregan en dispositivos criptográficos físicos de alta seguridad (Hardware Criptográfico), protegiendo tu clave privada contra robos y copias. Elige el formato que mejor se adapte a tu empresa.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div class="h-48 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6 border-b border-gray-100 relative">
              <div class="absolute top-4 right-4 bg-blue-100 text-bm-blue text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Más popular</div>
              <svg class="w-24 h-24 text-bm-blue opacity-80 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.85.567-4.167"></path>
                <rect x="8" y="16" width="8" height="6" rx="1" fill="currentColor" class="text-bm-blue"></rect>
              </svg>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Token USB Criptográfico</h3>
              <p class="text-gray-600 mb-6 text-sm leading-relaxed">
                Dispositivo similar a un USB tradicional, pero diseñado específicamente para almacenar certificados. Es portátil, fácil de usar (Plug & Play) y no requiere equipo adicional para conectarlo a la PC.
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-green-500 font-bold">✓</span> Conexión directa al puerto USB</li>
                <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-green-500 font-bold">✓</span> Ideal para profesionales independientes</li>
                <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-green-500 font-bold">✓</span> Contraseña PIN de seguridad</li>
              </ul>
              <button (click)="openContactModal('Firma Digital - Token USB', $event)" class="w-full border-2 border-bm-blue text-bm-blue py-3 rounded-lg font-bold hover:bg-bm-blue hover:text-white transition">Cotizar Token</button>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div class="h-48 bg-gradient-to-br from-red-50 to-white flex items-center justify-center p-6 border-b border-gray-100">
              <div class="relative group-hover:scale-110 transition-transform">
                <div class="w-32 h-20 bg-bm-blue rounded-xl shadow-inner border-2 border-white flex items-center px-4 relative overflow-hidden">
                  <div class="w-8 h-6 bg-yellow-400 rounded-sm opacity-80 border border-yellow-500"></div>
                  <div class="absolute right-[-10px] top-[-10px] w-20 h-20 bg-white/10 rounded-full"></div>
                </div>
              </div>
            </div>
            <div class="p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Smartcard (Tarjeta Inteligente)</h3>
              <p class="text-gray-600 mb-6 text-sm leading-relaxed">
                Tarjeta plástica con un chip criptográfico incorporado. Requiere de una lectora de tarjetas conectada a la PC. Es el estándar corporativo para la identificación física y digital combinada de empleados.
              </p>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-green-500 font-bold">✓</span> Requiere Lectora de Smartcard</li>
                <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-green-500 font-bold">✓</span> Ideal para uso corporativo y oficinas</li>
                <li class="flex items-center gap-2 text-sm text-gray-700"><span class="text-green-500 font-bold">✓</span> Opción de impresión de fotocheck</li>
              </ul>
              <button (click)="openContactModal('Firma Digital - Smartcard', $event)" class="w-full border-2 border-bm-red text-bm-red py-3 rounded-lg font-bold hover:bg-bm-red hover:text-white transition">Cotizar Smartcard</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white border-t border-gray-100">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1">
             <div class="grid gap-6">
                <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm flex gap-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <svg class="w-6 h-6 text-bm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">Persona Jurídica (Representante Legal)</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">Vincula a un representante legal con su empresa (RUC). Indispensable para firmar contratos comerciales, laborales y trámites ante SUNAT y Ministerios.</p>
                  </div>
                </div>

                <div class="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm flex gap-4">
                  <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                    <svg class="w-6 h-6 text-bm-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">Persona Natural (Profesionales)</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">Identifica digitalmente a un individuo (DNI/CE). Usado por médicos, ingenieros, abogados y ciudadanos para firmar documentos a título personal.</p>
                  </div>
                </div>
             </div>
          </div>

          <div class="order-1 lg:order-2">
            <span class="text-bm-red font-bold tracking-widest uppercase mb-4 block text-sm">Elige el perfil adecuado</span>
            <h2 class="text-3xl font-bold text-bm-blue mb-6">¿Qué tipo de certificado necesitas?</h2>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              En BM Tech emitimos el certificado digital vinculándolo estrictamente a la identidad que requieres demostrar en el mundo digital peruano, pasando por un riguroso proceso de validación.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-3 text-gray-700">
                <span class="w-6 h-6 rounded-full bg-blue-100 text-bm-blue flex items-center justify-center text-sm font-bold shrink-0">1</span>
                Validación de Identidad Biométrica o Presencial
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <span class="w-6 h-6 rounded-full bg-blue-100 text-bm-blue flex items-center justify-center text-sm font-bold shrink-0">2</span>
                Emisión Rápida y Segura
              </li>
              <li class="flex items-center gap-3 text-gray-700">
                <span class="w-6 h-6 rounded-full bg-blue-100 text-bm-blue flex items-center justify-center text-sm font-bold shrink-0">3</span>
                Soporte Técnico en la Instalación
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 border-t border-gray-200">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span class="text-bm-red font-bold tracking-widest uppercase text-sm mb-4 block">Software Especializado</span>
            <h2 class="text-3xl md:text-4xl font-bold text-bm-blue mb-6">Conoce PFX: Tu plataforma de Firma Digital</h2>
            <p class="text-gray-600 mb-8 text-lg leading-relaxed">
              Tener el certificado (Token o Smartcard) es solo el primer paso. <strong>Portal Flex (PFX)</strong> es nuestro software de escritorio diseñado para optimizar el flujo de documentos de tu empresa, permitiéndote firmar PDFs de manera rápida, masiva y con total validez legal (INDECOPI).
            </p>
            
            <ul class="space-y-6 mb-10">
              <li class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-blue-100 text-bm-blue flex items-center justify-center shrink-0 mt-1">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path></svg>
                </div>
                <div>
                  <strong class="text-gray-900 block text-lg">Firma Masiva (Por Lotes)</strong>
                  <span class="text-sm text-gray-600 leading-relaxed">Selecciona decenas o cientos de contratos, boletas de pago o facturas y fírmalos todos a la vez ingresando tu PIN una sola vez. Ahorra horas de trabajo manual.</span>
                </div>
              </li>
              
              <li class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-blue-100 text-bm-blue flex items-center justify-center shrink-0 mt-1">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                  <strong class="text-gray-900 block text-lg">Estampado Visual y Código QR</strong>
                  <span class="text-sm text-gray-600 leading-relaxed">PFX incrusta automáticamente un sello gráfico en tus PDFs con la fecha, hora y datos del firmante, brindando una representación visual clara de la firma electrónica.</span>
                </div>
              </li>
            </ul>

            <a routerLink="/solutions/portal-flex" class="bg-bm-blue hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-bold transition shadow-lg inline-flex items-center justify-center gap-2 w-max cursor-pointer">
            Conozca PFX
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-gray-200 relative overflow-hidden shadow-xl lg:ml-8">
             <div class="border-b border-gray-100 pb-4 mb-6 flex items-center gap-2">
               <div class="w-3 h-3 rounded-full bg-red-400"></div>
               <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
               <div class="w-3 h-3 rounded-full bg-green-400"></div>
               <div class="ml-4 text-xs text-gray-400 font-medium">Portal Flex - BM Tech</div>
             </div>
             
             <div class="space-y-4">
               <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                 <div class="flex items-center gap-3">
                   <svg class="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                   <div>
                     <div class="text-sm font-bold text-gray-700">Contrato_Laboral_001.pdf</div>
                     <div class="text-xs text-green-500 font-bold flex items-center gap-1"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Firmado Correctamente</div>
                   </div>
                 </div>
               </div>

               <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                 <div class="flex items-center gap-3">
                   <svg class="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                   <div>
                     <div class="text-sm font-bold text-gray-700">Factura_Electronica_F001.pdf</div>
                     <div class="text-xs text-green-500 font-bold flex items-center gap-1"><svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Firmado Correctamente</div>
                   </div>
                 </div>
               </div>
               
               <div class="flex items-center justify-between bg-blue-50 p-3 rounded-lg border border-blue-100 animate-pulse">
                 <div class="flex items-center gap-3">
                   <svg class="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path></svg>
                   <div>
                     <div class="text-sm font-bold text-bm-blue">Boleta_Pago_Masiva.pdf</div>
                     <div class="text-xs text-blue-500 font-medium flex items-center gap-1">Procesando firma con Token...</div>
                   </div>
                 </div>
               </div>
             </div>

             <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-bm-blue/20 rounded-full blur-2xl"></div>
          </div>

        </div>
      </div>
    </section>

    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-center text-white pt-32 pb-24 relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Firma tus documentos en segundos</h2>
        <p class="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
          No imprimas, no escanees, no uses mensajería. Obtén tu Firma Digital en Token o Smartcard y moderniza los procesos de tu empresa hoy mismo.
        </p>
        <button (click)="openContactModal('Cotización Firma Digital General', $event)" class="bg-bm-red text-white px-12 py-5 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-2xl hover:scale-105 transform duration-200">
          Solicitar mi Firma Digital
        </button>
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
              <p class="text-gray-600 mb-6">Complete los datos a continuación para recibir información detallada sobre: <strong>{{ selectedProductName() }}</strong>.</p>
              
              <form (submit)="onSubmitContact($event)" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Nombre Completo *</label>
                    <input type="text" name="user_name" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico *</label>
                    <input type="email" name="user_email" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Teléfono / Celular *</label>
                    <input type="tel" name="user_phone" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">RUC / Nombre de Empresa</label>
                    <input type="text" name="company_name" [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Servicio de Interés</label>
                  <input type="text" name="product_subject" [value]="selectedProductName()" readonly class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed outline-none">
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Mensaje o Dudas Adicionales</label>
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Ej: Necesito 5 Tokens para mis gerentes..." class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
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
export class FirmaDigitalComponent {

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
      console.error('Error al enviar el correo a través de EmailJS', error);
      alert('Ocurrió un error de comunicación. Por favor, intente nuevamente o comuníquese por WhatsApp.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}