import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-teramind',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gradient-to-br from-gray-900 via-bm-blue to-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center"><div>
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-orange-200 mb-6 uppercase tracking-wider">
            <span class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span> Data Loss Prevention
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">Monitoramento de Usuários & <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white">Prevenção de Perda de Dados</span>
          </h1>
          <p class="text-lg text-gray-300 mb-8 leading-relaxed">
            Detecte ameaças internas, previna vazamentos de dados (DLP) e otimize a produtividade da sua equipe com a plataforma líder global.
          </p> 
          <div class="flex gap-4">
            <button class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-lg">
              Agendar Demonstração
            </button>
            <button class="border border-white/30 hover:bg-white/10 text-white px-8 px-4 rounded font-bold transition">
              Ver Funcionalidades
            </button>
          </div>
        </div>

        <div class="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20 shadow-2xl relative z-20">
          <div class="aspect-video rounded-lg overflow-hidden relative bg-black shadow-inner">
            <iframe [src]="safeVideoUrl" title="Apresentação Teramind" class="absolute inset-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Por que escolher Teramind?</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-8 rounded-xl hover:-translate-y-2 transition duration-300 border-t-4 border-bm-blue">
            <div class="w-12 h-12 bg-blue-100 text-bm-blue rounded-lg flex items-center justify-center mb-6 text-2xl font-bold">👁️</div>
            <h3 class="text-xl font-bold text-bm-blue mb-4">Monitoramento de Atividade</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Grave sessões de tela, monitore e-mails, chats, transferências de arquivos e impressões em tempo real. Saiba exatamente o que acontece na sua rede.</p>
          </div>

          <div class="bg-gray-50 p-8 rounded-xl hover:-translate-y-2 transition duration-300 border-t-4 border-bm-red">
            <div class="w-12 h-12 bg-red-100 text-bm-red rounded-lg flex items-center justify-center mb-6 text-2xl font-bold">🛡️</div>
            <h3 class="text-xl font-bold text-bm-blue mb-4">DLP (Data Loss Prevention)</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Bloqueie automaticamente ações suspeitas. Impeça que dados sensíveis (CPF, Cartões, Projetos) sejam copiados para USB ou enviados por e-mail.</p>
          </div>

          <div class="bg-gray-50 p-8 rounded-xl hover:-translate-y-2 transition duration-300 border-t-4 border-bm-blue">
            <div class="w-12 h-12 bg-blue-100 text-bm-blue rounded-lg flex items-center justify-center mb-6 text-2xl font-bold">🚀</div>
            <h3 class="text-xl font-bold text-bm-blue mb-4">Análise de Produtividade</h3>
            <p class="text-gray-600 text-sm leading-relaxed">Identifique gargalos de fluxo de trabalho, analise o tempo ativo vs. ocioso e otimize a performance de equipes remotas e presenciais.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 border-t border-gray-200">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Níveis Teramind: Compare os Recursos</h2>
          <p class="text-gray-600">Escolha a versão ideal para a maturidade de segurança da sua empresa.</p>
        </div>

        <div class="overflow-x-auto shadow-xl rounded-lg bg-white max-w-5xl mx-auto">
          <table class="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr class="bg-bm-blue text-white">
                <th class="p-3 font-bold text-sm uppercase tracking-wider w-1/4">Recurso de Segurança</th>
                <th class="p-3 font-bold text-center w-[18%] bg-white/5">Starter</th>
                <th class="p-3 font-bold text-center w-[18%] bg-white/10">UAM</th>
                <th class="p-3 font-bold text-center w-[18%] bg-white/5">DLP</th>
                <th class="p-3 font-bold text-center w-[18%] bg-bm-red">Enterprise</th>
              </tr>
            </thead>
            <tbody class="text-sm text-gray-700 divide-y divide-gray-100">
              <tr class="hover:bg-gray-50 transition">
                <td class="p-3 font-medium">Gravação de Tela e Replay</td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center bg-red-50/30 font-bold"><span class="check-icon"></span></td>
              </tr>
              <tr class="hover:bg-gray-50 transition">
                <td class="p-3 font-medium">Monitoramento de Apps/Sites</td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center bg-red-50/30 font-bold"><span class="check-icon"></span></td>
              </tr>
              <tr class="hover:bg-gray-50 transition">
                <td class="p-3 font-medium">Análise de Produtividade</td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center bg-red-50/30 font-bold"><span class="check-icon"></span></td>
              </tr>
              <tr class="hover:bg-gray-50 transition">
                <td class="p-3 font-medium">Gestão de Sessões em Nuvem/RDP</td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center bg-red-50/30 font-bold"><span class="check-icon"></span></td>
              </tr>
              <tr class="hover:bg-gray-50 transition">
                <td class="p-3 font-medium">Prevenção de Perda de Dados (DLP)</td>
                <td class="p-3 text-center"><span class="x-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center bg-red-50/30 font-bold"><span class="check-icon"></span></td>
              </tr>
              <tr class="hover:bg-gray-50 transition">
                <td class="p-3 font-medium">Monitoramento de Transferência (USB/Nuvem)</td>
                <td class="p-3 text-center"><span class="x-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center bg-red-50/30 font-bold"><span class="check-icon"></span></td>
              </tr>
              <tr class="hover:bg-gray-50 transition">
                <td class="p-3 font-medium">Monitoramento de E-mail</td>
                <td class="p-3 text-center"><span class="x-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center bg-red-50/30 font-bold"><span class="check-icon"></span></td>
              </tr>
              <tr class="hover:bg-gray-50 transition">
                <td class="p-3 font-medium">Regras de Bloqueio e Alertas</td>
                <td class="p-3 text-center"><span class="x-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center bg-red-50/30 font-bold"><span class="check-icon"></span></td>
              </tr>
              <tr class="hover:bg-gray-50 transition">
                <td class="p-3 font-medium">Análise Forense e Compliance</td>
                <td class="p-3 text-center"><span class="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">Básico</span></td>
                <td class="p-3 text-center"><span class="text-xs font-bold text-bm-blue bg-blue-50 px-2 py-1 rounded">Avançado</span></td>
                <td class="p-3 text-center"><span class="text-xs font-bold text-bm-blue bg-blue-50 px-2 py-1 rounded">Máximo</span></td>
                <td class="p-3 text-center bg-red-50/30"><span class="text-xs font-bold text-white bg-bm-red px-2 py-1 rounded">Total</span></td>
              </tr>
              <tr class="hover:bg-gray-50 transition">
                <td class="p-3 font-medium">OCR (Texto em Imagens)</td>
                <td class="p-3 text-center"><span class="x-icon"></span></td>
                <td class="p-3 text-center"><span class="x-icon"></span></td>
                <td class="p-3 text-center"><span class="check-icon"></span></td>
                <td class="p-3 text-center bg-red-50/30 font-bold"><span class="check-icon"></span></td>
              </tr>
              <tr class="bg-gray-50">
                <td class="p-3"></td>
                <td class="p-3 text-center"><button class="text-xs font-bold text-bm-blue border border-bm-blue px-3 py-2 rounded hover:bg-bm-blue hover:text-white transition w-full">Cotação</button></td>
                <td class="p-3 text-center"><button class="text-xs font-bold text-bm-blue border border-bm-blue px-3 py-2 rounded hover:bg-bm-blue hover:text-white transition w-full">Cotação</button></td>
                <td class="p-3 text-center"><button class="text-xs font-bold text-bm-blue border border-bm-blue px-3 py-2 rounded hover:bg-bm-blue hover:text-white transition w-full">Cotação</button></td>
                <td class="p-3 text-center bg-red-50/30"><button class="text-xs font-bold text-white bg-bm-red px-3 py-2 rounded hover:bg-red-800 transition w-full shadow-md">Cotação</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-16 border-y border-gray-200">
      <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl font-bold text-bm-blue mb-6">Compliance Garantido</h2>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <span class="text-green-600 font-bold">✓</span>
              <span class="text-gray-700">Conformidade total com a <strong>LGPD</strong></span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-600 font-bold">✓</span>
              <span class="text-gray-700">Auditoria Forense detalhada</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-green-600 font-bold">✓</span>
              <span class="text-gray-700">Relatórios automatizados para gestores</span>
            </li>
          </ul>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <p class="text-bm-blue font-bold text-xl mb-2">Reconhecido Mundialmente</p>
          <p class="text-gray-500 mb-6">Eleita a melhor solução de Insider Threat pelo Gartner Peer Insights.</p>
          <div class="flex justify-center gap-4 grayscale opacity-70">
            <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div class="w-12 h-12 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TeramindComponent {
  private sanitizer = inject(DomSanitizer);
  videoId = 'MchiQp7d57s';

  get safeVideoUrl(): SafeResourceUrl {

    const url = `https://www.youtube.com/embed/${this.videoId}?rel=0&modestbranding=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}