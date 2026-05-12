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
    { letter:'M', title:'Missão', text:'Oferecer soluções de engenharia com excelência técnica, garantindo a segurança dos trabalhadores e a conformidade das empresas com a legislação vigente.' },
    { letter:'V', title:'Visão', text:'Ser referência regional em Engenharia de Segurança do Trabalho e Engenharia Elétrica, reconhecida pela qualidade e confiabilidade dos serviços.' },
    { letter:'V', title:'Valores', text:'Ética, responsabilidade técnica, comprometimento com a segurança, transparência nas relações e busca constante pela excelência em cada projeto.' },
  ];

  const team = [
    { name:'Eng. de Segurança',     role:'Especialista em NRs e Laudos Técnicos', exp:'15+ anos' },
    { name:'Eng. Elétrico',         role:'Projetos e Prontuários Elétricos',       exp:'12+ anos' },
    { name:'Perito Técnico',        role:'Assistência em Perícias Trabalhistas',   exp:'10+ anos' },
  ];

  return (
    <main>
      <PageHeader
        tag="Sobre a ALR"
        title="Mais de 15 anos transformando a gestão de segurança das empresas"
        desc="Conheça nossa história, missão e a equipe que protege milhares de trabalhadores todos os dias."
      />

      {/* História */}
      <section style={{background:bg, padding:'5.5rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'start'}}>
          <div>
            <SectionLabel>Nossa História</SectionLabel>
            <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(1.8rem,2.4vw,2.5rem)', color:tp, margin:'0 0 1.5rem', lineHeight:1.1}}>
              Fundada com propósito, crescida com qualidade
            </h2>
            {[
              'A ALR – Soluções em Engenharia nasceu com a missão clara de oferecer serviços técnicos de alta qualidade para empresas que precisam garantir a segurança de seus colaboradores e a conformidade com a legislação trabalhista.',
              'Com mais de 15 anos de atuação no mercado, desenvolvemos expertise sólida em Engenharia de Segurança do Trabalho e Engenharia Elétrica, atendendo empresas de diferentes segmentos e portes na região.',
              'Nossa equipe está sempre atualizada com as mais recentes NRs, normas técnicas e legislação trabalhista, garantindo que nossos clientes estejam sempre em plena conformidade.',
            ].map((p,i) => (
              <p key={i} style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.97rem', lineHeight:1.82, margin:'0 0 1.1rem'}}>{p}</p>
            ))}
          </div>
          <ImgPlaceholder label="foto: equipe ALR / escritório / reunião técnica" aspect="4/3" style={{borderRadius:12}}/>
        </div>
      </section>

      {/* MVV */}
      <section style={{background:bg2, padding:'5.5rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
        <div style={{textAlign:'center', marginBottom:'3rem'}}>
          <SectionLabel centered>Missão, Visão e Valores</SectionLabel>
          <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(1.8rem,2.4vw,2.5rem)', color:tp, margin:0}}>
            Os princípios que nos guiam
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

      {/* Equipe */}
      <section style={{background:bg, padding:'5.5rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
        <div style={{textAlign:'center', marginBottom:'3rem'}}>
          <SectionLabel centered>Nossa Equipe</SectionLabel>
          <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(1.8rem,2.4vw,2.5rem)', color:tp, margin:0}}>
            Profissionais altamente qualificados
          </h2>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.4rem'}}>
          {team.map((m,i) => (
            <div key={i} style={{background:cardBg, border:`1px solid ${border}`, borderRadius:10, overflow:'hidden'}}>
              <ImgPlaceholder label="foto profissional" aspect="1/1" style={{borderRadius:0}}/>
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
    { nr:'NR-01', title:'Ordem de Serviço', desc:'Elaboração e implementação de Ordens de Serviço conforme exigências regulamentadoras, com treinamento dos colaboradores e documentação técnica completa.' },
    { nr:'NR-01', title:'PGR – Programa de Gerenciamento de Riscos', desc:'Desenvolvimento do PGR para identificação, análise e controle de riscos ocupacionais, substituindo o PPRA e contemplando todas as exigências legais.' },
    { nr:'NR-06', title:'Gestão de EPIs', desc:'Seleção, controle e gestão completa de Equipamentos de Proteção Individual. Elaboração do Programa de Gestão de EPI e treinamentos presenciais.' },
    { nr:'NR-12', title:'Apreciação de Riscos em Máquinas', desc:'Análise técnica de riscos em máquinas e equipamentos. Elaboração de laudos, adaptações necessárias e relatórios de conformidade com a NR-12.' },
    { nr:'NR-15/16', title:'Laudo de Insalubridade e Periculosidade', desc:'Realização de laudos de insalubridade e periculosidade para empresas de todos os segmentos, com metodologia técnica reconhecida e base legal sólida.' },
    { nr:'PCMSO', title:'Programa de Controle Médico', desc:'Elaboração e coordenação do PCMSO em parceria com médico do trabalho, garantindo a saúde e segurança dos colaboradores de forma contínua.' },
  ];

  const eletServices = [
    { nr:'NR-10', title:'Prontuário das Instalações Elétricas', desc:'Elaboração completa do Prontuário das Instalações Elétricas com toda a documentação técnica exigida pela NR-10.' },
    { nr:'NR-10', title:'Laudo de Conformidade Elétrica', desc:'Avaliação e laudo técnico de conformidade das instalações elétricas com as normas ABNT e NR-10.' },
    { nr:'ABNT', title:'Projetos Elétricos', desc:'Desenvolvimento de projetos elétricos para instalações industriais e comerciais, conforme normas técnicas brasileiras e internacionais.' },
    { nr:'AT/BT', title:'Inspeção e Manutenção Elétrica', desc:'Inspeção técnica e assessoria em manutenção de sistemas elétricos de alta e baixa tensão com equipe habilitada.' },
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
        title="Soluções completas em Engenharia e Segurança do Trabalho"
        desc="Serviços especializados baseados nas NRs, legislação trabalhista e normas técnicas nacionais e internacionais."
      />

      <SectionHeader bg={bg} tag="Segurança do Trabalho"
        title="Engenharia de Segurança do Trabalho"
        desc="Assessoria técnica completa para garantir a segurança dos trabalhadores, com conformidade total às NRs vigentes."/>
      <section style={{background:bg, padding:'0 max(1.5rem, calc((100% - 1200px)/2 + 2rem)) 5.5rem'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.15rem'}}>
          {segServices.map((s,i) => <InternalServiceCard key={i} {...s}/>)}
        </div>
      </section>

      <SectionHeader bg={bg2} tag="Engenharia Elétrica"
        title="Serviços de Engenharia Elétrica"
        desc="Projetos, laudos e assessoria técnica para instalações elétricas industriais e comerciais."/>
      <section style={{background:bg2, padding:'0 max(1.5rem, calc((100% - 1200px)/2 + 2rem)) 5.5rem'}}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'1.15rem'}}>
          {eletServices.map((s,i) => <InternalServiceCard key={i} {...s}/>)}
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

Object.assign(window, { PageHeader, SobrePage, ServicosPage, ContatoPage });
