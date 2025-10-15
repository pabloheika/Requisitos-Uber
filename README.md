# Projeto de Engenharia Reversa - Trainee Engnet

Este repositório contém o processo de Engenharia Reversa do aplicativo Uber, produzido para a primeira entrega do Processo Trainee da Empresa Junior de Engenharia de Redes da UnB, Engnet.

## Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://github.com/caiomsabino"><img style="border-radius: 50%;" src="https://github.com/caiomsabino.png" width="100px;" alt=""/><br /><sub><b>Caio Sabino</b></sub></a><br />   
    <td align="center"><a href="https://github.com/Roomarok"><img style="border-radius: 50%;" src="https://github.com/Roomarok.png" width="100px;" alt=""/><br /><sub><b>Erick Okamura</b></sub></a><br />   
    <td align="center"><a href="https://github.com/EsterChaves "><img style="border-radius: 50%;" src="https://github.com/EsterChaves.png" width="100px;" alt=""/><br /><sub><b>Ester Chaves</b></sub></a><br />
      <td align="center"><a href="https://github.com/lyscoutinho"><img style="border-radius: 50%;" src="https://github.com/lyscoutinho.png" width="100px;" alt=""/><br /><sub><b>Lys Coutinho</b></sub></a><br /> 
    <td align="center"><a href="https://github.com/pabloheika "><img style="border-radius: 50%;" src="https://github.com/pabloheika.png" width="100px;" alt=""/><br /><sub><b>Pablo Costa</b></sub></a><br />  
  </tr>
</table>


Este site foi construído usando [Docusaurus](https://docusaurus.io/), um moderno gerador de sites estáticos.

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (recomendado versão 18 ou superior)
- [Yarn](https://classic.yarnpkg.com/lang/en/) ou npm
- Git (para deploy no GitHub Pages)

- Entre na pasta da documentação

```bash
cd Uber
```

## Instalação

```bash
yarn
npm install
```

## Desenvolvimento Local

```bash
yarn start
npm start
```

Esse comando inicia um servidor de desenvolvimento local e abre uma janela do navegador. A maioria das alterações são refletidas ao vivo sem a necessidade de reiniciar o servidor.

## Build (produção)

```bash
yarn build
npm run build
```

Esse comando gera o conteúdo estático no diretório `build` e pode ser servido usando qualquer serviço de hospedagem de conteúdos estáticos.

## Testar o build localmente

```bash
yarn serve
npm run serve
```

Esse comando serve o site gerado na pasta `build` para testes locais.

## Deploy no GitHub Pages

Faça o deploy usando um dos métodos abaixo:

- Usando SSH:

```bash
USE_SSH=true yarn deploy
USE_SSH=true npm run deploy
```

- Usando HTTPS:

```bash
GIT_USER=<Seu usuário do GitHub> yarn deploy
GIT_USER=<Seu usuário do GitHub> npm run deploy
```

O comando irá gerar o site e publicar no branch `gh-pages` do repositório.

---

