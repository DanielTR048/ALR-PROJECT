// alr-components.jsx — Logo, Nav, Footer, shared UI primitives

const { useState, useEffect } = React;

// ─── Logo ─────────────────────────────────────────────────────────────────────
const ALRLogo = ({ height = 48, textColor = '#e8f2e8' }) => {
  const assetBase = (window.ALR_PAGE_URLS && window.ALR_PAGE_URLS.home) || './';
  const displayHeight = height * 1.35;
  return (
    <img
      src={`${assetBase}ALR_logo.png`}
      alt="ALR Solucoes em Engenharia"
      style={{
        display:'block',
        height:displayHeight,
        width:'auto',
        maxWidth:'min(52vw, 230px)',
        objectFit:'contain',
        flexShrink:0,
      }}
    />
  );
};

// ─── Button ───────────────────────────────────────────────────────────────────
const Btn = ({ children, variant = 'primary', size = 'md', onClick, style: extra = {}, type = 'button' }) => {
  const [hov, setHov] = useState(false);
  const base = {
    display:'inline-flex', alignItems:'center', gap:'0.45rem',
    fontFamily:"'Barlow',sans-serif", fontWeight:700, letterSpacing:'0.025em',
    cursor:'pointer', border:'none', transition:'all 0.18s ease', textDecoration:'none',
    whiteSpace:'nowrap', lineHeight:1,
  };
  const sizes = {
    sm: { fontSize:'0.83rem', padding:'0.55rem 1.1rem', borderRadius:'5px' },
    md: { fontSize:'0.93rem', padding:'0.7rem 1.55rem', borderRadius:'5px' },
    lg: { fontSize:'1rem',    padding:'0.85rem 2rem',   borderRadius:'6px' },
  };
  const vars = {
    primary: { background: hov ? '#5ca830' : '#6db83a', color:'#0a1a0d' },
    outline:  { background:'transparent', color: hov ? '#6db83a' : 'rgba(232,242,232,0.8)', border: hov ? '1.5px solid #6db83a' : '1.5px solid rgba(232,242,232,0.28)' },
    ghost:    { background: hov ? 'rgba(109,184,58,0.12)' : 'transparent', color:'#6db83a' },
    dark:     { background: hov ? '#142c19' : '#0f2314', color:'#c8dcc8', border:'1px solid rgba(109,184,58,0.2)' },
  };
  return (
    <button type={type} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={onClick}
      style={{...base, ...sizes[size], ...vars[variant], ...extra}}>
      {children}
    </button>
  );
};

// ─── Section Label ────────────────────────────────────────────────────────────
const SectionLabel = ({ children, centered = false, light = false }) => (
  <div style={{display:'flex', alignItems:'center', gap:'0.7rem', justifyContent: centered ? 'center' : 'flex-start', marginBottom:'1rem'}}>
    <span style={{width:24, height:2, background:'#6db83a', display:'block', flexShrink:0}}/>
    <span style={{fontFamily:"'Barlow',sans-serif", fontWeight:700, fontSize:'0.72rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#6db83a'}}>{children}</span>
  </div>
);

// ─── Image Placeholder ────────────────────────────────────────────────────────
const ImgPlaceholder = ({ label, style: extra = {}, aspect = '16/9' }) => (
  <div style={{
    aspectRatio: aspect,
    background:'repeating-linear-gradient(135deg, #0f2314 0px, #0f2314 14px, #0a1a0d 14px, #0a1a0d 28px)',
    display:'flex', alignItems:'center', justifyContent:'center',
    borderRadius:8, overflow:'hidden', ...extra,
  }}>
    <span style={{fontFamily:'monospace', fontSize:'0.72rem', color:'#3a5a3a', background:'rgba(0,0,0,0.45)', padding:'5px 11px', borderRadius:4, textAlign:'center', maxWidth:'80%', lineHeight:1.5}}>{label}</span>
  </div>
);

// ─── NavBar ───────────────────────────────────────────────────────────────────
const NavBar = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const el = document.getElementById('alr-scroll');
    if (!el) return;
    const handler = () => setScrolled(el.scrollTop > 56);
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { id:'home',     label:'Home' },
    { id:'sobre',    label:'Sobre Nós' },
    { id:'servicos', label:'Serviços' },
    { id:'clientes', label:'Clientes' },
    { id:'contato',  label:'Contato' },
  ];

  // Hero section é fundo claro — nav precisa de cores escuras quando não rolou
  const lightBg = currentPage === 'home' && !scrolled;

  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:1000, height:88,
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'14px max(1.5rem, calc((100% - 1200px)/2 + 2rem)) 0',
      background: scrolled ? 'rgba(8,15,9,0.94)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 rgba(109,184,58,0.12)' : 'none',
      transition:'background 0.3s, box-shadow 0.3s',
    }}>
      <div style={{cursor:'pointer'}} onClick={() => onNavigate('home')}>
        <ALRLogo height={44} textColor={lightBg ? '#111110' : '#e8f2e8'}/>
      </div>
      <div style={{display:'flex', gap:'2rem', alignItems:'center'}}>
        {links.map(l => (
          <button key={l.id} onClick={() => onNavigate(l.id)} style={{
            background:'none', border:'none', cursor:'pointer',
            fontFamily:"'Barlow',sans-serif", fontWeight:600, fontSize:'0.9rem', letterSpacing:'0.02em',
            color: currentPage === l.id ? '#5aa02e' : (lightBg ? 'rgba(0,0,0,0.55)' : '#c8dcc8'),
            borderBottom: currentPage === l.id ? '2px solid #5aa02e' : '2px solid transparent',
            padding:'0.25rem 0', transition:'color 0.2s, border-color 0.2s',
          }}>{l.label}</button>
        ))}
        <Btn size="sm" onClick={() => onNavigate('contato')}>Fale Conosco</Btn>
      </div>
    </nav>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────
const Footer = ({ onNavigate }) => {
  const col = (label, color = '#8aad8a') => ({ fontFamily:"'Barlow',sans-serif", color, fontSize:'0.9rem', margin:0 });
  const hdr = { fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:'0.73rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'#6db83a', marginBottom:'1.25rem' };
  const navLinks = [
    { id:'home', label:'Home' },
    { id:'sobre', label:'Sobre Nós' },
    { id:'servicos', label:'Serviços' },
    { id:'clientes', label:'Clientes' },
    { id:'contato', label:'Contato' },
  ];
  return (
    <footer style={{ background:'#070d08', borderTop:'1px solid rgba(109,184,58,0.1)', padding:'4rem max(1.5rem, calc((100% - 1200px)/2 + 2rem)) 1.75rem' }}>
      <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:'4rem', marginBottom:'3rem'}}>

        {/* Brand */}
        <div>
          <ALRLogo height={50} textColor="#c8dcc8"/>
          <p style={{...col('#5a7a5a'), marginTop:'1.25rem', lineHeight:1.75, maxWidth:300, fontSize:'0.87rem'}}>
            Confiabilidade e segurança em cada projeto. Equipe especializada em Engenharia de Segurança, Engenharia Elétrica e Medicina do Trabalho.
          </p>
          <div style={{display:'flex', gap:'1.25rem', marginTop:'1.5rem'}}>
            {['WhatsApp','Facebook','Instagram'].map(s => (
              <a key={s} href="#" style={{color:'#3a5a3a', fontSize:'0.82rem', fontFamily:"'Barlow',sans-serif", textDecoration:'none', transition:'color 0.2s'}}
                onMouseEnter={e => e.target.style.color='#6db83a'}
                onMouseLeave={e => e.target.style.color='#3a5a3a'}>{s}</a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div>
          <p style={hdr}>Navegação</p>
          <div style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
            {navLinks.map(l => (
              <button key={l.id} onClick={() => onNavigate(l.id)} style={{
                background:'none', border:'none', cursor:'pointer', textAlign:'left', padding:0,
                ...col('#5a7a5a'),
                transition:'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color='#c8dcc8'}
              onMouseLeave={e => e.target.style.color='#5a7a5a'}
              >{l.label}</button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p style={hdr}>Contato</p>
          <div style={{display:'flex', flexDirection:'column', gap:'0.75rem'}}>
            {[
              'contato@alrsolucoeseng.com.br',
              '(17) 99133-2063',
              'São José do Rio Preto, SP',
              'Seg–Sex, 8h às 18h',
            ].map((v,i) => <p key={i} style={{...col('#5a7a5a'), fontSize:'0.87rem'}}>{v}</p>)}
          </div>
        </div>
      </div>

      <div style={{borderTop:'1px solid rgba(109,184,58,0.08)', paddingTop:'1.5rem', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <p style={{...col('#2d452d'), fontSize:'0.8rem'}}>© 2024 ALR Soluções em Engenharia. Todos os direitos reservados.</p>
        <p style={{...col('#2d452d'), fontSize:'0.8rem'}}>CREA-SP · Engenharia com qualidade</p>
      </div>
    </footer>
  );
};

Object.assign(window, { ALRLogo, Btn, SectionLabel, ImgPlaceholder, NavBar, Footer });
