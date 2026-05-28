import { Component, signal, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as forge from 'node-forge';

interface CsrField {
  label: string;
  value: string;
  isHighlight?: boolean;
}

@Component({
  selector: 'app-verificador-csr',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden mt-20">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-6 uppercase tracking-wider backdrop-blur-md">
          <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> Herramienta de Diagnóstico
        </div>
        <h1 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Verificador de <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">CSR</span>
        </h1>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          Decodifique su archivo de Solicitud de Firma de Certificado (CSR) para verificar que toda la información (Dominio, Empresa, Ubicación y Tamaño de Llave) sea correcta antes de enviarla.
        </p>
      </div>
    </section>

    <section class="py-12 bg-gray-50 relative z-20 -mt-10 border-b border-gray-200 min-h-[500px]">
      <div class="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div class="bg-gray-100 border-b border-gray-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-bm-blue">Decodificador CSR</h2>
                <p class="text-sm text-gray-500">Pegue el texto de su CSR o suba el archivo directamente.</p>
              </div>
            </div>
            
            <div>
              <label class="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-bold text-sm cursor-pointer hover:bg-gray-50 hover:border-bm-blue transition-colors shadow-sm">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                Subir archivo .csr
                <input type="file" accept=".csr,.txt" class="hidden" (change)="onFileSelected($event)">
              </label>
            </div>
          </div>
          
          <div class="p-6 md:p-8">
            <div class="space-y-6">
              <div>
                <textarea #csrInput [value]="csrTextContent()" (input)="onTextareaInput($event)" rows="8" 
                          class="w-full p-4 border border-gray-300 rounded-lg font-mono text-sm text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition" 
                          placeholder="-----BEGIN CERTIFICATE REQUEST-----&#10;...&#10;-----END CERTIFICATE REQUEST-----"></textarea>
              </div>

              @if (errorMessage()) {
                <div class="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200 text-sm font-medium flex items-center gap-2">
                  <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {{ errorMessage() }}
                </div>
              }

              <div class="pt-2 text-center">
                <button (click)="verifyCsr(csrInput.value)" [disabled]="!csrInput.value.trim()"
                        class="w-full md:w-auto min-w-[250px] bg-bm-blue text-white font-bold py-3.5 px-8 rounded-lg hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none mx-auto">
                  Decodificar CSR
                </button>
              </div>
            </div>

            @if (csrData() && csrData()!.length > 0) {
              <div class="mt-10 animate-fade-in-up">
                <h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b border-gray-200 pb-3">
                  <svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Información Extraída
                </h3>
                
                <div class="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  @for (field of csrData(); track field.label) {
                    <div class="bg-gray-50 p-4 rounded-lg border border-gray-100" [ngClass]="{'ring-2 ring-bm-blue/20 bg-blue-50/50': field.isHighlight}">
                      <p class="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">{{ field.label }}</p>
                      <p class="text-gray-900 font-medium break-all" [ngClass]="{'text-bm-blue text-lg': field.isHighlight}">
                        {{ field.value || 'No especificado' }}
                      </p>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class VerificadorCsrComponent {
  
  csrTextContent = signal<string>('');
  csrData = signal<CsrField[] | null>(null);
  errorMessage = signal<string>('');

  onTextareaInput(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.csrTextContent.set(target.value);
    this.csrData.set(null);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const content = e.target?.result as string;
        this.csrTextContent.set(content);
        this.errorMessage.set('');
        this.verifyCsr(content);
      };
      
      reader.onerror = () => {
        this.errorMessage.set('Error al leer el archivo.');
      };
      
      reader.readAsText(file);
    }
  }

  verifyCsr(pem: string) {
    if (!pem || !pem.trim()) {
      this.errorMessage.set('Por favor, ingrese el código CSR.');
      return;
    }

    this.errorMessage.set('');
    this.csrData.set(null);

    try {
      const cleanPem = pem.trim();
      const csr = forge.pki.certificationRequestFromPem(cleanPem);
      
      const results: CsrField[] = [];
      const subject = csr.subject.attributes;

      const attrMap: Record<string, string> = {
        'CN': 'Common Name (Dominio)',
        'O': 'Organization (Empresa)',
        'OU': 'Organization Unit (Área/Departamento)',
        'L': 'Locality (Ciudad)',
        'ST': 'State (Estado/Provincia)',
        'C': 'Country (País)'
      };

      // Extrai os campos base
      Object.keys(attrMap).forEach(shortName => {
        const attr = subject.find(a => a.shortName === shortName);
        results.push({
          label: attrMap[shortName],
          value: attr ? (attr.value as string) : '-',
          isHighlight: shortName === 'CN'
        });
      });
      let sansExtracted: string[] = [];
      try {
        const attributes: any[] = (csr as any).getAttribute ? [(csr as any).getAttribute({name: 'extensionRequest'})] : (csr as any).attributes || [];
        
        // Busca na estrutura do node-forge pelas extensões
        for (const attr of attributes) {
          if (attr && attr.name === 'extensionRequest' && attr.extensions) {
            const sanExt = attr.extensions.find((e: any) => e.name === 'subjectAltName');
            if (sanExt && sanExt.altNames) {
              sansExtracted = sanExt.altNames.map((n: any) => n.value);
            }
          }
        }
      } catch (e) {
        console.warn('No se pudieron leer las extensiones SAN', e);
      }

      results.push({
        label: 'Subject Alternative Names (SANs)',
        value: sansExtracted.length > 0 ? sansExtracted.join(', ') : 'Ninguno (Certificado de 1 solo dominio)'
      });

      let keySizeInfo = 'Desconocido';
      if (csr.publicKey) {
        const pkAny = csr.publicKey as any;
        
        if (pkAny.n) {
          const bitLength = pkAny.n.bitLength();
          keySizeInfo = `${bitLength} bits (RSA)`;
        } 
        else if (pkAny.type) {
          keySizeInfo = `Algoritmo: ${pkAny.type}`;
        }
      }

      results.push({
        label: 'Key Size & Algoritmo',
        value: keySizeInfo
      });

      this.csrData.set(results);

    } catch (e: any) {
      console.error(e);
      this.errorMessage.set('Error: El formato CSR no es válido. Asegúrese de incluir "-----BEGIN CERTIFICATE REQUEST-----".');
    }
  }
}