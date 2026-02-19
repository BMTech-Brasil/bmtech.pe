import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-gray-50 border-b border-gray-200 mt-20 py-4 relative z-20 shadow-sm">
      <div class="container mx-auto px-2 md:px-6">
        <div class="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2 md:gap-4">
          
          @for (partner of partners(); track partner.name) {
            <div class="group flex items-center justify-center w-20 h-14 md:w-24 md:h-16 lg:w-28 lg:h-16 p-2 rounded-lg border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
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
    </div>

    <section class="min-h-[85vh] flex items-center relative overflow-hidden bg-white py-12">
      
      <div class="absolute right-0 top-0 w-1/2 h-full skew-x-12 translate-x-20 z-0 overflow-hidden border-l-4 border-white/50">
        <div class="w-full h-full relative">
          @for (img of heroImages; track $index) {
            <div class="absolute inset-0 w-full h-full -skew-x-12 transition-all duration-1000 ease-in-out"
                 [ngClass]="{'opacity-100 scale-105': currentHeroIndex() === $index, 'opacity-0 scale-100': currentHeroIndex() !== $index}">
              
              <img [src]="img" class="w-full h-full object-cover" alt="Banner Security">
              
              <div class="absolute inset-0 bg-bm-blue/30 mix-blend-multiply"></div>
            </div>
          }
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10 flex items-center">
        <div class="max-w-3xl">
          <span class="text-bm-red font-bold tracking-widest uppercase mb-4 block">Segurança & Identidade Digital</span>
          <h1 class="text-5xl md:text-7xl font-bold text-bm-blue mb-6 leading-tight">Sua empresa segura <br>para crescer <span class="text-bm-red">sem limites.</span></h1>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
            Especialistas em PKI, Certificados Digitais e Cibersegurança a mais de <strong>22 anos</strong>. 
            Revendedores oficiais <span class="font-bold text-bm-blue">Sectigo</span> e <span class="font-bold text-bm-blue">DigiCert</span> no Brasil, Peru e EUA.
          </p>
          <div class="flex flex-col md:flex-row gap-4">
            <button class="bg-bm-red text-white px-8 py-4 rounded font-bold hover:bg-red-800 transition shadow-lg">Falar com um Consultor</button>
            <button class="border-2 border-bm-blue text-bm-blue px-8 py-4 rounded font-bold hover:bg-bm-blue hover:text-white transition">Nossas Soluções</button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white overflow-hidden border-y border-gray-100 shadow-sm">
      <div class="container mx-auto px-6 mb-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-bm-blue mb-4">Quem confia na BM Tech</h2>
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

    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-bm-blue mb-4">Nossas Soluções</h2>
          <div class="w-20 h-1 bg-bm-red mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-bm-blue transition-colors group">
            <div class="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-bm-blue group-hover:bg-bm-blue group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h3 class="text-xl font-bold text-bm-blue mb-3">Certificados SSL</h3>
            <p class="text-gray-600 text-sm mb-4">
              Emissão imediata de certificados OV e EV com garantia <strong>Sectigo</strong> e <strong>DigiCert</strong>.
            </p>
            <a href="#" class="text-bm-red font-bold text-sm hover:underline">Ver detalhes →</a>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-bm-blue transition-colors group">
            <div class="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6 text-bm-red group-hover:bg-bm-red group-hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </div>
            <h3 class="text-xl font-bold text-bm-blue mb-3">Assinatura Digital/Automação de Processos</h3>
            <p class="text-gray-600 text-sm mb-4">Elimine papel com validade jurídica total e gestão de documentos em nuvem.</p>
            <a href="#" class="text-bm-red font-bold text-sm hover:underline">Ver detalhes →</a>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-bm-blue transition-colors group">
            <div class="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-bm-blue group-hover:bg-bm-blue group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 class="text-xl font-bold text-bm-blue mb-3">Monitoramento DLP</h3>
            <p class="text-gray-600 text-sm mb-4">Previna vazamento de dados e monitore ameaças internas com Teramind.</p>
            <a href="#" class="text-bm-red font-bold text-sm hover:underline">Ver detalhes →</a>
          </div>
        </div>
      </div>
    </section>
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

  partners = signal([
    { name: 'Sectigo', img: 'partners/sectigo.svg' },
    { name: 'DigiCert', img: 'partners/digicert.svg' },
    { name: 'GeoTrust', img: 'partners/geotrust.svg' },
    { name: 'Thawte', img: 'partners/thawte.svg' },
    { name: 'RapidSSL', img: 'partners/rapidssl.svg' },
    { name: 'Teramind', img: 'partners/teramind.svg' },
    { name: 'Hexnode', img: 'partners/hexnode.svg' },
    { name: 'KickIdler', img: 'partners/kickidler.png' },
    { name: 'Portal Flex', img: 'partners/pfx.svg' },
    { name: 'Keytalk', img: 'partners/keytalk.svg' }
  ]);

  clients = signal([
    { id: 1, name: 'Coritiba', img: 'clients/coritiba.svg', url: 'https://coritiba.com.br'},
    { id: 2, name: 'JBS', img: 'clients/jbs-logo.svg', url: 'https://www.jbs.com.br'},
    { id: 3, name: 'MBRF', img: 'clients/mbrf.svg', url: 'https://www.mbrf.com'},
    { id: 4, name: 'Melitta', img: 'clients/melitta.svg', url: 'https://www.melitta.com.br'},
    { id: 5, name: 'NTT', img: 'clients/ntt-logo.png', url: 'https://br.nttdata.com'},
    { id: 6, name: 'Nubank', img: 'clients/nubank.svg', url: 'https://nubank.com.br'},
    { id: 7, name: 'Sicredi', img: 'clients/sicredi.svg', url: 'https://www.sicredi.com.br/home'},
    { id: 8, name: 'Taurus', img: 'clients/taurus-logo.svg', url: 'https://taurusarmas.com.br/home'},
    { id: 9, name: 'Telefonica', img: 'clients/telefonica-logo.png', url: 'https://www.telefonica.com.br'},
    { id: 10, name: 'Vigor', img: 'clients/vigor.svg', url: 'https://www.vigor.com.br'},
    { id: 11, name: 'WEG', img: 'clients/weg.svg', url: 'https://www.weg.net/institutional/BR/pt'},
    { id: 12, name: 'XPI', img: 'clients/xp_investimentos.png', url: 'https://www.xpi.com.br'},
  ]);

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
}