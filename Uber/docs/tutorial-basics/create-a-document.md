---
sidebar_position: 2
---

# Crie um Documento

Documentos são **grupos de páginas** conectados através de:

- uma **barra lateral**
- **navegação anterior/próxima**
- **versionamento**

## Crie seu primeiro Doc

Crie um arquivo Markdown em `docs/hello.md`:

```md title="docs/hello.md"
# Olá

Este é o meu **primeiro documento Docusaurus**!
```

Um novo documento agora está disponível em [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure a Barra Lateral

O Docusaurus **cria uma barra lateral** automaticamente a partir da pasta `docs`.

Adicione metadados para personalizar o rótulo e a posição da barra lateral:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Olá!'
sidebar_position: 3
---

# Olá

Este é o meu **primeiro documento Docusaurus**!
```

Também é possível criar sua barra lateral explicitamente em `sidebars.js`:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```