import React, { useEffect, useRef, useState } from "react";
import { Btn, SectionLabel } from "./alr-components.jsx";
import { whatsappUrl, prepareContactMessage } from "./alr-config.js";
import { segServices, eletServices, medServices } from "./alr-services.js";
const contactServices = [
  "Segurança do Trabalho",
  "Engenharia Elétrica",
  "Medicina do Trabalho",
  ...segServices,
  ...eletServices,
  ...medServices,
].map((s) => (typeof s === "string" ? s : s.title));

export function ContactForm({ compact = false }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [prepared, setPrepared] = useState(false);
  const preview = useRef(null),
    nameInput = useRef(null);
  useEffect(() => {
    const service = new URLSearchParams(window.location.search).get("servico");
    if (contactServices.includes(service)) setForm((f) => ({ ...f, service }));
  }, []);
  useEffect(() => {
    if (prepared) preview.current?.focus();
  }, [prepared]);
  const bind = (key) => ({
    value: form[key],
    onChange: (e) => {
      e.target.setCustomValidity("");
      setForm((f) => ({ ...f, [key]: e.target.value }));
    },
  });
  const message = prepareContactMessage(form);
  const submit = (e) => {
    e.preventDefault();
    const controls = e.currentTarget.elements;
    controls
      .namedItem("name")
      .setCustomValidity(form.name.trim() ? "" : "Informe seu nome.");
    controls
      .namedItem("message")
      .setCustomValidity(
        form.message.trim().length >= 10
          ? ""
          : "Descreva sua necessidade com pelo menos 10 caracteres.",
      );
    if (!e.currentTarget.reportValidity()) return;
    setPrepared(true);
  };
  return (
    <div className="contact-form-panel">
      {prepared ? (
        <div className="message-preview">
          <p className="eyebrow">Revise antes de continuar</p>
          <h2 ref={preview} tabIndex="-1">
            Sua mensagem está preparada.
          </h2>
          <p>
            A solicitação ainda não foi enviada. Abra o WhatsApp e toque em{" "}
            <strong>Enviar</strong> para conversar com a ALR.
          </p>
          <pre>{message}</pre>
          <div className="preview-actions">
            <Btn
              href={whatsappUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir WhatsApp com a mensagem <span aria-hidden="true">↗</span>
            </Btn>
            <Btn
              variant="outline"
              onClick={() => {
                setPrepared(false);
                requestAnimationFrame(() => nameInput.current?.focus());
              }}
            >
              Voltar e editar
            </Btn>
          </div>
          <p className="small-note">
            Se o WhatsApp não abrir, use os contatos da ALR nesta página. Você
            pode voltar e editar sem perder o preenchimento.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} className="contact-form">
          {!compact && <>
            <SectionLabel>Sua solicitação</SectionLabel>
            <h2>Como podemos ajudar?</h2>
            <p>Conte sua necessidade e continue a conversa no WhatsApp.</p>
          </>}
          <p className="small-note">Campos marcados com * são obrigatórios.</p>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="contact-name">Seu nome *</label>
              <input
                ref={nameInput}
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                {...bind("name")}
              />
            </div>
            <div className="field">
              <label htmlFor="contact-company">Empresa</label>
              <input
                id="contact-company"
                name="company"
                autoComplete="organization"
                maxLength={120}
                {...bind("company")}
              />
            </div>
            {!compact && (
              <>
                <div className="field">
                  <label htmlFor="contact-email">E-mail para retorno</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={160}
                    {...bind("email")}
                  />
                </div>
                <div className="field">
                  <label htmlFor="contact-phone">Telefone para retorno</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={30}
                    {...bind("phone")}
                  />
                </div>
              </>
            )}
          </div>
          <div className="field">
            <label htmlFor="contact-service">
              Serviço ou área de interesse
            </label>
            <select id="contact-service" name="service" {...bind("service")}>
              <option value="">Ainda não sei / quero orientação</option>
              {contactServices.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="contact-message">Conte sua necessidade *</label>
            <textarea
              id="contact-message"
              name="message"
              rows={compact ? 3 : 5}
              required
              minLength={10}
              maxLength={1600}
              aria-describedby="message-hint"
              {...bind("message")}
            />
            <p className="field-hint" id="message-hint">
              {compact ? "Ex.: exame admissional para dois funcionários. " : "Descreva o serviço e a situação da empresa. "}
              Não inclua informações confidenciais ou de saúde.
            </p>
          </div>
          <p className="privacy-note">
            Você revisa o texto antes de abrir o WhatsApp. A mensagem só é
            enviada quando você confirma no aplicativo.
          </p>
          <Btn type="submit">
            {compact ? "Revisar e continuar no WhatsApp" : "Preparar mensagem"}{" "}
            <span aria-hidden="true">→</span>
          </Btn>
        </form>
      )}
    </div>
  );
}
