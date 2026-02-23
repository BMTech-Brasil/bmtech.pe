import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clm',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold text-blue-100 mb-8 uppercase tracking-wider backdrop-blur-md">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Sectigo Certificate Lifecycle Management
        </div>
        
        <h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight max-w-5xl mx-auto">
          O controlo absoluto da sua <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Identidade Digital</span>.
        </h1>
        
        <p class="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
          Descubra, faça a gestão e automatize o ciclo de vida de todos os certificados da sua empresa com o <strong>Sectigo CLM</strong>. Elimine interrupções, reforce a segurança e simplifique a gestão criptográfica numa única plataforma líder mundial.
        </p>
        
        <div class="flex justify-center gap-4">
          <button class="bg-bm-red hover:bg-red-700 text-white px-10 py-4 rounded font-bold transition shadow-lg shadow-red-900/40 transform hover:-translate-y-1 text-lg">
            Agendar Demonstração Sectigo
          </button>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white border-b border-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">O ciclo de vida completo numa única plataforma</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border-2 border-gray-100 group-hover:border-bm-blue transition-colors">
              <svg class="w-10 h-10 text-bm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">1. Descobrir</h3>
            <p class="text-gray-600 text-sm">Varre toda a rede empresarial para encontrar certificados ativos ou expirados instalados em servidores, cloud e infraestruturas, eliminando pontos cegos.</p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border-2 border-gray-100 group-hover:border-bm-blue transition-colors">
              <svg class="w-10 h-10 text-bm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">2. Gerir</h3>
            <p class="text-gray-600 text-sm">Organize e faça a gestão de todos os seus ativos criptográficos através do Sectigo Certificate Manager (SCM), com controlos de acesso baseados em funções (RBAC).</p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border-2 border-gray-100 group-hover:border-bm-red transition-colors">
              <svg class="w-10 h-10 text-bm-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">3. Automatizar</h3>
            <p class="text-gray-600 text-sm">Emissão e renovações automáticas sem intervenção humana, utilizando protocolos padronizados (ACME, SCEP, EST) e APIs dedicadas.</p>
          </div>

          <div class="text-center group">
            <div class="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 border-2 border-gray-100 group-hover:border-bm-blue transition-colors">
              <svg class="w-10 h-10 text-bm-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">4. Integrar</h3>
            <p class="text-gray-600 text-sm">Ligue a Sectigo nativamente à sua infraestrutura: ferramentas DevOps, Load Balancers, Cofres (Vaults), ServiceNow e Web Servers.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200 grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div class="inline-flex bg-blue-100 text-bm-blue font-bold px-3 py-1 rounded text-sm mb-4">Plataforma Unificada</div>
            <h2 class="text-3xl lg:text-4xl font-bold text-bm-blue mb-6">Um fornecedor. Todas as soluções.</h2>
            <p class="text-gray-600 mb-6 text-lg">
              Ao escolher a Sectigo, não adquire apenas uma ferramenta de gestão, garante o apoio da maior Autoridade Certificadora comercial do mundo. Consolide toda a sua infraestrutura de confiança (PKI) num único ecossistema.
            </p>
            <ul class="space-y-4">
              <li class="flex items-center gap-3 font-medium text-gray-700">
                <span class="text-green-500 text-xl">✓</span> Emissão ilimitada de certificados internos e públicos
              </li>
              <li class="flex items-center gap-3 font-medium text-gray-700">
                <span class="text-green-500 text-xl">✓</span> Elimine a complexidade de gerir múltiplas CAs (como a Microsoft ADCS)
              </li>
              <li class="flex items-center gap-3 font-medium text-gray-700">
                <span class="text-green-500 text-xl">✓</span> Conformidade global e máxima compatibilidade nos browsers
              </li>
              <li class="flex items-center gap-3 font-medium text-gray-700">
                <span class="text-green-500 text-xl">✓</span> Suporte local e consultoria especializada através da BM Tech
              </li>
            </ul>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:border-bm-blue transition">
              <div class="w-10 h-10 bg-blue-100 text-bm-blue rounded flex items-center justify-center mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <span class="font-bold text-gray-800">Public Trust SSL</span>
              <p class="text-xs text-gray-500 mt-2">DV, OV, EV e Wildcard</p>
            </div>

            <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:border-bm-blue transition">
              <div class="w-10 h-10 bg-purple-100 text-purple-600 rounded flex items-center justify-center mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              </div>
              <span class="font-bold text-gray-800">Private PKI</span>
              <p class="text-xs text-gray-500 mt-2">Certificados Internos CA</p>
            </div>

            <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:border-bm-blue transition">
              <div class="w-10 h-10 bg-green-100 text-green-600 rounded flex items-center justify-center mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <span class="font-bold text-gray-800">Sectigo S/MIME</span>
              <p class="text-xs text-gray-500 mt-2">Email Seguro & Assinatura</p>
            </div>

            <div class="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center text-center shadow-sm hover:border-bm-blue transition">
              <div class="w-10 h-10 bg-orange-100 text-orange-600 rounded flex items-center justify-center mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <span class="font-bold text-gray-800">Code Signing</span>
              <p class="text-xs text-gray-500 mt-2">Autenticação de Software</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-24 bg-white border-b border-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Segurança para cada Identidade Digital</h2>
          <p class="text-gray-600">O Sectigo CLM vai muito além do SSL de website. Garanta a identidade criptográfica de cada máquina, documento e utilizador do seu ecossistema.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 border border-gray-200 rounded-xl hover:border-bm-blue transition">
            <h4 class="font-bold text-lg text-bm-blue mb-2">Web / SSL Público</h4>
            <p class="text-gray-600 text-sm">Gere certificados DV, OV e EV para web servers, garantindo navegação segura e compliance com a Sectigo CA.</p>
          </div>
          <div class="p-6 border border-gray-200 rounded-xl hover:border-bm-blue transition">
            <h4 class="font-bold text-lg text-bm-blue mb-2">S/MIME (Email Seguro)</h4>
            <p class="text-gray-600 text-sm">Automação de certificados para assinatura e criptografia de emails empresariais (Zero Trust e Anti-Phishing).</p>
          </div>
          <div class="p-6 border border-gray-200 rounded-xl hover:border-bm-blue transition">
            <h4 class="font-bold text-lg text-bm-blue mb-2">Autenticação de Dispositivos</h4>
            <p class="text-gray-600 text-sm">Provisione certificados Sectigo via Intune, Jamf ou MDM para portáteis, telemóveis e infraestruturas Wi-Fi (802.1x).</p>
          </div>
          <div class="p-6 border border-gray-200 rounded-xl hover:border-bm-blue transition">
            <h4 class="font-bold text-lg text-bm-blue mb-2">DevOps & Containers</h4>
            <p class="text-gray-600 text-sm">Injete certificados em pipelines CI/CD. Integração nativa com Kubernetes, HashiCorp Vault, Ansible e Terraform.</p>
          </div>
          <div class="p-6 border border-gray-200 rounded-xl hover:border-bm-blue transition">
            <h4 class="font-bold text-lg text-bm-blue mb-2">Code e Document Signing</h4>
            <p class="text-gray-600 text-sm">Garanta a integridade de softwares, drivers e ficheiros com assinaturas digitais controladas centralmente pelo SCM.</p>
          </div>
          <div class="p-6 border border-gray-200 rounded-xl hover:border-bm-blue transition">
            <h4 class="font-bold text-lg text-bm-blue mb-2">IoT e Dispositivos Conectados</h4>
            <p class="text-gray-600 text-sm">Emissão escalável e leve de certificados para autenticar e proteger a comunicação de frotas de dispositivos IoT.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-bm-blue text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-bm-red opacity-10 blur-[100px] w-1/2 h-full top-0 left-1/4"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para unificar a sua segurança com a Sectigo?</h2>
        <p class="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
          Pare de apagar incêndios devido a certificados expirados. Agende uma consultoria técnica gratuita com os especialistas da BM Tech e implemente um CLM de classe mundial.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="bg-bm-red hover:bg-red-700 text-white px-10 py-4 rounded font-bold text-lg transition shadow-lg">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  `
})
export class ClmComponent {}