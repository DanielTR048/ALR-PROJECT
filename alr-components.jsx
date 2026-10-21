import React, { useEffect, useRef, useState } from "react";
import { CONTACT, pageUrls, whatsappUrl } from "./alr-config.js";
import { WorkPhoto } from "./alr-photo.jsx";

export function ALRLogo({ base = "./", inverse = false }) {
  return (
    <img
      className={`brand-logo${inverse ? " brand-logo--inverse" : ""}`}
      src={`${base}assets/alr-logo.webp`}
      width="190"
      height="72"
      alt="ALR Soluções em Engenharia"
    />
  );
}
export function Btn({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `button button--${variant} ${className}`;
  return href ? (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  ) : (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
export const SectionLabel = ({ children, light = false }) => (
  <p className={`eyebrow${light ? " eyebrow--light" : ""}`}>{children}</p>
);
export function NavBar({ page, base }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null),
    header = useRef(null);
  const urls = pageUrls(base);
  const items = [
    ["home", "Início"],
    ["sobre", "Sobre"],
    ["servicos", "Serviços"],
    ["clientes", "Como atuamos"],
  ];
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const onClick = (e) => {
      if (!header.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClick);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="container header-inner">
        <a
          className="brand-link"
          href={urls.home}
          aria-label="ALR - página inicial"
        >
          <ALRLogo base={base} />
        </a>
        <button
          ref={trigger}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "Fechar" : "Menu"}</span>
          <span
            className={`menu-icon${open ? " is-open" : ""}`}
            aria-hidden="true"
          >
            <i />
            <i />
          </span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Navegação principal"
          className={`main-nav${open ? " is-open" : ""}`}
        >
          {items.map(([id, label]) => (
            <a
              key={id}
              href={urls[id]}
              aria-current={page === id ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href={urls.contato}
            aria-current={page === "contato" ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            Fale com a ALR <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
export function Footer({ base }) {
  const urls = pageUrls(base);
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href={urls.home} aria-label="ALR - página inicial">
            <ALRLogo base={base} inverse />
          </a>
          <p>
            Engenharia, segurança e medicina do trabalho.
            <br />
            Conhecimento técnico a serviço da sua empresa.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>
            <li>
              <a href={urls.sobre}>Sobre</a>
            </li>
            <li>
              <a href={urls.servicos}>Serviços</a>
            </li>
            <li>
              <a href={urls.clientes}>Como atuamos</a>
            </li>
            <li>
              <a href={urls.contato}>Contato</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Vamos conversar</h2>
          <ul>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                WhatsApp {CONTACT.phone} <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href={`tel:+${CONTACT.phoneDigits}`}>Ligar para a ALR</a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
          </ul>
          <p>
            {CONTACT.city}
            <br />
            {CONTACT.hours}
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ALR Soluções em Engenharia.</span>
        <span>
          Segurança do Trabalho · Engenharia Elétrica · Medicina do Trabalho
        </span>
      </div>
    </footer>
  );
}
export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar no WhatsApp: ${CONTACT.phone} (abre em nova aba)`}
      title="Conversar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.46 0 .11 5.35.1 11.93c0 2.1.55 4.16 1.6 5.97L0 24l6.25-1.64a11.93 11.93 0 0 0 5.79 1.48h.01c6.58 0 11.93-5.35 11.94-11.93a11.85 11.85 0 0 0-3.47-8.43ZM12.05 21.83a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.89 9.89 0 0 1-1.52-5.29c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.95 9.89Zm5.44-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.51.71.3 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z"
        />
      </svg>
    </a>
  );
}

export function PageHeader({ tag, title, desc, base, photo }) {
  return (
    <section className={`page-header${photo ? " page-header--photo" : ""}`}>
      {photo && (
        <WorkPhoto
          name={photo}
          base={base}
          className="header-photo"
          priority
          sizes="(max-width: 540px) 660px, (max-width: 850px) 820px, 100vw"
        />
      )}
      <div className="container">
        <a className="breadcrumb" href={pageUrls(base).home}>
          Início <span aria-hidden="true">/</span>
        </a>
        <SectionLabel light>{tag}</SectionLabel>
        <h1>{title}</h1>
        {desc && <p className="page-description">{desc}</p>}
      </div>
    </section>
  );
}
export function CTASection({ base }) {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <SectionLabel light>Conte com a ALR</SectionLabel>
          <h2>
            Vamos cuidar da sua empresa.
            <br className="desktop-break" /> Começando por ouvir você.
          </h2>
          <p>
            Uma contratação, uma exigência para atender ou uma instalação para
            avaliar. Conte o que está acontecendo — a conversa pode começar por
            aí.
          </p>
        </div>
        <div className="cta-actions">
          <Btn href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            Falar com a equipe <span aria-hidden="true">↗</span>
          </Btn>
          <a
            className="text-link text-link--light"
            href={pageUrls(base).contato}
          >
            Prefiro preencher o formulário <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
export const STEPS = [
  {
    title: "Entender sua necessidade",
    text: "Conte sobre a empresa, a atividade e o que precisa ser avaliado. Documentos existentes ajudam a contextualizar o atendimento.",
  },
  {
    title: "Definir o escopo",
    text: "Os serviços, as etapas e a necessidade de visita técnica são definidos conforme as características de cada solicitação.",
  },
  {
    title: "Organizar as próximas etapas",
    text: "Com o escopo alinhado, a equipe orienta sobre as informações e os procedimentos necessários para dar continuidade ao trabalho.",
  },
];
export function ProcessSection({ base, compact = false }) {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel>Do seu contato ao atendimento</SectionLabel>
            <h2>
              Você conta o que precisa.
              <br />A gente organiza o caminho.
            </h2>
          </div>
          {!compact && (
            <a className="text-link" href={pageUrls(base).clientes}>
              Entenda o atendimento <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
        <ol className="process-grid">
          {STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="step-number">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
