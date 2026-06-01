// alr-home-sections.jsx — All home page section components

const { useState } = React;

// Theme helpers
const th = (theme, dark, light) => theme === 'corporativo' ? light : dark;

// ─── Hero Section ─────────────────────────────────────────────────────────────
const HeroSection = ({ heroLayout, onNavigate }) => {
  const isSplit = heroLayout === 'split';

  const nrs = ['NR-01','NR-07','NR-10','NR-12','NR-15/16','eSocial'];

  const stats = [
    { val:'20+',  sub:'anos de\nexperiência' },
    { val:'BR', sub:'atendimento\nnacional' },
    { val:'100%', sub:'conformidade\ncom NRs' },
    { val:'3',  sub:'áreas\nintegradas' },
  ];

  // Verde escuro = peso, seriedade / Verde vivo = destaque, energia
  const GD = '#1b4a0c'; // dark forest
  const GV = '#5aa02e'; // vivo/lime

  return (
    <section style={{
      minHeight:'100vh', position:'relative', overflow:'hidden',
      background:'#eceae5',
      display:'flex', flexDirection:'column', justifyContent:'flex-end',
    }}>

      {/* Textura de grain muito sutil */}
      <svg aria-hidden="true" style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.018,pointerEvents:'none',zIndex:0}}>
        <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter>
        <rect width="100%" height="100%" filter="url(#grain)"/>
      </svg>

      {/* ALR — emerge da direita com máscara de gradiente */}
      <div aria-hidden="true" style={{
        position:'absolute', right:'-4%', top:'50%', transform:'translateY(-48%)',
        fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800,
        fontSize:'clamp(22rem, 42vw, 52rem)',
        lineHeight:1, letterSpacing:0,
        color:'rgba(2,50,29,0.68)',
        WebkitTextStroke:'2px rgba(2,50,29,0.78)',
        mixBlendMode:'normal',
        filter:'none',
        textShadow:'0 24px 70px rgba(2,50,29,0.2)',
        WebkitMaskImage:'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.28) 28%, rgba(0,0,0,0.78) 62%, rgba(0,0,0,0.95) 100%)',
        maskImage:'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.28) 28%, rgba(0,0,0,0.78) 62%, rgba(0,0,0,0.95) 100%)',
        pointerEvents:'none', userSelect:'none', whiteSpace:'nowrap',
        zIndex:0,
      }}>ALR</div>

      {/* Barra vertical — gradiente dois tons de verde */}
      <div style={{
        position:'absolute', left:0, top:0, bottom:0, width:4, zIndex:1,
        background:`linear-gradient(to bottom, transparent 0%, ${GD} 20%, ${GV} 50%, ${GD} 80%, transparent 100%)`,
      }}/>

      {/* Conteúdo */}
      <div style={{
        position:'relative', zIndex:2,
        paddingTop: isSplit ? 'calc(88px + 3.5rem)' : 'calc(88px + 5rem)',
        paddingBottom: isSplit ? '5.5rem' : '6rem',
        paddingLeft:'max(1.5rem, calc((100% - 1200px)/2 + 2rem))',
        paddingRight:'max(1.5rem, calc((100% - 1200px)/2 + 2rem))',
        display: isSplit ? 'grid' : 'block',
        gridTemplateColumns: isSplit ? '58% 42%' : undefined,
        alignItems: isSplit ? 'flex-end' : undefined,
      }}>

        {/* ── Coluna esquerda ── */}
        <div style={{minWidth:0}}>

          {/* Label — verde escuro */}
          <div style={{display:'flex', alignItems:'center', gap:'0.8rem', marginBottom:'2rem'}}>
            <span style={{width:32, height:2, background:GD, flexShrink:0, display:'block'}}/>
            <span style={{
              fontFamily:"'Barlow',sans-serif", fontWeight:700, fontSize:'0.7rem',
              letterSpacing:'0.14em', textTransform:'uppercase', color:GD, opacity:0.7,
            }}>Engenharia · Segurança · Medicina do Trabalho</span>
          </div>

          {/* Título */}
          <h1 style={{
            fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800,
            fontSize: isSplit ? 'clamp(3rem,4.4vw,5.2rem)' : 'clamp(5rem,9.5vw,11rem)',
            lineHeight:0.9, letterSpacing:'-0.015em',
            color:'#0e0e0c', margin:'0 0 2.2rem',
            textTransform:'uppercase',
          }}>
            {isSplit ? (
              <>
                ENGENHARIA<br/>
                <span style={{color:GV}}>QUE</span> PROTEGE,<br/>
                SEGURANÇA<br/>
                <span style={{color:GV}}>QUE</span> TRANSFORMA.
              </>
            ) : (
              <>
                ENGENHARIA<br/>
                <span style={{color:GV}}>QUE PROTEGE.</span><br/>
                SEGURANÇA<br/>
                <span style={{color:GV}}>QUE TRANSFORMA.</span>
              </>
            )}
          </h1>

          {/* Linha separadora — verde escuro sumindo */}
          <div style={{
            height:1.5, width: isSplit ? '85%' : '100%', maxWidth:600,
            background:`linear-gradient(90deg, ${GD} 0%, rgba(27,74,12,0.15) 60%, transparent 100%)`,
            marginBottom:'2rem',
          }}/>

          <p style={{
            fontFamily:"'Barlow',sans-serif", color:'rgba(0,0,0,0.52)', fontSize:'1rem',
            lineHeight:1.8, maxWidth: isSplit ? 400 : 520, margin:'0 0 2.5rem',
          }}>
            Soluções especializadas em Engenharia de Segurança, Engenharia Elétrica e Medicina do Trabalho. Projetos, laudos, treinamentos, assistência técnica, avaliações ambientais e exames ocupacionais com mais de 20 anos de experiência.
          </p>

          <div style={{display:'flex', alignItems:'center', gap:'1.5rem', flexWrap:'wrap'}}>
            <Btn size="lg" onClick={() => onNavigate('servicos')}>Ver nossos serviços →</Btn>
            <button onClick={() => onNavigate('contato')} style={{
              background:'none', border:'none', cursor:'pointer', padding:0,
              fontFamily:"'Barlow',sans-serif", fontWeight:600, fontSize:'0.9rem',
              color:GD, display:'flex', alignItems:'center', gap:'0.7rem',
              letterSpacing:'0.01em', transition:'opacity 0.2s', opacity:0.6,
            }}
            onMouseEnter={e => e.currentTarget.style.opacity='1'}
            onMouseLeave={e => e.currentTarget.style.opacity='0.6'}
            >
              Fale conosco
              <span style={{display:'block', width:28, height:1.5, background:'currentColor'}}/>
            </button>
          </div>

          {/* Chips NR — verde escuro */}
          <div style={{display:'flex', gap:'0.4rem', flexWrap:'wrap', marginTop:'3.5rem'}}>
            {nrs.map(nr => (
              <span key={nr} style={{
                fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700,
                fontSize:'0.71rem', letterSpacing:'0.09em',
                color:GD, border:`1px solid rgba(27,74,12,0.25)`,
                padding:'0.3rem 0.75rem', borderRadius:3,
                background:'rgba(27,74,12,0.06)',
              }}>{nr}</span>
            ))}
          </div>
        </div>

        {/* ── Stats — dashboard cards 2×2 ── */}
        {isSplit && (
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 1fr',
            gap:'0.75rem', alignSelf:'flex-end', marginLeft:'3rem',
          }}>
            {stats.map((s,i) => {
              const accent = i % 2 === 0 ? GD : GV;
              const icons = ['📋','🏢','✅','📄'];
              return (
                <div key={i} style={{
                  background:'rgba(255,255,255,0.92)',
                  borderRadius:12,
                  padding:'1.4rem 1.5rem 1.3rem',
                  boxShadow:'0 1px 3px rgba(0,0,0,0.07), 0 6px 20px rgba(0,0,0,0.06)',
                  border:'1px solid rgba(255,255,255,0.9)',
                  position:'relative', overflow:'hidden',
                }}>
                  {/* Barra de acento no topo */}
                  <div style={{
                    position:'absolute', top:0, left:0, right:0, height:3,
                    background: accent,
                    borderRadius:'12px 12px 0 0',
                  }}/>
                  {/* Indicador de status */}
                  <div style={{
                    display:'flex', justifyContent:'space-between',
                    alignItems:'center', marginBottom:'0.85rem',
                  }}>
                    <span style={{
                      fontFamily:"'Barlow'", fontSize:'0.68rem', fontWeight:700,
                      letterSpacing:'0.1em', textTransform:'uppercase',
                      color: accent, opacity:0.85,
                    }}>ALR</span>
                    <span style={{
                      width:7, height:7, borderRadius:'50%',
                      background: accent, display:'block', opacity:0.7,
                    }}/>
                  </div>
                  {/* Número */}
                  <p style={{
                    fontFamily:"'Barlow Condensed'", fontWeight:800,
                    fontSize:'2.6rem', margin:0, lineHeight:1,
                    color: accent,
                    letterSpacing:'-0.02em',
                  }}>{s.val}</p>
                  {/* Label */}
                  <p style={{
                    fontFamily:"'Barlow'", color:'rgba(0,0,0,0.45)',
                    fontSize:'0.73rem', margin:'0.4rem 0 0', lineHeight:1.35,
                    whiteSpace:'pre-line', textTransform:'uppercase',
                    letterSpacing:'0.05em',
                  }}>{s.sub}</p>
                </div>
              );
            })}
          </div>
        )}

        {/* ── Centered: stats horizontais ── */}
        {!isSplit && (
          <div style={{
            display:'grid', gridTemplateColumns:'repeat(4,1fr)',
            borderTop:`2px solid ${GD}`, paddingTop:'2.5rem',
            marginTop:'4rem', maxWidth:560, opacity:0.9,
          }}>
            {stats.map((s,i) => (
              <div key={i} style={{paddingRight:'1rem'}}>
                <p style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'2.2rem',
                  color: i % 2 === 0 ? GD : GV, margin:0, lineHeight:1}}>{s.val}</p>
                <p style={{fontFamily:"'Barlow'", color:'rgba(0,0,0,0.4)', fontSize:'0.75rem',
                  margin:'0.3rem 0 0', textTransform:'uppercase', letterSpacing:'0.04em'}}>{s.sub.replace('\n',' ')}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// ─── Stats Strip ──────────────────────────────────────────────────────────────
const StatsStrip = () => (
  <div style={{background:'#0d2014', borderTop:'1px solid rgba(109,184,58,0.1)',
    borderBottom:'1px solid rgba(109,184,58,0.1)',
    padding:'2.5rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
    <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1.5rem'}}>
      {[
        { val:'20+',  label:'Anos de Experiência' },
        { val:'Brasil', label:'Atendimento Nacional' },
        { val:'100%', label:'Conformidade com NRs' },
        { val:'3',  label:'Áreas Integradas' },
      ].map((s,i) => (
        <div key={i} style={{textAlign:'center', padding:'0.5rem 0'}}>
          <p style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(2rem,2.8vw,2.8rem)', color:'#6db83a', margin:0, lineHeight:1}}>{s.val}</p>
          <p style={{fontFamily:"'Barlow'", color:'#7aa07a', fontSize:'0.82rem', margin:'0.35rem 0 0', lineHeight:1.3}}>{s.label}</p>
        </div>
      ))}
    </div>
  </div>
);

// ─── About Section ────────────────────────────────────────────────────────────
const AboutSection = ({ theme, onNavigate }) => {
  const bg       = th(theme, '#080f09', '#ffffff');
  const cardBg   = th(theme, '#0f2314', '#f4f9f4');
  const tp       = th(theme, '#f0f8f0', '#0a1a0d');
  const ts       = th(theme, '#7aa07a', '#3a6040');
  const border   = th(theme, 'rgba(109,184,58,0.1)', 'rgba(30,107,53,0.12)');

  const items = [
    { n:'1', title:'Expertise Técnica', desc:'Mais de 20 anos aplicando NRs, legislação do INSS e normas técnicas com precisão e rigor.' },
    { n:'2', title:'Equipe Multidisciplinar', desc:'Profissionais de Engenharia, Segurança e Medicina do Trabalho oferecendo soluções integradas.' },
    { n:'3', title:'Atendimento Nacional', desc:'Atuação em todo o território nacional com ampla rede de profissionais especializados.' },
  ];

  return (
    <section style={{background:bg, padding:'6rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center'}}>
        <div>
          <SectionLabel>Sobre a ALR</SectionLabel>
          <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800,
            fontSize:'clamp(2rem,2.8vw,2.9rem)', lineHeight:1.08, color:tp, margin:'0 0 1.5rem'}}>
            Confiabilidade e segurança em cada projeto
          </h2>
          <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.97rem', lineHeight:1.8, margin:'0 0 1.1rem'}}>
            A ALR – Soluções em Engenharia, Segurança e Medicina do Trabalho atua em Engenharia de Segurança, Engenharia Elétrica e Medicina do Trabalho, especializada em projetos, laudos, treinamentos, assistência técnica em perícias e avaliações ambientais.
          </p>
          <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.97rem', lineHeight:1.8, margin:'0 0 2.5rem'}}>
            Um dos pilares principais são os exames médicos ocupacionais. Aplicamos as NRs, legislação do INSS e normas técnicas nacionais e internacionais, garantindo qualidade, segurança e satisfação do cliente.
          </p>
          <Btn onClick={() => onNavigate('sobre')}>Conheça nossa história →</Btn>
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:'1.1rem'}}>
          {items.map((v,i) => (
            <div key={i} style={{background:cardBg, border:`1px solid ${border}`, borderRadius:8, padding:'1.4rem 1.5rem', display:'flex', gap:'1rem', alignItems:'flex-start'}}>
              <div style={{width:38, height:38, borderRadius:7, background:'rgba(109,184,58,0.12)',
                display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
                fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'1.15rem', color:'#6db83a'}}>{v.n}</div>
              <div>
                <p style={{fontFamily:"'Barlow Condensed'", fontWeight:700, fontSize:'1.02rem', color:tp, margin:'0 0 0.3rem'}}>{v.title}</p>
                <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.87rem', lineHeight:1.65, margin:0}}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Service Card ─────────────────────────────────────────────────────────────
const ServiceCard = ({ nr, title, desc, theme }) => {
  const [hov, setHov] = useState(false);
  const bg     = th(theme, hov ? '#142c19' : '#0f2314', hov ? '#edf7ed' : '#ffffff');
  const tp     = th(theme, '#f0f8f0', '#0a1a0d');
  const ts     = th(theme, '#7aa07a', '#3a6040');
  const border = th(theme, hov ? 'rgba(109,184,58,0.3)' : 'rgba(109,184,58,0.1)', hov ? 'rgba(30,107,53,0.3)' : 'rgba(30,107,53,0.12)');
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background:bg, border:`1px solid ${border}`, borderRadius:10, padding:'1.65rem',
      transition:'all 0.2s ease', transform: hov ? 'translateY(-3px)' : 'none',
      boxShadow: hov ? '0 12px 32px rgba(0,0,0,0.18)' : 'none', cursor:'default',
    }}>
      <span style={{display:'inline-block', background:'rgba(109,184,58,0.13)', color:'#6db83a',
        fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'0.72rem', letterSpacing:'0.1em',
        padding:'0.25rem 0.65rem', borderRadius:4, marginBottom:'0.9rem'}}>{nr}</span>
      <h3 style={{fontFamily:"'Barlow Condensed'", fontWeight:700, fontSize:'1.15rem', color:tp, margin:'0 0 0.55rem'}}>{title}</h3>
      <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.87rem', lineHeight:1.65, margin:0}}>{desc}</p>
    </div>
  );
};

// ─── Services Section ─────────────────────────────────────────────────────────
const ServicesSection = ({ theme, onNavigate }) => {
  const bg  = th(theme, '#0a1a0d', '#f0f6f0');
  const tp  = th(theme, '#f0f8f0', '#0a1a0d');
  const ts  = th(theme, '#7aa07a', '#3a6040');
  const services = [
    { nr:'NR-01', title:'Ordem de Serviço', desc:'Elaboração e gestão de ordens de serviço conforme regulamentação vigente.' },
    { nr:'NR-01', title:'PGR', desc:'Programa de Gerenciamento de Riscos para identificação e controle de riscos ocupacionais.' },
    { nr:'NR-07', title:'PCMSO e Exames Ocupacionais', desc:'Programa médico ocupacional, exames admissionais, mudança de risco, retorno ao trabalho, demissionais e complementares.' },
    { nr:'NR-10', title:'Prontuário Elétrico', desc:'Elaboração do Prontuário das Instalações Elétricas com documentação técnica completa.' },
    { nr:'NR-12', title:'Riscos em Máquinas', desc:'Apreciação de riscos de máquinas e equipamentos com laudos técnicos.' },
    { nr:'eSocial', title:'Gestão de Eventos', desc:'Gestão dos eventos S-2210, S-2220, S-2221 e S-2240 para obrigações de SST e medicina ocupacional.' },
  ];
  return (
    <section style={{background:bg, padding:'6rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
      <div style={{textAlign:'center', marginBottom:'3.5rem'}}>
        <SectionLabel centered>Nossos Serviços</SectionLabel>
        <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(2rem,2.8vw,2.75rem)', color:tp, margin:'0 0 0.9rem'}}>
          Soluções completas para sua empresa
        </h2>
        <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.97rem', maxWidth:500, margin:'0 auto'}}>
          Serviços baseados nas NRs, legislação trabalhista e normas técnicas nacionais e internacionais.
        </p>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.15rem'}}>
        {services.map((s,i) => <ServiceCard key={i} {...s} theme={theme}/>)}
      </div>
      <div style={{textAlign:'center', marginTop:'3rem'}}>
        <Btn size="lg" onClick={() => onNavigate('servicos')}>Ver todos os serviços →</Btn>
      </div>
    </section>
  );
};

// ─── Service Category Card ────────────────────────────────────────────────────
const ServiceCatCard = ({ title, desc, tag, imgLabel, theme, onNavigate }) => {
  const [hov, setHov] = useState(false);
  const bg     = th(theme, '#142c19', '#ffffff');
  const tp     = th(theme, '#f0f8f0', '#0a1a0d');
  const ts     = th(theme, '#7aa07a', '#3a6040');
  const border = th(theme, 'rgba(109,184,58,0.12)', 'rgba(30,107,53,0.12)');
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background:bg, border:`1px solid ${border}`, borderRadius:12, overflow:'hidden',
      transition:'transform 0.22s, box-shadow 0.22s',
      transform: hov ? 'translateY(-5px)' : 'none',
      boxShadow: hov ? '0 28px 56px rgba(0,0,0,0.25)' : '0 4px 16px rgba(0,0,0,0.1)',
    }}>
      <ImgPlaceholder label={imgLabel} aspect="16/9" style={{borderRadius:0}}/>
      <div style={{padding:'2rem'}}>
        <span style={{display:'inline-block', background:'rgba(109,184,58,0.13)', color:'#6db83a',
          fontFamily:"'Barlow'", fontWeight:700, fontSize:'0.73rem', letterSpacing:'0.1em', textTransform:'uppercase',
          padding:'0.28rem 0.72rem', borderRadius:100, marginBottom:'1rem'}}>{tag}</span>
        <h3 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'1.45rem', color:tp, margin:'0 0 0.7rem', lineHeight:1.15}}>{title}</h3>
        <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.9rem', lineHeight:1.7, margin:'0 0 1.5rem'}}>{desc}</p>
        <Btn size="sm" onClick={() => onNavigate('servicos')}>Saiba mais →</Btn>
      </div>
    </div>
  );
};

// ─── Service Categories Section ───────────────────────────────────────────────
const ServiceCategoriesSection = ({ theme, onNavigate }) => {
  const bg = th(theme, '#0f2314', '#e8f2e8');
  return (
    <section style={{background:bg, padding:'6rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2rem'}}>
        <ServiceCatCard theme={theme} onNavigate={onNavigate}
          tag="Segurança do Trabalho"
          title="Engenharia de Segurança do Trabalho"
          desc="PGR, CIPA, laudos, ergonomia, construção civil, inflamáveis, trabalho rural, espaços confinados, altura, frigoríficos, LTCAT, perícias e avaliações ambientais."
          imgLabel="foto: equipamentos de segurança / trabalhadores com EPIs"/>
        <ServiceCatCard theme={theme} onNavigate={onNavigate}
          tag="Engenharia Elétrica"
          title="Serviços de Engenharia Elétrica"
          desc="Projetos, inspeções, PIE, aterramento elétrico, SPDA, continuidade, adequação de máquinas e proteções elétricas conforme normas aplicáveis."
          imgLabel="foto: painel elétrico / instalação industrial"/>
        <ServiceCatCard theme={theme} onNavigate={onNavigate}
          tag="Medicina do Trabalho"
          title="Serviços de Medicina do Trabalho"
          desc="PCMSO, exames admissionais, mudança de risco, retorno ao trabalho, demissionais, complementares e gestão dos eventos do eSocial."
          imgLabel="foto: atendimento ocupacional / exames médicos"/>
      </div>
    </section>
  );
};

// ─── Testimonials Section ─────────────────────────────────────────────────────
const TestimonialsSection = ({ theme }) => {
  const bg     = th(theme, '#080f09', '#f4f9f4');
  const cardBg = th(theme, '#0f2314', '#ffffff');
  const tp     = th(theme, '#f0f8f0', '#0a1a0d');
  const ts     = th(theme, '#7aa07a', '#3a6040');
  const border = th(theme, 'rgba(109,184,58,0.1)', 'rgba(30,107,53,0.12)');
  const items = [
    { q:'Desde que contratamos a ALR, atingimos 100% de conformidade com as NRs. Equipe extremamente qualificada e pontual.', name:'João Mendes', role:'Diretor Industrial', co:'Indústria Metalúrgica' },
    { q:'A assessoria técnica da ALR foi fundamental para aprovarmos nossa expansão. Laudos impecáveis, entregues no prazo.', name:'Carla Santos', role:'Gerente de Operações', co:'Logística e Distribuição' },
    { q:'Profissionais que realmente entendem a legislação. Resolveram em semanas um problema que tínhamos há meses com o INSS.', name:'Ricardo Lima', role:'Coord. de Segurança', co:'Construtora Regional' },
  ];
  return (
    <section style={{background:bg, padding:'6rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))', borderTop:`1px solid ${border}`, borderBottom:`1px solid ${border}`}}>
      <div style={{textAlign:'center', marginBottom:'3.5rem'}}>
        <SectionLabel centered>Depoimentos</SectionLabel>
        <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(2rem,2.8vw,2.75rem)', color:tp, margin:0}}>O que dizem nossos clientes</h2>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.5rem'}}>
        {items.map((t,i) => (
          <div key={i} style={{background:cardBg, border:`1px solid ${border}`, borderRadius:10, padding:'2rem'}}>
            <span style={{color:'#6db83a', fontSize:'2.8rem', fontFamily:'Georgia,serif', lineHeight:1, display:'block', marginBottom:'0.75rem'}}>"</span>
            <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.93rem', lineHeight:1.78, margin:'0 0 1.5rem', fontStyle:'italic'}}>{t.q}</p>
            <div style={{borderTop:`1px solid ${border}`, paddingTop:'1rem'}}>
              <p style={{fontFamily:"'Barlow Condensed'", fontWeight:700, color:tp, margin:0, fontSize:'1rem'}}>{t.name}</p>
              <p style={{fontFamily:"'Barlow'", color: th(theme,'#5a7a5a','#6a9a75'), fontSize:'0.8rem', margin:'0.2rem 0 0'}}>{t.role} · {t.co}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── Clients Section ──────────────────────────────────────────────────────────
const ClientsSection = ({ theme }) => {
  const bg     = th(theme, '#0a1a0d', '#ffffff');
  const itemBg = th(theme, '#0f2314', '#f4f9f4');
  const tp     = th(theme, '#f0f8f0', '#0a1a0d');
  const ts     = th(theme, '#7aa07a', '#3a6040');
  const border = th(theme, 'rgba(109,184,58,0.08)', 'rgba(30,107,53,0.1)');
  return (
    <section style={{background:bg, padding:'6rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))'}}>
      <div style={{textAlign:'center', marginBottom:'3.5rem'}}>
        <SectionLabel centered>Clientes</SectionLabel>
        <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(2rem,2.8vw,2.75rem)', color:tp, margin:'0 0 0.9rem'}}>Parceria de valor</h2>
        <p style={{fontFamily:"'Barlow'", color:ts, fontSize:'0.97rem', maxWidth:500, margin:'0 auto'}}>
          Trabalho técnico com base na legislação pertinente, atendimento presencial quando necessário e soluções inovadoras para empresas em todo o território nacional.
        </p>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'1.25rem'}}>
        {Array.from({length:10}).map((_,i) => (
          <div key={i} style={{background:itemBg, border:`1px solid ${border}`, borderRadius:8,
            padding:'1.15rem', display:'flex', alignItems:'center', justifyContent:'center', height:70}}>
            <span style={{fontFamily:'monospace', fontSize:'0.67rem', color:th(theme,'#2d452d','#8aad8a'), textAlign:'center'}}>logo cliente {i+1}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── CTA Section ──────────────────────────────────────────────────────────────
const CTASection = ({ onNavigate }) => (
  <section style={{
    position:'relative', overflow:'hidden',
    background:'linear-gradient(135deg, #0c2010 0%, #1a5c2e 50%, #0f2a14 100%)',
    padding:'6rem max(1.5rem, calc((100% - 1200px)/2 + 2rem))',
  }}>
    {/* Grid overlay */}
    <div style={{position:'absolute', inset:0, pointerEvents:'none', opacity:0.045,
      backgroundImage:'linear-gradient(rgba(109,184,58,1) 1px,transparent 1px), linear-gradient(90deg,rgba(109,184,58,1) 1px,transparent 1px)',
      backgroundSize:'48px 48px'}}/>
    <div style={{position:'relative', textAlign:'center', maxWidth:640, margin:'0 auto'}}>
      <SectionLabel centered>Vamos conversar</SectionLabel>
      <h2 style={{fontFamily:"'Barlow Condensed'", fontWeight:800, fontSize:'clamp(2.2rem,3.8vw,3.4rem)',
        color:'#f0f8f0', margin:'0 0 1.1rem', lineHeight:1.05}}>
        Pronto para garantir a segurança da sua empresa?
      </h2>
      <p style={{fontFamily:"'Barlow'", color:'rgba(224,240,224,0.72)', fontSize:'1.02rem', lineHeight:1.75, margin:'0 0 2.5rem'}}>
        Entre em contato com nossa equipe especializada e receba uma proposta personalizada para as necessidades da sua empresa.
      </p>
      <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
        <Btn size="lg" onClick={() => onNavigate('contato')}>Solicitar Proposta</Btn>
        <Btn size="lg" variant="outline" onClick={() => onNavigate('contato')}>WhatsApp: (17) 99133-2063</Btn>
      </div>
    </div>
  </section>
);

// ─── HomePage ─────────────────────────────────────────────────────────────────
const HomePage = ({ heroLayout, theme, onNavigate }) => (
  <main>
    <HeroSection heroLayout={heroLayout} onNavigate={onNavigate}/>
    <StatsStrip/>
    <AboutSection theme={theme} onNavigate={onNavigate}/>
    <ServicesSection theme={theme} onNavigate={onNavigate}/>
    <ServiceCategoriesSection theme={theme} onNavigate={onNavigate}/>
    <TestimonialsSection theme={theme}/>
    <ClientsSection theme={theme}/>
    <CTASection onNavigate={onNavigate}/>
  </main>
);

Object.assign(window, {
  HeroSection, StatsStrip, AboutSection, ServiceCard,
  ServicesSection, ServiceCategoriesSection, TestimonialsSection,
  ClientsSection, CTASection, HomePage,
});
