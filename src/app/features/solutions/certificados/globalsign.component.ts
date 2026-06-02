import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-globalsign',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-gray-50 border-b border-gray-200 mt-20 py-6 relative z-20 shadow-sm">
      <div class="container mx-auto px-2 md:px-6">
        <div class="flex flex-wrap lg:flex-nowrap justify-center items-start gap-8 md:gap-12">
          @for (group of partnerGroups(); track group.category) {
            <div class="flex flex-col items-center">
              <span class="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-200 pb-1 px-4">{{ group.category }}</span>
              <div class="flex flex-wrap justify-center gap-2 md:gap-4">
                @for (partner of group.items; track partner.name) {
                  <a [routerLink]="partner.url" class="group flex items-center justify-center w-20 h-14 md:w-24 md:h-16 lg:w-28 lg:h-16 p-2 rounded-lg border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer" [title]="partner.name">
                     <img [src]="partner.img" [alt]="partner.name" class="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                     <span class="hidden text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-bm-blue transition-colors select-none text-center leading-tight">{{ partner.name }}</span>
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
            <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> Identity & Security Provider
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Gestión de Certificados <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">a Gran Escala.</span>
          </h1>
          <p class="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            Desde la protección de un solo sitio web hasta la implementación de una Plataforma <strong>PKI Gestionada (Managed PKI)</strong>. Automatice el ciclo de vida de sus certificados con GlobalSign.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button (click)="openContactModal('Plataforma PKI GlobalSign', $event)" class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-lg transform hover:-translate-y-1 track-abrir-modal">
              Hablar con un Consultor PKI
            </button>
            <button (click)="scrollToProducts($event)" class="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-4 rounded font-bold transition">
              Ver Productos SSL
            </button>
          </div>
        </div>
        
        <div class="hidden lg:flex justify-center relative">
          <div class="w-64 h-64 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(6,182,212,0.5)] relative z-10 animate-[bounce_4s_infinite]">
            <svg class="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <div class="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>

    <section id="ssl-products" class="py-24 bg-gray-50">
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Opciones de Certificados SSL/TLS</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-gray-600">Elija el nivel de validación adecuado para la infraestructura de su empresa en Perú.</p>
        </div>

        <div class="flex flex-col gap-6">
          
          <div class="bg-white p-8 rounded-xl shadow-sm border border-cyan-400 relative hover:shadow-md transition">
            <div class="absolute top-0 right-0 bg-cyan-400 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-xs font-bold uppercase tracking-wider">Máxima Confianza</div>
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/4 text-center md:text-left">
                <h3 class="text-2xl font-bold text-bm-blue">Extended Validation (EV)</h3>
                <p class="text-sm text-gray-500 mt-1">Validación Rigurosa</p>
              </div>
              <div class="md:w-2/4">
                <p class="text-gray-600 text-sm mb-4">Muestra el nombre de su empresa en el certificado. Máxima protección contra phishing, ideal para e-commerce y portales financieros.</p>
                <ul class="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Sello de Sitio GlobalSign</li>
                  <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Cifrado de 256 bits</li>
                  <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Garantía de $1.5M</li>
                  <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Emisión en 1 a 3 días</li>
                </ul>
              </div>
              <div class="md:w-1/4 w-full flex flex-col gap-3">
                <button (click)="openContactModal('GlobalSign EV SSL Single', $event)" class="w-full bg-bm-blue text-white py-2 rounded font-bold hover:bg-blue-900 transition text-sm track-abrir-modal">Cotizar Dominio Único</button>
                <button (click)="openContactModal('GlobalSign EV SSL Multi-Domain', $event)" class="w-full border-2 border-bm-blue text-bm-blue py-2 rounded font-bold hover:bg-bm-blue hover:text-white transition text-sm track-abrir-modal">Cotizar Multidominio (SAN)</button>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/4 text-center md:text-left">
                <h3 class="text-2xl font-bold text-bm-blue">Organization Validation (OV)</h3>
                <p class="text-sm text-gray-500 mt-1">Validación Corporativa</p>
              </div>
              <div class="md:w-2/4">
                <p class="text-gray-600 text-sm mb-4">Autentica la identidad corporativa de su empresa (RUC). Proporciona fuerte encriptación para redes corporativas, intranets y sitios B2B.</p>
                <ul class="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Razón Social en el SSL</li>
                  <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Licencias ilimitadas</li>
                  <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Garantía de $1.25M</li>
                  <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Emisión en 1 a 2 días</li>
                </ul>
              </div>
              <div class="md:w-1/4 w-full flex flex-col gap-3">
                <button (click)="openContactModal('GlobalSign OV SSL Single', $event)" class="w-full bg-bm-blue text-white py-2 rounded font-bold hover:bg-blue-900 transition text-sm track-abrir-modal">Cotizar Dominio Único</button>
                <button (click)="openContactModal('GlobalSign OV SSL Wildcard', $event)" class="w-full border-2 border-bm-blue text-bm-blue py-2 rounded font-bold hover:bg-bm-blue hover:text-white transition text-sm track-abrir-modal">Cotizar Wildcard (*.dominio)</button>
              </div>
            </div>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/4 text-center md:text-left">
                <h3 class="text-2xl font-bold text-bm-blue">Domain Validation (DV)</h3>
                <p class="text-sm text-gray-500 mt-1">Validación Rápida</p>
              </div>
              <div class="md:w-2/4">
                <p class="text-gray-600 text-sm mb-4">El nivel más básico. Verifica únicamente el control del dominio. Ideal para blogs, sitios de prueba o páginas informativas.</p>
                <ul class="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Emisión en minutos</li>
                  <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Cifrado Estándar</li>
                  <li class="flex items-center gap-2"><span class="text-gray-400 font-bold">X</span> Sin validación de empresa</li>
                  <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Garantía de $10k</li>
                </ul>
              </div>
              <div class="md:w-1/4 w-full flex flex-col gap-3">
                <button (click)="openContactModal('GlobalSign DV SSL Single', $event)" class="w-full bg-gray-200 text-gray-700 py-2 rounded font-bold hover:bg-gray-300 transition text-sm track-abrir-modal">Cotizar Dominio Único</button>
                <button (click)="openContactModal('GlobalSign DV SSL Wildcard', $event)" class="w-full border-2 border-gray-300 text-gray-700 py-2 rounded font-bold hover:bg-gray-100 transition text-sm track-abrir-modal">Cotizar Wildcard (*.dominio)</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-24 bg-white border-b border-gray-200">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-bm-red font-bold tracking-widest uppercase text-sm mb-4 block">Gestión de PKI en la Nube</span>
            <h2 class="text-3xl md:text-4xl font-bold text-bm-blue mb-6">Conozca GlobalSign Atlas</h2>
            <p class="text-gray-600 mb-6 leading-relaxed text-lg">
              <strong>Atlas</strong> es el motor de certificados en la nube de alta velocidad de GlobalSign, diseñado para satisfacer las demandas de identidad digital y seguridad de las empresas modernas. Automatice y gestione todo el ciclo de vida de los certificados desde una única y poderosa plataforma.
            </p>
            <ul class="space-y-4 mb-10">
              <li class="flex items-start text-gray-700 text-sm gap-3">
                <div class="w-5 h-5 bg-blue-100 text-bm-blue rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <strong class="block text-gray-900 mb-1">Alta Escalabilidad</strong>
                  Emita miles de certificados por segundo, ideal para infraestructuras empresariales y entornos IoT.
                </div>
              </li>
              <li class="flex items-start text-gray-700 text-sm gap-3">
                <div class="w-5 h-5 bg-blue-100 text-bm-blue rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <strong class="block text-gray-900 mb-1">Automatización Total</strong>
                  Soporte nativo para protocolos como ACME, SCEP, y EST, reduciendo errores humanos y tiempos de inactividad.
                </div>
              </li>
              <li class="flex items-start text-gray-700 text-sm gap-3">
                <div class="w-5 h-5 bg-blue-100 text-bm-blue rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <strong class="block text-gray-900 mb-1">Integración Sencilla</strong>
                  APIs RESTful completas y conectores preconstruidos para servidores, MDM y Active Directory.
                </div>
              </li>
            </ul>
            <button (click)="openContactModal('Demostración GlobalSign Atlas', $event)" class="bg-bm-blue hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-bold transition shadow-lg inline-flex items-center gap-2 track-abrir-modal">
              Solicitar Demostración de Atlas
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
          
          <div class="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 shadow-inner relative overflow-hidden">
             <div class="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 bg-cyan-200 rounded-full blur-3xl opacity-40"></div>
             <div class="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40"></div>
             
             <div class="relative z-10 flex flex-col gap-4">
                
                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center shrink-0 border border-blue-100">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </div>
                    <div>
                      <p class="text-sm font-bold text-gray-800">Emisión de Certificados</p>
                      <p class="text-xs text-green-500 font-medium">Motor de alta velocidad</p>
                    </div>
                  </div>
                  <span class="hidden sm:block text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">REST API</span>
                </div>

                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-lg flex items-center justify-center shrink-0 border border-cyan-100">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                    </div>
                    <div>
                      <p class="text-sm font-bold text-gray-800">Renovación Automática</p>
                      <p class="text-xs text-green-500 font-medium">Cero interrupciones</p>
                    </div>
                  </div>
                  <span class="hidden sm:block text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">ACME / SCEP</span>
                </div>

                <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:-translate-y-1 transition-transform duration-300">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center shrink-0 border border-purple-100">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <div>
                      <p class="text-sm font-bold text-gray-800">Identidades Gestionadas</p>
                      <p class="text-xs text-green-500 font-medium">Integración corporativa</p>
                    </div>
                  </div>
                  <span class="hidden sm:block text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">Active Directory</span>
                </div>

             </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 border-t-4 border-bm-red">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
          <div class="p-4">
            <p class="text-4xl font-bold mb-2 text-cyan-400">Ilimitado</p>
            <p class="text-sm text-blue-100 font-bold uppercase tracking-wider">Licencias de Servidor</p>
            <p class="text-xs text-blue-200 mt-2">Instálelo en todos los servidores que necesite.</p>
          </div>
          <div class="p-4">
            <p class="text-4xl font-bold mb-2 text-cyan-400">99.9%</p>
            <p class="text-sm text-blue-100 font-bold uppercase tracking-wider">Reconocimiento</p>
            <p class="text-xs text-blue-200 mt-2">Compatible con todos los navegadores modernos.</p>
          </div>
          <div class="p-4">
            <p class="text-4xl font-bold mb-2 text-cyan-400">API</p>
            <p class="text-sm text-blue-100 font-bold uppercase tracking-wider">Gestión Automatizada</p>
            <p class="text-xs text-blue-200 mt-2">Integración nativa con Active Directory.</p>
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
export class GlobalsignComponent {
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

  scrollToProducts(event: Event) {
    event.preventDefault();
    document.getElementById('ssl-products')?.scrollIntoView({ behavior: 'smooth' });
  }

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
      await emailjs.sendForm('service_4c3w7jo', 'template_8m2pl9r', form, 'R_3WXFqcku2A9Eysn');
      this.submitSuccess.set(true);
      setTimeout(() => { this.closeModal(); this.submitSuccess.set(false); form.reset(); }, 3000);
    } catch (error) {
      alert('Ocurrió un error de comunicación. Por favor, intente nuevamente.');  
    } finally {
      this.isSubmitting.set(false);
    }
  }
}