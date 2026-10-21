const {chromium}=require('C:/Users/Daniel/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const page=await browser.newPage();const errors=[];const records=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.route('**/*',r=>r.request().method()==='POST'?r.abort():r.continue());
 for(const width of [390,1440]){
  await page.setViewportSize({width,height:width===390?844:1000});
  await page.goto('http://127.0.0.1:4174/',{waitUntil:'networkidle'});
  assert.match(await page.locator('h1').textContent(),/Cuidar de quem[\s\S]*trabalha.[\s\S]*Dar segurança[\s\S]*a quem empreende./);
  const cards=page.locator('.area-card');assert.equal(await cards.count(),3);
  for(const [index,name] of ['seguranca','eletrica','medicina'].entries()){
   const card=cards.nth(index);const img=card.locator('img');
   await img.scrollIntoViewIfNeeded();await img.evaluate(i=>i.decode());
   assert.equal(new URL(await card.getByRole('link',{name:'Saiba mais'}).getAttribute('href'),page.url()).hash,'#'+name);
  }
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  const shotStyle='.site-header,.floating-whatsapp,.skip-link{visibility:hidden!important}';
  await page.locator('#areas').screenshot({path:`output/revisao/evidencias/cartoes-${width}.png`,style:shotStyle});
  await page.locator('#solicitar').screenshot({path:`output/revisao/evidencias/formulario-home-${width}.png`,style:shotStyle});
  await page.locator('.cta-section').screenshot({path:`output/revisao/evidencias/convite-${width}.png`,style:shotStyle});
  const form=page.locator('#solicitar form');
  assert.equal(await form.locator('input').count(),2);
  await form.getByRole('button',{name:'Revisar e continuar no WhatsApp'}).click();
  assert.equal(await page.locator('#contact-name').evaluate(e=>e.validity.valueMissing),true);
  await form.getByLabel('Seu nome *',{exact:true}).fill('Ana & João');
  await form.getByLabel('Empresa',{exact:true}).fill('Empresa A+B');
  await form.getByLabel('Serviço ou área de interesse').selectOption({label:'Medicina do Trabalho'});
  await form.getByLabel('Conte sua necessidade *',{exact:true}).fill('Preciso de exames admissionais para duas pessoas.');
  await form.getByRole('button',{name:'Revisar e continuar no WhatsApp'}).click();
  assert(await page.getByRole('heading',{name:'Sua mensagem está preparada.'}).isVisible());
  const url=new URL(await page.getByRole('link',{name:'Abrir WhatsApp com a mensagem'}).getAttribute('href'));
  assert.equal(url.pathname,'/5517996220960');
  assert.match(url.searchParams.get('text'),/Ana & João/);
  assert.match(url.searchParams.get('text'),/Empresa A\+B/);
  assert.match(url.searchParams.get('text'),/Medicina do Trabalho/);
  await page.getByRole('button',{name:'Voltar e editar'}).click();
  assert.equal(await page.getByLabel('Seu nome *',{exact:true}).inputValue(),'Ana & João');
  records.push({width,cards:3,homeForm:true,requiredFields:true,messageEncoded:true,editPreserved:true});
 }
 assert.deepEqual(errors,[]);
 fs.writeFileSync('output/revisao/evidencias/areas-validacao.json',JSON.stringify({version:5,records,errors,externalMessagesSent:0},null,2));
 await browser.close();console.log('Cartões, formulário da Home, validação, mensagem e edição aprovados em celular e desktop; nenhum envio.');
})().catch(e=>{console.error(e);process.exit(1)});
