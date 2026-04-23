import { Component, signal } from '@angular/core';
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
        
        <a routerLink="/" class="flex items-center hover:opacity-90 transition select-none">
          <img src="bmtechlogo.png" alt="Logo de BM Tech" class="h-12 w-auto object-contain">
        </a>

        <div class="hidden md:flex items-center gap-6 lg:gap-8">
          <a routerLink="/" class="nav-item">Inicio</a>

          <div class="relative group h-20 flex items-center">
            <button class="nav-item flex items-center gap-1 focus:outline-none">
              Certificados
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div class="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-bm-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2">
                <div class="relative group/sectigo">
                  <a routerLink="/solutions/sectigo" class="flex items-center justify-between w-full px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-bm-red transition-colors font-sans cursor-pointer">
                    <span>Sectigo</span>
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover/sectigo:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
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

          <div class="relative group h-20 flex items-center">
            <button class="nav-item flex items-center gap-1 focus:outline-none">
              Firma Digital
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-bm-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2">
                <a routerLink="/solutions/firma-digital" class="dropdown-item">Certificados de Firmas Digitales</a>
                <a routerLink="/solutions/portal-flex" class="dropdown-item">PFX</a>
                <a routerLink="/solutions/tablex" class="dropdown-item">Tablex</a>
              </div>
            </div>
          </div>

          <div class="relative group h-20 flex items-center">
            <button class="nav-item flex items-center gap-1 focus:outline-none">
              Monitoreo
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-bm-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2">
                <a routerLink="/solutions/hexnode" class="dropdown-item">HexNode</a>
                <a routerLink="/solutions/teramind" class="dropdown-item">Teramind</a>
                <a routerLink="/solutions/kickidler" class="dropdown-item">KickIdler</a>
              </div>
            </div>
          </div>

          <div class="relative group h-20 flex items-center">
            <button class="nav-item flex items-center gap-1 focus:outline-none">
              Soporte
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            
            <div class="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-bm-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <a routerLink="/solutions/globalsign" class="dropdown-item">Compra horas adicionales de soporte</a>
              <div class="py-2">
                <div class="relative group/soporte">
                  <a class="flex items-center justify-between w-full px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-bm-red transition-colors font-sans cursor-pointer">
                    <span>Manuales</span>
                    <svg class="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover/soporte:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <div class="absolute left-full top-0 w-48 bg-white shadow-xl rounded-lg border border-gray-100 opacity-0 invisible group-hover/soporte:opacity-100 group-hover/soporte:visible transition-all duration-300 transform translate-x-2 group-hover/soporte:translate-x-0 ml-1">
                    <div class="py-2">
                      <a routerLink="/solutions/scm" class="dropdown-item">Facturacion</a>
                      <a routerLink="/solutions/clm" class="dropdown-item">SSL</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <a href="#" (click)="openContactModal('Contacto General', $event)" class="bg-bm-red text-white px-6 py-2 rounded font-bold text-sm hover:bg-red-700 transition shadow-md font-sans whitespace-nowrap">
            Contáctanos
          </a>
        </div>
      </div>
    </nav>

    @if (activeModal() !== null) {
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
        'service_v5pa4n7',
        'template_vg8qiqn',
        form,
        'Ja_KrZXfa-gEENU3O'
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