import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-scm',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="bg-bm-blue text-white pt-32 pb-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-bm-blue via-bm-blue to-transparent z-0"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-blue-100 mb-6 uppercase tracking-wider">
              <span class="w-2 h-2 bg-bm-red rounded-full animate-pulse"></span> Sectigo Certificate Manager
            </div>
            
            <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              A automação definitiva para <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Certificados Digitais</span>.
            </h1>
            
            <p class="text-lg text-gray-300 mb-8 leading-relaxed">
              O <strong>Sectigo Certificate Manager (SCM)</strong> descobre, gere e automatiza a renovação de toda a sua infraestrutura de certificados Sectigo, evitando falhas sistémicas e simplificando o trabalho da sua equipa de TI.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <button class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-lg shadow-red-900/20 transform hover:-translate-y-1">
                Agendar Demonstração SCM
              </button>
              <button class="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded font-bold transition flex items-center justify-center gap-2">
                Falar com Especialista
              </button>
            </div>
          </div>

          <div class="relative group perspective-1000 hidden lg:block">
             <div class="bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden relative z-10 transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
                <div class="bg-gray-800 h-10 flex items-center px-4 gap-4 border-b border-gray-700">
                   <div class="flex gap-1.5">
                     <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                     <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                     <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                   </div>
                   <div class="text-xs text-gray-400 font-mono tracking-wider">Sectigo SCM Dashboard</div>
                </div>
                <div class="p-6 bg-gray-900 grid grid-cols-4 gap-4 h-[350px]">
                   <div class="col-span-1 space-y-3 border-r border-gray-800 pr-4">
                      <div class="h-2 w-1/2 bg-gray-600 rounded mb-6"></div>
                      <div class="flex items-center gap-2 text-cyan-400"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> <div class="h-2 w-16 bg-cyan-400 rounded"></div></div>
                      <div class="flex items-center gap-2 opacity-50"><svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg> <div class="h-2 w-20 bg-gray-500 rounded"></div></div>
                      <div class="flex items-center gap-2 opacity-50"><svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg> <div class="h-2 w-16 bg-gray-500 rounded"></div></div>
                   </div>
                   <div class="col-span-3 space-y-4">
                      <div class="grid grid-cols-3 gap-3">
                        <div class="bg-gray-800 p-3 rounded border border-gray-700">
                          <p class="text-[10px] text-gray-400 uppercase">Total Sectigo</p>
                          <p class="text-xl font-bold text-white mt-1">1,248</p>
                        </div>
                        <div class="bg-gray-800 p-3 rounded border border-red-900/50 relative overflow-hidden">
                          <div class="absolute right-0 top-0 w-8 h-8 bg-red-500/10 rounded-bl-full"></div>
                          <p class="text-[10px] text-gray-400 uppercase">A Expirar</p>
                          <p class="text-xl font-bold text-red-400 mt-1">12</p>
                        </div>
                        <div class="bg-gray-800 p-3 rounded border border-gray-700">
                          <p class="text-[10px] text-gray-400 uppercase">Renovados Auto.</p>
                          <p class="text-xl font-bold text-green-400 mt-1">45</p>
                        </div>
                      </div>
                      <div class="bg-gray-800 p-4 rounded border border-gray-700 h-40">
                         <div class="flex justify-between items-center mb-3 pb-2 border-b border-gray-700">
                           <div class="h-2 w-1/4 bg-gray-500 rounded"></div>
                           <div class="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 rounded text-[9px] font-bold uppercase tracking-wider">Sectigo Discovery Ativo</div>
                         </div>
                         <div class="space-y-3">
                            <div class="flex justify-between items-center">
                              <div class="flex gap-2 items-center"><span class="w-1.5 h-1.5 rounded-full bg-green-500"></span><div class="h-2 w-24 bg-gray-400 rounded"></div></div>
                              <div class="h-2 w-12 bg-gray-600 rounded"></div>
                            </div>
                            <div class="flex justify-between items-center">
                              <div class="flex gap-2 items-center"><span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span><div class="h-2 w-32 bg-gray-400 rounded"></div></div>
                              <div class="text-[10px] text-red-400 font-mono">Expira em 2 dias</div>
                            </div>
                            <div class="flex justify-between items-center">
                              <div class="flex gap-2 items-center"><span class="w-1.5 h-1.5 rounded-full bg-green-500"></span><div class="h-2 w-20 bg-gray-400 rounded"></div></div>
                              <div class="h-2 w-16 bg-gray-600 rounded"></div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div class="absolute -inset-4 bg-cyan-500/20 blur-3xl -z-10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-12 border-b border-gray-100 shadow-sm relative z-20 -mt-2">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
          <div>
            <p class="text-4xl font-bold text-bm-blue mb-1">Zero</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Downtime por Expiração</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-bm-blue mb-1">100%</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Visibilidade da Rede</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-bm-blue mb-1">Agil</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Gestão num só painel</p>
          </div>
          <div>
            <p class="text-4xl font-bold text-bm-blue mb-1">DevOps</p>
            <p class="text-xs uppercase tracking-widest text-gray-500">Integração Nativa</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1 relative">
            <div class="bg-white p-8 rounded-2xl shadow-lg border border-red-100 relative">
               <div class="absolute -top-4 -left-4 w-12 h-12 bg-bm-red rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/30">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
               </div>
               <h3 class="text-xl font-bold text-gray-800 mb-4">O risco da gestão manual</h3>
               <div class="space-y-4">
                 <div class="flex items-center gap-3 p-3 bg-red-50 text-red-700 rounded border border-red-100">
                   <span class="font-bold">❌</span> <span>Planilhas de Excel desatualizadas</span>
                 </div>
                 <div class="flex items-center gap-3 p-3 bg-red-50 text-red-700 rounded border border-red-100">
                   <span class="font-bold">❌</span> <span>Certificados "invisíveis" (Shadow IT)</span>
                 </div>
                 <div class="flex items-center gap-3 p-3 bg-red-50 text-red-700 rounded border border-red-100">
                   <span class="font-bold">❌</span> <span>Sistemas fora do ar (Prejuízo)</span>
                 </div>
               </div>
            </div>
          </div>
          <div class="order-1 lg:order-2">
            <h2 class="text-3xl font-bold text-bm-blue mb-6">A gestão manual já não é sustentável.</h2>
            <p class="text-gray-600 mb-6 text-lg leading-relaxed">
              Com as novas políticas de segurança globais, o tempo de vida dos certificados SSL/TLS públicos diminuiu consideravelmente. Acompanhar dezenas ou centenas de certificados manualmente é um convite a falhas humanas e interrupções de serviço críticas.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed">
              Com o <strong>Sectigo Certificate Manager</strong>, a sua equipa de TI muda o foco: deixa de apagar incêndios e passa a governar a criptografia corporativa de forma inteligente e automatizada.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white border-b border-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Como o SCM resolve os seus problemas</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
            <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-bm-blue">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Discovery Automático</h3>
            <p class="text-gray-600 text-sm">Faça varreduras na sua rede e encontre todos os certificados Sectigo instalados. Mantenha um inventário sempre atualizado.</p>
          </div>
          <div class="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
            <div class="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 text-bm-red">
               <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Renovação Zero-Touch</h3>
            <p class="text-gray-600 text-sm">Automatize o ciclo completo (emissão, renovação, instalação) utilizando protocolos nativos da indústria como ACME, SCEP e REST APIs.</p>
          </div>
          <div class="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition">
            <div class="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-bm-blue">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Plataforma Unificada</h3>
            <p class="text-gray-600 text-sm">Gira todos os seus ativos da Sectigo (SSL Público, PKI Privada, S/MIME, Code Signing) a partir de um único Painel de Controlo.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-blue-50 relative overflow-hidden">
      <div class="absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-100 opacity-50">
        <svg class="w-96 h-96" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="text-bm-blue font-bold tracking-widest uppercase mb-4 block text-sm">Estratégia Completa de Segurança</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Quer ir além da ferramenta e entender o conceito de <span class="text-bm-red">Sectigo CLM</span>?
          </h2>
          <p class="text-gray-600 mb-10 text-lg leading-relaxed">
            O SCM é o seu painel de comando, mas o <strong>Certificate Lifecycle Management (CLM)</strong> é a solução arquitetónica que protege cada identidade da sua empresa. Descubra como garantir a segurança de ponta a ponta com o ecossistema Sectigo.
          </p>
          
          <a routerLink="/solutions/clm" class="inline-flex items-center gap-3 bg-white border-2 border-bm-blue text-bm-blue px-8 py-4 rounded font-bold hover:bg-bm-blue hover:text-white transition group shadow-md hover:shadow-xl">
            Conhecer o Sectigo CLM
            <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-900 text-center relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-3xl font-bold text-white mb-6">Assuma o controlo da sua criptografia</h2>
        <p class="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Fale com a nossa equipa e descubra como implementar o Sectigo Certificate Manager (SCM) e automatizar 100% a sua infraestrutura de certificados.
        </p>
        <button class="bg-bm-red text-white px-10 py-4 rounded font-bold text-lg hover:bg-red-700 transition shadow-lg transform hover:-translate-y-1">
          Solicitar Assessment e Demo
        </button>
      </div>
    </section>
  `
})
export class ScmComponent {}