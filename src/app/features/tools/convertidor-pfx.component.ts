import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as forge from 'node-forge';

@Component({
  selector: 'app-convertidor-pfx',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden mt-20">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-6 uppercase tracking-wider backdrop-blur-md">
          <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> Herramienta Segura
        </div>
        <h1 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Convertidor <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">PFX a KEY/CRT</span>
        </h1>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          Extraiga la llave privada y el certificado público de su archivo .PFX o .P12 de forma 100% segura. El proceso se realiza íntegramente en su navegador; sus archivos nunca se envían a ningún servidor.
        </p>
      </div>
    </section>

    <section class="py-12 bg-gray-50 relative z-20 -mt-10 border-b border-gray-200 min-h-[500px]">
      <div class="container mx-auto px-4 md:px-6 max-w-3xl">
        
        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          
          <div class="bg-gray-100 border-b border-gray-200 p-6 flex items-center gap-4">
            <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center shrink-0 border border-blue-100 shadow-sm">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-bm-blue">Extractor de Certificados</h2>
              <p class="text-sm text-gray-500">Seleccione su archivo PFX e ingrese la contraseña de instalación.</p>
            </div>
          </div>
          
          <div class="p-6 md:p-8">
            
            @if (!isSuccess()) {
              <div class="space-y-6">
                
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-2">Archivo Certificado (.pfx o .p12) *</label>
                  <div class="flex items-center justify-center w-full">
                    <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors"
                           [ngClass]="{'border-bm-blue bg-blue-50': selectedFileName(), 'border-gray-300 bg-gray-50 hover:bg-gray-100': !selectedFileName()}">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-3 text-gray-400" [ngClass]="{'text-bm-blue': selectedFileName()}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500 font-medium">
                          @if (selectedFileName()) {
                            <span class="text-bm-blue font-bold">{{ selectedFileName() }}</span>
                          } @else {
                            Haga clic para seleccionar o arrastre el archivo
                          }
                        </p>
                      </div>
                      <input type="file" accept=".pfx,.p12" class="hidden" (change)="onFileSelected($event)">
                    </label>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-2">Contraseña del Certificado *</label>
                  <input type="password" #passwordInput [disabled]="isProcessing()" class="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50" placeholder="Ingrese la contraseña del archivo">
                </div>

                @if (errorMessage()) {
                  <div class="bg-red-50 text-red-700 p-4 rounded-lg border border-red-200 text-sm font-medium flex items-center gap-2">
                    <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {{ errorMessage() }}
                  </div>
                }

                <div class="pt-4 text-center">
                  <button (click)="processCertificate(passwordInput.value)" [disabled]="isProcessing() || !selectedFile()"
                          class="w-full md:w-auto min-w-[250px] bg-bm-blue text-white font-bold py-3.5 px-8 rounded-lg hover:bg-blue-900 transition-all shadow-lg shadow-blue-900/20 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2 mx-auto">
                    @if (isProcessing()) {
                      <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Procesando...
                    } @else {
                      Extraer Llaves
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    }
                  </button>
                </div>
              </div>
            }

            @if (isSuccess()) {
              <div class="text-center py-6">
                <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">¡Extracción Exitosa!</h3>
                <p class="text-gray-600 mb-8">Su certificado ha sido procesado localmente. Descargue los archivos a continuación.</p>

                <div class="grid md:grid-cols-2 gap-4 max-w-lg mx-auto">
                  <a [href]="keyUrl()" [download]="baseFileName() + '.key'" class="flex flex-col items-center justify-center p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-bm-blue hover:bg-white transition-colors group cursor-pointer shadow-sm">
                    <svg class="w-8 h-8 text-gray-400 group-hover:text-bm-blue mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                    <span class="font-bold text-gray-800 group-hover:text-bm-blue transition-colors">Llave Privada</span>
                    <span class="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1 block">Descargar .KEY</span>
                  </a>

                  <a [href]="crtUrl()" [download]="baseFileName() + '.crt'" class="flex flex-col items-center justify-center p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-bm-blue hover:bg-white transition-colors group cursor-pointer shadow-sm">
                    <svg class="w-8 h-8 text-gray-400 group-hover:text-bm-blue mb-2 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    <span class="font-bold text-gray-800 group-hover:text-bm-blue transition-colors">Certificado Público</span>
                    <span class="text-xs text-gray-500 uppercase font-bold tracking-wider mt-1 block">Descargar .CRT</span>
                  </a>
                </div>

                <div class="mt-8 pt-6 border-t border-gray-200">
                  <button (click)="resetForm()" class="text-sm font-bold text-bm-red hover:underline">
                    Convertir otro archivo
                  </button>
                </div>
              </div>
            }

          </div>
        </div>

      </div>
    </section>
  `
})
export class ConvertidorPfxComponent {
  
  selectedFile = signal<File | null>(null);
  selectedFileName = signal<string>('');
  
  isProcessing = signal(false);
  isSuccess = signal(false);
  errorMessage = signal<string>('');
  
  keyUrl = signal<string>('');
  crtUrl = signal<string>('');
  baseFileName = signal<string>('certificado');

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedFile.set(file);
      this.selectedFileName.set(file.name);

      const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
      this.baseFileName.set(nameWithoutExt);
      
      this.errorMessage.set('');
    }
  }

  async processCertificate(password: string) {
    const file = this.selectedFile();
    if (!file) {
      this.errorMessage.set('Por favor, seleccione un archivo PFX o P12.');
      return;
    }
    if (!password) {
      this.errorMessage.set('La contraseña es obligatoria.');
      return;
    }

    this.isProcessing.set(true);
    this.errorMessage.set('');

    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const arrayBuffer = e.target?.result as ArrayBuffer;

        const uint8Array = new Uint8Array(arrayBuffer);
        let binaryString = '';
        for (let i = 0; i < uint8Array.byteLength; i++) {
          binaryString += String.fromCharCode(uint8Array[i]);
        }

        const asn1 = forge.asn1.fromDer(binaryString);

        const p12 = forge.pkcs12.pkcs12FromAsn1(asn1, false, password);

        let privateKeyPem = '';
        let certPem = '';

        const keyBags = p12.getBags({ bagType: forge.pki.oids['pkcs8ShroudedKeyBag'] });
        const keyBag = keyBags[forge.pki.oids['pkcs8ShroudedKeyBag']]?.[0];
        
        if (keyBag && keyBag.key) {
          privateKeyPem = forge.pki.privateKeyToPem(keyBag.key);
        } else {

          const plainKeyBags = p12.getBags({ bagType: forge.pki.oids['keyBag'] });
          const plainKeyBag = plainKeyBags[forge.pki.oids['keyBag']]?.[0];
          if (plainKeyBag && plainKeyBag.key) {
            privateKeyPem = forge.pki.privateKeyToPem(plainKeyBag.key);
          }
        }

        const certBags = p12.getBags({ bagType: forge.pki.oids['certBag'] });
        const certBag = certBags[forge.pki.oids['certBag']]?.[0];
        
        if (certBag && certBag.cert) {
          certPem = forge.pki.certificateToPem(certBag.cert);
        }

        if (!privateKeyPem || !certPem) {
          throw new Error('No se pudo encontrar la llave privada o el certificado en el archivo.');
        }

        const keyBlob = new Blob([privateKeyPem], { type: 'text/plain' });
        const crtBlob = new Blob([certPem], { type: 'text/plain' });

        this.keyUrl.set(URL.createObjectURL(keyBlob));
        this.crtUrl.set(URL.createObjectURL(crtBlob));
        
        this.isSuccess.set(true);

      } catch (error: any) {
        console.error('Error procesando PFX:', error);
        if (error.message && error.message.includes('password')) {
          this.errorMessage.set('Contraseña incorrecta. Verifique e intente de nuevo.');
        } else {
          this.errorMessage.set('Error al procesar el archivo. Asegúrese de que sea un .PFX o .P12 válido.');
        }
      } finally {
        this.isProcessing.set(false);
      }
    };

    reader.onerror = () => {
      this.errorMessage.set('Error al leer el archivo desde su computadora.');
      this.isProcessing.set(false);
    };

    reader.readAsArrayBuffer(file);
  }

  resetForm() {
    this.selectedFile.set(null);
    this.selectedFileName.set('');
    this.isSuccess.set(false);
    this.errorMessage.set('');
    
    if (this.keyUrl()) URL.revokeObjectURL(this.keyUrl());
    if (this.crtUrl()) URL.revokeObjectURL(this.crtUrl());
    
    this.keyUrl.set('');
    this.crtUrl.set('');
  }
}