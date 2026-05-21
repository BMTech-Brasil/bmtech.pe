import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-digicert',
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
                  <a [routerLink]="partner.url" class="group flex items-center justify-center w-20 h-14 md:w-24 md:h-16 lg:w-28 lg:h-16 p-2 rounded-lg border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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

    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-24 pb-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <img src="partners/digicert.svg" alt="DigiCert" class="h-12 mx-auto mb-8 brightness-0 invert opacity-90" onerror="this.style.display='none'">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          La Confianza Digital <br class="hidden md:block"> <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Comienza Aquí.</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          Proteja a sus clientes, garantice su marca y gestione todo su portafolio de certificados con <strong>CertCentral®</strong>. La elección del 89% de las empresas de la lista Fortune 500.
        </p>
        <button (click)="openContactModal('Consultoría DigiCert CertCentral', $event)" class="bg-bm-red hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold transition shadow-lg hover:-translate-y-1">
          Hablar con un Especialista
        </button>
      </div>
    </section>

    <section class="py-24 bg-gray-50 border-b border-gray-200">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-bm-blue mb-4">La Familia de Certificados DigiCert®</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-gray-600 max-w-2xl mx-auto">Soluciones de seguridad diseñadas para satisfacer las necesidades exactas de las corporaciones y los e-commerce de alto tráfico.</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-end">
          
          <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition flex flex-col h-[90%]">
            <h3 class="text-2xl font-bold text-bm-blue mb-2">Basic SSL</h3>
            <p class="text-sm text-gray-500 mb-6 border-b border-gray-100 pb-4">Seguridad fundamental para sitios web informativos.</p>
            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-start gap-3"><span class="text-green-500 mt-1 font-bold">✓</span> <span class="text-gray-700 text-sm">Opciones de validación DV y OV</span></li>
              <li class="flex items-start gap-3"><span class="text-green-500 mt-1 font-bold">✓</span> <span class="text-gray-700 text-sm">Cifrado RSA o ECC (256 bits)</span></li>
              <li class="flex items-start gap-3"><span class="text-green-500 mt-1 font-bold">✓</span> <span class="text-gray-700 text-sm">Gestión vía CertCentral</span></li>
              <li class="flex items-start gap-3"><span class="text-green-500 mt-1 font-bold">✓</span> <span class="text-gray-700 text-sm">Garantía NetSure™ de $1.25M</span></li>
            </ul>
            <button (click)="openContactModal('DigiCert Basic SSL', $event)" class="w-full py-3 rounded-lg border-2 border-bm-blue text-bm-blue font-bold hover:bg-bm-blue hover:text-white transition">Cotizar Basic SSL</button>
          </div>

          <div class="bg-gray-900 rounded-2xl p-8 shadow-2xl relative flex flex-col transform md:scale-105 z-10 border-t-4 border-cyan-400">
            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">El Estándar de la Industria</div>
            <h3 class="text-2xl font-bold text-white mb-2 mt-4">Secure Site Pro</h3>
            <p class="text-sm text-gray-400 mb-6 border-b border-gray-700 pb-4">Nivel máximo de confianza, protección y rendimiento.</p>
            <ul class="space-y-4 mb-8 flex-grow text-gray-300">
              <li class="flex items-start gap-3"><span class="text-cyan-400 mt-1 font-bold">✓</span> <span class="text-sm font-semibold text-white">Incluye el DigiCert Smart Seal</span></li>
              <li class="flex items-start gap-3"><span class="text-cyan-400 mt-1 font-bold">✓</span> <span class="text-sm">Listo para Criptografía Poscuántica (PQC)</span></li>
              <li class="flex items-start gap-3"><span class="text-cyan-400 mt-1 font-bold">✓</span> <span class="text-sm">Monitoreo de CT log y Análisis de Malware</span></li>
              <li class="flex items-start gap-3"><span class="text-cyan-400 mt-1 font-bold">✓</span> <span class="text-sm">Acceso prioritario al soporte (Fila VIP)</span></li>
              <li class="flex items-start gap-3"><span class="text-cyan-400 mt-1 font-bold">✓</span> <span class="text-sm">Garantía NetSure™ de $2M</span></li>
            </ul>
            <button (click)="openContactModal('DigiCert Secure Site Pro', $event)" class="w-full py-3 rounded-lg bg-bm-blue text-white font-bold hover:bg-blue-800 transition shadow-lg">Cotizar Secure Site Pro</button>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition flex flex-col h-[90%]">
            <h3 class="text-2xl font-bold text-bm-blue mb-2">Secure Site</h3>
            <p class="text-sm text-gray-500 mb-6 border-b border-gray-100 pb-4">Características de seguridad premium empresariales.</p>
            <ul class="space-y-4 mb-8 flex-grow">
              <li class="flex items-start gap-3"><span class="text-green-500 mt-1 font-bold">✓</span> <span class="text-gray-700 text-sm">Incluye el Sello Norton Secured</span></li>
              <li class="flex items-start gap-3"><span class="text-green-500 mt-1 font-bold">✓</span> <span class="text-gray-700 text-sm">Solo validaciones corporativas (OV/EV)</span></li>
              <li class="flex items-start gap-3"><span class="text-green-500 mt-1 font-bold">✓</span> <span class="text-gray-700 text-sm">Soporte prioritario de validación</span></li>
              <li class="flex items-start gap-3"><span class="text-green-500 mt-1 font-bold">✓</span> <span class="text-gray-700 text-sm">Garantía NetSure™ de $1.75M</span></li>
            </ul>
            <button (click)="openContactModal('DigiCert Secure Site', $event)" class="w-full py-3 rounded-lg border-2 border-bm-blue text-bm-blue font-bold hover:bg-bm-blue hover:text-white transition">Cotizar Secure Site</button>
          </div>

        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-bm-red font-bold tracking-widest uppercase text-sm mb-4 block">Tecnología Exclusiva</span>
            <h2 class="text-3xl md:text-4xl font-bold text-bm-blue mb-6">El Poder del Smart Seal</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Vaya más allá del candado del navegador. <strong>DigiCert Smart Seal</strong> exhibe su marca verificada activamente, ayudando a los clientes a identificar sitios auténticos con total seguridad.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-gray-700 text-sm gap-3"><div class="w-2 h-2 bg-green-500 rounded-full"></div> Animaciones que imposibilitan la copia del sello.</li>
              <li class="flex items-center text-gray-700 text-sm gap-3"><div class="w-2 h-2 bg-green-500 rounded-full"></div> Verificación instantánea de la identidad corporativa (EV).</li>
              <li class="flex items-center text-gray-700 text-sm gap-3"><div class="w-2 h-2 bg-green-500 rounded-full"></div> Aumento comprobado en las tasas de conversión de compras.</li>
            </ul>
          </div>
          <div class="bg-gray-50 rounded-2xl p-12 border border-gray-100 flex items-center justify-center text-center">
             <div class="w-48 h-48 bg-white rounded-full shadow-2xl border-4 border-cyan-400 flex items-center justify-center relative">
               <div class="absolute inset-0 rounded-full border border-gray-200 animate-[spin_10s_linear_infinite]"></div>
               <div class="text-bm-blue">
                 <svg class="w-16 h-16 mx-auto text-cyan-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                 <span class="font-bold text-lg block leading-tight">Secured by<br>DigiCert</span>
               </div>
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
export class DigicertComponent {
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
      setTimeout(() => { this.closeModal(); this.submitSuccess.set(false); form.reset(); }, 3000);
    } catch (error) {
      alert('Ocurrió un error de comunicación. Por favor, intente nuevamente.');  
    } finally {
      this.isSubmitting.set(false);
    }
  }
}