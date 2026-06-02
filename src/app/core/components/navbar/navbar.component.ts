import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div class="container mx-auto px-6 h-20 flex justify-between items-center">
        
        <a routerLink="/" class="flex items-center hover:opacity-90 transition select-none z-[60]" (click)="closeMobileMenu()">
          <img src="bmtechlogo.png" alt="Logo de BMTech" class="h-12 w-auto object-contain">
        </a>

        <button (click)="toggleMobileMenu()" class="md:hidden text-gray-600 focus:outline-none z-[60] p-2 hover:bg-gray-50 rounded-lg transition-colors">
          <svg *ngIf="!isMobileMenuOpen()" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg *ngIf="isMobileMenuOpen()" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div 
          [class.translate-x-full]="!isMobileMenuOpen()" 
          [class.translate-x-0]="isMobileMenuOpen()" 
          class="fixed md:static top-0 right-0 w-3/4 md:w-auto h-full md:h-auto bg-white md:bg-transparent shadow-2xl md:shadow-none flex flex-col md:flex-row items-start md:items-center pt-24 md:pt-0 px-6 md:px-0 gap-6 lg:gap-8 transition-transform duration-300 ease-in-out md:translate-x-0 z-50 overflow-y-auto md:overflow-visible">
          
          <a routerLink="/" class="nav-item text-lg md:text-sm w-full md:w-auto pb-4 md:pb-0 border-b md:border-none border-gray-100" (click)="closeMobileMenu()">Inicio</a>

          <div class="relative group md:h-20 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto pb-4 md:pb-0 border-b md:border-none border-gray-100">
            <button (click)="toggleMobileDropdown('certificados')" class="nav-item flex items-center justify-between w-full md:w-auto gap-1 focus:outline-none text-lg md:text-sm">
              Certificados
              <svg [class.rotate-180]="isMobileDropdownOpen('certificados')" class="w-5 h-5 md:w-4 md:h-4 transition-transform md:group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div [class.hidden]="!isMobileDropdownOpen('certificados')" class="md:hidden mt-3 ml-4 space-y-3 w-full">
               <a routerLink="/solutions/sectigo" (click)="closeMobileMenu()" class="block text-gray-600 font-bold hover:text-bm-red transition-colors">Sectigo</a>
               <a routerLink="/solutions/scm" (click)="closeMobileMenu()" class="block text-gray-500 text-sm ml-4 hover:text-bm-red transition-colors">- Sectigo (SCM)</a>
               <a routerLink="/solutions/clm" (click)="closeMobileMenu()" class="block text-gray-500 text-sm ml-4 hover:text-bm-red transition-colors">- Certificate (CLM)</a>
               <a routerLink="/solutions/globalsign" (click)="closeMobileMenu()" class="block text-gray-600 font-bold hover:text-bm-red transition-colors">Global Sign</a>
               <a routerLink="/solutions/digicert" (click)="closeMobileMenu()" class="block text-gray-600 font-bold hover:text-bm-red transition-colors">DigiCert</a>
            </div>
            <div class="hidden md:block absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-bm-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2">
                <div class="relative group/sectigo">
                  <a routerLink="/solutions/sectigo" class="flex items-center justify-between w-full px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-bm-red transition-colors font-sans cursor-pointer">
                    <span>Sectigo</span>
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover/sectigo:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                  <div class="absolute left-full top-0 w-48 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover/sectigo:opacity-100 group-hover/sectigo:visible transition-all duration-300 transform translate-x-2 group-hover/sectigo:translate-x-0 ml-1">
                    <div class="py-2">
                      <a routerLink="/solutions/scm" class="dropdown-item">Sectigo Certificate Manager (SCM)</a>
                      <a routerLink="/solutions/clm" class="dropdown-item">Certificate Lifecycle Management (CLM)</a>
                    </div>
                  </div>
                </div>
                <a routerLink="/solutions/globalsign" class="dropdown-item">Global Sign</a>
                <a routerLink="/solutions/digicert" class="dropdown-item">DigiCert</a>
              </div>
            </div>
          </div>

          <div class="relative group md:h-20 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto pb-4 md:pb-0 border-b md:border-none border-gray-100">
            <button (click)="toggleMobileDropdown('firma')" class="nav-item flex items-center justify-between w-full md:w-auto gap-1 focus:outline-none text-lg md:text-sm">
              Firma Digital
              <svg [class.rotate-180]="isMobileDropdownOpen('firma')" class="w-5 h-5 md:w-4 md:h-4 transition-transform md:group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div [class.hidden]="!isMobileDropdownOpen('firma')" class="md:hidden mt-3 ml-4 space-y-3 w-full">
               <a routerLink="/solutions/firma-digital" (click)="closeMobileMenu()" class="block text-gray-600 font-bold hover:text-bm-red transition-colors">Certificados de Firmas Digitales</a>
               <a routerLink="/solutions/portal-flex" (click)="closeMobileMenu()" class="block text-gray-600 font-bold hover:text-bm-red transition-colors">PFX</a>
               <a routerLink="/solutions/tablex" (click)="closeMobileMenu()" class="block text-gray-600 font-bold hover:text-bm-red transition-colors">Tablex</a>
            </div>
            <div class="hidden md:block absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-bm-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2">
                <a routerLink="/solutions/firma-digital" class="dropdown-item">Certificados de Firmas Digitales</a>
                <a routerLink="/solutions/portal-flex" class="dropdown-item">PFX</a>
                <a routerLink="/solutions/tablex" class="dropdown-item">Tablex</a>
              </div>
            </div>
          </div>

          <div class="relative group md:h-20 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto pb-4 md:pb-0 border-b md:border-none border-gray-100">
            <button (click)="toggleMobileDropdown('monitoreo')" class="nav-item flex items-center justify-between w-full md:w-auto gap-1 focus:outline-none text-lg md:text-sm">
              Monitoreo
              <svg [class.rotate-180]="isMobileDropdownOpen('monitoreo')" class="w-5 h-5 md:w-4 md:h-4 transition-transform md:group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div [class.hidden]="!isMobileDropdownOpen('monitoreo')" class="md:hidden mt-3 ml-4 space-y-3 w-full">
               <a routerLink="/solutions/monitoreo" (click)="closeMobileMenu()" class="block text-gray-600 font-bold hover:text-bm-red transition-colors">Ver Todo Monitoreo</a>
               <a routerLink="/solutions/hexnode" (click)="closeMobileMenu()" class="block text-gray-500 text-sm ml-4 hover:text-bm-red transition-colors">- HexNode</a>
               <a routerLink="/solutions/teramind" (click)="closeMobileMenu()" class="block text-gray-500 text-sm ml-4 hover:text-bm-red transition-colors">- Teramind</a>
               <a routerLink="/solutions/kickidler" (click)="closeMobileMenu()" class="block text-gray-500 text-sm ml-4 hover:text-bm-red transition-colors">- KickIdler</a>
            </div>
            <div class="hidden md:block absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-bm-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2">
                <a routerLink="/solutions/monitoreo" class="dropdown-item font-bold border-b border-gray-100">Ver Todos</a>
                <a routerLink="/solutions/hexnode" class="dropdown-item">HexNode</a>
                <a routerLink="/solutions/teramind" class="dropdown-item">Teramind</a>
                <a routerLink="/solutions/kickidler" class="dropdown-item">KickIdler</a>
              </div>
            </div>
          </div>

          <div class="relative group md:h-20 flex flex-col md:flex-row items-start md:items-center w-full md:w-auto pb-4 md:pb-0 border-b md:border-none border-gray-100">
            <button (click)="toggleMobileDropdown('soporte')" class="nav-item flex items-center justify-between w-full md:w-auto gap-1 focus:outline-none text-lg md:text-sm">
              Soporte
              <svg [class.rotate-180]="isMobileDropdownOpen('soporte')" class="w-5 h-5 md:w-4 md:h-4 transition-transform md:group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div [class.hidden]="!isMobileDropdownOpen('soporte')" class="md:hidden mt-3 ml-4 space-y-3 w-full">
               <a routerLink="/solutions/horasadicionales" (click)="closeMobileMenu()" class="block text-gray-600 font-bold hover:text-bm-red transition-colors">Compra horas de soporte</a>
               <span class="block text-gray-600 font-bold mt-4">Manuales</span>
               <a routerLink="/solutions/soporte-fe" (click)="closeMobileMenu()" class="block text-gray-500 text-sm ml-4 hover:text-bm-red transition-colors">- Facturacion Electrónica</a>
               <a routerLink="/solutions/soporte-ssl" (click)="closeMobileMenu()" class="block text-gray-500 text-sm ml-4 hover:text-bm-red transition-colors">- Soporte SSL</a>
            </div>
            <div class="hidden md:block absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-bm-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <a routerLink="/solutions/horasadicionales" class="dropdown-item">Compra horas adicionales de soporte</a>
              <div class="py-2">
                <div class="relative group/soporte">
                  <a class="flex items-center justify-between w-full px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-bm-red transition-colors font-sans cursor-pointer">
                    <span>Manuales</span>
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover/soporte:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                  </a>
                  <div class="absolute left-full top-0 w-48 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover/soporte:opacity-100 group-hover/soporte:visible transition-all duration-300 transform translate-x-2 group-hover/soporte:translate-x-0 ml-1">
                    <div class="py-2">
                      <a routerLink="/solutions/soporte-fe" class="dropdown-item">Facturacion</a>
                      <a routerLink="/solutions/soporte-ssl" class="dropdown-item">SSL</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button (click)="openContactModal('Contacto General', $event); closeMobileMenu()" class="bg-bm-red text-white px-6 py-3 md:py-2 mt-4 md:mt-0 w-full md:w-auto rounded font-bold text-base md:text-sm hover:bg-red-700 transition shadow-md font-sans text-center track-abrir-modal">
            Contáctanos
          </button>
        </div>

        <div *ngIf="isMobileMenuOpen()" (click)="closeMobileMenu()" class="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"></div>

      </div>
    </nav>

    @if (activeModal() !== null) {
      <div class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" (click)="closeModal()"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 md:p-8 transform transition-all animate-fade-in-up max-h-[90vh] overflow-y-auto">
          <button (click)="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors focus:outline-none bg-gray-100 hover:bg-gray-200 rounded-full p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          @if (activeModal() === 'CONTACT') {
            <div>
              <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center mb-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-bm-blue mb-2">Solicitar Cotización</h3>
              <p class="text-gray-600 mb-6 text-sm md:text-base">Complete los datos a continuación para recibir información detallada sobre: <strong>{{ selectedProductName() }}</strong>.</p>
              
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
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Ej: Necesito más información sobre sus servicios..." class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
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
  `,
  styles: [`
    .nav-item {
      @apply text-sm font-bold text-gray-600 hover:text-bm-blue transition uppercase cursor-pointer font-sans whitespace-nowrap;
    }
    .dropdown-item {
      @apply block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-bm-red transition-colors font-sans;
    }
  `]
})
export class NavbarComponent {
  activeModal = signal<'CONTACT' | null>(null);
  selectedProductName = signal<string>('');
  isSubmitting = signal(false);
  submitSuccess = signal(false);

  isMobileMenuOpen = signal(false);
  mobileOpenDropdown = signal<string | null>(null);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
    if (this.isMobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      this.mobileOpenDropdown.set(null); 
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
    this.mobileOpenDropdown.set(null);
    document.body.style.overflow = 'auto';
  }

  toggleMobileDropdown(dropdownName: string) {
    if (this.mobileOpenDropdown() === dropdownName) {
      this.mobileOpenDropdown.set(null);
    } else {
      this.mobileOpenDropdown.set(dropdownName);
    }
  }

  isMobileDropdownOpen(dropdownName: string): boolean {
    return this.mobileOpenDropdown() === dropdownName;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 768 && this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
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