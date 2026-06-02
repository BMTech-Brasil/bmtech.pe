import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-horas',
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
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-8 uppercase tracking-wider backdrop-blur-md">
          <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Soporte Técnico On-Demand
        </div>
        <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          Ingeniería Especializada <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">para sus Soluciones Críticas.</span>
        </h1>
        <p class="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
          ¿Necesita ayuda con una instalación compleja, integración de API o solución de problemas urgentes? Contrate nuestra <strong>Bolsa de Horas</strong> y acceda a técnicos expertos certificados.
        </p>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Planes de Soporte Adicional</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-gray-600">Elija el paquete que mejor se adapte a su requerimiento técnico.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all group">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Soporte Express</h3>
            <div class="text-4xl font-extrabold text-bm-blue mb-6">1 Hora</div>
            <p class="text-sm text-gray-500 mb-8 leading-relaxed">Ideal para configuraciones puntuales de SSL, renovaciones de certificados o dudas breves de software.</p>
            <ul class="space-y-4 mb-10 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Acceso vía Remota (AnyDesk/TeamViewer)</li>
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Atención en Horario Comercial</li>
              <li class="flex items-center gap-2"><span class="text-green-500">✓</span> Ingeniero Especializado</li>
            </ul>
            <button (click)="openContactModal('Contratación: Soporte Express (1h)', $event)" class="w-full py-3 rounded-lg border-2 border-bm-blue text-bm-blue font-bold hover:bg-bm-blue hover:text-white transition track-abrir-modal">Solicitar Pack</button>
          </div>

          <div class="bg-white rounded-2xl p-8 border-2 border-bm-red shadow-xl relative transform scale-105 z-10 group">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-bm-red text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Más Solicitado</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Bolsa de Implementación</h3>
            <div class="text-4xl font-extrabold text-bm-blue mb-6">5 Horas</div>
            <p class="text-sm text-gray-500 mb-8 leading-relaxed">Perfecto para despliegue de agentes Teramind/Hexnode o configuración de flujos de firma masiva en PFX.</p>
            <ul class="space-y-4 mb-10 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Horas acumulables (Vigencia 3 meses)</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Soporte Multidisciplinario</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Prioridad en la cola de atención</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Documentación de procesos</li>
            </ul>
            <button (click)="openContactModal('Contratación: Bolsa de Implementación (5h)', $event)" class="w-full py-3 rounded-lg bg-bm-red text-white font-bold hover:bg-red-700 transition track-abrir-modal">Solicitar Pack</button>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all group">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Soporte Enterprise</h3>
            <div class="text-4xl font-extrabold text-bm-blue mb-6">10 Horas</div>
            <p class="text-sm text-gray-500 mb-8 leading-relaxed">Diseñado para grandes infraestructuras, auditorías de seguridad avanzada o integraciones complejas vía API.</p>
            <ul class="space-y-4 mb-10 text-sm text-gray-600">
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Soporte nivel Arquitecto</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Revisión de salud del entorno</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Vigencia de 6 meses</li>
              <li class="flex items-center gap-2"><span class="text-green-500 font-bold">✓</span> Descuento por volumen</li>
            </ul>
            <button (click)="openContactModal('Contratación: Soporte Enterprise (10h)', $event)" class="w-full py-3 rounded-lg border-2 border-bm-blue text-bm-blue font-bold hover:bg-bm-blue hover:text-white transition track-abrir-modal">Solicitar Pack</button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-bm-red font-bold tracking-widest uppercase text-sm mb-4 block">Nuestra Experiencia</span>
            <h2 class="text-3xl md:text-4xl font-bold text-bm-blue mb-6">¿En qué podemos ayudarle hoy?</h2>
            <p class="text-gray-600 mb-8 leading-relaxed">
              Nuestro equipo no solo soluciona problemas, optimizamos sus recursos para que su empresa nunca se detenga. Contamos con certificaciones oficiales de las principales marcas del mercado.
            </p>
            
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="flex gap-4">
                <div class="w-10 h-10 rounded-lg bg-blue-50 text-bm-blue flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Seguridad SSL/TLS</h4>
                  <p class="text-xs text-gray-500">Instalación en IIS, Apache, Nginx y balanceadores F5.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-10 h-10 rounded-lg bg-red-50 text-bm-red flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Firma Digital</h4>
                  <p class="text-xs text-gray-500">Configuración de Tokens, PFX y flujos en Tablex.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Monitoreo DLP</h4>
                  <p class="text-xs text-gray-500">Políticas de prevención de fuga de datos en Teramind.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Integración API</h4>
                  <p class="text-xs text-gray-500">Conexión de sistemas ERP con firmas digitales.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-900 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl">
             <div class="relative z-10">
               <h3 class="text-2xl font-bold mb-6">¿Cómo funciona el servicio?</h3>
               <div class="space-y-6">
                 <div class="flex gap-4">
                   <div class="w-8 h-8 rounded-full bg-bm-red flex items-center justify-center font-bold">1</div>
                   <p class="text-sm text-gray-300"><strong class="text-white">Compra el Pack:</strong> Selecciona las horas y recibe la factura.</p>
                 </div>
                 <div class="flex gap-4">
                   <div class="w-8 h-8 rounded-full bg-bm-red flex items-center justify-center font-bold">2</div>
                   <p class="text-sm text-gray-300"><strong class="text-white">Agendamiento:</strong> Coordinamos la sesión remota en menos de 24h.</p>
                 </div>
                 <div class="flex gap-4">
                   <div class="w-8 h-8 rounded-full bg-bm-red flex items-center justify-center font-bold">3</div>
                   <p class="text-sm text-gray-300"><strong class="text-white">Ejecución:</strong> Realizamos el servicio y descontamos el tiempo exacto.</p>
                 </div>
               </div>
             </div>
             <div class="absolute -right-16 -bottom-16 w-64 h-64 bg-bm-blue/20 rounded-full blur-3xl"></div>
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
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Contratar Soporte Técnico</h3>
              <p class="text-gray-600 mb-6">Inicie su solicitud para el pack: <strong>{{ selectedProductName() }}</strong>.</p>
              
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
                  <label class="block text-sm font-bold text-gray-700 mb-1">Describa brevemente su requerimiento técnico</label>
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Ej: Necesito apoyo instalando un certificado en un servidor Windows Server 2022..." class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
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
export class HorasComponent {
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
      await emailjs.sendForm('service_4c3w7jo', 'template_8m2pl9r', form, 'R_3WXFqcku2A9Eysn');
      this.submitSuccess.set(true);
      setTimeout(() => {
        this.closeModal();
        this.submitSuccess.set(false);
        form.reset();
      }, 3000);
    } catch (error) {
      alert('Error de comunicación con el servidor de soporte.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}