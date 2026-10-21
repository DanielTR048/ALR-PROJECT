import React from "react";
import { ContactForm } from "./alr-contact-form.jsx";
import { Btn, SectionLabel, CTASection } from "./alr-components.jsx";
import { CONTACT, whatsappUrl, pageUrls } from "./alr-config.js";
import { WorkPhoto } from "./alr-photo.jsx";
export const AREAS = [
  {
    id: "seguranca",
    number: "01",
    title: "Segurança do Trabalho",
    headline: "Programas, laudos e treinamentos.",
    desc: "Entenda os riscos da operação e organize as ações de prevenção.",
    items: [
      "Programas e laudos",
      "Avaliações ambientais",
      "Treinamentos e assistência técnica",
    ],
  },
  {
    id: "eletrica",
    number: "02",
    title: "Engenharia Elétrica",
    headline: "Projetos, inspeções e adequações.",
    desc: "Informação técnica para avaliar instalações e planejar adequações.",
    items: [
      "Projetos e inspeções",
      "Prontuários e aterramento",
      "SPDA e estudos elétricos",
    ],
  },
  {
    id: "medicina",
    number: "03",
    title: "Medicina do Trabalho",
    headline: "Exames e acompanhamento ocupacional.",
    desc: "Acompanhamento ocupacional alinhado à rotina da empresa.",
    items: ["PCMSO", "Exames ocupacionais", "Gestão de eventos SST"],
  },
];
export function HomePage({ base }) {
  const urls = pageUrls(base);
  return (
    <>
      <section className="hero">
        <WorkPhoto
          name="seguranca"
          base={base}
          className="hero-photo"
          priority
          sizes="(max-width: 540px) 660px, (max-width: 850px) 820px, 100vw"
        />
        <div className="container hero-grid">
          <div className="hero-copy">
            <SectionLabel>
              Engenharia · Segurança · Medicina do Trabalho
            </SectionLabel>
            <h1>
              Cuidar de quem
              <br />
              <em>trabalha.</em>
              <br />
              Dar segurança
              <br />a quem <em>empreende.</em>
            </h1>
            <p className="hero-description">
              Projetos, inspeções, laudos e programas ocupacionais para cuidar
              das pessoas e da operação da sua empresa.
            </p>
            <div className="hero-actions">
              <Btn href="#solicitar">
                Converse com a ALR <span aria-hidden="true">↗</span>
              </Btn>
              <a className="text-link" href={urls.servicos}>
                Conheça os serviços <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container hero-footnote">
          <span>Conhecimento técnico aplicado à sua realidade.</span>
          <a href="#areas">
            Explore nossa atuação <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>
      <section className="section areas-section" id="areas">
        <div className="container">
          <div className="section-heading">
            <div>
              <SectionLabel>Nossa atuação</SectionLabel>
              <h2>
                Três especialidades.
                <br />
                Cuidado em cada uma delas.
              </h2>
            </div>
            <p>
              Da segurança das instalações à saúde da equipe, encontre o apoio
              que sua empresa precisa.
            </p>
          </div>
        </div>
        <div className="container area-cards">
          {AREAS.map((area) => (
            <article className="area-card" key={area.id}>
              <WorkPhoto
                name={area.id}
                base={base}
                className="card-photo"
                sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1050px) 33vw, 384px"
              />
              <div className="area-card-body">
                <span className="area-card-label">
                  {area.number} · {area.title}
                </span>
                <h3>{area.headline}</h3>
                <p>{area.desc}</p>
                <ul>
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Btn href={`${urls.servicos}#${area.id}`}>
                  Saiba mais <span aria-hidden="true">→</span>
                </Btn>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section about-intro">
        <div className="container editorial-grid">
          <div>
            <SectionLabel>A ALR</SectionLabel>
            <h2>
              O trabalho técnico
              <br />
              começa por entender
              <br />a sua operação.
            </h2>
          </div>
          <div>
            <p className="lead">
              Atuamos em Engenharia de Segurança, Engenharia Elétrica e Medicina
              do Trabalho, reunindo diferentes especialidades para atender às
              necessidades das empresas.
            </p>
            <p>
              Projetos, laudos, treinamentos, assistência técnica e exames
              ocupacionais fazem parte dessa atuação. O escopo de cada trabalho
              considera as características da atividade e a necessidade
              apresentada.
            </p>
            <a className="text-link" href={urls.sobre}>
              Conheça a ALR <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
      <section
        className="section home-contact-section"
        id="solicitar"
        aria-labelledby="home-contact-title"
      >
        <div className="container home-contact-layout">
          <div className="home-contact-copy">
            <SectionLabel>Fale com a ALR</SectionLabel>
            <h2 id="home-contact-title">
              O que sua empresa
              <br />
              precisa resolver hoje?
            </h2>
            <p className="lead">
              Um exame admissional, um laudo, uma instalação para avaliar ou uma
              dúvida sobre segurança. Conte com a gente para entender o que
              precisa ser feito.
            </p>
            <p>
              Não precisa saber o nome técnico do serviço. Descreva a situação e
              leve sua solicitação para uma conversa com a ALR.
            </p>
            <div className="home-contact-destination">
              <span>Seu contato com a nossa equipe</span>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                {CONTACT.phone} <span aria-hidden="true">↗</span>
              </a>
              <p>
                {CONTACT.hours}
                <br />
                {CONTACT.city}
              </p>
              <a
                className="home-contact-email"
                href={`mailto:${CONTACT.email}`}
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
          <ContactForm compact />
        </div>
      </section>
      <CTASection base={base} />
    </>
  );
}
