import React from "react";
import { ContactForm } from "./alr-contact-form.jsx";
import { WorkPhoto } from "./alr-photo.jsx";
import {
  Btn,
  PageHeader,
  SectionLabel,
  CTASection,
  ProcessSection,
  STEPS,
} from "./alr-components.jsx";
import { CONTACT, pageUrls, whatsappUrl } from "./alr-config.js";
import {
  segServices,
  eletServices,
  medServices,
  treinamentos,
  avaliacoes,
} from "./alr-services.js";

export function SobrePage({ base }) {
  return (
    <>
      <PageHeader
        base={base}
        tag="Sobre"
        photo="eletrica"
        title="Diferentes especialidades. O mesmo cuidado com a sua empresa."
        desc="Engenharia de Segurança, Engenharia Elétrica e Medicina do Trabalho conectadas às necessidades de cada operação."
      />
      <section className="section">
        <div className="container editorial-grid">
          <div>
            <SectionLabel>Quem somos</SectionLabel>
            <h2>
              Conhecimento técnico
              <br />
              com atenção ao contexto.
            </h2>
          </div>
          <div>
            <p className="lead">
              A ALR atua com projetos, inspeções, laudos, treinamentos,
              assistência técnica em perícias e avaliações ambientais.
            </p>
            <p>
              A Medicina do Trabalho também integra nossa atuação, com programas
              e exames ocupacionais. Profissionais de diferentes áreas e uma
              rede de parceiros apoiam o atendimento às empresas.
            </p>
            <p>
              Com base em São José do Rio Preto, atendemos demandas em todo o
              território nacional. A abrangência e as condições do atendimento
              são alinhadas para cada serviço.
            </p>
          </div>
        </div>
      </section>
      <section className="section about-intro">
        <div className="container">
          <div className="section-heading">
            <div>
              <SectionLabel>O que orienta o trabalho</SectionLabel>
              <h2>Clareza em cada etapa.</h2>
            </div>
            <p>
              Da compreensão da demanda à definição dos serviços, o diálogo faz
              parte do trabalho técnico.
            </p>
          </div>
          <div className="principle-list">
            {[
              [
                "01",
                "Contexto antes da solução",
                "O tipo de atividade, as instalações e a rotina das pessoas ajudam a definir o que precisa ser avaliado.",
              ],
              [
                "02",
                "Escopo compreensível",
                "Serviços, informações necessárias e etapas devem estar claros para quem contrata e para quem executa.",
              ],
              [
                "03",
                "Integração entre especialidades",
                "Segurança, instalações elétricas e saúde ocupacional são consideradas conforme a necessidade de cada trabalho.",
              ],
            ].map(([n, title, text]) => (
              <article key={n}>
                <span className="area-number">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection base={base} />
    </>
  );
}

const GROUPS = [
  {
    id: "seguranca",
    number: "01",
    title: "Segurança do Trabalho",
    description:
      "Programas, avaliações e orientações para identificar riscos e organizar as ações de prevenção.",
    items: segServices,
  },
  {
    id: "eletrica",
    number: "02",
    title: "Engenharia Elétrica",
    description:
      "Projetos, inspeções e estudos para conhecer as instalações e apoiar decisões técnicas.",
    items: eletServices,
  },
  {
    id: "medicina",
    number: "03",
    title: "Medicina do Trabalho",
    description:
      "Programas, exames e gestão de informações de saúde ocupacional.",
    items: medServices,
  },
];
export function ServicosPage({ base }) {
  const urls = pageUrls(base);
  return (
    <>
      <PageHeader
        base={base}
        tag="Serviços"
        title="Encontre o ponto de partida para a sua empresa."
        desc="Explore as áreas de atuação. Nossa equipe ajuda a entender a necessidade e a definir o escopo adequado."
      />
      <nav className="service-navigation" aria-label="Áreas de serviço">
        <div className="container">
          {GROUPS.map((g) => (
            <a key={g.id} href={`#${g.id}`}>
              {g.title}
            </a>
          ))}
          <a href="#treinamentos">Treinamentos e avaliações</a>
        </div>
      </nav>
      {GROUPS.map((group) => (
        <section
          className="section service-section"
          id={group.id}
          key={group.id}
        >
          <div className="service-scene">
            <WorkPhoto
              name={group.id}
              base={base}
              className="scene-photo"
              sizes="(max-width: 540px) 520px, (max-width: 850px) 700px, 75vw"
            />
            <div className="container scene-content">
              <div className="service-intro">
                <SectionLabel>Área {group.number}</SectionLabel>
                <h2>{group.title}</h2>
                <p>{group.description}</p>
                <a
                  className="text-link"
                  href={`${urls.contato}?servico=${encodeURIComponent(group.title)}`}
                >
                  Conversar sobre esta área <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
          <div className="container service-catalog">
            <div className="catalog-heading">
              <SectionLabel>Serviços desta área</SectionLabel>
              <p>
                Abra um serviço para conhecer o escopo e solicitar informações.
              </p>
            </div>
            <div className="service-list">
              {group.items.map((s) => (
                <details className="service-detail" key={s.title}>
                  <summary>
                    <span>
                      <small>{s.nr}</small>
                      {s.title}
                    </span>
                    <span className="detail-symbol" aria-hidden="true" />
                  </summary>
                  <div className="service-detail-body">
                    <p>{s.desc}</p>
                    <a
                      className="text-link"
                      href={`${urls.contato}?servico=${encodeURIComponent(s.title)}`}
                    >
                      Solicitar informações <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="section training-section" id="treinamentos">
        <div className="container">
          <SectionLabel>Capacitação e avaliação</SectionLabel>
          <h2>
            Informação para orientar
            <br />
            as próximas decisões.
          </h2>
          <div className="training-grid">
            {[
              { title: "Treinamentos de segurança", items: treinamentos },
              { title: "Avaliações ambientais", items: avaliacoes },
            ].map((g) => (
              <div key={g.title}>
                <h3>{g.title}</h3>
                <ul className="check-list">
                  {g.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="service-note">
            A aplicabilidade, o escopo e as referências de cada serviço são
            avaliados pela equipe técnica conforme a atividade e as condições da
            empresa.
          </p>
        </div>
      </section>
      <CTASection base={base} />
    </>
  );
}

export function ClientesPage({ base }) {
  return (
    <>
      <PageHeader
        base={base}
        tag="Como atuamos"
        title="Um atendimento que começa pela sua realidade."
        desc="Entenda como iniciar uma conversa com a ALR e quais informações ajudam a definir o serviço."
      />
      <ProcessSection base={base} compact />
      <section className="section about-intro">
        <div className="container editorial-grid">
          <div>
            <SectionLabel>Prepare sua conversa</SectionLabel>
            <h2>
              Não precisa saber
              <br />o nome do laudo.
              <br />
              Conte a necessidade.
            </h2>
          </div>
          <div>
            <p className="lead">
              Descreva o que motivou o contato: uma nova instalação, uma
              avaliação, uma documentação ou a rotina de saúde e segurança da
              empresa.
            </p>
            <ul className="check-list">
              <li>Atividade e localização da empresa.</li>
              <li>O que precisa ser avaliado ou organizado.</li>
              <li>Prazo ou situação que motivou a solicitação.</li>
              <li>Documentos existentes, quando houver.</li>
            </ul>
            <Btn href={pageUrls(base).contato}>
              Preparar minha solicitação <span aria-hidden="true">→</span>
            </Btn>
          </div>
        </div>
      </section>
      <CTASection base={base} />
    </>
  );
}

export function ContatoPage({ base }) {
  return (
    <>
      <PageHeader
        base={base}
        tag="Contato"
        title="Vamos conversar sobre a sua empresa."
        desc="Escolha o contato direto ou organize sua solicitação antes de continuar no WhatsApp."
      />
      <section className="section contact-section">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <SectionLabel>Fale com a ALR</SectionLabel>
            <h2>
              Sua dúvida merece
              <br />
              uma conversa.
            </h2>
            <a
              className="contact-number"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTACT.phone} <span aria-hidden="true">↗</span>
            </a>
            <p className="small-note">WhatsApp e telefone</p>
            <Btn href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Abrir conversa no WhatsApp
            </Btn>
            <dl className="contact-details">
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </dd>
              </div>
              <div>
                <dt>Telefone</dt>
                <dd>
                  <a href={`tel:+${CONTACT.phoneDigits}`}>{CONTACT.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Base de atendimento</dt>
                <dd>{CONTACT.city}</dd>
              </div>
              <div>
                <dt>Horário</dt>
                <dd>{CONTACT.hours}</dd>
              </div>
            </dl>
          </aside>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
