import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sectigo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
      <div class="bg-gray-50 border-b border-gray-200 mt-20 py-6 relative z-20 shadow-sm">
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
      
      <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-green-100 mb-6 uppercase tracking-wider">
            <span class="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span> Distribuidor Oficial Sectigo
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Certificados SSL/TLS <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Máxima Confianza</span>.
          </h1>
          <p class="text-lg text-bm-white mb-8 leading-relaxed max-w-xl">
            Proteja su sitio web, los datos de sus clientes e impulse su SEO con la Autoridad de Certificación (CA) comercial líder a nivel mundial. BMTech simplifica la emisión y la gestión de sus certificados.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button (click)="openContactModal('Consultoría Sectigo SSL', $event)" class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-lg transform hover:-translate-y-1">
              Hablar con un Especialista
            </button>
          </div>
        </div>

        <div class="hidden lg:flex justify-center relative">
          <div class="w-64 h-64 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(6,182,212,0.5)] relative z-10 animate-[bounce_4s_infinite]">
            <svg class="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <div class="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 border-b border-gray-200">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Elija el nivel de validación ideal</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-gray-600">
            Diferentes proyectos exigen distintos niveles de confianza y verificación de identidad. Conozca las tres categorías principales de certificados SSL/TLS de Sectigo.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            <div class="w-14 h-14 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
            </div>
            <h3 class="text-2xl font-bold text-bm-blue mb-2">Domain Validation (DV)</h3>
            <p class="text-sm text-gray-500 font-bold mb-4 uppercase tracking-wider">Emisión en Minutos</p>
            <p class="text-gray-600 mb-6 flex-grow">
              Valida únicamente la propiedad del dominio. Es la opción más rápida y básica, ideal para blogs, portafolios y sitios web que no recopilan datos sensibles.
            </p>
            <ul class="space-y-3 mb-8 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Cifrado fuerte de 256 bits</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Candado de seguridad en el navegador</li>
              <li class="flex items-center gap-2 text-gray-400"><span class="text-gray-300 font-bold">X</span> Sin validación de la empresa</li>
            </ul>
            <button (click)="openModal('DV')" class="w-full border-2 border-bm-blue text-bm-blue py-3 rounded font-bold hover:bg-bm-blue hover:text-white transition mt-auto">
              Saber más
            </button>
          </div>

          <div class="bg-white rounded-xl shadow-xl border-2 border-bm-blue p-8 hover:-translate-y-2 transition-all duration-300 relative flex flex-col h-full">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bm-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Recomendado
            </div>
            <div class="w-14 h-14 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <h3 class="text-2xl font-bold text-bm-blue mb-2">Organization Validation (OV)</h3>
            <p class="text-sm text-gray-500 font-bold mb-4 uppercase tracking-wider">Emisión en 1 a 3 días</p>
            <p class="text-gray-600 mb-6 flex-grow">
              Autentica la existencia legal y operativa de su empresa. Añade una capa extra de confianza, ideal para portales corporativos e intranets.
            </p>
            <ul class="space-y-3 mb-8 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Detalles de la empresa en el certificado</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Cifrado fuerte de 256 bits</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Mayor garantía financiera</li>
            </ul>
            <button (click)="openModal('OV')" class="w-full bg-bm-blue text-white py-3 rounded font-bold hover:bg-blue-900 transition mt-auto">
              Saber más
            </button>
          </div>

          <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
            <div class="w-14 h-14 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 class="text-2xl font-bold text-bm-blue mb-2">Extended Validation (EV)</h3>
            <p class="text-sm text-gray-500 font-bold mb-4 uppercase tracking-wider">Emisión en 1 a 5 días</p>
            <p class="text-gray-600 mb-6 flex-grow">
              El más alto nivel de autenticación comercial. El proceso de verificación es riguroso, ideal para bancos, e-commerce y sitios web que procesan transacciones de valor.
            </p>
            <ul class="space-y-3 mb-8 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Nombre de la empresa visible</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Máxima confianza y conversión</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Protección máxima contra phishing</li>
            </ul>
            <button (click)="openModal('EV')" class="w-full border-2 border-bm-blue text-bm-blue py-3 rounded font-bold hover:bg-bm-blue hover:text-white transition mt-auto">
              Saber más
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        
        <div class="flex items-center justify-center mb-16">
          <div class="h-px bg-green-500 flex-grow max-w-[100px] md:max-w-[200px]"></div>
          <h2 class="text-3xl font-bold text-bm-blue mx-6 text-center">Certificados SSL por Cobertura de Dominio</h2>
          <div class="h-px bg-green-500 flex-grow max-w-[100px] md:max-w-[200px]"></div>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 items-stretch">
          
          <div class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col text-center hover:-translate-y-1 transition-transform duration-300">
            <div class="w-16 h-16 mx-auto mb-6 text-bm-blue flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                <circle cx="12" cy="11" r="3" stroke-linecap="round" stroke-linejoin="round"></circle>
              </svg>
            </div>
            
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Certificados SSL Wildcard</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Proteja su dominio principal y subdominios ilimitados bajo un solo certificado. Los certificados SSL Wildcard son la forma más conveniente de proporcionar protección SSL y cifrado para un dominio y sus subdominios.
            </p>

            <ul class="w-full text-left space-y-3 mb-8 border-t border-gray-100 pt-6">
              <li>
                <a href="#" (click)="openContactModal('Wildcard OV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Wildcard OV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="#" (click)="openContactModal('Wildcard DV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Wildcard DV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col text-center hover:-translate-y-1 transition-transform duration-300">
            <div class="w-16 h-16 mx-auto mb-6 text-bm-blue flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                <circle cx="12" cy="11" r="3" stroke-linecap="round" stroke-linejoin="round"></circle>
              </svg>
            </div>
            
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Certificados SSL Multidominio</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Proteja hasta 100 nombres de dominio con un solo certificado. Los certificados SSL Multidominio (también conocidos como certificados SAN/UCC) permiten que un único certificado proteja múltiples nombres de dominio.
            </p>

            <ul class="w-full text-left space-y-3 mb-8 border-t border-gray-100 pt-6">
              <li>
                <a href="#" (click)="openContactModal('Multi Domain EV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Multi Domain EV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="#" (click)="openContactModal('Multi Domain OV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Multi Domain OV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="#" (click)="openContactModal('Multi Domain DV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Multi Domain DV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-8 flex flex-col text-center hover:-translate-y-1 transition-transform duration-300">
            <div class="w-16 h-16 mx-auto mb-6 text-bm-blue flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                <circle cx="12" cy="11" r="3" stroke-linecap="round" stroke-linejoin="round"></circle>
              </svg>
            </div>
            
            <h3 class="text-2xl font-semibold text-gray-800 mb-4">Certificados de Dominio Único</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Proteja un dominio individual con un certificado Sectigo Single SSL. Disponibles en las opciones de Validación de Dominio, Validación Organizacional y Validación Extendida. Incluye un sello de seguridad Trust Logo.
            </p>

            <ul class="w-full text-left space-y-3 mb-8 border-t border-gray-100 pt-6">
              <li>
                <a href="#" (click)="openContactModal('Single Domain EV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Single Domain EV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="#" (click)="openContactModal('Single Domain OV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Single Domain OV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
              <li>
                <a href="#" (click)="openContactModal('Single Domain DV SSL', $event)" class="group flex items-center justify-between text-sm text-gray-500 hover:text-bm-blue transition">
                  <span class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-gray-300 rounded-sm"></span> Single Domain DV SSL
                  </span>
                  <span class="text-green-500 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 border-t-4 border-bm-red">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div class="p-4">
            <p class="text-4xl font-bold mb-2 text-cyan-400">256-bit</p>
            <p class="text-sm text-blue-100 font-bold uppercase tracking-wider">Cifrado Fuerte</p>
            <p class="text-xs text-blue-200 mt-2">Estándar de la industria (RSA o ECC).</p>
          </div>
          <div class="p-4">
            <p class="text-4xl font-bold mb-2 text-cyan-400">99.9%</p>
            <p class="text-sm text-blue-100 font-bold uppercase tracking-wider">Reconocimiento</p>
            <p class="text-xs text-blue-200 mt-2">Compatible con todos los navegadores.</p>
          </div>
          <div class="p-4">
            <p class="text-4xl font-bold mb-2 text-cyan-400">Ilimitado</p>
            <p class="text-sm text-blue-100 font-bold uppercase tracking-wider">Licencias de Servidor</p>
            <p class="text-xs text-blue-200 mt-2">Instálelo en todos los servidores que necesite.</p>
          </div>
          <div class="p-4">
            <p class="text-4xl font-bold mb-2 text-cyan-400">Sello</p>
            <p class="text-sm text-blue-100 font-bold uppercase tracking-wider">Sectigo Trust Seal</p>
            <p class="text-xs text-blue-200 mt-2">Sello dinámico para su sitio web.</p>
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
          
          @if (activeModal() === 'DV') {
            <div>
              <div class="w-12 h-12 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Validación de Dominio (DV)</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">El certificado de Validación de Dominio (DV) es el tipo de SSL más básico y rápido. La Autoridad de Certificación (Sectigo) verifica únicamente si quien solicita el certificado tiene control administrativo sobre el dominio específico.</p>
              
              <h4 class="font-bold text-gray-800 mt-6 mb-2">¿Cómo funciona la validación?</h4>
              <p class="text-gray-600 text-sm mb-4">Normalmente se realiza de forma automatizada por e-mail (admin&#64;sudominio.com), agregando un archivo a su servidor (HTTP Hash) o a través de un registro DNS.</p>
              
              <h4 class="font-bold text-gray-800 mt-6 mb-2">Ideal para:</h4>
              <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Blogs y sitios web personales</li>
                <li>Páginas institucionales que no recopilan datos (sin formularios de inicio de sesión o pagos)</li>
                <li>Entornos de prueba o desarrollo interno</li>
              </ul>
            </div>
          }

          @if (activeModal() === 'OV') {
            <div>
              <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Validación Organizacional (OV)</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">Un paso adelante en confianza. Además de verificar el control del dominio, Sectigo realiza verificaciones manuales para confirmar la existencia legal y física de su empresa, garantizando a los visitantes que el sitio web pertenece a una organización legítima.</p>
              
              <h4 class="font-bold text-gray-800 mt-6 mb-2">¿Cómo funciona la validación?</h4>
              <p class="text-gray-600 text-sm mb-4">Sectigo verifica los registros gubernamentales de su empresa (como el RUC en Perú), comprueba si la empresa está activa, valida la dirección física y realiza una llamada telefónica de verificación al número registrado oficialmente.</p>
              
              <h4 class="font-bold text-gray-800 mt-6 mb-2">Ideal para:</h4>
              <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Sitios web corporativos e institucionales de medianas y grandes empresas</li>
                <li>Sistemas de webmail, VPNs e Intranets</li>
                <li>Portales que solicitan datos de inicio de sesión o información personal de los clientes</li>
              </ul>
            </div>
          }

          @if (activeModal() === 'EV') {
            <div>
              <div class="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Validación Extendida (EV)</h3>
              <p class="text-gray-600 mb-4 leading-relaxed">El estándar de oro de la confianza online. Los certificados EV exigen la verificación más rigurosa de la industria. Cuando los usuarios hacen clic en el candado del navegador, los detalles de su empresa se muestran de forma destacada, demostrando al 100% que no se trata de un sitio web falso.</p>
              
              <h4 class="font-bold text-gray-800 mt-6 mb-2">¿Cómo funciona la validación?</h4>
              <p class="text-gray-600 text-sm mb-4">Además de todas las verificaciones del OV (dominio, registro legal, dirección y teléfono), Sectigo verifica la identidad del solicitante y su vínculo laboral con la empresa, garantizando que tiene autoridad para solicitar el certificado.</p>
              
              <h4 class="font-bold text-gray-800 mt-6 mb-2">Ideal para:</h4>
              <ul class="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Bancos, Fintechs e Instituciones Financieras</li>
                <li>Tiendas virtuales (E-commerce) de alto volumen</li>
                <li>Cualquier sitio web que busque la máxima tasa de conversión y protección de marca</li>
              </ul>
            </div>
          }

          @if (activeModal() === 'CONTACT') {
            <div>
              <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Solicitar Cotización</h3>
              <p class="text-gray-600 mb-6">Complete los datos a continuación para recibir una propuesta comercial y asesoría sobre el certificado <strong>{{ selectedCertificateName() }}</strong>.</p>
              
              <form (submit)="onSubmitContact($event)" class="space-y-4">
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Nombre Completo *</label>
                    <input type="text" name="user_name" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">E-mail Corporativo *</label>
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
                  <label class="block text-sm font-bold text-gray-700 mb-1">Producto de Interés</label>
                  <input type="text" name="product_subject" [value]="selectedCertificateName()" readonly class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed outline-none">
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Detalles del Proyecto</label>
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Déjenos aquí la mayor cantidad de información posible" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
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

          @if (activeModal() !== 'CONTACT') {
            <div class="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <button (click)="closeModal()" class="bg-gray-100 text-gray-700 px-6 py-2 rounded font-bold hover:bg-gray-200 transition">Cerrar</button>
            </div>
          }
        </div>
      </div>
    }
  `
})
export class SectigoComponent {
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
  activeModal = signal<'DV' | 'OV' | 'EV' | 'CONTACT' | null>(null);
  selectedCertificateName = signal<string>('');

  isSubmitting = signal(false);
  submitSuccess = signal(false);

  openModal(type: 'DV' | 'OV' | 'EV') {
    this.activeModal.set(type);
    document.body.style.overflow = 'hidden';
  }

  openContactModal(certName: string, event: Event) {
    event.preventDefault();
    this.selectedCertificateName.set(certName);
    this.activeModal.set('CONTACT');
    this.submitSuccess.set(false);
    document.body.style.overflow = 'hidden'
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
      console.error('Falla al enviar el e-mail vía EmailJS', error);
      alert('Ocurrió un error de comunicación. Por favor, intente nuevamente o contáctenos por WhatsApp.');  
    } finally {
      this.isSubmitting.set(false);
    }
  }
}