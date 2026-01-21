import { Component, signal } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-[90vh] flex items-center pt-20 relative overflow-hidden bg-white">
      <div class="absolute right-0 top-0 w-1/2 h-full bg-bm-lightBlue skew-x-12 translate-x-20 z-0"></div>
      <div class="container mx-auto px-6 relative z-10 flex items-center">
        <div class="max-w-3xl">
          <span class="text-bm-red font-bold tracking-widest uppercase mb-4 block">Segurança & Identidade Digital</span>
          <h1 class="text-5xl md:text-7xl font-bold text-bm-blue mb-6 leading-tight">Sua empresa segura <br>para crescer <span class="text-bm-red">sem limites.</span></h1>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
            Especialistas em PKI, Certificados Digitais e Cibersegurança. 
            Parceiros oficiais <span class="font-bold text-bm-blue">Sectigo</span> e <span class="font-bold text-bm-blue">DigiCert</span> no Brasi, Peru e EUA.</p>
            <div class="flex flex-col md:flex-row gap-4">
              <button class="bg-bm-red text-white px-8 py-4 rounded font-bold hover:bg-red-800 transition shadow-lg">Falar com um Consultor</button>
              <button class="border-2 border-bm-blue text-bm-blue px-8 py-4 rounded font-bold hover:bg-bm-blue hover:text-white transition">Nossas Soluções</button>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-bm-blue py-10">
      <div class="container mx-auto px-6">
        <p class="text-center text-white/60 text-xs uppercase tracking-widest mb-6">Confiança Global</p>
        <div class="flex flex-wrap justify-center gap-12 items-center text-white opacity-80 hover:opacity-100 transition-all">
          <h3 class="text-2xl font-bold">SECTIGO</h3>
          <h3 class="text-2xl font-bold">DIGICERT</h3>
          <h3 class="text-2xl font-bold">TERAMIND</h3>
        </div>
      </div>
    </div>

    <section class="py-16 bg-white overflow-hidden border-b border-gray-100">
      <div class="container mx-auto px-6 mb-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-bm-blue mb-4">Quem confia na BM Tech</h2>
        <div class="w-20 h-1 bg-bm-red mx-auto"></div>
      </div>

      <div class="relative w-full overflow-hidden">
        <div class="animate-scroll gap-16 items-center">

            @for (client of clients(); track 'g1-' + client.id) {
              <a [href]="client.url" target="_blank" class="shrink-0 group" [title]="client.name">
               <img [src]="client.img" [alt]="client.name" class="h-16 w-auto max-w-[150px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
              </a>
            }

            @for (client of clients(); track 'g2-' + client.id) {
              <a [href]="client.url" target="_blank" class="shrink-0 group" [title]="client.name">
               <img [src]="client.img" [alt]="client.name" class="h-16 w-auto max-w-[150px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
              </a>
            }

            @for (client of clients(); track 'g3-' + client.id) {
              <a [href]="client.url" target="_blank" class="shrink-0 group" [title]="client.name">
               <img [src]="client.img" [alt]="client.name" class="h-16 w-auto max-w-[150px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
              </a>
            }
                
            @for (client of clients(); track 'g4-' + client.id) {
              <a [href]="client.url" target="_blank" class="shrink-0 group" [title]="client.name">
               <img [src]="client.img" [alt]="client.name" class="h-16 w-auto max-w-[150px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
              </a>
            }

        </div>
      </div>
    </section>

    <section class="py-24 bg-blue">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-bm-blue mb-4">Nossas Soluções</h2>
          <div class="w-20 h-1 bg-bm-red mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-bm-blue transition-colors group">
            <div class="w-14 h-14 bg-bm-lightBlue rounded-lg flex items-center justify-center mb-6 text-bm-blue group-hover:bg-bm-blue group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h3 class="text-xl font-bold text-bm-blue mb-3">Certificados SSL</h3>
            <p class="text-gray-600 text-sm mb-4">
              Emissão imediata de certificados OV e EV com garantia <strong>Sectigo</strong> e <strong>DigiCert</strong>.
            </p>
            <a href="#" class="text-bm-red font-bold text-sm hover:underline">Ver detalhes →</a>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-bm-blue transition-colors group">
            <div class="w-14 h-14 bg-bm-lightBlue rounded-lg flex items-center justify-center mb-6 text-bm-blue group-hover:bg-bm-blue group-hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </div>
            <h3 class="text-xl font-bold text-bm-blue mb-3">Assinatura Digital</h3>
            <p class="text-gray-600 text-sm mb-4">Elimine papel com validade jurídica total e gestão de documentos em nuvem.</p>
            <a href="#" class="text-bm-red font-bold text-sm hover:underline">Ver detalhes →</a>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-bm-blue transition-colors group">
            <div class="w-14 h-14 bg-bm-lightBlue rounded-lg flex items-center justify-center mb-6 text-bm-blue group-hover:bg-bm-blue group-hover:text-white transition-colors">
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
export class HomeComponent {
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
}