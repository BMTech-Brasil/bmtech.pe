import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-libro-reclamaciones',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden mt-20">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-6 uppercase tracking-wider backdrop-blur-md">
          <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> Atención al Cliente
        </div>
        <h1 class="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
          Libro de Reclamaciones <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Virtual</span>
        </h1>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto font-light">
          Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, esta institución cuenta con un Libro de Reclamaciones a su disposición.
        </p>
      </div>
    </section>

    <section class="py-12 bg-gray-50 relative z-20 -mt-10">
      <div class="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          
          <div class="bg-gray-100 border-b border-gray-200 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 class="text-2xl font-bold text-bm-blue">Hoja de Reclamación</h2>
              <p class="text-sm text-gray-500 mt-1">BMTECH PERU S.A.C. | RUC: 20555130741</p>
            </div>
            <div class="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-center min-w-[150px]">
              <p class="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Fecha Actual</p>
              <p class="text-lg font-bold text-gray-800">{{ currentDate }}</p>
            </div>
          </div>

          <form (submit)="onSubmitReclamo($event)" class="p-6 md:p-8 space-y-10">
            
            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-full bg-bm-blue text-white flex items-center justify-center font-bold">1</div>
                <h3 class="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex-grow">Identificación del Consumidor Reclamante</h3>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Nombres *</label>
                  <input type="text" name="nombres" required [disabled]="isSubmitting()" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Apellidos *</label>
                  <input type="text" name="apellidos" required [disabled]="isSubmitting()" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Tipo de Documento *</label>
                  <select name="tipo_documento" required [disabled]="isSubmitting()" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                    <option value="" disabled selected>Seleccione...</option>
                    <option value="DNI">DNI</option>
                    <option value="CE">Carné de Extranjería (CE)</option>
                    <option value="Pasaporte">Pasaporte</option>
                    <option value="RUC">RUC</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Número de Documento *</label>
                  <input type="text" name="numero_documento" required [disabled]="isSubmitting()" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                </div>
                <div class="md:col-span-2">
                  <label class="block text-sm font-bold text-gray-700 mb-1">Domicilio / Dirección *</label>
                  <input type="text" name="direccion" required [disabled]="isSubmitting()" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50" placeholder="Av. / Calle / Distrito / Provincia / Departamento">
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Teléfono / Celular *</label>
                  <input type="tel" name="telefono" required [disabled]="isSubmitting()" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico *</label>
                  <input type="email" name="email" required [disabled]="isSubmitting()" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50">
                </div>
              </div>
            </div>

            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-full bg-bm-blue text-white flex items-center justify-center font-bold">2</div>
                <h3 class="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex-grow">Identificación del Bien Contratado</h3>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-2">Tipo de Bien *</label>
                  <div class="flex gap-6 mt-2">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="tipo_bien" value="Producto" required [disabled]="isSubmitting()" class="w-4 h-4 text-bm-blue focus:ring-bm-blue">
                      <span class="text-gray-700">Producto</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="tipo_bien" value="Servicio" required [disabled]="isSubmitting()" class="w-4 h-4 text-bm-blue focus:ring-bm-blue">
                      <span class="text-gray-700">Servicio</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Monto Reclamado (S/ o $) *</label>
                  <input type="text" name="monto_reclamado" required [disabled]="isSubmitting()" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition disabled:opacity-50" placeholder="Ej: S/ 150.00">
                </div>
                <div class="md:col-span-2">
                  <label class="block text-sm font-bold text-gray-700 mb-1">Descripción del Producto o Servicio *</label>
                  <textarea name="descripcion_bien" required rows="2" [disabled]="isSubmitting()" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50"></textarea>
                </div>
              </div>
            </div>

            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded-full bg-bm-blue text-white flex items-center justify-center font-bold">3</div>
                <h3 class="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2 flex-grow">Detalle de la Reclamación</h3>
              </div>
              
              <div class="grid grid-cols-1 gap-5">
                <div class="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-2">
                  <div class="grid md:grid-cols-2 gap-4">
                    <label class="flex items-start gap-3 cursor-pointer p-3 bg-white rounded border border-blue-200 hover:border-bm-blue transition-colors">
                      <input type="radio" name="tipo_reclamo" value="Reclamo" required [disabled]="isSubmitting()" class="w-4 h-4 text-bm-blue focus:ring-bm-blue mt-1">
                      <div>
                        <span class="block font-bold text-bm-blue">Reclamo</span>
                        <span class="text-xs text-gray-600">Disconformidad relacionada a los productos o servicios brindados.</span>
                      </div>
                    </label>
                    <label class="flex items-start gap-3 cursor-pointer p-3 bg-white rounded border border-blue-200 hover:border-bm-blue transition-colors">
                      <input type="radio" name="tipo_reclamo" value="Queja" required [disabled]="isSubmitting()" class="w-4 h-4 text-bm-blue focus:ring-bm-blue mt-1">
                      <div>
                        <span class="block font-bold text-bm-blue">Queja</span>
                        <span class="text-xs text-gray-600">Descontento respecto a la atención al público (no al producto/servicio).</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Detalle del Reclamo / Queja *</label>
                  <textarea name="detalle_reclamo" required rows="4" [disabled]="isSubmitting()" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50" placeholder="Explique detalladamente lo sucedido..."></textarea>
                </div>
                
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-1">Pedido del Consumidor (Opcional)</label>
                  <textarea name="pedido_consumidor" rows="3" [disabled]="isSubmitting()" class="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-bm-blue focus:border-bm-blue outline-none transition resize-none disabled:opacity-50" placeholder="¿Qué solución espera obtener?"></textarea>
                </div>
              </div>
            </div>

            <div class="pt-6 border-t border-gray-200">
              <label class="flex items-start gap-3 mb-8 cursor-pointer">
                <input type="checkbox" required [disabled]="isSubmitting()" class="w-5 h-5 text-bm-blue border-gray-300 rounded focus:ring-bm-blue mt-0.5">
                <span class="text-sm text-gray-600 leading-relaxed">
                  Declaro que los datos consignados son correctos y fieles a la verdad. Acepto la 
                  <a href="#" class="text-bm-blue font-bold hover:underline">Política de Privacidad</a> y el tratamiento de mis datos personales para dar respuesta a esta solicitud, conforme a la Ley N° 29733.
                </span>
              </label>

              <div class="text-center">
                <button type="submit" [disabled]="isSubmitting() || submitSuccess()" 
                        [ngClass]="{'bg-green-500 hover:bg-green-600': submitSuccess(), 'bg-bm-red hover:bg-red-700': !submitSuccess()}"
                        class="w-full md:w-auto min-w-[250px] text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg shadow-red-900/20 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2 mx-auto text-lg">
                  @if (isSubmitting()) {
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando Reclamo...
                  } @else if (submitSuccess()) {
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                    ¡Reclamo Enviado Exitosamente!
                  } @else {
                    Enviar Libro de Reclamaciones
                  }
                </button>
                <p class="text-xs text-gray-500 mt-4 max-w-xl mx-auto">
                  * La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI. El proveedor deberá dar respuesta al reclamo en un plazo no mayor a 15 días hábiles improrrogables.
                </p>
              </div>
            </div>

          </form>
        </div>
      </div>
    </section>
  `
})
export class LibroReclamacionesComponent {
  
  isSubmitting = signal(false);
  submitSuccess = signal(false);
  currentDate = new Date().toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });

  async onSubmitReclamo(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    
    this.isSubmitting.set(true);

    try {
      await emailjs.sendForm(
        'service_cl33nya',
        'template_tix7z93',
        form,
        'd8tYRtSCHAMvbRh1y'
      );
      
      this.submitSuccess.set(true);
      
      setTimeout(() => {
        this.submitSuccess.set(false);
        form.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 5000);

    } catch (error) {
      console.error('Error al enviar el reclamo', error);
      alert('Ocurrió un error al enviar su reclamo. Por favor intente nuevamente o contáctenos por otro medio para cumplir con su solicitud.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}