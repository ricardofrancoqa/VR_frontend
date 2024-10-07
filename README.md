# Testes Automatizados com Cypress

Este projeto contém testes automatizados usando Cypress para validar a funcionalidade de adicionar um cartão VR Auto ao carrinho na loja virtual VR.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/en/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/get-npm) ou [yarn](https://yarnpkg.com/getting-started/install) para gerenciar as dependências

## Instalação

Siga os passos abaixo para configurar e instalar o projeto:

1. Clone o repositório do projeto:

    ```bash
    git clone https://github.com/ricardofrancoqa/VR_frontend.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd VR_frontend
    ```

3. Instale as dependências do projeto usando npm ou yarn:

    ```bash
    npm install
    ```

    ou, se estiver usando `yarn`:

    ```bash
    yarn install
    ```

## Executando os Testes

Existem duas maneiras de rodar os testes com o Cypress: modo interativo e modo headless.

### 1. Modo Interativo (Cypress UI)

Este modo abre a interface gráfica do Cypress, permitindo que você veja os testes sendo executados no navegador:

```bash
npx cypress open
```
