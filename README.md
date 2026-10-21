# Site ALR

Revisão visual aprovada em 21/10/2026. A branch principal deste repositório é `master`, integrada ao Cloudflare Pages.

## Executar

```powershell
npm ci
npm run build
npm run preview
```

A prévia abre em `http://127.0.0.1:4174/`. Após editar os arquivos de origem, execute novamente `npm run build` e atualize a página. `npm run preview` serve somente o diretório `dist` e escuta apenas a interface local.

## Organização

- `alr-config.js`: telefone, WhatsApp, e-mail, textos de busca e composição da mensagem.
- `alr-components.jsx`: navegação, rodapé, botões e seções compartilhadas.
- `alr-home-sections.jsx`: página inicial.
- `alr-pages.jsx`: Sobre, Serviços, Como atuamos e Contato.
- `alr-services.js`: catálogo preservado da versão original; revisar referências e escopos com a equipe técnica antes da publicação.
- `alr-styles.css`: estilos, cores, responsividade, foco e preferência por movimento reduzido.
- `alr-photography.css`: composição das cenas, cartões, recortes responsivos e formulário da Home; concatenado após os estilos base no build.
- `alr-contact-form.jsx`: formulário compartilhado entre Home e Contato, com revisão e encaminhamento assistido ao WhatsApp.
- `alr-photo.jsx`: versões atuais das imagens. Originais e prompts em `output/imagegen/`; registro em `docs/IMAGENS.md`.
- `alr-site.jsx`: estrutura compartilhada, usada no servidor durante a compilação e no navegador.
- `scripts/build.mjs`: gera HTML com conteúdo pronto e JavaScript de produção. Os HTML de entrada na raiz e nas pastas são espelhos gerados; não os edite manualmente.
- `dist/`: pacote de publicação gerado, recomendado para uma configuração com build `npm run build` e saída `dist`.
- `hse-stress-form.html`: ferramenta anterior, preservada nesta rodada. A integração e o segredo existente precisam de revisão própria antes de uma nova publicação.

O comando de compilação também espelha os HTML e `assets/site.js`/`site.css` na raiz. Esses arquivos compilados são versionados para manter compatibilidade com a integração estática existente do Cloudflare, mesmo sem comando de build configurado. Execute `npm run build` antes de cada commit e inclua os espelhos atualizados. A fonte de verdade é JSX/CSS/configuração. Relatórios locais, capturas, originais das imagens e rascunhos não são enviados ao GitHub.

## Contato atual

Número confirmado pelo usuário: **(17) 99622-0960**. Todos os destinos de WhatsApp usam `5517996220960`; chamadas usam `tel:+5517996220960`.

O formulário é assistido: prepara o texto, permite revisar e abre o WhatsApp. O visitante precisa confirmar o envio no aplicativo. Não há confirmação de recebimento, API de mensagem, armazenamento de leads ou automação ativa. Consulte `docs/WHATSAPP.md` para a evolução automática.

## Validar

```powershell
npm test
```

O teste de navegador em `tests/browser.cjs` foi executado com Edge e Playwright do runtime desta máquina. Com a prévia ativa, rode `node tests/browser.cjs`. O caminho da dependência de Playwright deve ser ajustado em outra máquina. Ele gera capturas e `output/revisao/evidencias/validacao.json`, verifica cinco páginas em cinco larguras e testa o fluxo local do formulário sem enviar mensagens externas.

## Revisão e publicação

Consulte `docs/ALTERACOES-2026-10-21.md` e a comparação visual local em `output/revisao/index.html`. A versão foi aprovada para publicação pelo usuário em 21/10/2026. O domínio definitivo e o recebimento real pelo WhatsApp ainda precisam de validação. Não foi definido canonical ou sitemap com domínio porque o domínio final não foi informado.
