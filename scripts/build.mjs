import { build } from "esbuild";
import { mkdir, readFile, writeFile, copyFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { PAGE_INFO } from "../alr-config.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = fileURLToPath(new URL("../", import.meta.url));
const out = path.join(root, "dist");
await mkdir(path.join(out, "assets"), { recursive: true });
await mkdir(path.join(root, ".build"), { recursive: true });
await mkdir(path.join(out, "assets/photos"), { recursive: true });
for (const photo of ["alr-seguranca-v4", "alr-eletrica-v2", "alr-medicina-v4", "alr-hero-v7"]) {
  for (const width of photo === "alr-hero-v7" ? [480, 960, 1600, 1672] : [480, 960, 1600]) {
    const filename = `${photo}-${width}.webp`;
    await copyFile(path.join(root, "assets/photos", filename), path.join(out, "assets/photos", filename));
  }
}
await build({
  entryPoints: [path.join(root, "alr-app.jsx")],
  bundle: true,
  minify: true,
  format: "esm",
  outfile: path.join(out, "assets/site.js"),
  define: { "process.env.NODE_ENV": '"production"' },
  target: ["es2020"],
});
await build({
  entryPoints: [path.join(root, "scripts/render.jsx")],
  bundle: true,
  platform: "node",
  format: "cjs",
  outfile: path.join(root, ".build/render.cjs"),
  external: ["react", "react-dom/server"],
  define: { "process.env.NODE_ENV": '"production"' },
});
const require = createRequire(import.meta.url);
const { render } = require("../.build/render.cjs");
const escape = (s) =>
  s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
const stylesheet =
  (await readFile(path.join(root, "alr-styles.css"), "utf8")) +
  "\n" +
  (await readFile(path.join(root, "alr-photography.css"), "utf8"));
await writeFile(path.join(out, "assets/site.css"), stylesheet);
await copyFile(
  path.join(root, "assets/alr-logo.webp"),
  path.join(out, "assets/alr-logo.webp"),
);
for (const filename of ["favicon-alr-v2.svg", "favicon-alr-v2-32.png"]) {
  await copyFile(path.join(root, "assets", filename), path.join(out, "assets", filename));
}
// Espelha os arquivos de entrada para manter a prévia estática da pasta funcionando.
await copyFile(
  path.join(out, "assets/site.js"),
  path.join(root, "assets/site.js"),
);
await copyFile(
  path.join(out, "assets/site.css"),
  path.join(root, "assets/site.css"),
);
for (const [page, info] of Object.entries(PAGE_INFO)) {
  const base = page === "home" ? "./" : "../";
  const folder = page === "home" ? out : path.join(out, page);
  await mkdir(folder, { recursive: true });
  const html = `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#174c37"><title>${escape(info.title)}</title><meta name="description" content="${escape(info.description)}"><meta property="og:title" content="${escape(info.title)}"><meta property="og:description" content="${escape(info.description)}"><meta property="og:type" content="website"><meta property="og:locale" content="pt_BR"><link rel="icon" type="image/png" sizes="32x32" href="${base}assets/favicon-alr-v2-32.png"><link rel="icon" type="image/svg+xml" sizes="any" href="${base}assets/favicon-alr-v2.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="${base}assets/site.css"></head><body><noscript><style>.menu-toggle{display:none!important}.main-nav{display:flex!important;position:static!important;flex-wrap:wrap}.header-inner{flex-wrap:wrap}.contact-form-panel{display:none}.area-tabs{display:none!important}</style><div class="noscript-note">Para preparar uma mensagem, ative o JavaScript. Os contatos diretos da ALR continuam disponíveis.</div></noscript><div id="root" data-page="${page}" data-base="${base}">${render({ page, base })}</div><script type="module" src="${base}assets/site.js"></script></body></html>`;
  await writeFile(path.join(folder, "index.html"), html);
  const sourceFolder = page === "home" ? root : path.join(root, page);
  await writeFile(path.join(sourceFolder, "index.html"), html);
}
await copyFile(
  path.join(root, "hse-stress-form.html"),
  path.join(out, "hse-stress-form.html"),
);
// Mantém o endereço antigo acessível sem uma segunda implementação do site.
await writeFile(
  path.join(out, "ALR Soluções.html"),
  '<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=./"><title>ALR</title><a href="./">Ir à página inicial da ALR</a></html>',
);
await copyFile(
  path.join(out, "ALR Soluções.html"),
  path.join(root, "ALR Soluções.html"),
);
console.log("Prévia construída em dist/. Nenhum arquivo foi publicado.");
