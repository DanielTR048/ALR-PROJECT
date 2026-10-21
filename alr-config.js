export const CONTACT = Object.freeze({
  phone: "(17) 99622-0960",
  phoneDigits: "5517996220960",
  email: "contato@alrsolucoeseng.com.br",
  city: "São José do Rio Preto, SP",
  hours: "Segunda a sexta, das 8h às 18h",
});

export const PAGE_INFO = {
  home: {
    title: "ALR | Engenharia, Segurança e Medicina do Trabalho",
    description:
      "Conheça as soluções da ALR em Segurança do Trabalho, Engenharia Elétrica e Medicina do Trabalho. Converse com nossa equipe sobre sua empresa.",
  },
  sobre: {
    title: "Sobre a ALR | Soluções em Engenharia",
    description:
      "Conheça as áreas de atuação e o atendimento da ALR em Engenharia, Segurança e Medicina do Trabalho.",
  },
  servicos: {
    title: "Serviços | ALR Soluções em Engenharia",
    description:
      "Projetos, inspeções, laudos, programas ocupacionais, exames e treinamentos. Encontre o serviço para a necessidade da sua empresa.",
  },
  clientes: {
    title: "Como atuamos | ALR Soluções em Engenharia",
    description:
      "Da primeira conversa à definição do escopo: entenda como iniciar seu atendimento com a ALR.",
  },
  contato: {
    title: "Contato | Converse com a ALR",
    description:
      "Fale com a ALR pelo WhatsApp (17) 99622-0960, telefone ou e-mail. Prepare sua solicitação de atendimento.",
  },
};

export const pageUrls = (base = "./") => ({
  home: base,
  sobre: `${base}sobre/`,
  servicos: `${base}servicos/`,
  clientes: `${base}clientes/`,
  contato: `${base}contato/`,
});
export const whatsappUrl = (
  message = "Olá! Gostaria de conversar com a ALR sobre uma necessidade da minha empresa.",
) => `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(message)}`;

export function prepareContactMessage(form) {
  const value = (key) => String(form[key] || "").trim();
  const details = [
    `Nome: ${value("name")}`,
    value("company") && `Empresa: ${value("company")}`,
    value("email") && `E-mail: ${value("email")}`,
    value("phone") && `Telefone: ${value("phone")}`,
    value("service") && `Interesse: ${value("service")}`,
  ].filter(Boolean);
  return [
    "Olá, equipe ALR! Gostaria de solicitar um atendimento.",
    "",
    ...details,
    "",
    "Minha necessidade:",
    value("message"),
  ].join("\n");
}
