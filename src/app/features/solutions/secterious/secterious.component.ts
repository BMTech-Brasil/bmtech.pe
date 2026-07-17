import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-secterious',
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

    <div class="bg-[#040b14] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30">
      
      <section class="relative pt-40 pb-20 overflow-hidden flex flex-col items-center text-center px-6">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div class="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          <div class="w-64 h-64 mb-8 relative">
            <img 
              src="partners/secterious.png" 
              alt="Secterious Mask" 
              class="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              onerror="this.src='https://via.placeholder.com/256x256/040b14/06b6d4?text=Mask'"
            >
          </div>

          <span class="text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 flex items-center gap-2">
            <div class="w-4 h-[1px] bg-cyan-400"></div>
            Ciberseguridad Israelí
            <div class="w-4 h-[1px] bg-cyan-400"></div>
          </span>

          <h1 class="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Vemos lo que <span class="text-[#5c8aff]">otros pasan por alto</span>
          </h1>

          <p class="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Servicios de ciberseguridad israelí premium en toda Latinoamérica — el mismo portafolio completo para cada organización.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button (click)="openContactModal('Consultoría Secterious', $event)" class="bg-[#00b2ff] hover:bg-[#0096d6] text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(0,178,255,0.3)] flex items-center justify-center gap-2">
              Habla con un experto en ciberseguridad <span>→</span>
            </button>
            <button (click)="openContactModal('Diagnóstico CiberSOC', $event)" class="bg-[#5c4aff] hover:bg-[#4837d9] text-white px-8 py-3.5 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              CiberSOC - Diagnóstico de Ciberseguridad
            </button>
          </div>
        </div>
      </section>

      <section class="py-20 border-t border-slate-800/50">
        <div class="container mx-auto px-6 max-w-6xl">
          <div class="text-center mb-16">
            <div class="w-10 h-10 mx-auto bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <span class="text-cyan-400 font-bold tracking-widest uppercase text-[10px] mb-4 block">Experiencia Israelí</span>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Ciberseguridad <span class="text-[#5c8aff]">Israelí</span> para Latinoamérica</h2>
            <p class="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Protegemos organizaciones de banca, servicios financieros y seguros con estándares de ciberseguridad de nivel internacional, provenientes del ecosistema de ciberseguridad israelí — uno de los más avanzados del mundo.
            </p>
            
            <div class="flex flex-wrap justify-center gap-3 mt-8">
              <span class="px-4 py-1.5 rounded-full border border-slate-700 text-xs text-slate-300">Innovación Israelí</span>
              <span class="px-4 py-1.5 rounded-full border border-slate-700 text-xs text-slate-300">Banca y Finanzas</span>
              <span class="px-4 py-1.5 rounded-full border border-slate-700 text-xs text-slate-300">Seguros</span>
              <span class="px-4 py-1.5 rounded-full border border-slate-700 text-xs text-slate-300">Proyectos Internacionales</span>
              <span class="px-4 py-1.5 rounded-full border border-slate-700 text-xs text-slate-300">ISO 27001 - NIST</span>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-800/50">
            <div class="text-center border-r border-slate-800/50 last:border-0 md:last:border-r-0">
              <p class="text-4xl font-bold text-white mb-2">+10</p>
              <p class="text-xs text-slate-500 uppercase tracking-wider">Años de experiencia</p>
            </div>
            <div class="text-center md:border-r border-slate-800/50">
              <p class="text-4xl font-bold text-white mb-2">+500</p>
              <p class="text-xs text-slate-500 uppercase tracking-wider">Evaluaciones de seguridad</p>
            </div>
            <div class="text-center border-r border-slate-800/50 md:border-r">
              <p class="text-4xl font-bold text-white mb-2">24/7</p>
              <p class="text-xs text-slate-500 uppercase tracking-wider">CiberSoc gestionado</p>
            </div>
            <div class="text-center">
              <p class="text-4xl font-bold text-white mb-2">LATAM</p>
              <p class="text-xs text-slate-500 uppercase tracking-wider">Mismo portafolio en toda la región</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="container mx-auto px-6 max-w-5xl">
          <div class="text-center mb-16">
            <span class="text-cyan-400 font-bold tracking-widest uppercase text-[10px] mb-4 block">Industrias</span>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Experiencia en sectores críticos</h2>
            <p class="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Amplia experiencia en banca, servicios financieros y compañías de seguros, además de organizaciones de retail, salud e industria.
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            @for (industry of industries; track industry.title) {
              <div class="bg-[#0b1423] border border-slate-800/60 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-colors group cursor-default">
                <div class="w-12 h-12 mx-auto bg-[#111e33] rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 transition-colors">
                  <span class="text-cyan-400 text-xl font-bold" [innerHTML]="industry.icon"></span>
                </div>
                <h4 class="text-white font-bold text-sm mb-1">{{ industry.title }}</h4>
                <p class="text-[10px] text-slate-500">{{ industry.desc }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      <section class="py-16 bg-gradient-to-b from-[#0b1423] to-[#040b14] border-y border-slate-800/50">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold text-white mb-2">Recibe una evaluación inicial de tu seguridad</h2>
          <p class="text-slate-400 mb-8 text-sm">Sin costo y sin compromiso. Conversemos sobre tus riesgos.</p>
          <button (click)="openContactModal('Evaluación Inicial Secterious', $event)" class="bg-[#00b2ff] hover:bg-[#0096d6] text-white px-8 py-3 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(0,178,255,0.2)]">
            Recibir una Evaluación Inicial →
          </button>
        </div>
      </section>

      <section class="py-20">
        <div class="container mx-auto px-6 max-w-6xl">
          <div class="text-center mb-16">
            <span class="text-cyan-400 font-bold tracking-widest uppercase text-[10px] mb-4 block">Servicios</span>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Soluciones de ciberseguridad</h2>
            <p class="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              El mismo portafolio completo en toda Latinoamérica. Capacidades ofensivas — pentesting, ethical hacking y red team — y defensivas de nivel empresarial.
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            @for (service of services; track service.title) {
              <div class="bg-[#0b1423] border border-slate-800/60 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full group">
                <div class="w-10 h-10 bg-[#111e33] border border-slate-700/50 rounded-lg flex items-center justify-center mb-5 text-cyan-400">
                  <span class="text-sm font-bold" [innerHTML]="service.icon"></span>
                </div>
                <h3 class="text-white font-bold text-sm mb-3">{{ service.title }}</h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-6 flex-grow">{{ service.desc }}</p>
                <button (click)="openContactModal(service.title, $event)" class="text-xs font-bold text-white text-left group-hover:text-cyan-400 transition-colors flex items-center gap-1 mt-auto">
                  Hablar con un experto <span>→</span>
                </button>
              </div>
            }
          </div>
        </div>
      </section>

      <section class="py-20 bg-[#0b1423] border-t border-slate-800/50">
        <div class="container mx-auto px-6 max-w-4xl text-center">
          
          <div class="mb-16">
            <span class="text-cyan-400 font-bold tracking-widest uppercase text-[10px] mb-4 block">Experiencia por Industria</span>
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Protegemos sectores críticos</h2>
            <p class="text-slate-400 text-sm mb-8">
              Protegiendo organizaciones de banca, seguros, gobierno, salud, industria y tecnología en América Latina, Europa e Israel.
            </p>
            <div class="flex flex-wrap justify-center gap-3">
              <span class="px-4 py-2 rounded-full bg-[#111e33] border border-slate-800 text-xs text-slate-300">Banca y Finanzas</span>
              <span class="px-4 py-2 rounded-full bg-[#111e33] border border-slate-800 text-xs text-slate-300">Seguros</span>
              <span class="px-4 py-2 rounded-full bg-[#111e33] border border-slate-800 text-xs text-slate-300">Gobierno</span>
              <span class="px-4 py-2 rounded-full bg-[#111e33] border border-slate-800 text-xs text-slate-300">Defensa</span>
              <span class="px-4 py-2 rounded-full bg-[#111e33] border border-slate-800 text-xs text-slate-300">Salud</span>
              <span class="px-4 py-2 rounded-full bg-[#111e33] border border-slate-800 text-xs text-slate-300">Tecnología</span>
              <span class="px-4 py-2 rounded-full bg-[#111e33] border border-slate-800 text-xs text-slate-300">Energía</span>
              <span class="px-4 py-2 rounded-full bg-[#111e33] border border-slate-800 text-xs text-slate-300">Retail</span>
              <span class="px-4 py-2 rounded-full bg-[#111e33] border border-slate-800 text-xs text-slate-300">Telecomunicaciones</span>
              <span class="px-4 py-2 rounded-full bg-[#111e33] border border-slate-800 text-xs text-slate-300">Infraestructura Crítica</span>
            </div>
          </div>

          <div>
            <span class="text-cyan-400 font-bold tracking-widest uppercase text-[10px] mb-4 block">Latinoamérica</span>
            <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Un mismo estándar en toda la región</h2>
            <p class="text-slate-400 text-sm mb-8 max-w-xl mx-auto">
              Brindamos servicios de ciberseguridad israelí premium en toda Latinoamérica — el mismo portafolio completo y el mismo nivel de experiencia, sin importar el país.
            </p>
            <div class="flex flex-wrap justify-center gap-3">
              <span class="px-5 py-2 rounded-full border border-slate-700 text-xs text-slate-300">Perú</span>
              <span class="px-5 py-2 rounded-full border border-slate-700 text-xs text-slate-300">México</span>
              <span class="px-5 py-2 rounded-full border border-slate-700 text-xs text-slate-300">Colombia</span>
              <span class="px-5 py-2 rounded-full border border-slate-700 text-xs text-slate-300">Argentina</span>
              <span class="px-5 py-2 rounded-full border border-slate-700 text-xs text-slate-300">Chile</span>
              <span class="px-5 py-2 rounded-full border border-slate-700 text-xs text-slate-300">Ecuador</span>
              <span class="px-5 py-2 rounded-full border border-slate-700 text-xs text-slate-400">y toda la región</span>
            </div>
          </div>

        </div>
      </section>
    </div>

    @if (activeModal() !== null) {
      <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 md:p-8 transform transition-all animate-fade-in-up max-h-[90vh] overflow-y-auto">
          <button (click)="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors focus:outline-none bg-gray-100 hover:bg-gray-200 rounded-full p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          @if (activeModal() === 'CONTACT') {
            <div>
              <div class="w-12 h-12 bg-slate-900 text-cyan-400 rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-2">Solicitar Cotización</h3>
              <p class="text-gray-600 mb-6 text-sm md:text-base">Complete los datos a continuación para contactarse con un especialista en ciberseguridad sobre: <strong class="text-cyan-600">{{ selectedProductName() }}</strong>.</p>
              
              <form (submit)="onSubmitContact($event)" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Nombre Completo *</label>
                    <input type="text" name="user_name" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition disabled:opacity-50">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico *</label>
                    <input type="email" name="user_email" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition disabled:opacity-50">
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">Teléfono / Celular *</label>
                    <input type="tel" name="user_phone" required [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition disabled:opacity-50">
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-gray-700 mb-1">RUC / Nombre de la Empresa</label>
                    <input type="text" name="company_name" [disabled]="isSubmitting()" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition disabled:opacity-50">
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Servicio de Interés</label>
                  <input type="text" name="product_subject" [value]="selectedProductName()" readonly class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed outline-none">
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Mensaje o Detalles del Proyecto</label>
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Ej: Necesitamos realizar un pentesting a nuestra nueva aplicación web..." class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition resize-none disabled:opacity-50"></textarea>
                </div>

                <button type="submit" [disabled]="isSubmitting() || submitSuccess()" 
                        [ngClass]="{'bg-green-500 hover:bg-green-600': submitSuccess(), 'bg-slate-900 hover:bg-slate-800': !submitSuccess()}"
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
export class SecteriousComponent {

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
  
  industries = [
    { title: 'Banca', desc: 'Bancos y entidades financieras', icon: '⌂' },
    { title: 'Servicios Financieros', desc: 'Fintech, pagos e inversiones', icon: '📊' },
    { title: 'Seguros', desc: 'Compañías aseguradoras', icon: '⛨' },
    { title: 'Retail', desc: 'Comercio y e-commerce', icon: '🛍️' },
    { title: 'Salud', desc: 'Clínicas y healthtech', icon: '✚' },
    { title: 'Industria', desc: 'Manufactura e infraestructura', icon: '🏭' },
    { title: 'Tecnología', desc: 'Software y servicios TI', icon: '💻' }
  ];

  services = [
    { title: 'Penetration Testing', desc: 'Identificamos y explotamos vulnerabilidades antes que los atacantes.', icon: '< >' },
    { title: 'Ethical Hacking', desc: 'Hacking ético orientado a objetivos, parte de nuestras capacidades ofensivas.', icon: '>_' },
    { title: 'Red Team', desc: 'Simulación de adversarios para poner a prueba tu detección y respuesta.', icon: '⚑' },
    { title: 'CiberSoc 24/7', desc: 'Monitoreo, detección y respuesta gestionada las 24 horas, los 365 días.', icon: '∿' },
    { title: 'Incident Response', desc: 'Contención, análisis forense y recuperación cuando cada segundo cuenta.', icon: '⚡' },
    { title: 'Risk Assessment', desc: 'Evaluación de riesgos alineada a ISO 27001, NIST y CIS Controls.', icon: '⏱' },
    { title: 'Experto en Ciberseguridad como Servicio', desc: 'Liderazgo ejecutivo de seguridad bajo demanda.', icon: '⛨' },
    { title: 'Cloud Security', desc: 'Protección de entornos cloud e híbridos.', icon: '☁' },
    { title: 'Security Awareness', desc: 'Concientización que convierte a tu equipo en tu primera línea de defensa.', icon: '👤' },
    { title: 'EDR/XDR Gestionado', desc: 'Protección avanzada de endpoints y servidores con detección y respuesta en tiempo real.', icon: '🛡' },
    { title: 'Pruebas de Resiliencia DDoS', desc: 'Simulación controlada de ataques DDoS para validar resistencia, mitigación y continuidad.', icon: '☀' },
    { title: 'Backup & Disaster Recovery', desc: 'Respaldo, recuperación y continuidad de negocio para tus activos críticos.', icon: '⛁' },
    { title: 'Threat Intelligence', desc: 'Monitoreo de amenazas, IoCs, actores maliciosos y alertas tempranas.', icon: '⌕' }
  ];

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
      console.error('Error al enviar el correo vía EmailJS', error);
      alert('Ocurrió un error de comunicación. Por favor, intente nuevamente o contáctenos por WhatsApp.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}