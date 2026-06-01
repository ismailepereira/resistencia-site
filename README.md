# Resistência — site do curso

Landing page do curso de guitarra **Resistência** de Fernando Pereira Lima.
Página estática, sem build, publicada via GitHub Pages.

**URL pública:** https://ismailepereira.github.io/resistencia-site

## Stack

- HTML5 + CSS vanilla + JS vanilla
- Google Fonts (Cormorant Garamond + Inter)
- Sem dependências, sem pipeline
- Deploy automático no push da `main`

## Estrutura

```
.
├── index.html
└── src/
    ├── css/
    │   ├── tokens.css       # variáveis (cores, fontes, espaçamentos)
    │   ├── base.css         # reset + tipografia
    │   ├── components.css   # botões, hero, módulos, FAQ, footer
    │   └── style.css        # ponto único de import
    ├── js/
    │   └── main.js          # FAQ accordion + smooth scroll
    └── img/                 # fotos do Fernando + favicon + og
```

## CTAs externos

- **Comprar:** redireciona pro checkout Hotmart (link em `index.html`)
- **WhatsApp:** abre conversa direta em `wa.me/5569999961690`

## Editar o site

1. Mudar texto: editar `index.html`
2. Mudar cores/fontes: editar `src/css/tokens.css`
3. Trocar foto: substituir arquivo em `src/img/`
4. Commit e push — GitHub Pages atualiza em 1-2 min

## TODOs antes de ir pra campanha

- [ ] Substituir link Hotmart placeholder pelo link real do produto
- [ ] Adicionar Meta Pixel ID em `src/js/main.js`
- [ ] Otimizar fotos (reduzir pra ~150KB cada) — usar Squoosh ou TinyJPG
- [ ] Configurar domínio próprio (opcional) — Settings → Pages → Custom domain

---

Desenvolvido por [ismailepereira](https://ismailepereira.github.io/)
