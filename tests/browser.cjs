const {
  chromium,
} = require("C:/Users/Daniel/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const out = path.join(__dirname, "../output/revisao/evidencias");
fs.mkdirSync(out, { recursive: true });
(async () => {
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  const failures = [];
  const records = [];
  const errors = [];
  const httpErrors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("response", (r) => {
    if (r.status() >= 400)
      httpErrors.push({ url: r.url(), status: r.status() });
  });
  await context.route("**/*", (r) =>
    r.request().method() === "POST" ? r.abort() : r.continue(),
  );
  for (const width of [320, 390, 768, 1280, 1440]) {
    await page.setViewportSize({ width, height: width < 600 ? 844 : 1000 });
    for (const name of ["home", "sobre", "servicos", "clientes", "contato"]) {
      await page.goto(
        "http://127.0.0.1:4174/" + (name === "home" ? "" : name + "/"),
        { waitUntil: "networkidle" },
      );
      await page.evaluate(() => document.fonts.ready);
      // Visita as imagens abaixo da dobra para validar também o carregamento tardio.
      for (const photo of await page.locator(".work-photo img").all()) {
        await photo.scrollIntoViewIfNeeded();
        await photo.evaluate((img) => img.decode());
        assert.ok(await photo.getAttribute("srcset"));
        assert.ok(await photo.getAttribute("alt"));
        assert.ok(await photo.getAttribute("width"));
        assert.ok(await photo.getAttribute("height"));
      }
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: "instant" }),
      );
      const state = await page.evaluate(() => ({
        title: document.title,
        h1: document.querySelectorAll("h1").length,
        overflow: document.documentElement.scrollWidth > innerWidth,
        clipped: [
          ...document.querySelectorAll(
            "h1,h2,h3,p,button,input,textarea,select,summary",
          ),
        ]
          .filter((e) => {
            const r = e.getBoundingClientRect();
            return r.width > 0 && (r.right > innerWidth + 1 || r.left < -1);
          })
          .map((e) => e.innerText?.slice(0, 70) || e.id),
        placeholders:
          /logo cliente|foto:|100% de conformidade|Mensagem enviada!/.test(
            document.body.innerText,
          ),
        wrongPhone: document.body.innerText.includes("99133"),
        emptyLinks: [...document.querySelectorAll("a")].filter(
          (e) => e.getAttribute("href") === "#",
        ).length,
        labels: [...document.querySelectorAll("input,textarea,select")].every(
          (e) => e.labels.length > 0,
        ),
        imageErrors: [...document.images].filter(
          (i) => !i.complete || !i.naturalWidth,
        ).length,
        whatsappLinks: [
          ...document.querySelectorAll('a[href^="https://wa.me/"]'),
        ].map((a) => new URL(a.href).pathname),
      }));
      records.push({ name, width, ...state });
      if (
        state.h1 !== 1 ||
        state.overflow ||
        state.clipped.length ||
        state.placeholders ||
        state.wrongPhone ||
        state.emptyLinks ||
        !state.labels ||
        state.imageErrors ||
        state.whatsappLinks.some((p) => p !== "/5517996220960")
      )
        failures.push({ name, width, state });
      if ([390, 1440].includes(width)) {
        await page.screenshot({
          path: path.join(out, `${name}-${width}-topo.png`),
        });
        await page.screenshot({
          path: path.join(out, `${name}-${width}-pagina.png`),
          fullPage: true,
        });
      }
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("http://127.0.0.1:4174/", { waitUntil: "networkidle" });
  const menu = page.locator(".menu-toggle");
  await menu.click();
  assert.equal(await menu.getAttribute("aria-expanded"), "true");
  await page
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Serviços", exact: true })
    .focus();
  await page.keyboard.press("Escape");
  assert.equal(await menu.getAttribute("aria-expanded"), "false");
  assert(await menu.evaluate((e) => e === document.activeElement));
  await menu.click();
  await page.screenshot({ path: path.join(out, "menu-390.png") });
  await page
    .getByRole("navigation", { name: "Navegação principal" })
    .getByRole("link", { name: "Serviços", exact: true })
    .click();
  await page.waitForLoadState("networkidle");
  await page.locator("#eletrica summary").first().click();
  assert(
    await page
      .locator("#eletrica details")
      .first()
      .evaluate((e) => e.open),
  );
  await page
    .locator("#eletrica details")
    .first()
    .getByRole("link", { name: "Solicitar informações" })
    .click();
  await page.waitForLoadState("networkidle");
  assert.match(
    await page.getByLabel("Serviço ou área de interesse").inputValue(),
    /Prontuário/,
  );
  await page.getByRole("button", { name: "Preparar mensagem" }).click();
  assert.equal(
    await page
      .locator("#contact-name")
      .evaluate((e) => e.validity.valueMissing),
    true,
  );
  await page.getByLabel("Seu nome *", { exact: true }).fill("João & Maria");
  await page.getByLabel("Empresa", { exact: true }).fill("Empresa A+B");
  await page
    .getByLabel("E-mail para retorno", { exact: true })
    .fill("auditoria@example.invalid");
  await page
    .getByLabel("Conte sua necessidade *", { exact: true })
    .fill("Avaliar instalação #2.\nInformações sobre elétrica.");
  await page
    .getByRole("button", { name: "Preparar mensagem", exact: false })
    .click();
  assert(
    await page
      .getByRole("heading", { name: "Sua mensagem está preparada." })
      .isVisible(),
  );
  const wa = await page
    .getByRole("link", { name: "Abrir WhatsApp com a mensagem" })
    .getAttribute("href");
  const waUrl = new URL(wa);
  assert.equal(waUrl.pathname, "/5517996220960");
  assert.match(waUrl.searchParams.get("text"), /João & Maria/);
  assert.match(waUrl.searchParams.get("text"), /Empresa A\+B/);
  assert.match(waUrl.searchParams.get("text"), /Prontuário/);
  await page.screenshot({
    path: path.join(out, "mensagem-preparada-390.png"),
    fullPage: true,
  });
  await page.getByRole("button", { name: "Voltar e editar" }).click();
  assert.equal(
    await page.getByLabel("Seu nome *", { exact: true }).inputValue(),
    "João & Maria",
  );
  const noJs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const staticPage = await noJs.newPage();
  await staticPage.goto("http://127.0.0.1:4174/");
  assert.equal(await staticPage.locator("h1").count(), 1);
  assert(
    await staticPage
      .getByRole("navigation", { name: "Navegação principal" })
      .getByRole("link", { name: "Serviços", exact: true })
      .isVisible(),
  );
  const staticOverflow = await staticPage.evaluate(
    () => document.documentElement.scrollWidth > innerWidth,
  );
  if (staticOverflow)
    failures.push({ name: "home-sem-javascript", width: 390, overflow: true });
  fs.writeFileSync(
    path.join(out, "validacao.json"),
    JSON.stringify(
      {
        records,
        failures,
        errors,
        httpErrors,
        flows: {
          menu: true,
          escape: true,
          serviceToForm: true,
          requiredFields: true,
          preparedMessage: true,
          editPreservesFields: true,
          noJavaScript: true,
          externalMessagesSent: 0,
        },
      },
      null,
      2,
    ),
  );
  console.log(
    JSON.stringify(
      { screens: records.length, failures, errors, httpErrors },
      null,
      2,
    ),
  );
  await browser.close();
  if (failures.length || errors.length || httpErrors.length)
    process.exitCode = 1;
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
