import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clm',
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
      <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center"></div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-8 uppercase tracking-wider backdrop-blur-md">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Sectigo Certificate Lifecycle Management
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
          El control absoluto de su <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Identidad Digital</span>.
        </h1>
        
        <p class="text-xl text-white-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
          Descubra, gestione y automatice el ciclo de vida de todos los certificados de su empresa con <strong>Sectigo CLM</strong>. Elimine interrupciones, refuerce la seguridad y simplifique la gestión criptográfica en una única plataforma líder a nivel mundial.
        </p>
        
        <div class="flex justify-center gap-4">
          <button (click)="openContactModal('Sectigo CLM', $event)" class="bg-bm-red hover:bg-red-700 text-white px-10 py-4 rounded font-bold transition shadow-lg shadow-red-900/40 transform hover:-translate-y-1 text-lg">
            Agendar Demostración Sectigo
          </button>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white border-b border-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">El ciclo de vida completo en una única plataforma</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border-2 border-gray-100 group-hover:border-bm-blue transition-colors">
              <svg class="w-10 h-10 text-bm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">1. Descubrir</h3>
            <p class="text-gray-600 text-sm">Escanea toda la red corporativa para encontrar certificados activos o expirados instalados en servidores, nube e infraestructuras, eliminando puntos ciegos.</p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border-2 border-gray-100 group-hover:border-bm-blue transition-colors">
              <svg class="w-10 h-10 text-bm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">2. Gestionar</h3>
            <p class="text-gray-600 text-sm">Organice y gestione todos sus activos criptográficos a través de Sectigo Certificate Manager (SCM), con controles de acceso basados en roles (RBAC).</p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border-2 border-gray-100 group-hover:border-bm-red transition-colors">
              <svg class="w-10 h-10 text-bm-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">3. Automatizar</h3>
            <p class="text-gray-600 text-sm">Emisión y renovaciones automáticas sin intervención humana, utilizando protocolos estandarizados (ACME, SCEP, EST) y APIs dedicadas.</p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border-2 border-gray-100 group-hover:border-bm-blue transition-colors">
              <svg class="w-10 h-10 text-bm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">4. Integrar</h3>
            <p class="text-gray-600 text-sm">Conecte Sectigo de forma nativa a su infraestructura: herramientas DevOps, Balanceadores de Carga, Bóvedas (Vaults), ServiceNow y Servidores Web.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div class="inline-flex bg-blue-100 text-bm-blue font-bold px-3 py-1 rounded text-sm mb-4">Plataforma Unificada</div>
            <h2 class="text-3xl lg:text-4xl font-bold text-bm-blue mb-6">Un proveedor. Todas las soluciones.</h2>
            <p class="text-gray-600 mb-6 text-lg">
              Al elegir Sectigo, no solo adquiere una herramienta de gestión, sino que asegura el respaldo de la Autoridad Certificadora comercial más grande del mundo. Consolide toda su infraestructura de confianza (PKI) en un único ecosistema.
            </p>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 font-medium text-gray-700">
                <span class="text-green-500 text-xl">✓</span> Emisión ilimitada de certificados internos y públicos
              </li>
              <li class="flex items-center gap-3 font-medium text-gray-700">
                <span class="text-green-500 text-xl">✓</span> Elimine la complejidad de gestionar múltiples CAs (como Microsoft ADCS)
              </li>
              <li class="flex items-center gap-3 font-medium text-gray-700">
                <span class="text-green-500 text-xl">✓</span> Cumplimiento global y máxima compatibilidad en navegadores
              </li>
              <li class="flex items-center gap-3 font-medium text-gray-700">
                <span class="text-green-500 text-xl">✓</span> Soporte local y consultoría especializada a través de BMTech
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:border-bm-blue transition">
              <div class="w-10 h-10 bg-blue-100 text-bm-blue rounded flex items-center justify-center mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <span class="font-bold text-gray-800">Public Trust SSL</span>
              <p class="text-xs text-gray-500 mt-2">DV, OV, EV y Wildcard</p>
            </div>

            <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:border-bm-blue transition">
              <div class="w-10 h-10 bg-purple-100 text-purple-600 rounded flex items-center justify-center mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <span class="font-bold text-gray-800">Private PKI</span>
              <p class="text-xs text-gray-500 mt-2">Certificados Internos CA</p>
            </div>

            <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:border-bm-blue transition">
              <div class="w-10 h-10 bg-green-100 text-green-600 rounded flex items-center justify-center mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <span class="font-bold text-gray-800">Sectigo S/MIME</span>
              <p class="text-xs text-gray-500 mt-2">Correo Seguro y Firma</p>
            </div>

            <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:border-bm-blue transition">
              <div class="w-10 h-10 bg-orange-100 text-orange-600 rounded flex items-center justify-center mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <span class="font-bold text-gray-800">Code Signing</span>
              <p class="text-xs text-gray-500 mt-2">Autenticación de Software</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-24 bg-white border-b border-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Seguridad para cada Identidad Digital</h2>
          <p class="text-gray-600">Sectigo CLM va mucho más allá del SSL para sitios web. Garantice la identidad criptográfica de cada máquina, documento y usuario de su ecosistema.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 border border-gray-200 rounded-xl hover:border-bm-blue transition">
            <h4 class="font-bold text-lg text-bm-blue mb-2">Web / SSL Público</h4>
            <p class="text-gray-600 text-sm">Genere certificados DV, OV y EV para servidores web, garantizando una navegación segura y cumplimiento (compliance) con Sectigo CA.</p>
          </div>
          <div class="p-6 border border-gray-200 rounded-xl hover:border-bm-blue transition">
            <h4 class="font-bold text-lg text-bm-blue mb-2">S/MIME (Correo Seguro)</h4>
            <p class="text-gray-600 text-sm">Automatización de certificados para firma y cifrado de correos corporativos (Zero Trust y Anti-Phishing).</p>
          </div>
          <div class="p-6 border border-gray-200 rounded-xl hover:border-bm-blue transition">
            <h4 class="font-bold text-lg text-bm-blue mb-2">Autenticación de Dispositivos</h4>
            <p class="text-gray-600 text-sm">Aprovisione certificados Sectigo vía Intune, Jamf o MDM para laptops, smartphones e infraestructuras Wi-Fi (802.1x).</p>
          </div>
          <div class="p-6 border border-gray-200 rounded-xl hover:border-bm-blue transition">
            <h4 class="font-bold text-lg text-bm-blue mb-2">DevOps & Contenedores</h4>
            <p class="text-gray-600 text-sm">Inyecte certificados en pipelines CI/CD. Integración nativa con Kubernetes, HashiCorp Vault, Ansible y Terraform.</p>
          </div>
          <div class="p-6 border border-gray-200 rounded-xl hover:border-bm-blue transition">
            <h4 class="font-bold text-lg text-bm-blue mb-2">Firma de Código y Documentos</h4>
            <p class="text-gray-600 text-sm">Garantice la integridad de software, drivers y archivos con firmas digitales controladas centralmente por el SCM.</p>
          </div>
          <div class="p-6 border border-gray-200 rounded-xl hover:border-bm-blue transition">
            <h4 class="font-bold text-lg text-bm-blue mb-2">IoT y Dispositivos Conectados</h4>
            <p class="text-gray-600 text-sm">Emisión escalable y ligera de certificados para autenticar y proteger la comunicación de flotas de dispositivos IoT.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-bm-blue text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-bm-red opacity-10 blur-[100px] w-1/2 h-full top-0 left-1/4"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para unificar su seguridad con Sectigo?</h2>
        <p class="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
          Deje de apagar incendios debido a certificados expirados. Agende una consultoría técnica gratuita con los especialistas de BMTech e implemente un CLM de clase mundial.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button (click)="openContactModal('Consultoría Sectigo CLM', $event)" class="bg-bm-red hover:bg-red-700 text-white px-10 py-4 rounded font-bold text-lg transition shadow-lg">
            Hablar con un Especialista
          </button>
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
              <p class="text-gray-600 mb-6">Complete los datos a continuación para recibir una propuesta comercial y asesoría sobre la solución <strong>{{ selectedProductName() }}</strong>.</p>
              
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
                  <input type="text" name="product_subject" [value]="selectedProductName()" readonly class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded text-gray-500 cursor-not-allowed outline-none">
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Detalles del Proyecto (Opcional)</label>
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Cuéntenos sobre su necesidad" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
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
export class ClmComponent {
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
      console.error('Falla al enviar el correo vía EmailJS', error);
      alert('Ocurrió un error de comunicación. Por favor, intente nuevamente o contáctenos por WhatsApp.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}