# Portal BMTech Perú - Auto-Suporte e Ferramentas Criptográficas

Bem-vindo ao repositório do site da **BMTech Perú**. Esta é uma Single Page Application (SPA) desenvolvida para fornecer autonomia aos clientes da BMTech do Perú na gestão de certificados digitais, suporte a plataforma web e execução de operações criptográficas de forma 100% segura no lado do cliente.

## Visão Geral

O sistema foi arquitetado para centralizar a documentação técnica, manuais de instalação de certificados SSL, guias de Faturação Eletrónica (SUNAT) e fornecer ferramentas avançadas de diagnóstico. Ogrande diferencial deste projeto é a manipulação de ficheiros sensíveis (como `.pfx`, `.p12` e `.csr`) diretamente na memória do navegador do utilizador, garantindo privacidade total (Zero-Knowledge) sem envio de dados para servidores externos.

## Funcionalidades Principais

### 1. Repositório BMCERT CA
* Disponibilização da hierarquia de confiança pública com download condicional inteligente (descarregamento automático para ficheiros `.p7b` e abertura em novo separador para `.pdf`).
* Acesso simplificado às Políticas de Certificação e Declarações de Práticas de Certificação.

### 2. Ferramentas Criptográficas (Client-Side)
* **Conversor PFX para KEY/CRT:** Permite extrair a chave privada e o certificado público a partir de ficheiros PFX/P12 mediante a inserção da palavra-passe. Todo o processamento de conversão ASN.1 ocorre localmente no navegador.
* **Verificador e Descodificador de CSR:** Ferramenta que permite colar o texto ou submeter um ficheiro `.csr`. Descodifica e exibe atributos fundamentais como:
  * Common Name (Domínio - com destaque visual)
  * Organização, Localidade, Estado, País
  * Subject Alternative Names (SANs) lidos a partir das extensões do ficheiro
  * Tamanho e algoritmo da chave (ex: 2048 bits RSA)

### 3. Centro de Ajuda e Guias de Instalação
* **Suporte SSL:** Matriz de compatibilidade e manuais passo a passo para instalação em diversos servidores (Apache, IIS, NGINX, Tomcat, Exchange, entre outros).
* **Configurações Complementares:** Guias para implementação de Cifrado Seguro (HSTS) e redirecionamentos de HTTP para HTTPS.
* **Faturação Eletrónica (SUNAT):** Manuais para registo do certificado, criação de utilizadores secundários e alterações de "Alias".

## Tecnologias Utilizadas

* **Framework Front-end:** Angular (com Standalone Components e Signals)
* **Estilização:** Tailwind CSS (design responsivo e otimizado com classes utilitárias)
* **Criptografia:** `node-forge` (implementação robusta para manipulação de PKI, CSR e PKCS#12)
* **Roteamento:** Angular Router com gestão dinâmica e caminhos aninhados.

## Pré-requisitos e Instalação Local

Certifique-se de que possui o [Node.js](https://nodejs.org/) e o Angular CLI instalados na sua máquina.

1. Clone o repositório:
   ```bash
   git clone [link]

2. Navegue para a diretoria do projeto:
   ```bash
   cd repository-name

3. Instale as dependências:
   ```bash
   npm install

4. Inicie o server
   ```bash
   npm start

A aplicação ficará disponível em http://localhost:4200/.

# Integração Contínua (CI/CD) e Resolução de Problemas

Este projeto está configurado para fluxos de CI/CD (ex: GitHub Actions) utilizando o comando estrito npm ci.

Nota importante para os programadores:
A biblioteca criptográfica utilizada e os seus submódulos (como pacotes @emnapi) podem gerar dependências binárias específicas do sistema operativo. Se o pipeline de deploy falhar com o erro npm error can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync, siga estes passos na sua máquina local:

1. Apague e pasta `node_modules` e o ficheiro `package-lock.json`.
2. Execute novamente `npm install` para forçar a reconstrução da árvore de dependências e do lockfile.
3. Submeta `(commit)` o novo ficheiro `package-lock.json` para o repositório.
4. (Opcional) Caso a divergência de sistemas operativos persista, configure o seu script de CI para executar `npm install` em vez de `npm ci`.

# Licença
Propriedade e desenvolvimento por **BMTech**. Todos os direitos reservados.   
