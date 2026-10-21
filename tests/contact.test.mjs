import { test } from "node:test";
import assert from "node:assert/strict";
import { CONTACT, whatsappUrl, prepareContactMessage } from "../alr-config.js";
test("mensagem preserva acentos, quebras e caracteres especiais no destino confirmado", () => {
  const message = prepareContactMessage({
    name: " João & Maria ",
    company: "A+B",
    message: "Avaliar instalação #2?\nÁrea elétrica.",
  });
  const url = new URL(whatsappUrl(message));
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, "/5517996220960");
  assert.equal(url.searchParams.get("text"), message);
  assert.match(message, /Nome: João & Maria/);
  assert.match(message, /Área elétrica\./);
  assert.doesNotMatch(message, /undefined|E-mail:|Telefone:|Interesse:/);
});
test("solicitação inclui serviço escolhido e contatos de retorno quando fornecidos", () => {
  const message = prepareContactMessage({
    name: "Ana",
    company: "Empresa",
    email: "ana@example.invalid",
    phone: "11999999999",
    service: "Engenharia Elétrica",
    message: "Preciso avaliar uma instalação.",
  });
  assert.match(message, /Interesse: Engenharia Elétrica/);
  assert.match(message, /E-mail: ana@example.invalid/);
  assert.match(message, /Telefone: 11999999999/);
  assert.equal(CONTACT.phone, "(17) 99622-0960");
});
