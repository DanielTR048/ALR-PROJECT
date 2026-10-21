# Primeira revisão do site ALR

**Estado:** prévia local; sem publicação, push ou PR. Base de comparação: commit `b705d7b6057de3bc7ab9e964d66bb7981fc35e03`.

## Identidade preservada

Logo original, família Barlow, verde da marca, slogan principal e três áreas de atuação. O verde dos textos ganhou contraste; o monograma ALR continua discreto na abertura do computador e sai da área de leitura no celular.

## Alterações compartilhadas

- Navegação com links reais, menu de celular, estado expandido anunciado, fechamento por Escape e devolução do foco ao botão.
- Link para pular ao conteúdo, foco visível, respeito a movimento reduzido e grades responsivas.
- Telefone e WhatsApp atualizados para **(17) 99622-0960**, em uma única configuração.
- Telefone, e-mail e WhatsApp clicáveis; links provisórios de Facebook e Instagram retirados até receber os endereços oficiais.
- Rodapé reorganizado e ano corrente gerado na compilação.

## Página inicial

- Slogan preservado, descrição mais curta e ação principal para contato.
- Indicadores de painel e a faixa de números repetidos substituídos por acesso às três áreas.
- Conteúdo de serviços apresentado em linhas com funções distintas, reduzindo cartões repetidos.
- Nova seção que explica o início do atendimento.
- Logos vazios, fotografias provisórias, depoimentos sem origem confirmada e a promessa de 100% de conformidade retirados da prévia. O original permanece no Git e no dossiê.

## A ALR

- Texto reduzido, com apresentação de escopo e atendimento.
- Removidos blocos de fotos vazias, etiquetas incoerentes e o número de experiência sem contexto.
- Princípios apresentados como texto, sem números ou resultados inventados.

## Serviços

- Catálogo original movido para `alr-services.js`; as descrições de serviço foram preservadas.
- Atalhos para Segurança, Elétrica, Medicina e Treinamentos/Avaliações.
- Descrições expansíveis com elementos HTML nativos operáveis por teclado.
- Links de solicitação levam ao formulário com o serviço selecionado.
- Mantida observação de que escopo e aplicabilidade dependem da avaliação técnica. As associações normativas existentes não foram revalidadas nesta rodada.

## Como atuamos

- Rota `/clientes/` preservada, com rótulo público “Como atuamos”.
- Conteúdo voltado ao início do atendimento e às informações que o visitante pode preparar.
- A página deixa de prometer um portfólio de clientes que ainda não está disponível. Clientes e casos reais podem entrar depois com material autorizado.

## Contato

- Contato direto em destaque, com número atualizado e canais utilizáveis.
- Nome e necessidade obrigatórios; demais dados opcionais.
- Rótulos associados aos campos, limites de tamanho, e-mail validado e campo de telefone apropriado ao celular.
- Removida a mensagem falsa de envio. O fluxo agora é preparar, revisar e abrir o WhatsApp, com confirmação final pelo visitante.
- Voltar para editar preserva o preenchimento. Recarregar/fechar a página não preserva os dados; não há armazenamento persistente.
- Não foi ativado recebimento automático: faltam conta de envio, serviço e escolha do modelo de custo. Opções detalhadas em `WHATSAPP.md`.

## Base técnica

- React compilado para produção; retirados Babel, React de desenvolvimento e painel de protótipo da entrega institucional.
- HTML das cinco páginas gerado com o conteúdo já presente; links e informações básicos continuam disponíveis sem JavaScript.
- Metadados de título, descrição, tipo e idioma; domínio oficial ainda necessário para canonical, sitemap e imagem de compartilhamento pública.
- Logo convertido de 758.630 bytes para 21.664 bytes, preservando a arte original (redução aproximada de 97%).
- CSS centralizado; sem estilos inline repetidos nas páginas novas.
- Build reproduzível com dependências fixadas e diretório de distribuição `dist/`.
- Arquivo legado `ALR Soluções.html` encaminha à página inicial, evitando implementação duplicada.

## Validação executada

- `npm run build`: concluído.
- `npm test`: dois testes de composição e codificação da mensagem aprovados.
- Edge/Playwright: cinco páginas em 320, 390, 768, 1280 e 1440 px; sem excedente horizontal, elementos verificados fora da tela, erros de JavaScript ou HTTP observados.
- Menu móvel, Escape/foco, abertura de descrição, serviço pré-selecionado, campos obrigatórios, revisão e edição da mensagem: aprovados.
- Conteúdo e navegação da Home verificados também sem JavaScript.
- Destinos do WhatsApp verificados por URL; nenhum envio real ou mensagem externa.
- Evidências em `output/revisao/evidencias/validacao.json` e capturas PNG. Não houve teste em telefone físico, certificação de acessibilidade ou medição de desempenho em produção.

## Ainda depende de definição

Fotos e equipe reais, casos autorizados, confirmação do e-mail e horário, domínio e hospedagem final, aprovação dos textos e escopos pela ALR. O HSE foi preservado byte a byte e continua exigindo revisão da chave e do tratamento dos dados antes de nova publicação. Esta revisão não declara essas pendências resolvidas.

## Como revisar e reverter

### Rodada 02 — fotografias

- Quatro fotografias de atividades técnicas e atendimento, com origem e licença registradas em `IMAGENS.md`.
- Abertura com fotografia em destaque; fotos junto às três áreas da Home e do catálogo; imagem de planejamento na apresentação institucional.
- Verde, logo, títulos e formulário preservados. Imagens identificadas como ilustrativas, sem atribuir os trabalhos ou profissionais à ALR.
- Versões locais WebP de 480, 960 e 1600 px, dimensões reservadas, prioridade na abertura e carregamento tardio abaixo dela.
- Teste de navegador atualizado para percorrer e carregar todas as fotos, conferir descrições e variantes e verificar novamente as cinco páginas nos cinco tamanhos.

Veja a comparação visual em `output/revisao/index.html` e navegue pela prévia em `http://127.0.0.1:4174/`. As alterações estão na branch local `codex/alr-primeira-revisao`, sem commit novo. Para comparar arquivos, use `git diff` e os novos arquivos listados em `git status`. Não use reset/clean global, pois o dossiê e as evidências também estão nesta pasta.

### Rodada 03 — navegação e WhatsApp flutuante

- Link “A ALR” renomeado para “Sobre” no cabeçalho e no rodapé; “Início” preservado. Identificação da página institucional também atualizada para “Sobre”.
- Atalho circular do WhatsApp fixo no canto inferior direito das cinco páginas institucionais, para (17) 99622-0960, com ícone, nome acessível, foco visível e abertura em nova aba.
- No celular, respeita as áreas de segurança da tela e se oculta enquanto o formulário está em foco ou o menu está aberto. Rodapé com espaço adicional para permitir alcançar o último conteúdo sem sobreposição.
- Prévia local; nenhuma mensagem enviada e nenhuma publicação realizada.

### Rodada 04 — imagens personalizadas e nova composição

- Três cenas criadas com o gerador integrado do GPT e o logo da ALR como referência. Versões finais e prompts em `docs/IMAGENS.md`.
- Segunda imagem (elétrica) preservada como aprovada. Na primeira, redução de logos e correção da prancheta para mostrar o verso preto. Na terceira, mudança para vista por cima do ombro, alinhando o formulário a quem escreve.
- Retiradas as fotos pequenas soltas da Home, Sobre e catálogo. Aberturas amplas, transições de cor entre foto e fundo e recortes próprios para celular.
- Home com três abas de especialidades, fotografia correspondente e link para o catálogo. Navegação por teclado e alternativa sem JavaScript.
- Cabeçalho com “Início” e “Sobre”, WhatsApp flutuante e contatos preservados.
- Build e dois testes de composição da mensagem aprovados; cinco páginas em cinco larguras sem falhas observadas; seis combinações de área/tamanho e navegação por teclado aprovadas em `output/revisao/evidencias/areas-validacao.json`.
- Capturas anteriores à mudança preservadas em `output/revisao/rodada-03/`. As capturas de `evidencias/` mostram a composição atual.
- Nada publicado; nenhuma mensagem externa enviada.

### Rodada 05 — frase escolhida, cartões e formulário na Home

- Frase aprovada pelo usuário aplicada: “Cuidar de quem trabalha. Dar segurança a quem empreende.” Cores e imagem da abertura preservadas, com ajuste tipográfico para celular.
- “Nossa atuação” volta a três cartões lado a lado no computador, com imagem no topo, serviços, descrição e botão. No celular, ficam empilhados. As abas foram retiradas da Home.
- Seção “Como começamos” da Home substituída por formulário funcional com nome, empresa, área e necessidade, contatos visíveis e exemplos de solicitação. Usa o mesmo componente validado da página Contato; os campos adicionais de retorno continuam nessa página.
- Ao confirmar o formulário, o visitante revisa a mensagem e abre o WhatsApp da ALR. O envio ainda é confirmado no aplicativo, sem API ou confirmação fictícia de recebimento.
- Fechamento: “Vamos cuidar da sua empresa. Começando por ouvir você.” Texto com situações concretas: contratação, exigência e instalação.
- Testes dos cartões e do formulário da Home aprovados em 390 e 1440 px; cinco páginas em cinco larguras sem falhas observadas; dois testes da mensagem aprovados. Nenhum envio externo.
- Capturas da rodada anterior preservadas em `output/revisao/rodada-04/`; novas capturas de cartões, formulário e convite em `evidencias/`.
- Prévia local, sem publicação.
# Rodada 06 — ajustes após publicação

- Removidas as legendas sobrepostas às imagens nas cinco páginas.
- O bloco “A ALR” da Home passou a “Sobre nós”, em painel branco integrado à seção de especialidades, com borda verde, texto mais direto e acesso à apresentação institucional.
- No celular: abertura e fotos menores, cartões sem repetir as listas do catálogo, espaçamentos reduzidos e rodapé mais compacto. Os detalhes completos permanecem na página Serviços.
- Formulário da Home com menos texto introdutório, mensagem inicial de três linhas e contatos adicionais depois dos campos no celular. Campos, validação, revisão e confirmação no WhatsApp preservados.
- Comparação em 390 px de largura: altura da Home de 7.010 para 4.784 px (cerca de 32% menor); início do formulário de 4.580 para 2.804 px (cerca de 39% mais próximo do topo). Medições de layout, sem afirmação de ganho real de conversão.
- Compilação, dois testes de composição de mensagem, 25 combinações de página/largura e fluxo do formulário em celular/desktop aprovados. Nenhuma mensagem externa enviada.
