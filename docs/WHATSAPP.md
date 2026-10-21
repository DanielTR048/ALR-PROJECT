# Formulário e WhatsApp - decisão de integração

Data: 21/10/2026. Destinatário confirmado: **(17) 99622-0960**. O usuário informou que não há n8n nem API de WhatsApp disponível.

## O que funciona nesta prévia

O formulário está na Home (nome, empresa, área e necessidade) e na página Contato (com e-mail e telefone opcionais adicionais). Ambos usam `alr-contact-form.jsx`; validação, revisão e edição seguem o mesmo fluxo.

1. O visitante informa nome, necessidade e dados opcionais de retorno.
2. A página monta uma mensagem e mostra o texto para revisão.
3. O link abre o WhatsApp no número da ALR com o texto preenchido.
4. O visitante toca em Enviar no WhatsApp.

Este fluxo usa click-to-chat e não contrata uma API. Não é envio automático e não confirma recebimento. A página diz isso antes e depois do preenchimento. Os dados ficam no estado da página até serem encaminhados pelo próprio visitante; não há persistência ao recarregar ou fechar a aba. [Referência oficial: click-to-chat](https://faq.whatsapp.com/5913398998672934).

## É possível enviar automaticamente?

Sim. O formulário pode chamar um serviço no servidor que registra a solicitação e dispara uma notificação para o WhatsApp do responsável. A Meta possui cobranças por mensagens conforme categoria, mercado e regras vigentes; não é adequado prometer automação ilimitada gratuita. O custo concreto deve ser confirmado na conta e no provedor escolhidos. [Preços oficiais](https://business.whatsapp.com/products/platform-pricing).

Fluxo proposto:

`Formulário → serviço de recebimento → registro da solicitação → automação/API oficial → WhatsApp da ALR`

O n8n pode receber o evento via webhook e usar a integração WhatsApp Business Cloud para enviar mensagens ou modelos. Ele orquestra o trabalho, mas não elimina requisitos da conta Meta ou custos do envio. [Webhook](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/) · [WhatsApp Business Cloud](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/).

## Configuração necessária para a etapa automática

- Definir hospedagem do serviço ou da automação e responsável pela manutenção.
- Configurar conta de envio da API oficial, número remetente e destinatário da notificação. O telefone de contato do site não é, por si só, uma conta remetente habilitada para API.
- Validar eventuais modelos de mensagem e regras do provedor para a notificação escolhida.
- Manter credenciais apenas no servidor; o número destinatário deve ser fixado no servidor para impedir uso como disparador para terceiros.
- Validar tamanho e formato dos campos; controlar abuso, repetição e tentativas de envio; registrar o pedido antes de avisar o responsável.
- Exibir confirmação de pedido recebido somente após armazenamento confirmado. Aceite da API não comprova entrega no WhatsApp; acompanhar status separadamente.
- Testar com o número e a conta autorizados em ambiente controlado, sem ativar a integração antes da revisão do usuário.

## Alternativa gratuita para recebimento automático

FormSubmit oferece recebimento por **e-mail**, com confirmação inicial do endereço. Pode ser uma primeira etapa quando o objetivo principal for não perder a solicitação sem exigir que o visitante abra outro aplicativo. Não envia automaticamente para o WhatsApp; essa parte ainda depende de integração adicional. Nenhuma conta foi criada ou ativada. [FormSubmit](https://formsubmit.co/).

## Por que não escolher uma API gratuita qualquer?

A oferta gratuita do CallMeBot é declarada para uso pessoal, e sua página indicava indisponibilidade de novas vagas na consulta. Por isso não foi conectada como infraestrutura de um site comercial. [Condições publicadas pelo serviço](https://www.callmebot.com/blog/free-api-whatsapp-messages/).

## Sugestão

Validar a prévia com WhatsApp assistido agora. Se for indispensável receber automaticamente sem o visitante abrir o aplicativo, escolher entre recebimento por e-mail e uma integração oficial de WhatsApp com orçamento definido. A implementação atual não contém um endpoint automático fictício nem chaves no navegador.
