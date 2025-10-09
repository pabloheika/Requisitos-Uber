---
sidebar_position: 5
---

# Implante seu site

O Docusaurus é um **gerador de sites estáticos** (também chamado de **[Jamstack](https://jamstack.org/)**).

Ele constrói seu site como arquivos **HTML, JavaScript e CSS estáticos** simples.

## Construa seu site

Construa seu site **para produção**:

```bash
npm run build
```

Os arquivos estáticos são gerados na pasta `build`.

## Implante seu site

Teste sua compilação de produção localmente:

```bash
npm run serve
```

A pasta `build` agora é servida em [http://localhost:3000/](http://localhost:3000/).

Agora você pode implantar a pasta `build` **em quase qualquer lugar** facilmente, **de graça** ou com um custo muito baixo (leia o **[Guia de Implantação](https://docusaurus.io/docs/deployment)**).