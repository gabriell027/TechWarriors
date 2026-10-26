(() => {
const CONFIG = {
  whatsapp: "5527995303545",
  instagram: "https://www.instagram.com/techwarriorsbr",
  email: "techwarriorsbr@gmail.com"
};

const pm = n => `Olá! Tenho interesse no Plano ${n} da TechWarriors.\n\nGostaria de mais informações.`;

const PLANS = [
  { nome: "Site Básico", novo: 50, antigo: 75, desc: "Para pessoas e empresas iniciantes.", itens: ["Limite de 3 abas", "Segurança básica", "Design médio"], msg: pm("Site Básico") },
  { nome: "Site Intermediário", novo: 120, antigo: 170, desc: "De iniciantes para experientes.", itens: ["Limite de 6 abas", "Segurança média → boa", "Design bonito"], msg: pm("Site Intermediário") },
  { nome: "Site Experiente", novo: 200, antigo: 220, desc: "Para quem já tem experiência e concorrência no mercado.", itens: ["Limite de 9 abas", "Segurança alta", "Design bonito e profissional"], msg: pm("Site Experiente") },
  { nome: "Site PRO", novo: 500, antigo: 600, destaque: "Mais vendido", desc: "Site completo para empresas.", itens: ["Limite de 12 abas", "Segurança alta", "Design profissional, muito bonito e detalhado"], msg: pm("Site PRO") },
  { nome: "Site Mestre", novo: 1000, antigo: 1250, desc: "Para profissionais dominantes do mercado.", itens: ["Limite de 14 abas", "Segurança extrema", "Design profissional e extremamente bonito", "Ferramentas extras", "Imagens e logos inclusas", "Firebase"], msg: pm("Site Mestre") },
  { nome: "Site Sem Limites", novo: 2500, antigo: 0, destaque: "Elite", firebase: true, desc: "Para grandes empresas que querem uma estrutura completa e sem teto para crescer.", itens: ["Sem limite de páginas", "Sem limite de abas", "Firebase incluso", "Banco de dados", "Login", "Painel administrativo", "Sistema personalizado", "Alto desempenho", "Segurança avançada", "Design totalmente exclusivo"], msg: "Olá! Tenho interesse no Plano Site Sem Limites da TechWarriors.\n\nGostaria de fazer um orçamento." }
];

const PORTFOLIO = [
  { titulo: "Sites institucionais", cat: "Institucional", icon: "site", desc: "Presença digital forte, rápida e com a cara da sua marca.", tags: ["Responsivo", "SEO", "Rápido"] },
  { titulo: "Lojas virtuais", cat: "Loja virtual", icon: "cart", desc: "Vitrines modernas que transformam visitas em vendas.", tags: ["Catálogo", "WhatsApp", "Pagamentos"] },
  { titulo: "Landing pages", cat: "Landing page", icon: "rocket", desc: "Páginas de conversão focadas em gerar contatos reais.", tags: ["Conversão", "Animações", "Leve"] },
  { titulo: "Jogos", cat: "Jogos", icon: "game", desc: "Jogos completos para PC, Android e navegador.", tags: ["PC", "Android", "Web"] },
  { titulo: "Sistemas sob medida", cat: "Sistemas", icon: "chip", desc: "Ferramentas internas e simuladores feitos para o seu processo.", tags: ["Personalizado", "Escalável"] },
  { titulo: "Login e painéis", cat: "Sistemas", icon: "lock", desc: "Áreas restritas, banco de dados e painéis administrativos.", tags: ["Firebase", "Segurança"] }
];

const PRODUCTS = [
  {
    nome: "AMD Ryzen 5 1600",
    preco: 100,
    estado: "Usado",
    desc: "Processador de 6 núcleos e 12 threads, ótimo custo-benefício para jogos e multitarefa.",
    specs: { Núcleos: "6", Threads: "12", Soquete: "AM4", Clock: "3.2 GHz (base)" }
  }
];

const MARKETING = [
  ["Identidade visual", "Logo, paleta e padrão visual que posicionam sua marca."],
  ["Redes sociais", "Conteúdo e presença constante onde o público está."],
  ["Anúncios", "Campanhas pensadas para gerar contatos reais."],
  ["Estratégia", "Planejamento claro para crescer com consistência."]
];

const PROMO = [
  ["Lojas", "Divulgação para atrair clientes ao seu comércio."],
  ["Restaurantes", "Apresentação irresistível do seu cardápio."],
  ["Pequenas empresas", "Visibilidade acessível para quem está crescendo."],
  ["Parcerias", "Conexões que levam sua marca mais longe."]
];

const FEEDBACKS = [
  { nome: "Gerlia**", empresa: "Empresa", texto: "Bem profissional, CSS muito lindo e detalhado.", nota: 5 },
  { nome: "Marc**", empresa: "Empresa", texto: "Simplesmente perfeito, preço muito mais barato pra um site de tão boa qualidade.", nota: 5 },
  { nome: "Pizzaria *******", empresa: "Empresa", texto: "Entrega rápida, ótimo suporte e um resultado acima do esperado.", nota: 5 }
];

const ICON = {
  site: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M7 21h10M12 18v3"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11L21 7H6"/>',
  rocket: '<path d="M5 15c-1.5 1-2 4-2 6 2 0 5-.5 6-2M14 4c3-1.5 6-1 7-1 0 1 .5 4-1 7l-6 6-6-6z"/><circle cx="15" cy="9" r="1"/>',
  game: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10v5M4.5 12.5h5M15.5 11h.01M18 14h.01"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-4 3-6 6.5-6s6.5 2 6.5 6M16 4.5a3.5 3.5 0 010 7M18 14c2 .5 3.5 2.3 3.5 6"/>',
  ig: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  wa: '<path d="M3 21l1.6-4.6A9 9 0 118 19.6z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .7c-.8-.4-1.5-1.1-1.9-1.9l.7-1-1-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  flame: '<path d="M12 22c4 0 7-2.6 7-6.5 0-3-2-5-3.5-6.5C15 11 14 12 13 12c0-3-1-6-4-9 0 4-4 6-4 12 0 4.4 3 7 7 7z"/>'
};
const svg = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const brl = n => n ? n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : "R$ 2.500,00";
const wa = msg => window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
const ini = s => s.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

$$("[data-icon]").forEach(el => el.innerHTML = svg(el.dataset.icon));

const QUOTES = {
  geral: { t: "Solicitar orçamento", m: "Olá! Quero solicitar um orçamento com a TechWarriors." },
  jogo: { t: "Orçamento de jogo", m: "Olá! Quero um orçamento para criação de jogo." }
};
PLANS.forEach((p, i) => QUOTES["p" + i] = { t: p.nome, m: p.msg });

$("#plans").innerHTML = PLANS.map((p, i) => {
  const off = p.antigo ? Math.round((1 - p.novo / p.antigo) * 100) : 0;
  return `<article class="plan glass tilt reveal${p.destaque ? " hot" : ""}${p.firebase ? " fb-plan" : ""}" style="--d:${i * 70}ms">
    ${p.destaque ? `<span class="badge">${p.destaque}</span>` : ""}
    <h3>${p.nome}</h3>
    <div>${p.antigo ? `<div class="old">${brl(p.antigo)}</div>` : `<div class="old">&nbsp;</div>`}<div class="price">${brl(p.novo)}</div></div>
    ${off ? `<span class="save">-${off}% de desconto</span>` : `<span class="save">${"Valor especial"}</span>`}
    ${p.firebase ? `<div class="fire">${svg("flame")}<div><b>Firebase incluso</b><small>Banco de dados, login e painel em tempo real</small></div></div>` : ""}
    <p style="color:var(--mu);font-size:14.5px">${p.desc}</p>
    <ul>${p.itens.map(t => `<li>${t}</li>`).join("")}</ul>
    <a class="btn primary" data-quote="p${i}">Solicitar orçamento</a>
  </article>`;
}).join("");

const cats = ["Todos", ...new Set(PORTFOLIO.map(w => w.cat))];
$("#filters").innerHTML = cats.map((c, i) => `<button class="${i ? "" : "on"}" data-cat="${c}">${c}</button>`).join("");
$("#portfolioGrid").innerHTML = PORTFOLIO.map((w, i) => `<article class="work glass tilt reveal" data-cat="${w.cat}" style="--d:${i * 70}ms">
  <div class="wi">${svg(w.icon)}</div>
  <h3>${w.titulo}</h3><p>${w.desc}</p>
  <div class="tags">${w.tags.map(t => `<span>${t}</span>`).join("")}</div></article>`).join("");
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  $$("#filters button").forEach(x => x.classList.toggle("on", x === b));
  $$(".work").forEach(w => w.classList.toggle("hide", b.dataset.cat !== "Todos" && w.dataset.cat !== b.dataset.cat));
});

$("#products").innerHTML = PRODUCTS.map(p => `<article class="product glass tilt reveal">
  <div class="ph">${svg("chip")}</div>
  <div class="info">
    <span class="state">${p.estado}</span>
    <h3>${p.nome}</h3>
    <div class="pr">${brl(p.preco)}</div>
    <p>${p.desc}</p>
    <ul class="specs">${Object.entries(p.specs).map(([k, v]) => `<li><span>${k}</span><b>${v}</b></li>`).join("")}</ul>
    <div class="btns">
      <a class="btn primary" data-wa="Olá! Quero comprar: ${p.nome}.">Comprar</a>
      <a class="btn ghost" data-wa="Olá! Tenho dúvidas sobre: ${p.nome}.">WhatsApp</a>
    </div>
  </div></article>`).join("");

const cards = (el, list) => $(el).innerHTML = list.map(([t, d], i) => `<div class="card glass tilt reveal" style="--d:${i * 80}ms"><div class="ic">${String(i + 1).padStart(2, "0")}</div><h3>${t}</h3><p>${d}</p></div>`).join("");
cards("#marketingGrid", MARKETING);
cards("#promoGrid", PROMO);

$("#track").innerHTML = FEEDBACKS.map(f => `<div class="fb"><div class="glass">
  <div class="avatar">${ini(f.nome)}</div>
  <div class="stars">${"★".repeat(f.nota)}${"☆".repeat(5 - f.nota)}</div>
  <q>${f.texto}</q>
  <div><b>${f.nome}</b><small>${f.empresa}</small></div></div></div>`).join("");
$("#dots").innerHTML = FEEDBACKS.map((_, i) => `<button aria-label="Slide ${i + 1}" class="${i ? "" : "on"}"></button>`).join("");

let cur = 0, timer;
const go = i => {
  cur = (i + FEEDBACKS.length) % FEEDBACKS.length;
  $("#track").style.transform = `translateX(-${cur * 100}%)`;
  $$("#dots button").forEach((d, k) => d.classList.toggle("on", k === cur));
};
const auto = () => { clearInterval(timer); timer = setInterval(() => go(cur + 1), 5500); };
$("#dots").addEventListener("click", e => {
  const k = $$("#dots button").indexOf(e.target);
  if (k > -1) { go(k); auto(); }
});
auto();

$$("h2.split").forEach(h => {
  h.innerHTML = h.textContent.split(" ").map((w, i) => `<span class="w" style="--i:${i}">${w}&nbsp;</span>`).join("");
});

const modal = $("#modal"), mForm = $("#mForm"), mNote = $("#mNote");
let quote = null, lastFocus = null;
const openModal = key => {
  quote = QUOTES[key];
  if (!quote) return;
  lastFocus = document.activeElement;
  $("#mTitle").textContent = quote.t;
  mForm.reset();
  mNote.textContent = "";
  $$(".err", mForm).forEach(x => x.classList.remove("err"));
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("locked");
  setTimeout(() => mForm.nome.focus(), 350);
};
const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("locked");
  if (lastFocus) lastFocus.focus();
};
mForm.addEventListener("submit", e => {
  e.preventDefault();
  let ok = true;
  $$("[required]", mForm).forEach(i => {
    const bad = !i.value.trim();
    i.classList.toggle("err", bad);
    if (bad) ok = false;
  });
  if (!ok) { mNote.textContent = "Preencha os campos obrigatórios."; return; }
  const f = new FormData(mForm);
  wa(`${quote.m}\n\nMeu nome é ${f.get("nome").trim()}.\n\nComo imagino meu site:\n${f.get("visao").trim()}`);
  closeModal();
});
$("#mClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

document.addEventListener("click", e => {
  const q = e.target.closest("[data-quote]");
  if (q) return openModal(q.dataset.quote);
  const a = e.target.closest("[data-wa]");
  if (a) wa(a.dataset.wa);
});

$("#ig").href = CONFIG.instagram;
$("#navIg").href = CONFIG.instagram;
$("#follow").href = CONFIG.instagram;
$("#mail").href = `mailto:${CONFIG.email}`;
$("#year").textContent = new Date().getFullYear();

const header = $("#header"), topBtn = $("#top"), bar = $("#progress");
const links = $$('#nav a[href^="#"]');
const sections = links.map(a => $(a.getAttribute("href")));
const onScroll = () => {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  header.classList.toggle("solid", y > 40);
  topBtn.classList.toggle("show", y > 700);
  bar.style.width = `${(y / h) * 100}%`;
  let idx = -1;
  sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .4) idx = i; });
  links.forEach((a, i) => a.classList.toggle("active", i === idx));
  const g = $(".hero-glow");
  if (g && y < innerHeight) g.style.transform = `translate(-50%,calc(-55% + ${y * .25}px))`;
};
addEventListener("scroll", onScroll, { passive: true });
onScroll();
topBtn.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

const burger = $("#burger"), nav = $("#nav");
const closeNav = () => { burger.classList.remove("open"); nav.classList.remove("open"); };
burger.addEventListener("click", () => { burger.classList.toggle("open"); nav.classList.toggle("open"); });
nav.addEventListener("click", e => { if (e.target.tagName === "A") closeNav(); });

const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  io.unobserve(e.target);
}), { threshold: .12, rootMargin: "0px 0px -40px" });

const countIO = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now();
  const step = t => {
    const p = Math.min((t - t0) / 1800, 1);
    el.textContent = Math.round(end * (1 - Math.pow(1 - p, 4))) + suf;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  countIO.unobserve(el);
}), { threshold: .6 });

const observe = () => {
  $$(".reveal,.split").forEach(el => io.observe(el));
  $$("[data-count]").forEach(el => countIO.observe(el));
};

$$(".plan").forEach(p => p.addEventListener("pointermove", e => {
  const r = p.getBoundingClientRect();
  p.style.setProperty("--mx", `${e.clientX - r.left}px`);
  p.style.setProperty("--my", `${e.clientY - r.top}px`);
}));

if (matchMedia("(hover:hover) and (pointer:fine)").matches && !matchMedia("(prefers-reduced-motion:reduce)").matches) {
  $$(".btn.primary").forEach(b => {
    b.addEventListener("pointermove", e => {
      const r = b.getBoundingClientRect();
      b.style.setProperty("--tx", `${(e.clientX - r.left - r.width / 2) * .16}px`);
      b.style.setProperty("--ty", `${(e.clientY - r.top - r.height / 2) * .22}px`);
    });
    b.addEventListener("pointerleave", () => { b.style.setProperty("--tx", "0px"); b.style.setProperty("--ty", "0px"); });
  });
  $$(".tilt").forEach(c => {
    let f = 0;
    c.addEventListener("pointermove", e => {
      cancelAnimationFrame(f);
      f = requestAnimationFrame(() => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - .5) * 7}deg`);
        c.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - .5) * -7}deg`);
      });
    });
    c.addEventListener("pointerleave", () => { cancelAnimationFrame(f); c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); });
  });
}

const cv = $("#bg"), ctx = cv.getContext("2d");
let W, H, pts = [], mouse = { x: -999, y: -999 }, run = true;
const size = () => {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  W = cv.clientWidth; H = cv.clientHeight;
  cv.width = W * dpr; cv.height = H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const n = Math.min(110, Math.floor(W * H / 14000));
  pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.4 + .4 }));
};
addEventListener("resize", size);
cv.parentElement.addEventListener("pointermove", e => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
new IntersectionObserver(es => { run = es[0].isIntersecting; if (run) draw(); }).observe(cv);
const draw = () => {
  if (!run) return;
  ctx.clearRect(0, 0, W, H);
  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
    const dx = p.x - mouse.x, dy = p.y - mouse.y, dm = Math.hypot(dx, dy);
    if (dm < 140) { p.x += dx / dm * 1.2; p.y += dy / dm * 1.2; }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, 6.283);
    ctx.fillStyle = "rgba(255,255,255,.7)";
    ctx.fill();
    for (let j = i + 1; j < pts.length; j++) {
      const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
      if (d < 130) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(200,205,215,${(1 - d / 130) * .22})`;
        ctx.lineWidth = .6;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
};
size();
draw();

const form = $("#form"), note = $("#formNote");
const msg = () => {
  const f = new FormData(form);
  return `Olá! Meu nome é ${f.get("nome")}.\nTelefone: ${f.get("telefone")}\nEmail: ${f.get("email") || "-"}\nEmpresa: ${f.get("empresa") || "-"}\n\nComo imagino meu site:\n${f.get("visao")}\n\nMensagem: ${f.get("mensagem")}`;
};
const valid = () => {
  let ok = true;
  $$("[required]", form).forEach(i => {
    const bad = !i.value.trim();
    i.classList.toggle("err", bad);
    if (bad) ok = false;
  });
  note.textContent = ok ? "" : "Preencha os campos obrigatórios.";
  return ok;
};
form.addEventListener("submit", e => {
  e.preventDefault();
  if (!valid()) return;
  wa(msg());
  note.textContent = "Abrindo o WhatsApp com a sua mensagem.";
});

document.body.classList.add("loading");
const fill = $("#ldFill"), num = $("#ldNum");
let pct = 0, loaded = document.readyState === "complete";
addEventListener("load", () => loaded = true);
const tick = () => {
  pct += loaded ? 4 : Math.max(.4, (88 - pct) * .03);
  pct = Math.min(pct, 100);
  fill.style.width = pct + "%";
  num.textContent = Math.floor(pct) + "%";
  if (pct < 100) return requestAnimationFrame(tick);
  setTimeout(() => {
    $("#loader").classList.add("done");
    document.body.classList.remove("loading");
    observe();
  }, 350);
};
tick();
})();
