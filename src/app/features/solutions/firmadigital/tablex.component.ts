import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-tablex',
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
            <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> Paperless & Workflow
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Firme documentos en <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">su Tablet o Celular.</span>
          </h1>
          <p class="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
            <strong>Tablex®</strong> es la solución que permite el llenado y firma de formularios directamente en dispositivos móviles con un lápiz Stylus, capturando la caligrafía real con total validez jurídica.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button (click)="openContactModal('Cotización Tablex', $event)" class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-lg shadow-red-900/20 transform hover:-translate-y-1">
              Solicitar Cotización
            </button>
          </div>
        </div>

        <div class="relative flex justify-center lg:justify-end">
          <div class="relative max-w-lg lg:max-w-xl group">
             <img src="tablex.png" alt="Tablet Tablex" class="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-700">
             
             <div class="absolute inset-0 bg-cyan-400/20 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div class="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h3 class="font-bold text-bm-blue mb-2 uppercase text-xs tracking-widest">Ahorro</h3>
            <p class="text-gray-900 font-bold mb-3">Elimine Impresiones</p>
            <p class="text-sm text-gray-600">Reduzca el uso de papel y garantice acceso instantáneo a los registros en cualquier momento.</p>
          </div>

          <div class="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h3 class="font-bold text-bm-blue mb-2 uppercase text-xs tracking-widest">Canales</h3>
            <p class="text-gray-900 font-bold mb-3">Envío por WhatsApp</p>
            <p class="text-sm text-gray-600">Al finalizar la firma, los documentos se envían automáticamente al WhatsApp del cliente.</p>
          </div>

          <div class="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h3 class="font-bold text-bm-blue mb-2 uppercase text-xs tracking-widest">Seguridad</h3>
            <p class="text-gray-900 font-bold mb-3">Captura Grafométrica</p>
            <p class="text-sm text-gray-600">Reconoce presión, inclinación y orientación, permitiendo peritajes caligráficos forenses.</p>
          </div>

          <div class="p-6 bg-gray-50 rounded-xl border border-gray-100">
            <h3 class="font-bold text-bm-blue mb-2 uppercase text-xs tracking-widest">Tecnología</h3>
            <p class="text-gray-900 font-bold mb-3">Integración vía API</p>
            <p class="text-sm text-gray-600">Integre Tablex® con su sistema actual en minutos a través de nuestra API robusta.</p>
          </div>

        </div>
      </div>
    </section>

    <section class="py-20 bg-bm-blue text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-10">Validez Legal en el Perú</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="border border-white/20 p-6 rounded-lg bg-white/5">
            <p class="font-bold text-cyan-400 mb-2">Ley N° 27269</p>
            <p class="text-sm text-blue-100">Ley de Firmas y Certificados Digitales que ampara el uso de Tablex.</p>
          </div>
          <div class="border border-white/20 p-6 rounded-lg bg-white/5">
            <p class="font-bold text-cyan-400 mb-2">INDECOPI</p>
            <p class="text-sm text-blue-100">Cumplimiento de estándares técnicos para auditoría y peritaje.</p>
          </div>
          <div class="border border-white/20 p-6 rounded-lg bg-white/5">
            <p class="font-bold text-cyan-400 mb-2">Ley N° 29733</p>
            <p class="text-sm text-blue-100">Protección de Datos Personales garantizada por cifrado de punta a punta.</p>
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
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Déjanos un mensaje..." class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
                </div>

                <button type="submit" [disabled]="isSubmitting() || submitSuccess()" 
                        [ngClass]="{'bg-green-500 hover:bg-green-600': submitSuccess(), 'bg-bm-blue hover:bg-blue-900': !submitSuccess()}"
                        class="w-full text-white font-bold py-3 px-4 rounded transition shadow-md flex justify-center items-center gap-2">
                  @if (isSubmitting()) {
                    Enviando...
                  } @else if (submitSuccess()) {
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
export class TablexComponent {
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
      alert('Error al enviar solicitud.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}