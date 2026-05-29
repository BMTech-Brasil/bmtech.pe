import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as forge from 'node-forge';

@Component({
  selector: 'app-concordancia-llaves',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-20 pb-32 relative overflow-hidden mt-20">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div class="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-6 uppercase tracking-wider backdrop-blur-md">
          <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> Herramienta de Diagnóstico
        </div>
        <h1 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Concordancia de <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Llaves</span>
        </h1>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          Verifique si su Llave Privada (.key) corresponde exactamente al Certificado Público (.crt). Este análisis matemático se realiza 100% de forma local.
        </p>
      </div>
    </section>

    <section class="py-12 bg-gray-50 relative z-20 -mt-10 border-b border-gray-200 min-h-[500px]">
      <div class="container mx-auto px-4 md:px-6 max-w-5xl">
        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          
          <div class="p-6 md:p-8">
            <div class="grid md:grid-cols-2 gap-6 mb-8">
              
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <label class="block text-sm font-bold text-gray-700">Llave Privada (.key)</label>
                  <label class="text-xs text-bm-blue cursor-pointer hover:underline font-bold">
                    Subir archivo
                    <input type="file" accept=".key,.txt" class="hidden" (change)="onFileSelected($event, 'key')">
                  </label>
                </div>
                <textarea [value]="keyText()" (input)="onInput($event, 'key')" rows="10" 
                          class="w-full p-4 border border-gray-300 rounded-lg font-mono text-xs text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue outline-none transition" 
                          placeholder="-----BEGIN PRIVATE KEY-----&#10;..."></textarea>
              </div>

              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <label class="block text-sm font-bold text-gray-700">Certificado Público (.crt)</label>
                  <label class="text-xs text-bm-blue cursor-pointer hover:underline font-bold">
                    Subir archivo
                    <input type="file" accept=".crt,.cer,.pem,.txt" class="hidden" (change)="onFileSelected($event, 'cert')">
                  </label>
                </div>
                <textarea [value]="certText()" (input)="onInput($event, 'cert')" rows="10" 
                          class="w-full p-4 border border-gray-300 rounded-lg font-mono text-xs text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue outline-none transition" 
                          placeholder="-----BEGIN CERTIFICATE-----&#10;..."></textarea>
              </div>
            </div>

            <div class="text-center border-t border-gray-200 pt-8">
              <button (click)="checkMatch()" [disabled]="!keyText().trim() || !certText().trim()"
                      class="w-full md:w-auto min-w-[250px] bg-bm-blue text-white font-bold py-3.5 px-8 rounded-lg hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none">
                Verificar Concordancia
              </button>
            </div>

            @if (resultState() !== 'idle') {
              <div class="mt-8 pt-6 border-t border-gray-100 animate-fade-in-up">
                
                @if (resultState() === 'match') {
                  <div class="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                    <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-green-800 mb-2">¡Concordancia Exacta!</h3>
                    <p class="text-green-700 text-sm">El módulo matemático de la Llave Privada coincide perfectamente con el Certificado Público. Puede proceder con la instalación.</p>
                  </div>
                }

                @if (resultState() === 'mismatch') {
                  <div class="bg-red-50 border border-red-200 p-6 rounded-xl text-center">
                    <div class="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-red-800 mb-2">Las llaves NO coinciden</h3>
                    <p class="text-red-700 text-sm">El archivo .key no pertenece a este certificado. Si intenta instalarlos juntos, el servidor web arrojará un error.</p>
                  </div>
                }

                @if (resultState() === 'error') {
                  <div class="bg-orange-50 border border-orange-200 p-6 rounded-xl text-center">
                    <div class="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-orange-800 mb-2">Error de formato</h3>
                    <p class="text-orange-700 text-sm">{{ errorMessage() }}</p>
                  </div>
                }
                
              </div>
            }

          </div>
        </div>
      </div>
    </section>
  `
})
export class ConcordanciaLlavesComponent {
  
  keyText = signal<string>('');
  certText = signal<string>('');
  
  resultState = signal<'idle' | 'match' | 'mismatch' | 'error'>('idle');
  errorMessage = signal<string>('');

  onInput(event: Event, type: 'key' | 'cert') {
    const val = (event.target as HTMLTextAreaElement).value;
    if (type === 'key') this.keyText.set(val);
    if (type === 'cert') this.certText.set(val);
    this.resultState.set('idle');
  }

  onFileSelected(event: Event, type: 'key' | 'cert') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (type === 'key') this.keyText.set(content);
        if (type === 'cert') this.certText.set(content);
        this.resultState.set('idle');
      };
      reader.readAsText(input.files[0]);
    }
  }

  checkMatch() {
    this.resultState.set('idle');
    this.errorMessage.set('');

    try {
      const privKeyPem = this.keyText().trim();
      const certPem = this.certText().trim();

      const privateKey = forge.pki.privateKeyFromPem(privKeyPem);
      
      const cert = forge.pki.certificateFromPem(certPem);
      const publicKey = cert.publicKey;

      const privModulus = (privateKey as any).n;
      const pubModulus = (publicKey as any).n;

      if (!privModulus || !pubModulus) {
        throw new Error('Solo se pueden comparar llaves RSA estándar mediante este método.');
      }

      if (privModulus.toString(16) === pubModulus.toString(16)) {
        this.resultState.set('match');
      } else {
        this.resultState.set('mismatch');
      }

    } catch (e: any) {
      console.error(e);
      let errorMsg = 'No se pudo procesar uno de los archivos. Asegúrese de que ambos estén en formato PEM válido.';
      
      if (e.message && e.message.includes('PEM')) {
        errorMsg = 'Formato PEM inválido. Revise los encabezados BEGIN y END.';
      } else if (e.message && e.message.includes('encrypted')) {
        errorMsg = 'La llave privada está encriptada. Este sistema solo acepta llaves sin contraseña (unencrypted) para la validación cruzada.';
      }

      this.errorMessage.set(errorMsg);
      this.resultState.set('error');
    }
  }
}