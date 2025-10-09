---
sidebar_position: 1
---

# Introdução ao Tutorial

Vamos descobrir o **Docusaurus em menos de 5 minutos**.

## Começando

recomendo usar o site [https://onlinemarkdowneditor.dev/](https://onlinemarkdowneditor.dev/) para editar seu arquivo markdown

Comece **criando um novo site**.

Ou **experimente o Docusaurus imediatamente** com **[docusaurus.new](https://docusaurus.new)**.

### O que você vai precisar

- [Node.js](https://nodejs.org/en/download/) versão 20.0 ou superior:
  - Ao instalar o Node.js, é recomendável marcar todas as caixas de seleção relacionadas a dependências.

## Gerar um novo site

Gere um novo site Docusaurus usando o **template clássico**.

O template clássico será adicionado automaticamente ao seu projeto depois que você executar o comando:

```bash
npm init docusaurus@latest my-website classic
```

Você pode digitar este comando no Prompt de Comando, Powershell, Terminal ou qualquer outro terminal integrado do seu editor de código.

O comando também instala todas as dependências necessárias para executar o Docusaurus.

## Inicie seu site

Execute o servidor de desenvolvimento:

```bash
cd my-website
npm run start
```

O comando `cd` muda o diretório com o qual você está trabalhando. Para trabalhar com o seu site Docusaurus recém-criado, você precisará navegar até lá no terminal.

O comando `npm run start` constrói seu site localmente e o serve através de um servidor de desenvolvimento, pronto para você visualizar em http://localhost:3000/.

Abra `docs/intro.md` (esta página) e edite algumas linhas: o site **recarrega automaticamente** e exibe suas alterações.