import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-monitoreo',
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
        <button (click)="openContactModal('Consultoría de Monitoreo', $event)" class="bg-bm-red text-white px-10 py-4 rounded font-bold text-lg hover:bg-red-700 transition shadow-lg transform hover:-translate-y-1">
          Hablar con un Consultor de BMTech
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
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Solicitar Cotización / Consultoría</h3>
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
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Ej: Me gustaría evaluar Teramind para mi equipo de 50 personas..." class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
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
export class MonitoreoComponent {

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