const { useEffect, useState, useRef } = React;

class ErrBoundary extends React.Component {
  constructor(p){ super(p); this.state={err:null}; }
  static getDerivedStateFromError(e){ return {err:e.message}; }
  render(){
    if(this.state.err) return (
      <div style={{padding:'2rem',color:'#f00',background:'#111',fontFamily:'monospace',fontSize:'0.85rem',margin:'4rem auto',maxWidth:800,borderRadius:8}}>
        <b>Render error:</b> {this.state.err}
      </div>
    );
    return this.props.children;
  }
}

const TWEAK_DEFAULTS = window.ALR_TWEAK_DEFAULTS || {
  theme: 'corporativo',
  heroLayout: 'split',
};

function App() {
  const initialPage = window.ALR_INITIAL_PAGE || 'home';
  const [page] = useState(initialPage);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const pageUrls = window.ALR_PAGE_URLS || {
    home: './',
    sobre: './sobre/',
    servicos: './servicos/',
    clientes: './clientes/',
    contato: './contato/',
  };

  const navigate = (p) => {
    const target = pageUrls[p] || './';
    if (p === page) {
      const el = document.getElementById('alr-scroll');
      if (el) el.scrollTop = 0;
      return;
    }
    window.location.href = target;
  };

  useEffect(() => {
    const scroll = document.getElementById('alr-scroll');
    if (scroll) scroll.style.background = t.theme === 'corporativo' ? '#f5faf5' : '#070d08';
  }, [t.theme]);

  return (
    <div id="alr-scroll">
      <NavBar currentPage={page} onNavigate={navigate}/>

      <div key={page} className="page-enter">
        <ErrBoundary>
          {page === 'home' && <HomePage heroLayout={t.heroLayout} theme={t.theme} onNavigate={navigate}/>}
          {page === 'sobre' && <SobrePage theme={t.theme} onNavigate={navigate}/>}
          {page === 'servicos' && <ServicosPage theme={t.theme} onNavigate={navigate}/>}
          {page === 'clientes' && <ClientesPage theme={t.theme} onNavigate={navigate}/>}
          {page === 'contato' && <ContatoPage theme={t.theme}/>}
        </ErrBoundary>
      </div>

      <Footer onNavigate={navigate}/>

      <TweaksPanel>
        <TweakSection label="Tema Visual"/>
        <TweakRadio
          label="Esquema de cores"
          value={t.theme}
          options={['escuro', 'corporativo']}
          onChange={v => setTweak('theme', v)}
        />
        <TweakSection label="Hero (Página Inicial)"/>
        <TweakRadio
          label="Layout do hero"
          value={t.heroLayout}
          options={['split', 'centered']}
          onChange={v => setTweak('heroLayout', v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
