import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kickidler',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-bm-blue text-white pt-32 pb-40 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-full bg-blue-600/20 blur-[150px] rounded-full z-0"></div>
      
      <div class="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <div class="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full text-xs font-bold text-blue-200 mb-8 uppercase tracking-wider">
          <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span> Employee Monitoring
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Produtividade baseada em <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">fatos, não em suposições.</span>
        </h1>
        
        <p class="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-light">
          O Kickidler grava as telas, analisa o comportamento e entrega métricas reais sobre o tempo de trabalho da sua equipe. Implementado com total suporte e faturamento nacional pela BMTech.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-bm-red hover:bg-red-700 text-white px-10 py-4 rounded font-bold transition shadow-xl transform hover:-translate-y-1 text-lg">
            Agendar Demonstração
          </button>
        </div>
      </div>
    </section>

    <section class="relative z-20 -mt-24 mb-20 px-6">
      <div class="container mx-auto max-w-5xl">
        <div class="bg-white p-2 rounded-2xl shadow-2xl border border-gray-200">
          
        </div>
      </div>
    </section>

    <section class="py-16 bg-white overflow-hidden">
      <div class="container mx-auto px-6">
        
        <div class="text-center mb-20 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Visibilidade total sobre a jornada de trabalho</h2>
          <div class="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div class="lg:w-1/2">
            <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Monitoramento de Telas em Tempo Real</h3>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
              O recurso "Quadrante" permite visualizar as telas de vários colaboradores simultaneamente. Ideal para supervisores acompanharem o foco da equipe em modelos de trabalho remoto ou híbrido.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-gray-700 font-medium">
                <span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span> Grade de visualização personalizável
              </li>
              <li class="flex items-center gap-3 text-gray-700 font-medium">
                <span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span> Identificação visual de ociosidade
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row-reverse items-center gap-16 mb-24">
          <div class="lg:w-1/2">
            <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Gravação e Histórico em Vídeo</h3>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
              Em caso de suspeita de vazamento de informações ou erro operacional, busque o histórico. O Kickidler indexa as gravações, permitindo procurar momentos específicos em que um aplicativo foi aberto.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-gray-700 font-medium">
                <span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span> Retenção de vídeo configurável (dias ou meses)
              </li>
              <li class="flex items-center gap-3 text-gray-700 font-medium">
                <span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span> Compactação avançada para poupar servidor
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-16">
          <div class="lg:w-1/2">
            <div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Relatórios Analíticos Automatizados</h3>
            <p class="text-gray-600 text-lg leading-relaxed mb-6">
              Chega de achismos. O sistema categoriza automaticamente sites e aplicativos usados (Produtivos, Neutros ou Improdutivos) e gera gráficos precisos sobre o engajamento de cada setor ou funcionário.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-gray-700 font-medium">
                <span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span> Dinâmica e métricas de eficiência
              </li>
              <li class="flex items-center gap-3 text-gray-700 font-medium">
                <span class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">✓</span> Registro exato do ponto (Início, Pausas e Fim)
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2">
            <div class="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="bg-gray-900 text-white">
      <div class="grid lg:grid-cols-2">
        <div class="p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          <div class="absolute inset-0 bg-bm-blue/20 blur-[100px] rounded-full"></div>
          <div class="relative z-10">
            <div class="inline-flex bg-bm-red text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
              Revenda Oficial
            </div>
            <h2 class="text-4xl font-bold mb-6">Por que contratar o Kickidler através da BMTech?</h2>
            <p class="text-gray-400 text-lg leading-relaxed mb-8">
              A implementação de um software de monitoramento exige cuidado técnico e alinhamento com a legislação local (LGPD e CLT). A BMTech garante uma jornada segura, desde a instalação até o faturamento simplificado.
            </p>
            <button class="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded font-bold transition w-max">
              Falar com um Consultor
            </button>
          </div>
        </div>

        <div class="p-16 lg:p-24 bg-gray-800 border-l border-gray-700 flex flex-col justify-center">
          <ul class="space-y-8">
            <li class="flex gap-4 items-start">
              <div class="w-12 h-12 bg-gray-700 text-blue-400 rounded-full flex items-center justify-center shrink-0 border border-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <div>
                <h4 class="text-xl font-bold mb-2">Instalação e Setup Guiado</h4>
                <p class="text-gray-400 text-sm leading-relaxed">Não perca tempo lendo manuais complexos. Nossos engenheiros entregam o Servidor Kickidler rodando perfeitamente no seu ambiente local ou em nuvem.</p>
              </div>
            </li>
            
            <li class="flex gap-4 items-start">
              <div class="w-12 h-12 bg-gray-700 text-blue-400 rounded-full flex items-center justify-center shrink-0 border border-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <div>
                <h4 class="text-xl font-bold mb-2">Suporte Técnico Nacional (N1/N2)</h4>
                <p class="text-gray-400 text-sm leading-relaxed">Suporte direto com a BMTech no Brasil. Resolução de dúvidas operacionais em português e sem barreiras de fuso horário internacional.</p>
              </div>
            </li>

            <li class="flex gap-4 items-start">
              <div class="w-12 h-12 bg-gray-700 text-blue-400 rounded-full flex items-center justify-center shrink-0 border border-gray-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              </div>
              <div>
                <h4 class="text-xl font-bold mb-2">Faturamento em Reais (BRL)</h4>
                <p class="text-gray-400 text-sm leading-relaxed">Evite a variação cambial e o pagamento de IOF no cartão corporativo. Emitimos Nota Fiscal Nacional e o pagamento pode ser via boleto ou PIX.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 text-center">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Pronto para elevar a produtividade da sua empresa?</h2>
        <p class="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
          Transforme horas faturadas em resultados auditáveis. Agende uma apresentação e descubra o impacto financeiro positivo do Kickidler no seu negócio.
        </p>
        <button class="bg-blue-600 hover:bg-blue-800 text-white px-10 py-4 rounded font-bold transition shadow-lg text-lg transform hover:-translate-y-1">
          Solicitar Proposta Kickidler
        </button>
      </div>
    </section>
  `
})
export class KickidlerComponent {}