import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cloud-risk',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gray-900 text-white pt-32 pb-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.9),rgba(17,24,39,0.9)),url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-bm-blue/40 to-transparent blur-3xl"></div>

      <div class="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="inline-flex items-center gap-2 bg-bm-blue/30 border border-bm-blue/50 px-3 py-1 rounded-full text-xs font-bold text-blue-200 mb-6 uppercase tracking-wider">
            <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span> Cloud Security
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Identifique vulnerabilidades na sua nuvem <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">antes que elas virem incidentes.</span>
          </h1>
          <p class="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
            O <strong>Cloud Risk Assessment</strong> da BM Tech analisa sua infraestrutura (AWS, Azure, GCP) contra os principais frameworks de segurança (CIS, NIST, ISO) para fechar brechas de configuração e conformidade.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="bg-bm-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold transition shadow-lg shadow-red-900/20 transform hover:-translate-y-1">
              Agendar Diagnóstico Gratuito
            </button>
            <button class="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded font-bold transition flex items-center justify-center gap-2">
              Ver Metodologia
            </button>
          </div>
        </div>

        <div class="relative group perspective-1000 hidden lg:block">
          <div class="bg-gray-800 rounded-xl shadow-2xl border border-gray-700 p-6 transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
             <div class="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
               <div class="flex gap-2">
                 <div class="w-3 h-3 rounded-full bg-red-500"></div>
                 <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div class="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div class="text-xs text-gray-500 font-mono">BM Tech Cloud Scanner v2.0</div>
             </div>

             <div class="grid grid-cols-2 gap-4">
               <div class="bg-gray-900 p-4 rounded border border-gray-700 text-center">
                 <p class="text-gray-400 text-xs uppercase mb-2">Security Score</p>
                 <div class="relative w-24 h-24 mx-auto flex items-center justify-center rounded-full border-4 border-yellow-500">
                    <span class="text-3xl font-bold text-white">72</span>
                 </div>
                 <p class="text-yellow-500 text-xs mt-2 font-bold">Risco Moderado</p>
               </div>
               
               <div class="bg-gray-900 p-4 rounded border border-gray-700">
                 <p class="text-gray-400 text-xs uppercase mb-3">Top Vulnerabilidades</p>
                 <ul class="space-y-3 text-xs">
                   <li class="flex items-center justify-between text-red-400">
                     <span>S3 Bucket Público</span>
                     <span class="bg-red-500/20 px-1.5 py-0.5 rounded">Crítico</span>
                   </li>
                   <li class="flex items-center justify-between text-red-400">
                     <span>MFA Desativado (Root)</span>
                     <span class="bg-red-500/20 px-1.5 py-0.5 rounded">Crítico</span>
                   </li>
                   <li class="flex items-center justify-between text-yellow-400">
                     <span>Porta 22 Aberta (0.0.0.0)</span>
                     <span class="bg-yellow-500/20 px-1.5 py-0.5 rounded">Médio</span>
                   </li>
                 </ul>
               </div>
             </div>
             
             <div class="mt-4">
               <div class="flex justify-between text-xs text-gray-400 mb-1">
                 <span>Analise CIS Benchmark</span>
                 <span>85% Concluído</span>
               </div>
               <div class="w-full bg-gray-700 rounded-full h-1.5">
                 <div class="bg-bm-blue h-1.5 rounded-full" style="width: 85%"></div>
               </div>
             </div>
          </div>
          <div class="absolute -inset-4 bg-bm-blue/20 blur-3xl -z-10 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-bm-blue mb-4">Sua nuvem é segura ou apenas a infraestrutura dela?</h2>
          <div class="w-16 h-1 bg-bm-red mx-auto mb-6"></div>
          <p class="text-gray-600">
            No modelo de <strong>Responsabilidade Compartilhada</strong>, a AWS/Azure garante a segurança "DA" nuvem (Data Centers), mas você é responsável pela segurança "NA" nuvem (Dados, Acessos, Configurações). É aqui que 99% das falhas acontecem.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition group">
            <div class="w-12 h-12 bg-red-50 text-bm-red rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-bm-red group-hover:text-white transition">⚙️</div>
            <h3 class="text-xl font-bold text-bm-blue mb-2">Misconfigurations</h3>
            <p class="text-gray-500 text-sm">
              Servidores expostos, bancos de dados sem senha e permissões excessivas são as causas nº 1 de vazamentos.
            </p>
          </div>
          <div class="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition group">
            <div class="w-12 h-12 bg-blue-50 text-bm-blue rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-bm-blue group-hover:text-white transition">👤</div>
            <h3 class="text-xl font-bold text-bm-blue mb-2">Gestão de Identidade (IAM)</h3>
            <p class="text-gray-500 text-sm">
              Usuários com privilégios de administrador desnecessários ou sem autenticação multifator (MFA) ativa.
            </p>
          </div>
          <div class="p-8 border border-gray-100 rounded-xl hover:shadow-lg transition group">
            <div class="w-12 h-12 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:bg-gray-800 group-hover:text-white transition">📜</div>
            <h3 class="text-xl font-bold text-bm-blue mb-2">Shadow IT & Compliance</h3>
            <p class="text-gray-500 text-sm">
              Recursos criados sem aprovação que não seguem as normas da LGPD, ISO 27001 ou PCI-DSS.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50 border-y border-gray-200">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-bm-blue mb-12 text-center">Como realizamos o Assessment</h2>
        
        <div class="max-w-4xl mx-auto space-y-8">
          <div class="flex gap-6 md:gap-10">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 bg-bm-blue text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 z-10">1</div>
              <div class="h-full w-0.5 bg-gray-300 my-2"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-bold text-bm-blue">Discovery & Inventário</h3>
              <p class="text-gray-600 mt-2">
                Conectamos nossas ferramentas (CSPM) via API (somente leitura) para mapear 100% dos seus ativos: EC2, S3, RDS, Kubernetes, etc. Nada fica oculto.
              </p>
            </div>
          </div>

          <div class="flex gap-6 md:gap-10">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 bg-white border-2 border-bm-blue text-bm-blue rounded-full flex items-center justify-center font-bold text-xl shrink-0 z-10">2</div>
              <div class="h-full w-0.5 bg-gray-300 my-2"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-bold text-bm-blue">Análise de Gaps (Gap Analysis)</h3>
              <p class="text-gray-600 mt-2">
                Comparamos a configuração atual contra benchmarks globais (CIS Benchmarks, AWS Well-Architected) para identificar desvios de segurança.
              </p>
            </div>
          </div>

          <div class="flex gap-6 md:gap-10">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 bg-bm-red text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 z-10">3</div>
              <div class="h-full w-0.5 bg-gray-300 my-2"></div>
            </div>
            <div class="pb-8">
              <h3 class="text-xl font-bold text-bm-blue">Priorização de Riscos</h3>
              <p class="text-gray-600 mt-2">
                Não entregamos apenas uma lista de problemas. Classificamos por criticidade (Crítico, Alto, Médio) e impacto no negócio, para você saber o que corrigir primeiro.
              </p>
            </div>
          </div>

          <div class="flex gap-6 md:gap-10">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0 z-10">✓</div>
            </div>
            <div>
              <h3 class="text-xl font-bold text-bm-blue">Plano de Ação & Remediation</h3>
              <p class="text-gray-600 mt-2">
                Entregamos um relatório executivo e um guia técnico com o passo a passo (scripts ou configurações) para remediar cada vulnerabilidade encontrada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-2xl font-bold text-gray-400 uppercase tracking-widest mb-10">Validamos seu ambiente contra</h2>
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           <div class="flex flex-col items-center gap-2">
             <div class="text-3xl font-black text-gray-800">NIST</div>
             <span class="text-xs font-bold text-gray-500">Cybersecurity Framework</span>
           </div>
           <div class="flex flex-col items-center gap-2">
             <div class="text-3xl font-black text-gray-800">CIS</div>
             <span class="text-xs font-bold text-gray-500">Benchmarks</span>
           </div>
           <div class="flex flex-col items-center gap-2">
             <div class="text-3xl font-black text-gray-800">ISO</div>
             <span class="text-xs font-bold text-gray-500">27001 / 27017</span>
           </div>
           <div class="flex flex-col items-center gap-2">
             <div class="text-3xl font-black text-gray-800">LGPD</div>
             <span class="text-xs font-bold text-gray-500">Lei Geral de Proteção de Dados</span>
           </div>
           <div class="flex flex-col items-center gap-2">
             <div class="text-3xl font-black text-gray-800">PCI</div>
             <span class="text-xs font-bold text-gray-500">DSS (Pagamentos)</span>
           </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-bm-blue relative overflow-hidden">
      <div class="absolute -right-20 -bottom-20 w-96 h-96 bg-bm-red/20 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Não espere o incidente acontecer.</h2>
        <p class="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
          Agende uma reunião com nossos arquitetos de segurança e descubra o nível de maturidade da sua nuvem em menos de 48 horas.
        </p>
        <div class="flex justify-center gap-4">
          <button class="bg-bm-red text-white px-10 py-4 rounded font-bold text-lg hover:bg-red-700 transition shadow-lg">
            Solicitar Assessment
          </button>
          <button class="border border-white/30 text-white px-10 py-4 rounded font-bold text-lg hover:bg-white/10 transition">
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  `
})
export class CloudRiskComponent {}