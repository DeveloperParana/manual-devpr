# Slides de abertura - DevParaná Guarapuava

Slides exibidos antes de todo meetup para apresentar a comunidade e como contribuir.

## Como usar

Abra o `index.html` no navegador e navegue com as setas do teclado ou os botoes na tela.

## Como editar

Os slides estao no `index.html`. O estilo no `styles.css` e a logica no `main.js`.

As cores seguem os design tokens oficiais do DevParana (verde primario `#15A04B`, fontes Montserrat e Raleway).

O logo esta em `../images/logo.png`.

## Como gerar o PDF

Requisitos: Node.js instalado.

```bash
cd cidades/guarapuava/slides
npm install puppeteer qrcode
node generate-pdf.js
```

O arquivo `slides-abertura-devpr-guarapuava.pdf` sera gerado na mesma pasta.

## Estrutura

```
slides/
  index.html                              # Slides HTML
  styles.css                              # Estilos
  main.js                                 # Navegacao e QR Code
  generate-pdf.js                         # Script para gerar PDF
  slides-abertura-devpr-guarapuava.pdf    # PDF gerado
  README.md                               # Este arquivo
```

## Como contribuir

Edite os arquivos, gere o PDF novamente e abra um pull request. A main exige 1 aprovacao de alguem do time DevParana no GitHub.
