import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-gray-50 border-b border-gray-200 mt-20 py-6 relative z-20 shadow-sm">
      <div class="container mx-auto px-2 md:px-6">
        <div class="flex flex-wrap justify-center items-start gap-8 md:gap-16">
          
          @for (group of partnerGroups(); track group.category) {
            <div class="flex flex-col items-center">
              <span class="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 border-b border-gray-200 pb-1 px-4">
                {{ group.category }}
              </span>
              
              <div class="flex flex-wrap justify-center gap-2 md:gap-4">
                @for (partner of group.items; track partner.name) {
                  <div class="group flex items-center justify-center w-20 h-14 md:w-24 md:h-16 lg:w-28 lg:h-16 p-2 rounded-lg border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer" [title]="partner.name">
                     <img [src]="partner.img" [alt]="partner.name" 
                          class="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                          onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                     
                     <span class="hidden text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-bm-blue transition-colors select-none text-center leading-tight">
                       {{ partner.name }}
                     </span>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </div>

    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
      <div class="absolute right-0 top-0 w-1/2 h-full skew-x-12 translate-x-20 z-0 overflow-hidden border-l-4 border-white/50">
        
        <div class="absolute top-0 -left-[25%] w-[150%] h-full -skew-x-12">
          
          @for (img of heroImages; track $index) {
            <div class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
                 [ngClass]="{'opacity-100 z-10': currentHeroIndex() === $index, 'opacity-0 z-0': currentHeroIndex() !== $index}">
              
              <img [src]="img" class="w-full h-full object-cover transition-transform duration-1000 ease-in-out" 
                   [ngClass]="{'scale-105': currentHeroIndex() === $index, 'scale-100': currentHeroIndex() !== $index}"
                   alt="Banner Seguridad">
              
              <div class="absolute inset-0 bg-bm-blue/30 mix-blend-multiply"></div>
            </div>
          }

        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10 flex items-center">
        <div class="max-w-3xl">
          <span class="text-bm-red font-bold tracking-widest uppercase mb-4 block">Seguridad e Identidad Digital</span>
          <h1 class="text-5xl md:text-7xl font-bold text-bm-white mb-6 leading-tight">Su empresa segura <br>para crecer <span class="text-bm-red">sin límites.</span></h1>
          <p class="text-xl text-white-600 mb-10 leading-relaxed max-w-xl">
            Especialistas en PKI, Certificados Digitales y Ciberseguridad por más de <strong>22 años</strong>. 
            Distribuidores oficiales <span class="font-bold">Sectigo, Digicert y GlobalSign</span> en Perú, Brasil y EE.UU.
          </p>
          <div class="flex flex-col md:flex-row gap-4">
            <button (click)="openContactModal('Consultoría de Seguridad', $event)" class="bg-bm-red text-white px-8 py-4 rounded font-bold hover:bg-red-800 transition shadow-lg">Hablar con un Asesor</button>
            
            <button (click)="scrollTo('nuestras-soluciones')" class="border-2 border-bm-white text-bm-white px-8 py-4 rounded font-bold hover:bg-bm-blue hover:text-white transition">
              Nuestras Soluciones
            </button>
            
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white overflow-hidden border-y border-gray-100 shadow-sm">
      <div class="container mx-auto px-6 mb-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-bm-blue mb-4">Quiénes confían en BMTech</h2>
        <div class="w-20 h-1 bg-bm-red mx-auto"></div>
      </div>

      <div class="relative w-full overflow-hidden">
        <div class="flex animate-scroll gap-16 items-center w-max">

            @for (client of clients(); track 'g1-' + client.id) {
              <a [href]="client.url" target="_blank" class="shrink-0 group px-4" [title]="client.name">
               <img [src]="client.img" [alt]="client.name" class="h-16 w-auto max-w-[150px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
              </a>
            }

            @for (client of clients(); track 'g2-' + client.id) {
              <a [href]="client.url" target="_blank" class="shrink-0 group px-4" [title]="client.name">
               <img [src]="client.img" [alt]="client.name" class="h-16 w-auto max-w-[150px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
              </a>
            }
        </div>
      </div>
    </section>

    <section id="nuestras-soluciones" class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-bm-white mb-4">Nuestras Soluciones</h2>
          <div class="w-20 h-1 bg-bm-red mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-bm-blue transition-colors group">
            <div class="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-bm-blue group-hover:bg-bm-blue group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h3 class="text-xl font-bold text-bm-blue mb-3">Certificados SSL</h3>
            <p class="text-gray-600 text-sm mb-4">
              Emisión inmediata de certificados OV y EV con garantía <strong>Sectigo</strong>.
            </p>
            <a routerLink="/solutions/sectigo" class="text-bm-red font-bold text-sm hover:underline">Ver detalles →</a>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-bm-blue transition-colors group">
            <div class="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6 text-bm-red group-hover:bg-bm-red group-hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </div>
            <h3 class="text-xl font-bold text-bm-blue mb-3">Firma Digital y Automatización de Procesos</h3>
            <p class="text-gray-600 text-sm mb-4">Elimine el papel con total validez jurídica y gestión de documentos en la nube.</p>
            <a routerLink="/solutions/portal-flex" class="text-bm-red font-bold text-sm hover:underline">Ver detalles →</a>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-bm-blue transition-colors group">
            <div class="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-bm-blue group-hover:bg-bm-blue group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 class="text-xl font-bold text-bm-blue mb-3">Monitoreo DLP</h3>
            <p class="text-gray-600 text-sm mb-4">Prevenga la fuga de datos y monitoree amenazas internas con Teramind.</p>
            <a routerLink="/solutions/monitoramento" class="text-bm-red font-bold text-sm hover:underline">Ver detalles →</a>
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
                  <textarea name="message" rows="3" [disabled]="isSubmitting()" placeholder="Cuéntenos cómo podemos ayudar a proteger a su empresa" class="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
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
export class HomeComponent implements OnInit, OnDestroy {
  currentHeroIndex = signal(0);
  private intervalId: any;

  heroImages = [
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  ];

  partnerGroups = signal([
    {
      category: 'SSL',
      items: [
        { name: 'Sectigo', img: 'partners/sectigo.svg' },
        { name: 'GlobalSign', img: 'partners/globalsign.svg' },
        { name: 'DigiCert', img: 'partners/digicert.svg' }
      ]
    },
    {
      category: 'Firma Digital',
      items: [
        { name: 'PFX', img: 'partners/pfx.svg' },
        { name: 'Tablex', img: 'partners/tablex.svg' }
      ]
    },
    {
      category: 'Monitoreo',
      items: [
        { name: 'Teramind', img: 'partners/teramind.svg' },
        { name: 'Hexnode', img: 'partners/hexnode.svg' },
        { name: 'KickIdler', img: 'partners/kickidler.png' }
      ]
    }
  ]);

  clients = signal([
    { id: 1, name: 'Alfin', img: 'clients/Alfin.svg', url: 'https://alfinbanco.pe/'},
    { id: 2, name: 'Anglo American', img: 'clients/angloamerican.png', url: 'https://peru.angloamerican.com/'},
    { id: 3, name: 'BCRP', img: 'clients/bancocentral.png', url: 'https://www.bcrp.gob.pe/'},
    { id: 4, name: 'Bitel', img: 'clients/bitel.png', url: 'https://bitel.com.pe/'},
    { id: 5, name: 'JNE', img: 'clients/JNE.png', url: 'https://www.jne.gob.pe/'},
    { id: 6, name: 'SIDER', img: 'clients/SIDERPERU.jpg', url: 'https://www.siderperu.com.pe/'},
    { id: 7, name: 'Mibanco', img: 'clients/mibanco.png', url: 'https://www.mibanco.com.pe/'},
    { id: 8, name: 'Luz del Sur', img: 'clients/luzdelsur.svg', url: 'https://www.luzdelsur.pe/es'},
    { id: 9, name: 'MIMP', img: 'clients/mimp.jpeg', url: 'https://www.gob.pe/mimp'},
    { id: 10, name: 'Mincetur', img: 'clients/mincetur.png', url: 'https://www.gob.pe/mincetur'},
    { id: 11, name: 'Santander', img: 'clients/santander.svg', url: 'https://www.santander.com.pe/'},
    { id: 12, name: 'Good Hope', img: 'clients/goodhope.jpg', url: 'https://www.goodhope.org.pe/'},
  ]);

  activeModal = signal<'CONTACT' | null>(null);
  selectedProductName = signal<string>('');
  isSubmitting = signal(false);
  submitSuccess = signal(false);

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentHeroIndex.update((index) => (index + 1) % this.heroImages.length);
    }, 4000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
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