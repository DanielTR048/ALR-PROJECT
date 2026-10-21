import React from "react";
import { NavBar, Footer, FloatingWhatsApp } from "./alr-components.jsx";
import { HomePage } from "./alr-home-sections.jsx";
import {
  SobrePage,
  ServicosPage,
  ClientesPage,
  ContatoPage,
} from "./alr-pages.jsx";
const PAGES = {
  home: HomePage,
  sobre: SobrePage,
  servicos: ServicosPage,
  clientes: ClientesPage,
  contato: ContatoPage,
};
export default function Site({ page = "home", base = "./" }) {
  const Page = PAGES[page] || HomePage;
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <NavBar page={page} base={base} />
      <main id="conteudo" tabIndex="-1">
        <Page base={base} />
      </main>
      <Footer base={base} />
      <FloatingWhatsApp />
    </>
  );
}
