/* Affichage du site à partir de content.js — normalement rien à modifier ici. */
(function () {
  "use strict";
  const S = window.SITE;
  const $ = (s, el = document) => el.querySelector(s);
  const homeTitle = document.title; // titre de l'onglet défini dans index.html

  /* ---------- Textes de l'interface ---------- */
  const UI = {
    en: {
      "nav.work": "work", "nav.about": "about", "nav.credits": "credits", "nav.contact": "contact",
      skip: "Skip to projects", seeWork: "see the work", news: "news", resume: "download my resume", resumeSoon: "coming soon",
      awards: "awards", contactTitle: "contact", type: "type", tech: "tools", platforms: "platforms",
      role: "role", year: "year", download: "download the game", close: "Close", prev: "Previous project",
      next: "Next project", noContact: "Contact details coming soon.", legal: "legal notice",
      play: "Play video", lang: "EN", langLabel: "Voir le site en français",
      toLight: "Switch to light mode", toDark: "Switch to dark mode", cv: "cv",
      formName: "name", formEmail: "email", formMessage: "message", formSend: "send",
      formSending: "Sending…", formSent: "Thanks! Your message has been sent.",
      formInvalid: "Please fill in every field with a valid email address.",
      formError: "Sorry, the message could not be sent. Please try again later.",
    },
    fr: {
      "nav.work": "projets", "nav.about": "à propos", "nav.credits": "crédits", "nav.contact": "contact",
      skip: "Aller aux projets", seeWork: "voir les projets", news: "actualités", resume: "télécharger mon cv", resumeSoon: "bientôt disponible",
      awards: "prix et distinctions", contactTitle: "contact", type: "type", tech: "outils", platforms: "plateformes",
      role: "rôle", year: "année", download: "télécharger le jeu", close: "Fermer", prev: "Projet précédent",
      next: "Projet suivant", noContact: "Coordonnées bientôt disponibles.", legal: "mentions légales",
      play: "Lire la vidéo", lang: "FR", langLabel: "View the site in English",
      toLight: "Passer en mode clair", toDark: "Passer en mode sombre", cv: "cv",
      formName: "nom", formEmail: "e-mail", formMessage: "message", formSend: "envoyer",
      formSending: "Envoi…", formSent: "Merci ! Votre message a bien été envoyé.",
      formInvalid: "Merci de remplir tous les champs avec une adresse e-mail valide.",
      formError: "Désolé, le message n'a pas pu être envoyé. Réessayez plus tard.",
    },
  };

  /* ---------- Langue ---------- */
  let lang = (function () {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "fr" || q === "en") return q;
    try { const s = localStorage.getItem("lang"); if (s === "fr" || s === "en") return s; } catch (e) {}
    return (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
  })();
  const other = () => (lang === "fr" ? "en" : "fr");
  // texte bilingue -> texte de la langue courante (repli sur l'autre langue)
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number" || Array.isArray(v)) return v;
    const a = v[lang], b = v[other()];
    return (a && a.length) ? a : (b || "");
  }
  const ui = k => UI[lang][k] || UI.en[k] || k;

  /* ---------- Mini-markdown ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  function inline(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, label, url) => {
        const ext = /^https?:/i.test(url);
        return `<a href="${url}"${ext ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`;
      });
  }
  function md(s) {
    return String(s || "").trim().split(/\n\s*\n/).filter(Boolean)
      .map(p => `<p>${inline(p.trim()).replace(/\n/g, "<br>")}</p>`).join("");
  }

  /* ---------- Rendu des sections ---------- */
  // projets affichés du plus récent au plus ancien (même année : ordre de content.js)
  const projects = (S.projects || []).map((p, i) => [p, i])
    .sort((a, b) => (parseInt(b[0].year) || 0) - (parseInt(a[0].year) || 0) || a[1] - b[1]).map(x => x[0]);
  const byId = Object.fromEntries(projects.map(p => [p.id, p]));
  // filtre sélectionné à l'ouverture : le premier autre que "all"
  let filter = ((S.filters || []).find(f => f.tag !== "*") || {}).tag || "*";

  function renderStatic() {
    document.documentElement.lang = lang;
    document.documentElement.style.setProperty("--accent", S.accent || "#e8a33d");
    document.querySelectorAll("[data-ui]").forEach(el => { el.textContent = ui(el.dataset.ui); });
    $("#brand").textContent = S.name;
    $("#headline").textContent = t(S.headline) || S.name;
    setThemeLabel();
    $("#intro").innerHTML = inline(t(S.intro));
    const lt = $("#langToggle"); lt.textContent = ui("lang"); lt.setAttribute("aria-label", ui("langLabel"));
    $("#mPrev").setAttribute("aria-label", ui("prev"));
    $("#mNext").setAttribute("aria-label", ui("next"));
    document.querySelectorAll("[data-close].close").forEach(b => b.setAttribute("aria-label", ui("close")));

    // à propos
    const a = S.about || {};
    $("#aboutText").innerHTML = md(t(a.text));
    const news = (S.news || []).map(n => t(n)).filter(Boolean);
    $("#newsBlock").hidden = !news.length;
    $("#news").innerHTML = news.map(n => `<li>${inline(n)}</li>`).join("");
    $("#skills").innerHTML = (S.skills || []).map(g =>
      `<div><h3>${esc(t(g.title))}</h3><ul>${t(g.items).map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("");
    const r = t(S.resume); $("#resume").hidden = !r; $("#resume").href = r || "#"; $("#resumeSoon").hidden = !!r;

    // crédits
    const link = (id, label) => id && byId[id] ? `<a href="#${id}">${esc(label)}</a>` : esc(label);
    $("#creditsList").innerHTML = (S.credits || []).map(g => `
      <div class="credit-group"><h3>${esc(t(g.title))}</h3><ol>${g.rows.map(r => `
        <li class="credit-row"><span class="credit-year">${r.year || ""}</span>
          <span><span class="credit-title">${link(r.project, r.title)}</span></span>
          <span class="credit-meta">${esc(t(r.role))}${r.where ? " · " + esc(r.where) : ""}</span></li>`).join("")}
      </ol></div>`).join("");
    $("#awards").innerHTML = (S.awards || []).map(w => `
      <li><span class="aw-year">${w.year}</span><span>${esc(t(w.award))}${w.project ? ` · ${link(w.project, byId[w.project] ? byId[w.project].title : w.project)}` : ""}</span></li>`).join("");

    // contact
    const c = S.contact || {};
    const links = (c.links || []).filter(l => l && l.url);
    $("#contactBody").innerHTML =
      (c.email ? `<a class="contact-mail" href="mailto:${esc(c.email)}">${esc(c.email)}</a>` : "") +
      (links.length ? `<ul class="contact-links">${links.map(l => `<li><a class="btn small" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(t(l.label))} <span aria-hidden="true">↗</span></a></li>`).join("")}</ul>` : "");
    // © première année des projets – année en cours (mise à jour automatique)
    $("#footer").innerHTML = `<span>© ${projects.reduce((m, p) => Math.min(m, p.year || 9999), 2012)}–${new Date().getFullYear()} ${esc(S.name)}</span>` +
      `<span class="footer-links"><a href="#legal">${ui("legal")}</a><a href="#top">↑ top</a></span>`;
    $("#legalText").innerHTML = md(t(S.legal));
  }

  function renderFilters() {
    const count = tag => projects.filter(p => tag === "*" || (p.tags || []).includes(tag)).length;
    $("#filters").innerHTML = (S.filters || []).filter(f => count(f.tag)).map(f =>
      `<button type="button" class="filter" data-tag="${esc(f.tag)}" aria-pressed="${f.tag === filter}"><span>${esc(t(f.label))}</span></button>`).join("");
  }

  function visibleProjects() { return projects.filter(p => filter === "*" || (p.tags || []).includes(filter)); }

  function renderGrid() {
    $("#grid").innerHTML = visibleProjects().map((p, i) => `
      <li style="animation-delay:${Math.min(i, 12) * 40}ms">
        <a class="card" href="#${esc(p.id)}" aria-label="${esc(p.title)}, ${p.year || ""}">
          <img src="${esc(p.cover || "")}" alt="" loading="${i < 6 ? "eager" : "lazy"}" decoding="async">
          <span class="card-info">
            <span><span class="card-title">${esc(p.title)}</span><span class="card-type">${esc(t(p.type))}</span></span>
            <span class="card-year">${p.year || ""}</span>
          </span>
        </a></li>`).join("");
  }

  /* ---------- Fiche projet ---------- */
  const modal = $("#modal");
  let current = null, mediaIndex = 0, lastFocus = null, openedByUs = false;
  const PLAY = '<svg viewBox="0 0 10 12" aria-hidden="true"><path d="M0 0l10 6-10 6z"/></svg>';

  function mediaThumb(m, p) {
    if (m.youtube) return `<img src="${m.poster ? esc(m.poster) : `https://i.ytimg.com/vi/${esc(m.youtube)}/mqdefault.jpg`}" alt="" loading="lazy"><span class="pi">${PLAY}</span>`;
    if (m.image) return `<img src="${esc(m.image)}" alt="" loading="lazy">`;
    if (m.vimeo) return (p.cover ? `<img src="${esc(p.cover)}" alt="" loading="lazy">` : `<span class="badge">vimeo</span>`) + `<span class="pi">${PLAY}</span>`;
    if (m.soundcloud) return `<span class="badge">audio</span>`;
    return "";
  }

  function showMedia(i) {
    const p = current, list = p.media || [];
    if (!list.length) { $("#mStage").innerHTML = p.cover ? `<img class="poster" src="${esc(p.cover)}" alt="">` : ""; $("#mCaption").textContent = ""; return; }
    mediaIndex = (i + list.length) % list.length;
    const m = list[mediaIndex], stage = $("#mStage");
    stage.classList.toggle("audio", !!m.soundcloud);
    let html = "";
    if (m.youtube) {
      // image d'aperçu : "poster" du média si fourni, sinon celle de YouTube
      html = (m.poster ? `<img class="poster" src="${esc(m.poster)}" alt="">`
        : `<img class="poster" src="https://i.ytimg.com/vi/${esc(m.youtube)}/maxresdefault.jpg" alt="" onload="if(this.naturalWidth<200)this.src='https://i.ytimg.com/vi/${esc(m.youtube)}/hqdefault.jpg'">`) + `
              <button type="button" class="play" aria-label="${ui("play")}"><span>${PLAY}</span></button>`;
    } else if (m.vimeo) {
      html = `<iframe src="https://player.vimeo.com/video/${esc(m.vimeo)}?dnt=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${esc(p.title)}"></iframe>`;
    } else if (m.soundcloud) {
      html = `<iframe src="https://w.soundcloud.com/player/?url=${encodeURIComponent(m.soundcloud)}&visual=true&color=%23${(S.accent || "#e8a33d").slice(1)}" allow="autoplay" title="${esc(p.title)}"></iframe>`;
    } else if (m.image) {
      html = `<img class="zoomable" src="${esc(m.image)}" alt="${esc(t(m.caption) || p.title)}">`;
    }
    if (list.length > 1) html += `<button type="button" class="icon-btn stage-nav prev" aria-label="←">←</button><button type="button" class="icon-btn stage-nav next" aria-label="→">→</button>`;
    stage.innerHTML = html;
    const play = $(".play", stage);
    if (play) play.addEventListener("click", () => {
      stage.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(m.youtube)}?autoplay=1&rel=0" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen title="${esc(p.title)}"></iframe>` +
        (list.length > 1 ? stage.innerHTML.slice(stage.innerHTML.indexOf('<button type="button" class="icon-btn stage-nav')) : "");
      bindStageNav();
    });
    bindStageNav();
    $("#mCaption").textContent = t(m.caption) || "";
    document.querySelectorAll("#mThumbs button").forEach((b, k) => b.setAttribute("aria-current", k === mediaIndex));
  }
  function bindStageNav() {
    const st = $("#mStage");
    const pv = $(".stage-nav.prev", st), nx = $(".stage-nav.next", st);
    if (pv) pv.onclick = () => showMedia(mediaIndex - 1);
    if (nx) nx.onclick = () => showMedia(mediaIndex + 1);
  }

  function renderProject(p) {
    current = p;
    const list = visibleProjects().includes(p) ? visibleProjects() : projects;
    const idx = list.indexOf(p);
    $("#mCount").textContent = `${String(idx + 1).padStart(2, "0")} / ${String(list.length).padStart(2, "0")}`;
    $("#mTitle").textContent = p.title;
    const facts = [["role", t(p.role)], ["tech", p.tech], ["platforms", p.platforms], ["year", p.year]].filter(f => f[1]);
    $("#mFacts").innerHTML = facts.map(([k, v]) => `<dt>${ui(k)}</dt><dd>${esc(v)}</dd>`).join("");
    $("#mActions").innerHTML =
      (p.download ? `<a class="text-link" href="${esc(p.download)}" target="_blank" rel="noopener">${ui("download")}</a>` : "") +
      (p.links || []).filter(l => l.url).map(l => `<a class="text-link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(t(l.label))}</a>`).join("");
    $("#mText").innerHTML = md(t(p.text));
    const media = p.media || [];
    $("#mThumbs").innerHTML = media.length > 1 ? media.map((m, i) => `<li><button type="button" data-i="${i}" aria-label="${esc(t(m.caption) || (i + 1))}">${mediaThumb(m, p)}</button></li>`).join("") : "";
    showMedia(0);
    $(".modal-panel").scrollTop = 0;
  }

  function openProject(id, push) {
    const p = byId[id]; if (!p) return false;
    if (modal.hidden) { lastFocus = document.activeElement; }
    renderProject(p);
    modal.hidden = false;
    document.body.classList.add("modal-open");
    $(".modal-panel").focus({ preventScroll: true });
    document.title = `${p.title} — ${S.name}`;
    if (push) { openedByUs = true; }
    return true;
  }
  function closeProject(fromHash) {
    if (modal.hidden) return;
    modal.hidden = true;
    $("#zoom").hidden = true;                 // ferme l'aperçu agrandi s'il est ouvert
    $("#mStage").innerHTML = "";              // coupe les vidéos en cours
    document.body.classList.remove("modal-open");
    document.title = homeTitle;
    if (!fromHash) {
      if (openedByUs) history.back();
      else history.replaceState(null, "", location.pathname + location.search + "#work");
    }
    openedByUs = false;
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  function step(d) {
    const list = visibleProjects().includes(current) ? visibleProjects() : projects;
    const p = list[(list.indexOf(current) + d + list.length) % list.length];
    history.replaceState(null, "", "#" + p.id);
    renderProject(p);
  }

  /* ---------- Navigation par l'adresse (#id) ---------- */
  function route(e) {
    const id = decodeURIComponent(location.hash.slice(1));
    if (byId[id]) { openProject(id, !!e); return; }
    closeProject(true);
  }

  /* ---------- Événements ---------- */
  // aperçu agrandi des images du carousel
  const zoom = $("#zoom");
  const setZoom = src => { zoom.hidden = !src; if (src) $("img", zoom).src = src; };
  document.addEventListener("click", e => {
    if (!zoom.hidden) { setZoom(null); return; }                       // un clic n'importe où ferme l'aperçu
    const zi = e.target.closest("#mStage img.zoomable");
    if (zi) { setZoom(zi.src); return; }
    const f = e.target.closest(".filter");
    if (f) { filter = f.dataset.tag; renderFilters(); renderGrid(); return; }
    const th = e.target.closest("#mThumbs button");
    if (th) { showMedia(+th.dataset.i); return; }
    if (e.target.closest("[data-close]")) { closeProject(false); return; }
    // clic dans le vide de la fiche projet = fermer, sauf à côté des textes à droite du player
    // (entre le player et les textes, jusqu'à la fin des textes ; sous les textes, ça ferme)
    if (!modal.hidden && !e.target.closest(".info") && e.target.matches(".modal-panel, .modal-content, .modal-bar, .viewer")) {
      const info = $(".info").getBoundingClientRect(), viewer = $(".viewer").getBoundingClientRect();
      const inTextColumn = e.target.matches(".modal-content, .modal-panel") && innerWidth > 900 &&
        e.clientX >= viewer.right && e.clientX <= info.right && e.clientY <= info.bottom;
      if (!inTextColumn) { closeProject(false); return; }
    }
    const a = e.target.closest('a[href^="#"]');
    if (a && !modal.hidden && !byId[a.getAttribute("href").slice(1)]) {
      // lien vers une section depuis la fiche : on ferme d'abord
      e.preventDefault(); const target = a.getAttribute("href");
      modal.hidden = true; document.body.classList.remove("modal-open"); $("#mStage").innerHTML = "";
      history.replaceState(null, "", target); const el = $(target); if (el) el.scrollIntoView();
    }
  });
  $("#mPrev").addEventListener("click", () => step(-1));
  $("#mNext").addEventListener("click", () => step(1));
  document.addEventListener("keydown", e => {
    if (modal.hidden) return;
    if (!zoom.hidden) { if (e.key === "Escape") setZoom(null); return; }
    if (e.key === "Escape") closeProject(false);
    else if (e.key === "ArrowRight" && !e.target.closest("iframe")) showMedia(mediaIndex + 1);
    else if (e.key === "ArrowLeft") showMedia(mediaIndex - 1);
    else if (e.key === "Tab") {         // garde le focus dans la fiche
      const f = [...modal.querySelectorAll("button, a[href], iframe")].filter(x => x.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  window.addEventListener("hashchange", route);

  $("#langToggle").addEventListener("click", () => {
    lang = other();
    try { localStorage.setItem("lang", lang); } catch (e) {}
    renderAll();
    if (!modal.hidden && current) { const i = mediaIndex; renderProject(current); showMedia(i); }
  });

  // thème clair / sombre
  const root = document.documentElement;
  const isLight = () => root.dataset.theme === "light";
  function setThemeLabel() {
    const b = $("#themeToggle"), label = ui(isLight() ? "toDark" : "toLight");
    b.setAttribute("aria-label", label); b.title = label;
    const m = $('meta[name="theme-color"]'); if (m) m.content = isLight() ? "#f3f1ec" : "#0b0b0c";
  }
  $("#themeToggle").addEventListener("click", () => {
    if (isLight()) delete root.dataset.theme; else root.dataset.theme = "light";
    try { localStorage.setItem("theme", isLight() ? "light" : "dark"); } catch (e) {}
    setThemeLabel();
  });

  // formulaire de contact (envoi vers Formspree, adresse dans content.js > contact.form)
  const form = $("#contactForm"), status = $("#cfStatus");
  form.addEventListener("submit", async e => {
    e.preventDefault();
    const setStatus = (k, ok) => { status.textContent = ui(k); status.className = "form-status" + (ok ? " ok" : ok === false ? " err" : ""); };
    if (!form.checkValidity()) { setStatus("formInvalid", false); return; }
    const endpoint = (S.contact || {}).form;
    if (!endpoint) { console.warn("Formulaire : renseignez contact.form dans content.js"); setStatus("formError", false); return; }
    const btn = form.querySelector("button");
    btn.disabled = true; setStatus("formSending");
    try {
      const r = await fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!r.ok) throw new Error(r.status);
      form.reset(); setStatus("formSent", true);
    } catch (err) { setStatus("formError", false); }
    btn.disabled = false;
  });

  // menu mobile
  const nav = $("#nav"), mt = $("#menuToggle"), bar = $("#topbar");
  function setMenu(open) { nav.classList.toggle("open", open); bar.classList.toggle("menu-open", open); mt.setAttribute("aria-expanded", open); }
  mt.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });

  // barre du haut + lien actif
  const sections = ["work", "about", "credits", "contact"].map(id => document.getElementById(id));
  function onScroll() {
    bar.classList.toggle("scrolled", scrollY > 30);
    let active = null;
    for (const s of sections) if (s.getBoundingClientRect().top < innerHeight * .4) active = s.id;
    nav.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + active));
  }
  addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Onde sonore animée du héros ---------- */
  function wave() {
    const c = $("#wave"), ctx = c.getContext("2d");
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w, h, dpr, tt = 0, mx = .5, my = .5, raf;
    function size() { dpr = Math.min(devicePixelRatio || 1, 2); w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    function hexA(hex, a) { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`; }
    function frame() {
      ctx.clearRect(0, 0, w, h);
      const ink = getComputedStyle(root).getPropertyValue("--wave-ink").trim() || "236,233,228";
      const lines = 7, mid = h * .36, acc = S.accent || "#e8a33d";
      for (let l = 0; l < lines; l++) {
        const k = l / (lines - 1);
        ctx.beginPath();
        for (let x = 0; x <= w; x += 4) {
          const u = x / w;
          const env = Math.exp(-Math.pow((u - mx) * 2.2, 2)) * .85 + .15;
          const y = mid + Math.sin(u * (9 + l * 1.7) + tt * (0.9 + k * .8) + l) * env * h * (.05 + .1 * my) * (1 - k * .5)
                        + Math.sin(u * 31 + tt * 2.3 + l * 2) * env * h * .012;
          x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.strokeStyle = l === 0 ? hexA(acc, .9) : `rgba(${ink},${(.05 + .1 * (1 - k)) * (isLight() ? 1.6 : 1)})`;
        ctx.lineWidth = l === 0 ? 1.6 : 1;
        ctx.stroke();
      }
      tt += .012;
      if (!still) raf = requestAnimationFrame(frame);
    }
    size(); frame();
    addEventListener("resize", () => { size(); if (still) frame(); });
    addEventListener("pointermove", e => { mx += (e.clientX / innerWidth - mx) * .5; my = e.clientY / innerHeight; }, { passive: true });
    document.addEventListener("visibilitychange", () => { cancelAnimationFrame(raf); if (!document.hidden && !still) raf = requestAnimationFrame(frame); });
  }

  function renderAll() { renderStatic(); renderFilters(); renderGrid(); }
  renderAll();
  onScroll();
  wave();
  route();
})();
