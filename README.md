# BMTech Peru - Website Oficial 🇵🇪

Repositório oficial do website da **BMTech Peru**. Este projeto contém o código-fonte da plataforma front-end da empresa, focado em alta performance, responsividade e otimização para SEO.

## Tecnologias e Ferramentas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

*   **Angular:** Framework estrutural para a Single Page Application (SPA).
*   **Tailwind CSS:** Framework utilitário para a construção e estilização da interface.
*   **Apollo (GraphQL):** Gerenciamento de estado e consumo eficiente de dados da API.
*   **Google Analytics 4 (GA4):** Rastreamento de conversões e comportamento dos usuários.
*   **GitHub Actions:** Pipeline de CI/CD configurado para automação do deploy.

## Como rodar o projeto localmente

### Pré-requisitos
Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

### Instalação

1. Clone este repositório para a sua máquina:
    git clone https://github.com/BMTech-Brasil/bmtech.pe.git

2. Acesse a pasta do projeto:
    cd bmtech.pe

3. Instale as dependências necessárias:
    npm install

4. Inicie o servidor de desenvolvimento:
    npm run start

O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos fonte. Acesse http://localhost:4200/ no seu navegador.

## Deploy e Automação

Este repositório possui integração contínua (CI/CD) configurada através do GitHub Actions. 

Qualquer alteração enviada (push) ou aprovada (merge) na branch `main` irá disparar automaticamente o workflow definido em `.github/workflows/deploy.yml`. Este script realiza o build de produção da aplicação Angular e transfere os arquivos atualizados diretamente para o servidor oficial utilizando `rsync`.

---
*Desenvolvido e mantido pela equipe de tecnologia da BMTech.*
