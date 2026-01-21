import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div class="container mx-auto px-6 h-20 flex justify-between items-center">
        
        <a routerLink="/" class="flex items-center gap-1 hover:opacity-90 transition select-none font-kartika">
          
          <div class="bg-bm-red text-white font-bold text-3xl px-1 py-0 rounded shadow-sm tracking-normal leading-none flex items-center justify-center pt-1">
            BM
          </div>
          
          <div class="text-[#4285F4] font-bold text-2xl tracking-normal leading-snug">
            Tech
          </div>
        </a>

        <div class="hidden md:flex items-center gap-8">
          <a routerLink="/" class="nav-item">Home</a>

          <div class="relative group h-20 flex items-center">
            <button class="nav-item flex items-center gap-1 focus:outline-none">
              Soluções
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            <div class="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-4 border-bm-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div class="py-2">
                <a href="#" class="dropdown-item">Sectigo</a>
                <a href="https://all4sec.com/" class="dropdown-item">DigiCert</a>
                <a href="#" class="dropdown-item">VMC (Verified Mark)</a>
                <a routerLink="/solutions/teramind" class="dropdown-item">Teramind</a>
                <div class="border-t border-gray-100 my-1"></div>
                <a href="#" class="dropdown-item font-bold text-bm-blue">Portal Flex</a>
              </div>
            </div>
          </div>

          <a href="#" class="nav-item">Parceiros</a>
          
          <a href="#" class="bg-bm-red text-white px-6 py-2 rounded font-bold text-sm hover:bg-red-700 transition shadow-md font-sans">
            Fale Conosco
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav-item {
      @apply text-sm font-bold text-gray-600 hover:text-bm-blue transition uppercase cursor-pointer font-sans;
    }
    .dropdown-item {
      @apply block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-bm-red transition-colors font-sans;
    }
  `]
})
export class NavbarComponent {}