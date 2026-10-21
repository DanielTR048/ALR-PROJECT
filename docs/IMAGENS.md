# Imagens da prévia ALR — 21/10/2026

## Versão atual — cenas ALR e composição integrada

As fotografias de banco descritas no histórico abaixo foram substituídas no site por três cenas ilustrativas geradas com a ferramenta integrada de imagens do GPT, usando `assets/alr-logo.webp` como referência. Não houve uso de CLI ou API com chave. Pessoas, ambientes e situações são fictícios; não documentam equipe, clínica ou serviço real da ALR. Por solicitação do usuário, as legendas sobrepostas foram removidas na rodada 06. As descrições alternativas acessíveis continuam identificando as ilustrações.

| Cena | Original final salvo no projeto | Versão aplicada |
| --- | --- | --- |
| Segurança | [alr-seguranca-v4.png](../output/imagegen/alr-seguranca-v4.png) | Um logo no uniforme; prancheta com verso preto voltado à câmera |
| Elétrica | [alr-eletrica-v2.png](../output/imagegen/alr-eletrica-v2.png) | Segunda imagem aprovada pelo usuário, preservada sem edição |
| Medicina | [alr-medicina-v4.png](../output/imagegen/alr-medicina-v4.png) | Vista por cima do ombro; folha orientada para a profissional |

Prompts completos: [geração](../output/imagegen/prompts.json), [primeiro ajuste](../output/imagegen/prompts-ajustes.json) e [correção de geometria](../output/imagegen/prompts-geometria.json). As versões intermediárias permanecem como rascunhos, fora das referências atuais do site.

O original da cena elétrica foi conferido contra a saída do gerador: SHA-256 `60a67b762607839acf1f71eed3a04bb6cdfed8d17ffcf0d23fa8f3e1f5943459` em ambos. As únicas derivações para o site são redimensionamento e compressão WebP, sem modificar a composição aprovada.

Os arquivos servidos são `assets/photos/alr-{area}-v{versao}-{largura}.webp`, com larguras 480, 960 e 1600. Versões finais selecionadas em `alr-photo.jsx`. Dimensões reservadas, variantes por tamanho, carregamento tardio e prioridade nas aberturas mantidos. O dimensionamento considera a ampliação necessária aos recortes móveis.

Composição atual (rodada 05): abertura sem moldura em toda a largura, cena elétrica na apresentação institucional, três cartões com imagens no topo na Home e cenas amplas abrindo as categorias do catálogo. O layout e os recortes ficam em `alr-photography.css`, concatenado ao CSS base pelo build. Os cartões substituem as abas da rodada 04 e mantêm links disponíveis sem JavaScript.

## Histórico — banco de imagens da rodada anterior

Quatro fotografias de banco selecionadas para mostrar atividades relacionadas às áreas do site. Não representam equipe, clientes ou trabalhos executados pela ALR. As aplicações têm legenda de imagem ilustrativa. Nenhuma imagem foi gerada por IA nesta revisão.

## Origem e licença

Licença consultada em 21/10/2026: https://www.pexels.com/license/. Permite utilização gratuita em sites e adaptação. Não permite insinuar endosso das pessoas ou marcas retratadas. Atribuição não é exigida, mas os créditos ficam registrados abaixo. Preservar esse registro ao trocar ou publicar os arquivos.

| Arquivo em assets/photos | Autor | Página de origem | Aplicação |
| --- | --- | --- | --- |
| seguranca-{largura}.webp | Anamul Rezwan | https://www.pexels.com/photo/two-man-holding-white-paper-1216589/ | Abertura, área de Segurança e catálogo |
| eletrica-{largura}.webp | Annas Zakaria | https://www.pexels.com/photo/close-up-photo-of-a-man-checking-a-power-voltage-10871929/ | Área de Engenharia Elétrica e catálogo |
| medicina-{largura}.webp | MART PRODUCTION | https://www.pexels.com/photo/hands-doctor-health-anonymous-7088834/ | Área de Medicina do Trabalho e catálogo |
| planejamento-{largura}.webp | ThisIsEngineering | https://www.pexels.com/photo/female-engineer-discussing-plans-3862385/ | Apresentação institucional |

## Preparação

- Fotografias obtidas do CDN images.pexels.com pelos respectivos IDs, em 1600 px de largura.
- Derivadas locais em WebP, qualidade 80, larguras 480, 960 e 1600 px, proporção original preservada. Sem alteração de pessoas, marcas ou cenário.
- Recortes de exibição feitos por CSS com object-fit. Texto não é sobreposto às pessoas.
- srcset e sizes permitem ao navegador escolher a versão adequada. Imagem da abertura prioritária; demais imagens com carregamento tardio.
- Quatro imagens em 480 px somam 67.860 bytes (~66 KiB); as versões de 960 px somam 158.522 bytes (~155 KiB). O navegador baixa a variante escolhida, não todas. A mesma fotografia é reutilizada do cache entre páginas.
- Componente: alr-photo.jsx. Posições e recortes: alr-styles.css. O build copia assets/photos para dist/assets/photos; não há dependência do CDN para exibir as fotos publicadas.

## Próxima substituição por material da ALR

Priorizar fotos autorizadas de inspeções, instrumentos, treinamentos e instalações. Registrar quem fotografou e a autorização para uso. Evitar prontuários legíveis, nomes de pacientes, documentos de clientes e marcas sem autorização. Ao receber material real, substituir as variantes, descrição alternativa e legenda correspondentes; manter imagens de banco identificadas enquanto permanecerem no site.
