import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-gray-50 text-gray-600 pt-16 pb-8 border-t border-gray-200">
      <div class="container mx-auto px-6">
        
        <div class="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div class="mb-6 select-none">
              <img src="bmtechlogo.png" alt="BM Tech Logo" class="h-12 w-auto object-contain">
            </div>
            
            <p class="text-gray-500 text-sm leading-relaxed mb-6">
              Sua parceira global em Cibersegurança e Identidade Digital. 
              Elevando o padrão de confiança para empresas que não podem parar.
            </p>

            <div class="flex flex-wrap gap-3">
              <span class="text-xs font-bold border border-gray-300 text-gray-500 px-2 py-1 rounded">SECTIGO Partner</span>
              <span class="text-xs font-bold border border-gray-300 text-gray-500 px-2 py-1 rounded">DIGICERT</span>
            </div>
          </div>

          <div class="col-span-2">
            <h4 class="text-lg font-bold mb-6 text-bm-blue border-l-4 border-bm-red pl-3">Nossa Presença</h4>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <p class="text-bm-red text-xs font-bold uppercase mb-2">Brasil</p>
                <p class="text-gray-600 text-sm">R. Trajano, 279 - Sala 701</p>
                <p class="text-gray-600 text-sm">Centro, Florianópolis - SC, 88010-010</p>
                <a href="tel:+554830547153" class="text-bm-blue font-bold text-xs mt-2 block hover:underline transition">+55 (48) 3054-7153</a>
                <a href="mailto:support@bmtechcorp.com" class="text-bm-blue font-bold text-xs mt-1 block hover:underline transition">suporte&#64;bmtechbrasil.com</a>
              </div>

              <div>
                <p class="text-bm-red text-xs font-bold uppercase mb-2">USA</p>
                <p class="text-gray-600 text-sm">16627 Hemingway Dr</p>
                <p class="text-gray-600 text-sm">Weston, FL 33326</p>
                <a href="tel:+19549019527" class="text-bm-blue font-bold text-xs mt-2 block hover:underline transition">+1 954 901-9527</a>
                <a href="mailto:support@bmtechcorp.com" class="text-bm-blue font-bold text-xs mt-1 block hover:underline transition">support&#64;bmtechcorp.com</a>
              </div>

              <div>
                <p class="text-bm-red text-xs font-bold uppercase mb-2">Peru</p>
                <p class="text-gray-600 text-sm">Av. Antonio Miró Quesada 457, piso 15</p>
                <p class="text-gray-600 text-sm">Magdalena del Mar, Lima</p>
                <a href="tel:+5112461991" class="text-bm-blue font-bold text-xs mt-2 block hover:underline transition">+51 1 246-1991</a>
                <a href="mailto:soporte@bmtech.pe" class="text-bm-blue font-bold text-xs mt-1 block hover:underline transition">soporte&#64;bmtech.pe</a>
              </div>

            </div>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-6 text-bm-blue border-l-4 border-bm-red pl-3">Links Rápidos</h4>
            <ul class="space-y-3 text-sm text-gray-500">
              <li><a routerLink="/" class="hover:text-bm-red hover:pl-1 transition-all">Home</a></li>
              <li><a href="#" class="hover:text-bm-red hover:pl-1 transition-all">Soluções Corporativas</a></li>
              <li><a href="#" class="hover:text-bm-red hover:pl-1 transition-all">Seja um Parceiro</a></li>
              <li><a href="#" class="hover:text-bm-red hover:pl-1 transition-all">Portal do Cliente</a></li>
              <li><a href="#" class="hover:text-bm-red hover:pl-1 transition-all">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-200 pt-8 flex justify-center items-center text-xs text-gray-400">
          <p>© 2026 BM Tech Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}