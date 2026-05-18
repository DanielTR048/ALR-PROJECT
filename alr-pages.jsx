// alr-pages.jsx — Sobre, Serviços e Contato pages

const { useState } = React;
const thp = (theme, dark, light) => theme === 'corporativo' ? light : dark;

// ─── Page Header ──────────────────────────────────────────────────────────────
const PageHeader = ({ tag, title, desc }) => (
  <div style={{
    background:'#080f09',
    backgroundImage:[
      'radial-gradient(ellipse at 18% 55%, rgba(30,107,53,0.28) 0%, transparent 48%)',
      'linear-gradient(rgba(109,184,58,0.032) 1px, transparent 1px)',
      'linear-gradient(90deg, rgba(109,184,58,0.032) 1px, transparent 1px)',
    ].join(','),
    backgroundSize:'auto, 48px 48px, 48px 48px',
    padding:'8rem max(1.5rem, calc((100% - 1200px)/2 + 2rem)) 5rem',
  }}>
    <SectionLabel>{tag}</SectionLabel>
    <h1 style={{fontFamily:"'Barlow Condensed'", fontWeight:800,
      fontSize:'clamp(2.4rem,4.5vw,3.8rem)', color:'#f0f8f0', margin:'0 0 1.1rem',
      maxWidth:680, lineHeight:1.05, textWrap:'balance'}}>{title}</h1>
    {desc && <p style={{fontFamily:"'Barlow'", color:'#7aa07a', fontSize:'1.02rem', lineHeight:1.75, maxWidth:560, margin:0}}>{desc}</p>}
  </div>
);

// ─── Sobre Page ───────────────────────────────────────────────────────────────
const SobrePage = ({ theme, onNavigate }) => {
  const bg     = thp(theme, '#080f09', '#ffffff');
  const bg2    = thp(theme, '#0f2314', '#f0f6f0');
  const cardBg = thp(theme, '#142c19', '#ffffff');
  const tp     = thp(theme, '#f0f8f0', '#0a1a0d');
  const ts     = thp(theme, '#7aa07a', '#3a6040');
  const border = thp(theme, 'rgba(109,184,58,0.1)', 'rgba(30,107,53,0.12)');

  const mvv = [
    { letter:'C', title:'Confiabilidade', text:'Confiabilidade e segurança são valores primordiais nos serviços prestados pela ALR em cada projeto, estudo, laudo e treinamento.' },
    { letter:'S', title:'Segurança', text:'As soluções são conduzidas por equipe qualificada, formada por profissionais de Engenharia, Segurança e Medicina do Trabalho.' },
    { letter:'R', title:'Responsabilidade', text:'A empresa avalia impactos ambientais, aplica normas e legislação com rigor técnico e atua atenta à responsabilidade sócio-empresarial.' },
  ];

  const diferenciais = [
    { name:'Equipe atualizada', role:'Profissionais sempre alinhados às exigências legais, com equipamentos modernos e soluções diversas.', exp:'Atualização legal' },
    { name:'Atendimento ao cliente', role:'Atuação diferenciada pela dedicação ao cliente, atendimento presencial e soluções inovadoras.', exp:'Proximidade' },
    { name:'Rede especializada', role:'Atendimento em todo o território nacional com ampla rede de profissionais especializados.', exp:'Brasil' },
  ];

  return (
    <main>
      <PageHeader
        tag="Sobre a ALR"
        title="Confiabilidade e segurança em soluções de engenharia"
        desc="Equipe multidisciplinar, mais de 20 anos de experiência e atuação especializada em Engenharia de Segurança, Engenharia Elétrica e Medicina do Trabalho."
      />

      {/* História */}
      <section style={{background:bg, padding:'5.5rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'start'}}>
          <div>
            <SectionLabel>Nossa História</SectionLabel>
            <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(1.8rem,2.4vw,2.5rem)', color:tp, margin:'0 0 1.5rem', lineHeight:1.1}}>
              Sobre a empresa
            </h2>
            {[
              'A ALR – Soluções em Engenharia, Segurança e Medicina do Trabalho atua no ramo de Engenharia de Segurança, Engenharia Elétrica e Medicina do Trabalho, especializada em projetos, laudos, treinamentos, assistência técnica em perícias e avaliações ambientais.',
              'Um dos pilares principais são os exames médicos ocupacionais. A empresa conta com profissionais e parceiros altamente qualificados, com mais de 20 anos de experiência, garantindo qualidade nos serviços e satisfação do cliente.',
              'Somos especializados na aplicação das NRs, da legislação do INSS e de normas técnicas nacionais e internacionais. Atendemos em todo o território nacional com ampla rede de profissionais especializados.',
            ].map((p,i) => (
              <p key={i} style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.97rem', lineHeight:1.82, margin:'0 0 1.1rem'}}>{p}</p>
            ))}
          </div>
          <ImgPlaceholder label="foto: equipe ALR / avaliações técnicas / engenharia em campo" aspect="4/3" style={{borderRadius:12}}/>
        </div>
      </section>

      {/* MVV */}
      <section style={{background:bg2, padding:'5.5rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
        <div style={{textAlign:'center', marginBottom:'3rem'}}>
          <SectionLabel centered>Valores de atuação</SectionLabel>
          <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(1.8rem,2.4vw,2.5rem)', color:tp, margin:0}}>
            O que orienta nossos serviços
          </h2>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.4rem'}}>
          {mvv.map((item,i) => (
            <div key={i} style={{background:cardBg, border:`1px solid ${border}`, borderRadius:10, padding:'2rem'}}>
              <div style={{width:44, height:44, borderRadius:8, background:'rgba(109,184,58,0.12)',
                display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1.2rem',
                fontFamily:"'Barlow Condensed'", fontWeight:800, color:'#6db83a', fontSize:'1.3rem'}}>{item.letter}</div>
              <h3 style={{fontFamily:"'Barlow Condensed'", fontWeight:700, fontSize:'1.2rem', color:tp, margin:'0 0 0.7rem'}}>{item.title}</h3>
              <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.9rem', lineHeight:1.72, margin:0}}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section style={{background:bg, padding:'5.5rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
        <div style={{textAlign:'center', marginBottom:'3rem'}}>
          <SectionLabel centered>Diferenciais da empresa</SectionLabel>
          <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(1.8rem,2.4vw,2.5rem)', color:tp, margin:0}}>
            Estrutura técnica para entregar segurança e valor
          </h2>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.4rem'}}>
          {diferenciais.map((m,i) => (
            <div key={i} style={{background:cardBg, border:`1px solid ${border}`, borderRadius:10, overflow:'hidden'}}>
              <ImgPlaceholder label="imagem: diferencial técnico ALR" aspect="1/1" style={{borderRadius:0}}/>
              <div style={{padding:'1.4rem'}}>
                <p style={{fontFamily:"'Barlow Condensed'", fontWeight:700, fontSize:'1.1rem', color:tp, margin:'0 0 0.25rem'}}>{m.name}</p>
                <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.85rem', margin:'0 0 0.8rem'}}>{m.role}</p>
                <span style={{background:'rgba(109,184,58,0.12)', color:'#6db83a',
                  fontFamily:"'Barlow'", fontWeight:700, fontSize:'0.73rem',
                  padding:'0.25rem 0.65rem', borderRadius:100}}>{m.exp} de experiência</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate}/>
    </main>
  );
};

// ─── Serviços Page ────────────────────────────────────────────────────────────
const ServicosPage = ({ theme, onNavigate }) => {
  const bg     = thp(theme, '#080f09', '#ffffff');
  const bg2    = thp(theme, '#0f2314', '#f0f6f0');
  const cardBg = thp(theme, '#0f2314', '#ffffff');
  const tp     = thp(theme, '#f0f8f0', '#0a1a0d');
  const ts     = thp(theme, '#7aa07a', '#3a6040');
  const border = thp(theme, 'rgba(109,184,58,0.1)', 'rgba(30,107,53,0.12)');

  const InternalServiceCard = ({ nr, title, desc }) => {
    const [hov, setHov] = useState(false);
    return (
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
        background: hov ? thp(theme,'#142c19','#edf7ed') : cardBg,
        border:`1px solid ${hov ? 'rgba(109,184,58,0.28)' : border}`,
        borderRadius:10, padding:'1.65rem', transition:'all 0.2s',
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: hov ? '0 10px 28px rgba(0,0,0,0.14)' : 'none',
      }}>
        <span style={{display:'inline-block', background:'rgba(109,184,58,0.13)', color:'#6db83a',
          fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'0.72rem', letterSpacing:'0.1em',
          padding:'0.25rem 0.65rem', borderRadius:4, marginBottom:'0.9rem'}}>{nr}</span>
        <h3 style={{fontFamily:"'Barlow Condensed'", fontWeight:700, fontSize:'1.12rem', color:tp, margin:'0 0 0.55rem'}}>{title}</h3>
        <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.87rem', lineHeight:1.65, margin:0}}>{desc}</p>
      </div>
    );
  };

  const segServices = [
    { nr:'NR-01', title:'Ordem de Serviço de Segurança', desc:'Instruções formais sobre precauções para evitar acidentes de trabalho e doenças ocupacionais, conforme dever do empregador previsto na NR-01.' },
    { nr:'NR-01', title:'PGR – Programa de Gerenciamento de Riscos', desc:'Inventário e gestão de riscos físicos, químicos, biológicos, mecânicos e ergonômicos como parte do GRO da empresa.' },
    { nr:'NR-05', title:'Gestão da CIPA', desc:'Suporte para prevenção de acidentes e doenças decorrentes do trabalho, com dimensionamento e organização da comissão interna.' },
    { nr:'NR-18', title:'Gestão de Segurança na Construção Civil', desc:'Gestão dos riscos e condições de segurança na construção civil, com ações preventivas e atendimento à NR-18.' },
    { nr:'NR-12/13', title:'Máquinas, equipamentos e vasos de pressão', desc:'Apreciação de riscos, projetos de adequação, laudos de aterramento de máquinas e inspeções de caldeiras e vasos de pressão.' },
    { nr:'NR-15/16', title:'Insalubridade e Periculosidade', desc:'Laudos técnicos para caracterização ou descaracterização de adicionais, com parecer conclusivo e base normativa.' },
    { nr:'NR-17', title:'Ergonomia', desc:'Análise Ergonômica do Trabalho e Avaliação Ergonômica Preliminar para adequação das condições de trabalho.' },
    { nr:'NR-20/26', title:'Inflamáveis, combustíveis e produtos químicos', desc:'Gestão de segurança com inflamáveis e combustíveis e suporte para produtos químicos conforme requisitos aplicáveis.' },
    { nr:'NR-31', title:'Trabalho rural e CIPATR', desc:'PGRTR, gestão de segurança no trabalho rural e suporte para CIPATR conforme NR-31.' },
    { nr:'NR-33/35', title:'Espaço confinado e trabalho em altura', desc:'Identificação de cenários, medidas de controle, capacitação, autorização e projetos de linha de vida.' },
    { nr:'NR-36', title:'Gestão de frigoríficos', desc:'Avaliação, controle e monitoramento de riscos em empresas de abate e processamento de carnes e derivados.' },
    { nr:'INSS', title:'LTCAT e aposentadoria especial', desc:'Laudo técnico das condições ambientais do trabalho para subsidiar aposentadoria especial e exigências previdenciárias.' },
    { nr:'Perícia', title:'Assistência Técnica Pericial', desc:'Suporte técnico em demandas trabalhistas e previdenciárias, com fundamentação, seriedade e imparcialidade.' },
  ];

  const eletServices = [
    { nr:'NR-10', title:'Prontuário das Instalações Elétricas – PIE', desc:'Documentação acreditada, sistemática e atualizada das instalações, procedimentos, treinamentos e obrigações definidas pela NR-10.' },
    { nr:'NR-10', title:'Relatório Técnico de Inspeção – RTI', desc:'Auditoria das instalações elétricas e documentos existentes, com cronograma para saneamento de não conformidades.' },
    { nr:'Arc Flash', title:'Estudo de Energia Incidente', desc:'Cálculo de energia incidente em painéis, definição de distâncias de aproximação, medidas de controle e sinalizações de segurança.' },
    { nr:'NR-10', title:'Exposição ao arco elétrico', desc:'Análise dos cenários elétricos para especificação de vestimentas e equipamentos contra efeitos térmicos do arco elétrico.' },
    { nr:'NR-10', title:'Classificação de Áreas', desc:'Avaliação de risco de explosão, atmosferas explosivas e parâmetros para seleção de equipamentos e medidas de controle.' },
    { nr:'NBR 5410', title:'Projeto, inspeção e laudo de aterramento', desc:'Análise de proteção contra choques, contatos diretos e indiretos, seccionamento automático e equipotencializações.' },
    { nr:'NBR 5419', title:'Projeto, inspeção e laudo de SPDA', desc:'Verificação do Sistema de Proteção Contra Descargas Atmosféricas para conduzir e dissipar descargas com segurança.' },
    { nr:'Projetos', title:'Diagrama unifilar', desc:'Elaboração e atualização de desenhos técnicos com circuitos, condutores, dispositivos de manobra, carga por circuito e carga total.' },
  ];

  const medServices = [
    { nr:'NR-07', title:'PCMSO', desc:'Programa de Controle Médico de Saúde Ocupacional alinhado aos riscos da empresa e às obrigações legais.' },
    { nr:'Exames', title:'Exame admissional', desc:'Avaliação médica ocupacional para admissão de trabalhadores, conforme função e riscos ocupacionais.' },
    { nr:'Exames', title:'Mudança de risco e retorno ao trabalho', desc:'Exames para alteração de exposição ocupacional e retorno após afastamentos, conforme necessidade legal.' },
    { nr:'Exames', title:'Exame demissional', desc:'Avaliação médica ocupacional no encerramento do vínculo, com documentação adequada.' },
    { nr:'Exames', title:'Exames complementares', desc:'Encaminhamento e gestão de exames complementares conforme riscos e protocolos ocupacionais.' },
    { nr:'eSocial', title:'Gestão de eventos SST', desc:'Gestão dos eventos S-2210, S-2220, S-2221 e S-2240 para obrigações de Segurança e Saúde no Trabalho.' },
  ];

  const treinamentos = [
    'EPI e EPC (NR-06)', 'CIPA (NR-05)', 'Curso básico NR-10', 'Curso complementar NR-10 SEP',
    'Áreas classificadas (NR-10 e NR-20)', 'Máquinas e equipamentos (NR-12)',
    'Construção civil (NR-18)', 'Inflamáveis e combustíveis (NR-20)',
  ];

  const avaliacoes = [
    'Avaliação quantitativa de ruído', 'Avaliação quantitativa de calor',
    'Avaliação quantitativa de vibrações', 'Avaliação quantitativa de agentes químicos',
    'Laudo de ruído em áreas habitadas (CETESB / NBR 10151)',
  ];

  const SectionHeader = ({ tag, title, desc, bg: bgc }) => (
    <div style={{background:bgc, padding:'5rem max(1.5rem, calc((100% - 1200px)/2 + 2rem)) 0'}}>
      <SectionLabel>{tag}</SectionLabel>
      <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(1.8rem,2.4vw,2.5rem)', color:tp, margin:'0 0 0.7rem', lineHeight:1.1}}>{title}</h2>
      <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.97rem', maxWidth:540, margin:'0 0 3rem'}}>{desc}</p>
    </div>
  );

  return (
    <main>
      <PageHeader
        tag="Nossos Serviços"
        title="Soluções completas em Engenharia, Segurança e Medicina do Trabalho"
        desc="Uma nova forma de fazer gestão nas áreas de segurança, elétrica e medicina ocupacional, com atendimento às Normas Regulamentadoras e Normas Técnicas."
      />

      <SectionHeader bg={bg} tag="Segurança do Trabalho"
        title="Serviços prestados em Segurança do Trabalho"
        desc="Projetos, estudos, laudos, programas de gestão e assistência técnica para empresas que precisam de conformidade e prevenção real."/>
      <section style={{background:bg, padding:'0 max(1.5rem, calc((100% - 1200px)/2 + 2rem)) 5.5rem'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.15rem'}}>
          {segServices.map((s,i) => <InternalServiceCard key={i} {...s}/>)}
        </div>
      </section>

      <SectionHeader bg={bg2} tag="Engenharia Elétrica"
        title="Serviços de Engenharia Elétrica"
        desc="Projetos, inspeções, laudos e estudos técnicos com base em NR-10, NBR 5410, NBR 5419 e normas correlatas."/>
      <section style={{background:bg2, padding:'0 max(1.5rem, calc((100% - 1200px)/2 + 2rem)) 5.5rem'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1.15rem'}}>
          {eletServices.map((s,i) => <InternalServiceCard key={i} {...s}/>)}
        </div>
      </section>

      <SectionHeader bg={bg} tag="Medicina do Trabalho"
        title="Serviços de Medicina do Trabalho"
        desc="PCMSO, exames ocupacionais e gestão dos eventos do eSocial para uma rotina de saúde ocupacional atualizada e bem documentada."/>
      <section style={{background:bg, padding:'0 max(1.5rem, calc((100% - 1200px)/2 + 2rem)) 5.5rem'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.15rem'}}>
          {medServices.map((s,i) => <InternalServiceCard key={i} {...s}/>)}
        </div>
      </section>

      <SectionHeader bg={bg2} tag="Capacitações e avaliações"
        title="Treinamentos voltados à realidade laboral das empresas"
        desc="Capacitações e quantificações físicas e químicas para apoiar decisões técnicas, prevenção e atendimento legal."/>
      <section style={{background:bg2, padding:'0 max(1.5rem, calc((100% - 1200px)/2 + 2rem)) 5.5rem'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem'}}>
          {[{title:'Treinamentos de segurança', items:treinamentos}, {title:'Quantificações físicas e químicas', items:avaliacoes}].map((group,i) => (
            <div key={i} style={{background:cardBg, border:`1px solid ${border}`, borderRadius:10, padding:'2rem'}}>
              <h3 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'1.35rem', color:tp, margin:'0 0 1.2rem'}}>{group.title}</h3>
              <div style={{display:'grid', gap:'0.65rem'}}>
                {group.items.map((item,idx) => (
                  <p key={idx} style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.9rem', lineHeight:1.55, margin:0}}>
                    <span style={{color:'#6db83a', fontWeight:700}}>•</span> {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate}/>
    </main>
  );
};

// ─── Clientes Page ────────────────────────────────────────────────────────────
const ClientesPage = ({ theme, onNavigate }) => {
  const bg     = thp(theme, '#080f09', '#ffffff');
  const bg2    = thp(theme, '#0f2314', '#f0f6f0');
  const cardBg = thp(theme, '#142c19', '#ffffff');
  const tp     = thp(theme, '#f0f8f0', '#0a1a0d');
  const ts     = thp(theme, '#7aa07a', '#3a6040');
  const border = thp(theme, 'rgba(109,184,58,0.1)', 'rgba(30,107,53,0.12)');

  const valores = [
    { n:'01', title:'Base técnica', desc:'Trabalhos conduzidos com base na legislação pertinente a cada assunto.' },
    { n:'02', title:'Segurança', desc:'Documentação, estudos e laudos que reduzem riscos e fortalecem a tomada de decisão.' },
    { n:'03', title:'Confiança', desc:'Relação técnica transparente para empresas que buscam parceria de longo prazo.' },
    { n:'04', title:'Valor agregado', desc:'Soluções que apoiam conformidade, gestão e responsabilidade sócio-empresarial.' },
  ];

  return (
    <main>
      <PageHeader
        tag="Clientes"
        title="Parceria de valor para empresas que levam segurança a sério"
        desc="A ALR propõe aos clientes um trabalho técnico com base na legislação pertinente, trazendo segurança, confiança e valor às empresas parceiras."
      />

      <section style={{background:bg, padding:'5.5rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center'}}>
          <div>
            <SectionLabel>Parceria de valor</SectionLabel>
            <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(1.9rem,2.6vw,2.7rem)', color:tp, margin:'0 0 1.35rem', lineHeight:1.08}}>
              Segurança, confiança e valor para empresas parceiras
            </h2>
            <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'1rem', lineHeight:1.82, margin:'0 0 1.2rem'}}>
              Propor aos clientes um trabalho técnico com base na legislação pertinente ao assunto, trazendo segurança, confiança e agregando valores às empresas que se tornarão parceiras da ALR – Soluções em Engenharia.
            </p>
            <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.97rem', lineHeight:1.78, margin:'0 0 2.2rem'}}>
              A atuação combina experiência técnica, atendimento consultivo, atendimento presencial quando necessário e conhecimento das normas aplicáveis em Segurança do Trabalho, Engenharia Elétrica, Medicina Ocupacional e avaliações ambientais.
            </p>
            <Btn onClick={() => onNavigate('contato')}>Fale com a ALR</Btn>
          </div>
          <ImgPlaceholder label="imagem: relacionamento técnico com clientes / empresas parceiras" aspect="4/3" style={{borderRadius:12}}/>
        </div>
      </section>

      <section style={{background:bg2, padding:'5.5rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
        <div style={{textAlign:'center', marginBottom:'3rem'}}>
          <SectionLabel centered>Como geramos valor</SectionLabel>
          <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(1.8rem,2.4vw,2.5rem)', color:tp, margin:0}}>
            Critérios que sustentam cada entrega
          </h2>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1.15rem'}}>
          {valores.map((v,i) => (
            <div key={i} style={{background:cardBg, border:`1px solid ${border}`, borderRadius:10, padding:'1.55rem'}}>
              <p style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'1.45rem', color:'#6db83a', margin:'0 0 1rem'}}>{v.n}</p>
              <h3 style={{fontFamily:"'Barlow Condensed'", fontWeight:700, fontSize:'1.12rem', color:tp, margin:'0 0 0.55rem'}}>{v.title}</h3>
              <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.88rem', lineHeight:1.65, margin:0}}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection onNavigate={onNavigate}/>
    </main>
  );
};

// ─── Contato Page ─────────────────────────────────────────────────────────────
const ContatoPage = ({ theme }) => {
  const bg      = thp(theme, '#080f09', '#ffffff');
  const cardBg  = thp(theme, '#0f2314', '#ffffff');
  const tp      = thp(theme, '#f0f8f0', '#0a1a0d');
  const ts      = thp(theme, '#7aa07a', '#3a6040');
  const border  = thp(theme, 'rgba(109,184,58,0.15)', 'rgba(30,107,53,0.15)');
  const inputBg = thp(theme, '#142c19', '#f4f9f4');

  const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', service:'', message:'' });
  const [sent, setSent] = useState(false);

  const field = { width:'100%', boxSizing:'border-box', background:inputBg,
    border:`1px solid ${border}`, borderRadius:6, padding:'0.72rem 1rem',
    fontFamily:"'Barlow',sans-serif", fontSize:'0.92rem', color:tp, outline:'none' };
  const lbl = { fontFamily:"'Barlow'", fontWeight:600, fontSize:'0.82rem', color:ts,
    display:'block', marginBottom:'0.38rem', letterSpacing:'0.01em' };

  const F = (f) => ({ value: form[f], onChange: e => setForm({...form,[f]:e.target.value}) });

  const contactItems = [
    { label:'E-mail',              value:'contato@alrsolucoeseng.com.br' },
    { label:'Telefone / WhatsApp', value:'(17) 99133-2063' },
    { label:'Localização',         value:'São José do Rio Preto, SP' },
    { label:'Atuação',             value:'Atendimento em todo o território nacional' },
    { label:'Atendimento',         value:'Seg–Sex, 8h às 18h' },
  ];

  return (
    <main>
      <PageHeader
        tag="Contato"
        title="Entre em contato com nossa equipe especializada"
        desc="Solicite uma proposta personalizada ou tire suas dúvidas. Respondemos em até 24 horas úteis."
      />

      <section style={{background:bg, padding:'5.5rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 360px', gap:'3.5rem', alignItems:'start'}}>

          {/* Form Card */}
          <div style={{background:cardBg, border:`1px solid ${border}`, borderRadius:12, padding:'2.5rem'}}>
            {sent ? (
              <div style={{textAlign:'center', padding:'3rem 1rem'}}>
                <div style={{width:60, height:60, borderRadius:'50%', background:'rgba(109,184,58,0.15)',
                  display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.5rem',
                  fontSize:'1.6rem', color:'#6db83a'}}>✓</div>
                <h3 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'1.8rem', color:tp, margin:'0 0 0.75rem'}}>Mensagem enviada!</h3>
                <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.97rem', lineHeight:1.75, margin:'0 0 2rem'}}>
                  Recebemos sua solicitação. Nossa equipe entrará em contato em até 24 horas úteis.
                </p>
                <Btn onClick={() => setSent(false)}>Enviar outra mensagem</Btn>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                <h3 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'1.5rem', color:tp, margin:'0 0 2rem'}}>Solicitar Proposta</h3>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.15rem', marginBottom:'1.15rem'}}>
                  <div><label style={lbl}>Nome *</label><input required style={field} placeholder="Seu nome" {...F('name')}/></div>
                  <div><label style={lbl}>Empresa *</label><input required style={field} placeholder="Nome da empresa" {...F('company')}/></div>
                </div>
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.15rem', marginBottom:'1.15rem'}}>
                  <div><label style={lbl}>E-mail *</label><input required type="email" style={field} placeholder="email@empresa.com.br" {...F('email')}/></div>
                  <div><label style={lbl}>Telefone</label><input style={field} placeholder="(17) 9xxxx-xxxx" {...F('phone')}/></div>
                </div>
                <div style={{marginBottom:'1.15rem'}}>
                  <label style={lbl}>Serviço de interesse</label>
                  <select style={{...field, cursor:'pointer'}} {...F('service')}>
                    <option value="">Selecione um serviço...</option>
                    <option>PGR – Programa de Gerenciamento de Riscos</option>
                    <option>PCMSO e Exames Ocupacionais</option>
                    <option>Gestão de Eventos do eSocial</option>
                    <option>Laudo de Insalubridade / Periculosidade</option>
                    <option>Gestão de EPIs</option>
                    <option>Prontuário das Instalações Elétricas</option>
                    <option>Apreciação de Riscos em Máquinas</option>
                    <option>Ordem de Serviço</option>
                    <option>Projeto Elétrico</option>
                    <option>Outros serviços</option>
                  </select>
                </div>
                <div style={{marginBottom:'1.75rem'}}>
                  <label style={lbl}>Mensagem *</label>
                  <textarea required rows={4} style={{...field, resize:'vertical'}} placeholder="Descreva sua necessidade..." {...F('message')}/>
                </div>
                <Btn type="submit" size="lg" style={{width:'100%', justifyContent:'center'}}>Enviar Solicitação →</Btn>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div style={{display:'flex', flexDirection:'column', gap:'1.15rem'}}>
            <div style={{background:cardBg, border:`1px solid ${border}`, borderRadius:12, padding:'1.85rem'}}>
              <h3 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'1.2rem', color:tp, margin:'0 0 1.5rem'}}>Informações de Contato</h3>
              <div style={{display:'flex', flexDirection:'column', gap:'1.15rem'}}>
                {contactItems.map((c,i) => (
                  <div key={i}>
                    <p style={{fontFamily:"'Barlow'", fontWeight:700, fontSize:'0.73rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'#6db83a', margin:'0 0 0.22rem'}}>{c.label}</p>
                    <p style={{fontFamily:"'Barlow'", color:tp, fontSize:'0.93rem', margin:0}}>{c.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{background:'rgba(109,184,58,0.08)', border:'1px solid rgba(109,184,58,0.22)', borderRadius:12, padding:'1.5rem'}}>
              <p style={{fontFamily:"'Barlow Condensed'", fontWeight:700, fontSize:'1.05rem', color:'#6db83a', margin:'0 0 0.5rem'}}>Prefere pelo WhatsApp?</p>
              <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.87rem', lineHeight:1.65, margin:'0 0 1.2rem'}}>
                Clique abaixo para iniciar uma conversa direta com nossa equipe.
              </p>
              <Btn size="sm">WhatsApp → (17) 99133-2063</Btn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

Object.assign(window, { PageHeader, SobrePage, ServicosPage, ClientesPage, ContatoPage });
