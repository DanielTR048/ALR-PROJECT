// Catálogo preservado da versão original; escopos sujeitos à avaliação técnica.
export const segServices = [
  {
    nr: "NR-01",
    title: "Ordem de Serviço de Segurança",
    desc: "Instruções formais sobre precauções para evitar acidentes de trabalho e doenças ocupacionais, conforme dever do empregador previsto na NR-01.",
  },
  {
    nr: "NR-01",
    title: "PGR – Programa de Gerenciamento de Riscos",
    desc: "Inventário e gestão de riscos físicos, químicos, biológicos, mecânicos e ergonômicos como parte do GRO da empresa.",
  },
  {
    nr: "NR-05",
    title: "Gestão da CIPA",
    desc: "Suporte para prevenção de acidentes e doenças decorrentes do trabalho, com dimensionamento e organização da comissão interna.",
  },
  {
    nr: "NR-18",
    title: "Gestão de Segurança na Construção Civil",
    desc: "Gestão dos riscos e condições de segurança na construção civil, com ações preventivas e atendimento à NR-18.",
  },
  {
    nr: "NR-12/13",
    title: "Máquinas, equipamentos e vasos de pressão",
    desc: "Apreciação de riscos, projetos de adequação, laudos de aterramento de máquinas e inspeções de caldeiras e vasos de pressão.",
  },
  {
    nr: "NR-15/16",
    title: "Insalubridade e Periculosidade",
    desc: "Laudos técnicos para caracterização ou descaracterização de adicionais, com parecer conclusivo e base normativa.",
  },
  {
    nr: "NR-17",
    title: "Ergonomia",
    desc: "Análise Ergonômica do Trabalho e Avaliação Ergonômica Preliminar para adequação das condições de trabalho.",
  },
  {
    nr: "NR-20/26",
    title: "Inflamáveis, combustíveis e produtos químicos",
    desc: "Gestão de segurança com inflamáveis e combustíveis e suporte para produtos químicos conforme requisitos aplicáveis.",
  },
  {
    nr: "NR-31",
    title: "Trabalho rural e CIPATR",
    desc: "PGRTR, gestão de segurança no trabalho rural e suporte para CIPATR conforme NR-31.",
  },
  {
    nr: "NR-33/35",
    title: "Espaço confinado e trabalho em altura",
    desc: "Identificação de cenários, medidas de controle, capacitação, autorização e projetos de linha de vida.",
  },
  {
    nr: "NR-36",
    title: "Gestão de frigoríficos",
    desc: "Avaliação, controle e monitoramento de riscos em empresas de abate e processamento de carnes e derivados.",
  },
  {
    nr: "INSS",
    title: "LTCAT e aposentadoria especial",
    desc: "Laudo técnico das condições ambientais do trabalho para subsidiar aposentadoria especial e exigências previdenciárias.",
  },
  {
    nr: "Perícia",
    title: "Assistência Técnica Pericial",
    desc: "Suporte técnico em demandas trabalhistas e previdenciárias, com fundamentação, seriedade e imparcialidade.",
  },
];

export const eletServices = [
  {
    nr: "NR-10",
    title: "Prontuário das Instalações Elétricas – PIE",
    desc: "Documentação acreditada, sistemática e atualizada das instalações, procedimentos, treinamentos e obrigações definidas pela NR-10.",
  },
  {
    nr: "NR-10",
    title: "Relatório Técnico de Inspeção – RTI",
    desc: "Auditoria das instalações elétricas e documentos existentes, com cronograma para saneamento de não conformidades.",
  },
  {
    nr: "Arc Flash",
    title: "Estudo de Energia Incidente",
    desc: "Cálculo de energia incidente em painéis, definição de distâncias de aproximação, medidas de controle e sinalizações de segurança.",
  },
  {
    nr: "NR-10",
    title: "Exposição ao arco elétrico",
    desc: "Análise dos cenários elétricos para especificação de vestimentas e equipamentos contra efeitos térmicos do arco elétrico.",
  },
  {
    nr: "NR-10",
    title: "Classificação de Áreas",
    desc: "Avaliação de risco de explosão, atmosferas explosivas e parâmetros para seleção de equipamentos e medidas de controle.",
  },
  {
    nr: "NBR 5410",
    title: "Projeto, inspeção e laudo de aterramento",
    desc: "Análise de proteção contra choques, contatos diretos e indiretos, seccionamento automático e equipotencializações.",
  },
  {
    nr: "NBR 5419",
    title: "Projeto, inspeção e laudo de SPDA",
    desc: "Verificação do Sistema de Proteção Contra Descargas Atmosféricas para conduzir e dissipar descargas com segurança.",
  },
  {
    nr: "Projetos",
    title: "Diagrama unifilar",
    desc: "Elaboração e atualização de desenhos técnicos com circuitos, condutores, dispositivos de manobra, carga por circuito e carga total.",
  },
];

export const medServices = [
  {
    nr: "NR-07",
    title: "PCMSO",
    desc: "Programa de Controle Médico de Saúde Ocupacional alinhado aos riscos da empresa e às obrigações legais.",
  },
  {
    nr: "Exames",
    title: "Exame admissional",
    desc: "Avaliação médica ocupacional para admissão de trabalhadores, conforme função e riscos ocupacionais.",
  },
  {
    nr: "Exames",
    title: "Mudança de risco e retorno ao trabalho",
    desc: "Exames para alteração de exposição ocupacional e retorno após afastamentos, conforme necessidade legal.",
  },
  {
    nr: "Exames",
    title: "Exame demissional",
    desc: "Avaliação médica ocupacional no encerramento do vínculo, com documentação adequada.",
  },
  {
    nr: "Exames",
    title: "Exames complementares",
    desc: "Encaminhamento e gestão de exames complementares conforme riscos e protocolos ocupacionais.",
  },
  {
    nr: "eSocial",
    title: "Gestão de eventos SST",
    desc: "Gestão dos eventos S-2210, S-2220, S-2221 e S-2240 para obrigações de Segurança e Saúde no Trabalho.",
  },
];

export const treinamentos = [
  "EPI e EPC (NR-06)",
  "CIPA (NR-05)",
  "Curso básico NR-10",
  "Curso complementar NR-10 SEP",
  "Áreas classificadas (NR-10 e NR-20)",
  "Máquinas e equipamentos (NR-12)",
  "Construção civil (NR-18)",
  "Inflamáveis e combustíveis (NR-20)",
];

export const avaliacoes = [
  "Avaliação quantitativa de ruído",
  "Avaliação quantitativa de calor",
  "Avaliação quantitativa de vibrações",
  "Avaliação quantitativa de agentes químicos",
  "Laudo de ruído em áreas habitadas (CETESB / NBR 10151)",
];
