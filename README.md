# Laboratório Dr. Samuel Barreto

Site institucional redesign — elegante e harmonioso.

## Estrutura
- `index.html` — página única com hero, serviços, sobre, estrutura (bento), CTA e contato
- `styles.css` — design system completo com paleta teal/dourado, tipografia Fraunces + Inter
- `script.js` — animações de scroll, contadores, menu mobile, formulário
- `favicon.svg` — ícone do site
- `_redirects` — SPA routing para Cloudflare Pages

## Deploy
Este projeto é deployado no Cloudflare Pages. Basta conectar o repositório Git — o build é automático.

## Personalização
- Atualize telefone, endereço e e-mail no `index.html` (seção Contato)
- Substitua o placeholder de imagem na seção Sobre por uma foto real
- Ajuste as cores em `:root` no `styles.css` (variáveis `--brand`, `--accent`, etc.)