/* =========================================================
   Rosterplaner Forever - copia local
   Lógica propia en JavaScript, sin dependencias.
   ========================================================= */
(function () {
  "use strict";

  const D = window.RP;
  const LS_STATE = "rosterplaner.local.v1";
  const BUILD_RE = /^[0-9-]{1,200}$/;

  const TEXT = {
    es: {
      pageTitle: "Rosterplaner Forever · copia local",
      tagline: "Copia local · sin conexión",
      heroEyebrow: "Forever · planificador de roster",
      heroTitleA: "Planifica tu",
      heroTitleB: "roster",
      heroText: "Elige facción, raza y clase (solo combinaciones válidas), dos profesiones principales, secundarias, tu main y los builds de talentos y de Legado. Todo se guarda en este navegador.",
      statRaces: "razas",
      statCombos: "combinaciones",
      statProfessions: "profesiones",
      statRules: "reglas",
      rosterWord: "Roster",
      rulesNote: "Un roster por regla",
      titlePlaceholder: "Mi roster PvE",
      saveIdle: "Se guarda en este navegador.",
      savePending: "Cambios sin guardar…",
      saveSaved: "Guardado localmente · {time}",
      saveError: "No se pudo guardar (¿modo privado?). Exporta tu roster como copia de seguridad.",
      export: "Exportar",
      import: "Importar",
      addCharacter: "Añadir personaje",
      emptyEyebrow: "Aún vacío",
      emptyTitle: "¿A quién juegas desde el 5 de noviembre?",
      emptyText: "Crea tus personajes: facción, raza y clase (solo combinaciones válidas), profesiones, main, talentos y Legado. Debajo verás cómo queda tu roster.",
      firstCharacter: "Crear el primer personaje",
      copyFrom: "o copia desde",
      statsEyebrow: "Resumen",
      statsTitle: "Tu roster en cifras",
      charactersOne: "personaje",
      charactersMany: "personajes",
      classes: "Clases",
      races: "Razas",
      primaryProfessions: "Profesiones principales",
      coverage: "{n} de 9 cubiertas",
      secondaryBuilds: "Secundarias y builds",
      withTalent: "Con talentos",
      withLegacy: "Con Legado",
      hints: "Avisos",
      allClasses: "Las nueve clases están cubiertas.",
      missingClasses: "Aún no están en el roster:",
      allProfessions: "Las nueve profesiones están cubiertas.",
      missingProfessions: "Faltan profesiones: {list}",
      withoutPrimary: "{n} de {total} personajes todavía no tienen profesión principal.",
      supplierHint: "{a} sin {b} en el roster: las materias primas tendrán que venir de la casa de subastas.",
      secondaryLabel: "Secundarias",
      combosEyebrow: "Referencia",
      combosTitle: "Las 56 combinaciones de raza y clase",
      combosText: "Todas las combinaciones válidas de WoW Forever. En verde, las nuevas: mago orco, brujo trol, paladín no-muerto, cazador humano, sacerdote gnomo, chamán enano y los nacidos del cielo, que eligen facción al crearse.",
      combosLegendNew: "= combinación nueva en Forever",
      combosLegendYes: "= posible",
      combosLegendNo: "= no posible",
      footerLine1: "Proyecto no oficial, sin conexión con Blizzard ni con chromie.de. Los datos se guardan solo en este navegador.",
      footerLine2: "World of Warcraft y sus nombres son marcas de Blizzard Entertainment. Implementación propia con fines educativos y de uso personal.",
      notPossible: "no posible",
      new: "Nuevo",
      main: "Main",
      removeMain: "Quitar marca de main",
      setMain: "Marcar como main",
      statsAria: "Datos del planificador",
      rulesAria: "Reglas de juego",
      rosterName: "Nombre del roster",
      edit: "Editar",
      duplicate: "Duplicar",
      delete: "Quitar",
      dragHint: "Arrastra para reordenar (también Alt+flechas)",
      chooseProfession: "Elegir profesión",
      secondProfession: "Segunda profesión",
      crafting: "Fabricación",
      gathering: "Recolección",
      talentBuild: "Talentos",
      legacyBuild: "Legado",
      chooseTalent: "Elegir build de talentos",
      chooseLegacy: "Elegir build de Legado",
      ownBuild: "Build propio",
      buildNothing: "Sin puntos asignados.",
      total: "Total",
      modalCreateTitle: "Planificar personaje",
      modalEditTitle: "Editar personaje",
      modalCreateSub: "Elige facción, raza, sexo y clase: solo combinaciones que existen en WoW Forever.",
      modalEditSub: "Cambia los datos del personaje. Si cambias de clase, el build de talentos se borra.",
      faction: "Facción",
      race: "Raza",
      class: "Clase",
      name: "Nombre",
      nameHint: "Forever permite dos nombres por personaje. Ambos son opcionales.",
      gender: "Sexo",
      male: "Hombre",
      female: "Mujer",
      firstName: "Nombre",
      lastName: "Apellido",
      note: "Nota",
      noteHint: "Opcional, máx. 200 caracteres.",
      cancel: "Cancelar",
      create: "Añadir al roster",
      apply: "Aplicar",
      previewName: "Nuevo personaje",
      pickFaction: "Elige facción",
      pickRace: "Elige raza",
      pickClass: "Elige clase",
      lockedFaction: "Este roster juega {faction}. En esta regla no se pueden mezclar Alianza y Horda.",
      classResetFaction: "Clase restablecida: {class} no está disponible en esta facción.",
      classResetRace: "Clase restablecida: {race} no puede ser {class}.",
      invalidCombo: "Elige una raza y una clase válidas.",
      buildTalentTitle: "Build de talentos",
      buildLegacyTitle: "Build de Legado",
      buildSub: "Pega un código o un enlace del calculador; también puedes escribirlo a mano.",
      buildTitle: "Título (opcional)",
      buildTitlePlaceholder: "p. ej. Tanque de banda",
      buildCode: "Código o enlace",
      buildCodePlaceholderTalent: "51-20-0 o https://…?b=51-20-0",
      buildCodePlaceholderLegacy: "5-5-6 o enlace del calculador",
      buildCodeHint: "Se aceptan números y guiones. Si pegas un enlace, se extrae el parámetro b.",
      buildPreview: "Vista previa",
      legacyAllocator: "Reparto de puntos (máx. 16)",
      buildSave: "Guardar build",
      buildRemove: "Quitar build",
      buildError: "El código no es válido. Usa solo números y guiones (por ejemplo 5-5-6) y no pases de 16 puntos.",
      buildSaved: "Build guardado.",
      buildRemoved: "Build eliminado.",
      toastAdded: "{name} añadido al roster.",
      toastUpdated: "{name} actualizado.",
      toastDeleted: "{name} eliminado.",
      toastDuplicated: "Personaje duplicado.",
      toastImported: "Roster importado.",
      toastExported: "Copia exportada como archivo JSON.",
      toastMax: "Un roster admite como máximo {n} personajes.",
      toastCopied: "{n} personajes copiados desde {roster}.",
      toastShareImported: "Roster compartido importado ({n} personajes).",
      shareConfirm: "¿Importar el roster compartido «{title}» con {n} personajes en {roster}? Se sustituirá el roster actual de esa regla.",
      confirmReplace: "¿Sustituir todos los rosters guardados por el contenido del archivo?",
      importError: "No se pudo leer el archivo. Debe ser un JSON exportado por esta aplicación.",
      undo: "Deshacer",
      pickFactionFirst: "la facción se elige con el primer personaje",
      mixedAllowed: "Alianza y Horda pueden unirse aquí",
      filteredOut: "{n} personajes de la otra facción se omitieron.",
      talentPoints: "puntos de talento",
      noProfession: "Sin profesión"
    },
  };

  const el = {};
  let state = loadState();
  let active = state.active;
  let saveTimer = null;
  let saveStatus = { kind: "idle", at: null };
  let toastTimer = null;
  let noticeTimer = null;
  let charDraft = null;
  let buildDraft = null;
  let dragId = null;
  let lastFocus = null;

  /* ---------------- utilidades ---------------- */

  function t(key, vars) {
    let value = TEXT.es[key] || key;
    if (vars) {
      Object.keys(vars).forEach((name) => {
        value = value.split("{" + name + "}").join(String(vars[name]));
      });
    }
    return value;
  }

  function nm(entry) {
    if (!entry) return "";
    if (typeof entry === "string") return entry;
    const source = entry.name || entry.label || entry;
    if (!source) return "";
    if (typeof source === "string") return source;
    return source.es || "";
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function cleanText(value, max) {
    const text = String(value == null ? "" : value)
      .replace(/[\u0000-\u001f\u007f]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return text.slice(0, max);
  }

  function currentRoster() {
    return state.rulesets[active];
  }

  function findChar(id) {
    return currentRoster().characters.find((character) => character.id === id) || null;
  }

  function lockedFaction(rosterKey, excludeId) {
    const def = D.ruleset(rosterKey);
    if (!def || !def.factionExclusive) return null;
    const characters = state.rulesets[rosterKey].characters.filter((character) => character.id !== excludeId);
    if (!characters.length) return null;
    return D.race(characters[0].raceKey).faction;
  }

  function emptyState() {
    const rulesets = {};
    D.rulesets.forEach((def) => {
      rulesets[def.key] = { title: "", characters: [] };
    });
    return { version: 1, active: "PVE", rulesets };
  }

  function sanitizeBuild(raw) {
    if (!raw || typeof raw !== "object") return null;
    const code = typeof raw.buildString === "string" ? raw.buildString.trim() : "";
    if (!BUILD_RE.test(code)) return null;
    return {
      buildId: null,
      title: typeof raw.title === "string" ? cleanText(raw.title, 120) || null : null,
      buildString: code,
      encodingVersion: null
    };
  }

  function sanitizeCharacter(raw) {
    if (!raw || typeof raw !== "object") return null;
    if (!D.race(raw.raceKey) || !D.cls(raw.classKey)) return null;
    if (!D.isValidCombo(raw.raceKey, raw.classKey)) return null;

    let id = typeof raw.id === "string" && /^[A-Za-z0-9_-]{6,40}$/.test(raw.id) ? raw.id : D.randomId();
    const gender = raw.gender === "FEMALE" ? "FEMALE" : "MALE";
    const primary = Array.isArray(raw.primaryProfessions) ? raw.primaryProfessions : [];
    const validPrimary = [];
    primary.forEach((key) => {
      if (D.profession(key) && !validPrimary.includes(key) && validPrimary.length < D.limits.primaryProfessions) {
        validPrimary.push(key);
      }
    });
    const secondarySet = new Set(Array.isArray(raw.secondaryProfessions) ? raw.secondaryProfessions : []);
    const validSecondary = D.secondary.filter((entry) => secondarySet.has(entry.key)).map((entry) => entry.key);

    const talentBuild = sanitizeBuild(raw.talentBuild);
    let legacyBuild = sanitizeBuild(raw.legacyBuild);
    if (legacyBuild) {
      const total = D.buildSegments(legacyBuild.buildString).reduce((sum, value) => sum + value, 0);
      if (total <= 0 || total > D.limits.legacyPoints) legacyBuild = null;
    }

    return {
      id,
      firstName: cleanText(raw.firstName, D.limits.name),
      lastName: cleanText(raw.lastName, D.limits.name),
      raceKey: raw.raceKey,
      gender,
      classKey: raw.classKey,
      isMain: raw.isMain === true,
      primaryProfessions: validPrimary,
      secondaryProfessions: validSecondary,
      note: cleanText(raw.note, D.limits.note),
      talentBuild,
      legacyBuild
    };
  }

  function sanitizeRuleset(raw, def) {
    const characters = [];
    const ids = new Set();
    let factionSeen = null;
    const source = raw && Array.isArray(raw.characters) ? raw.characters : [];

    for (const item of source) {
      const character = sanitizeCharacter(item);
      if (!character) continue;
      if (ids.has(character.id)) character.id = D.randomId();
      if (ids.has(character.id)) continue;
      const characterFaction = D.race(character.raceKey).faction;
      if (def.factionExclusive && factionSeen && characterFaction !== factionSeen) continue;
      if (def.factionExclusive) factionSeen = characterFaction;
      if (character.isMain && characters.some((entry) => entry.isMain)) character.isMain = false;
      ids.add(character.id);
      characters.push(character);
      if (characters.length >= D.limits.charactersPerRoster) break;
    }

    if (characters.length && !characters.some((entry) => entry.isMain)) characters[0].isMain = true;
    return {
      title: cleanText(raw && raw.title, D.limits.title),
      characters
    };
  }

  function sanitizeState(raw) {
    const next = emptyState();
    if (!raw || typeof raw !== "object") return next;
    D.rulesets.forEach((def) => {
      next.rulesets[def.key] = sanitizeRuleset(raw.rulesets && raw.rulesets[def.key], def);
    });
    next.active = D.ruleset(raw.active) ? raw.active : "PVE";
    return next;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(LS_STATE);
      return raw ? sanitizeState(JSON.parse(raw)) : emptyState();
    } catch (error) {
      console.error("[rosterplaner] No se pudo leer el estado local:", error);
      return emptyState();
    }
  }

  function persist() {
    clearTimeout(saveTimer);
    saveTimer = null;
    try {
      state.active = active;
      localStorage.setItem(LS_STATE, JSON.stringify(state));
      setSave("saved", new Date());
      return true;
    } catch (error) {
      console.error("[rosterplaner] No se pudo guardar:", error);
      setSave("error");
      return false;
    }
  }

  function markDirty() {
    setSave("pending");
    clearTimeout(saveTimer);
    saveTimer = setTimeout(persist, 260);
  }

  function setSave(kind, at) {
    saveStatus = { kind, at: at || saveStatus.at };
    renderSave();
  }

  function renderSave() {
    if (!el.saveState) return;
    el.saveState.dataset.state = saveStatus.kind;
    let text = t("saveIdle");
    if (saveStatus.kind === "pending") text = t("savePending");
    if (saveStatus.kind === "error") text = t("saveError");
    if (saveStatus.kind === "saved") {
      const time = saveStatus.at
        ? new Date(saveStatus.at).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })
        : "";
      text = t("saveSaved", { time });
    }
    el.saveText.textContent = text;
  }

  function showToast(message, actionLabel, action, withAction) {
    clearTimeout(toastTimer);
    el.toast.innerHTML = "";
    const text = document.createElement("span");
    text.textContent = message;
    el.toast.appendChild(text);
    if (actionLabel && typeof action === "function") {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = actionLabel;
      button.addEventListener("click", () => {
        hideToast();
        action();
      });
      el.toast.appendChild(button);
    }
    el.toast.hidden = false;
    toastTimer = setTimeout(hideToast, withAction === false ? 4000 : actionLabel ? 7000 : 4000);
  }

  function hideToast() {
    clearTimeout(toastTimer);
    el.toast.hidden = true;
    el.toast.innerHTML = "";
  }

  function showNotice(message) {
    el.notice.textContent = message;
    el.notice.hidden = false;
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => {
      el.notice.hidden = true;
    }, 6500);
  }

  /* ---------------- render ---------------- */

  function render() {
    applyStatic();
    renderTabs();
    renderHero();
    renderHeader();
    renderCards();
    renderStats();
    renderCombos();
    renderSave();
  }

  function applyStatic() {
    document.documentElement.lang = "es";
    document.title = t("pageTitle");
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.placeholder = t(node.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-title]").forEach((node) => {
      node.title = t(node.dataset.i18nTitle);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
      node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
    });
  }

  function renderTabs() {
    el.tabs.innerHTML = D.rulesets.map((def) => {
      const count = state.rulesets[def.key].characters.length;
      const selected = def.key === active;
      return `<button type="button" class="tab ${selected ? "active" : ""}" data-ruleset="${def.key}" aria-current="${selected ? "page" : "false"}">
        <span class="tab-long">${esc(nm(def))}</span>
        <span class="tab-short">${esc(def.short.es)}</span>
        <span class="tab-count">${count}</span>
      </button>`;
    }).join("") + `<span class="tabs-note">${esc(t("rulesNote"))}</span>`;
  }

  function renderHero() {
    const stats = [
      [D.races.length, t("statRaces")],
      [D.totalCombos(), t("statCombos")],
      [D.professions.length, t("statProfessions")],
      [D.rulesets.length, t("statRules")]
    ];
    el.heroStats.innerHTML = stats
      .map(([value, label]) => `<span class="stat-chip"><strong>${value}</strong>${esc(label)}</span>`)
      .join("");
  }

  function rosterFactions() {
    const set = new Set();
    currentRoster().characters.forEach((character) => set.add(D.race(character.raceKey).faction));
    return [...set];
  }

  function renderHeader() {
    const def = D.ruleset(active);
    const factions = rosterFactions();
    let info = "";

    if (def.factionExclusive) {
      if (!factions.length) {
        info = `<span>· ${esc(t("pickFactionFirst"))}</span>`;
      } else {
        info = factions.map((key) => {
          const faction = D.faction(key);
          return `<span class="${key === "ALLIANCE" ? "alliance" : "horde"}">· ${esc(nm(faction))}</span>`;
        }).join("");
      }
    } else {
      info = `<span>· ${esc(t("mixedAllowed"))}</span>`;
    }

    el.rosterKicker.innerHTML = `${esc(nm(def))} · ${esc(t("rosterWord"))} ${info}`;

    if (document.activeElement !== el.rosterTitle) {
      el.rosterTitle.value = currentRoster().title;
    }
  }

  function profSelectHtml(character, index) {
    const value = character.primaryProfessions[index] || "";
    const other = character.primaryProfessions[index === 0 ? 1 : 0] || "";
    const disabled = index === 1 && !character.primaryProfessions[0];
    const current = value ? D.profession(value) : null;
    const groups = [["CRAFTING", t("crafting")], ["GATHERING", t("gathering")]]
      .map(([kind, label]) => {
        const options = D.professions
          .filter((entry) => entry.kind === kind)
          .map((entry) => `<option value="${entry.key}" ${entry.key === value ? "selected" : ""} ${entry.key === other ? "disabled" : ""}>${entry.icon} ${esc(nm(entry))}</option>`)
          .join("");
        return `<optgroup label="${esc(label)}">${options}</optgroup>`;
      })
      .join("");

    return `<div class="prof-select-wrap">
      <span class="prof-icon" aria-hidden="true">${current ? current.icon : "＋"}</span>
      <select class="prof-select" data-act="primary" data-slot="${index}" aria-label="${esc(index === 0 ? t("primaryProfessions") : t("secondProfession"))}" ${disabled ? "disabled" : ""}>
        <option value="">${esc(index === 0 ? t("chooseProfession") : t("secondProfession"))}</option>
        ${groups}
      </select>
    </div>`;
  }

  function buildSummaryText(build, type) {
    const segments = D.buildSegments(build.buildString);
    if (!segments.length) return "—";
    if (type === "legacy") {
      const total = segments.reduce((sum, value) => sum + value, 0);
      return `${D.legacyTrees.map((tree, index) => `${nm(tree)} ${segments[index] || 0}`).join(" · ")} · ${t("total")} ${total}`;
    }
    return segments.join(" / ");
  }

  function buildBoxHtml(character, type) {
    const build = type === "talent" ? character.talentBuild : character.legacyBuild;
    const label = type === "talent" ? t("talentBuild") : t("legacyBuild");
    if (!build) {
      return `<button class="build-empty" type="button" data-act="build" data-type="${type}">
        <span>${esc(label)}</span>
        <strong>+ ${esc(type === "talent" ? t("chooseTalent") : t("chooseLegacy"))}</strong>
      </button>`;
    }
    return `<div class="build-filled">
      <span class="build-label">${esc(label)}</span>
      <span class="build-title">${esc(build.title || t("ownBuild"))}</span>
      <span class="build-summary">${esc(buildSummaryText(build, type))}</span>
      <div class="build-actions">
        <button type="button" data-act="build" data-type="${type}" title="${esc(t("edit"))}" aria-label="${esc(t("edit"))}">✎</button>
        <button type="button" data-act="clearbuild" data-type="${type}" title="${esc(t("delete"))}" aria-label="${esc(t("delete"))}">✕</button>
      </div>
    </div>`;
  }

  function cardHtml(character) {
    const race = D.race(character.raceKey);
    const cls = D.cls(character.classKey);
    const faction = D.faction(race.faction);
    const isNew = D.isNewCombo(character.raceKey, character.classKey);
    const named = !!(character.firstName.trim() || character.lastName.trim());
    const name = D.displayName(character);
    const warnings = D.warnings(character);
    const mainLabel = character.isMain ? t("removeMain") : t("setMain");

    const secondaryChips = D.secondary.map((entry) => {
      const pressed = character.secondaryProfessions.includes(entry.key);
      return `<button type="button" class="chip" data-act="secondary" data-key="${entry.key}" aria-pressed="${pressed}" title="${esc(nm(entry))}">
        <span aria-hidden="true">${entry.icon}</span>${esc(nm(entry))}<span class="chip-mark" aria-hidden="true">${pressed ? "✓" : "+"}</span>
      </button>`;
    }).join("");

    return `<article class="card ${character.isMain ? "main" : ""}" data-id="${character.id}" style="--class-color:${cls.color};--faction-color:${faction.color}" aria-label="${esc(`${name}, ${nm(race)} ${nm(cls)}${character.isMain ? " (Main)" : ""}`)}">
      <div class="card-top">
        <div class="avatar" aria-hidden="true">${race.icon}<span class="class-badge" style="background:${cls.color}">${cls.icon}</span></div>
        <div class="card-id">
          <h3 class="card-name ${named ? "" : "unnamed"}">${esc(name)}</h3>
          <p class="card-sub">${esc(nm(race.short))} · <span style="color:${cls.color}">${esc(nm(cls))}</span>${isNew ? `<span class="badge-new">${esc(t("new"))}</span>` : ""}</p>
          <p class="card-faction"><span class="faction-dot" aria-hidden="true"></span>${esc(nm(faction))}</p>
        </div>
        <div class="card-mini-actions">
          <button class="icon-btn" type="button" data-act="main" aria-pressed="${character.isMain}" title="${esc(mainLabel)}" aria-label="${esc(mainLabel)}">${character.isMain ? "👑" : "♔"}</button>
          <button class="icon-btn drag" type="button" draggable="true" title="${esc(t("dragHint"))}" aria-label="${esc(t("dragHint"))}">⠿</button>
        </div>
      </div>

      <p class="section-label">${esc(t("primaryProfessions"))}</p>
      <div class="prof-row">${profSelectHtml(character, 0)}${profSelectHtml(character, 1)}</div>

      <p class="section-label">${esc(t("secondaryLabel"))}</p>
      <div class="chips">${secondaryChips}</div>

      <div class="builds">
        ${buildBoxHtml(character, "talent")}
        ${buildBoxHtml(character, "legacy")}
      </div>

      ${warnings.length ? `<ul class="warnings">${warnings.map((warning) => `<li>${esc(warning)}</li>`).join("")}</ul>` : ""}
      ${character.note ? `<p class="card-note">«${esc(character.note)}»</p>` : ""}

      <div class="card-footer">
        <button class="link-btn" type="button" data-act="edit">✎ ${esc(t("edit"))}</button>
        <button class="link-btn" type="button" data-act="duplicate">⧉ ${esc(t("duplicate"))}</button>
        <button class="link-btn danger" type="button" data-act="delete">🗑 ${esc(t("delete"))}</button>
      </div>
    </article>`;
  }

  function addTileHtml() {
    const total = currentRoster().characters.length;
    return `<button class="add-tile" type="button" data-act="add">
      <span class="plus" aria-hidden="true">＋</span>
      <strong>${esc(t("addCharacter"))}</strong>
      <small>${total} / ${D.limits.charactersPerRoster}</small>
    </button>`;
  }

  function emptyHtml() {
    const sources = D.rulesets.filter((def) => def.key !== active && state.rulesets[def.key].characters.length > 0);
    const copy = sources.length
      ? `<p class="copy-row"><span>${esc(t("copyFrom"))}</span>${sources
          .map((def) => `<button type="button" data-act="copy" data-source="${def.key}">${esc(nm(def))} (${state.rulesets[def.key].characters.length})</button>`)
          .join("")}</p>`
      : "";
    return `<div class="empty" style="grid-column:1/-1">
      <p class="eyebrow">${esc(t("emptyEyebrow"))}</p>
      <h2>${esc(t("emptyTitle"))}</h2>
      <p>${esc(t("emptyText"))}</p>
      <button class="btn primary" type="button" data-act="add">＋ ${esc(t("firstCharacter"))}</button>
      ${copy}
    </div>`;
  }

  function renderCards() {
    const characters = currentRoster().characters;
    if (!characters.length) {
      el.cards.innerHTML = emptyHtml();
      return;
    }
    el.cards.innerHTML = characters.map(cardHtml).join("")
      + (characters.length < D.limits.charactersPerRoster ? addTileHtml() : "");
  }

  function barsHtml(items, total) {
    const max = Math.max(1, ...items.map((item) => item.count));
    return `<ul class="bars">${items.map((item) => {
      const pct = total ? Math.round((item.count / total) * 100) : 0;
      return `<li class="bar-row">
        <span class="bar-icon" aria-hidden="true">${item.icon}</span>
        <span class="bar-label">${esc(item.label)}</span>
        <span class="bar-track" aria-hidden="true"><span class="bar-fill" style="width:${item.count ? Math.max(3, (item.count / max) * 100) : 0}%;background:${item.color}"></span></span>
        <span class="bar-count">${item.count}${item.count ? `<small>${pct}%</small>` : ""}</span>
      </li>`;
    }).join("")}</ul>`;
  }

  function renderStats() {
    const characters = currentRoster().characters;
    if (!characters.length) {
      el.stats.hidden = true;
      el.stats.innerHTML = "";
      return;
    }
    el.stats.hidden = false;

    const total = characters.length;
    const factions = D.factions.map((faction) => ({
      ...faction,
      count: characters.filter((character) => D.race(character.raceKey).faction === faction.key).length
    })).filter((entry) => entry.count > 0);

    const classItems = D.classes.map((cls) => ({
      icon: cls.icon,
      label: nm(cls),
      color: cls.color,
      count: characters.filter((character) => character.classKey === cls.key).length
    }));

    const presentFactions = new Set(characters.map((character) => D.race(character.raceKey).faction));
    const raceItems = D.races
      .filter((race) => presentFactions.has(race.faction))
      .map((race) => ({
        icon: race.icon,
        label: nm(race.short),
        color: D.faction(race.faction).color,
        count: characters.filter((character) => character.raceKey === race.key).length
      }));

    const covered = new Set();
    const profCells = D.professions.map((prof) => {
      const list = characters.filter((character) => character.primaryProfessions.includes(prof.key));
      if (list.length) covered.add(prof.key);
      return `<div class="prof-cell ${list.length ? "" : "missing"}">
        <span class="p-icon" aria-hidden="true">${prof.icon}</span>
        <div class="p-body">
          <div class="p-name"><span>${esc(nm(prof))}</span><span class="p-count">${list.length ? `${list.length}×` : "—"}</span></div>
          <span class="p-chars">${list.length ? esc(list.map((character) => D.displayName(character)).join(", ")) : esc(prof.kind === "CRAFTING" ? t("crafting") : t("gathering"))}</span>
        </div>
      </div>`;
    }).join("");

    const missingClasses = D.classes.filter((cls) => !characters.some((character) => character.classKey === cls.key));
    const supplierHints = D.professions.filter((prof) => prof.supplier && covered.has(prof.key) && !covered.has(prof.supplier));
    const withoutPrimary = characters.filter((character) => character.primaryProfessions.length === 0).length;
    const missingProfessions = D.professions.filter((prof) => !covered.has(prof.key));

    const hintItems = [];
    if (missingClasses.length) {
      hintItems.push(`<li><span class="bad">${esc(t("missingClasses"))}</span> <span>${missingClasses.map((cls) => `<span style="color:${cls.color}">${esc(nm(cls))}</span>`).join(", ")}</span></li>`);
    } else {
      hintItems.push(`<li><span class="ok">${esc(t("allClasses"))}</span></li>`);
    }
    supplierHints.forEach((prof) => {
      hintItems.push(`<li class="hint">${esc(t("supplierHint", { a: nm(prof), b: nm(D.profession(prof.supplier)) }))}</li>`);
    });
    if (withoutPrimary) {
      hintItems.push(`<li class="hint">${esc(t("withoutPrimary", { n: withoutPrimary, total }))}</li>`);
    }
    if (!missingProfessions.length) {
      hintItems.push(`<li><span class="ok">${esc(t("allProfessions"))}</span></li>`);
    } else {
      hintItems.push(`<li class="hint">${esc(t("missingProfessions", { list: missingProfessions.map(nm).join(", ") }))}</li>`);
    }

    const secondaryItems = D.secondary.map((entry) => {
      const count = characters.filter((character) => character.secondaryProfessions.includes(entry.key)).length;
      return `<li><span aria-hidden="true">${entry.icon}</span><span class="spacer">${esc(nm(entry))}</span><span class="num">${count} / ${total}</span></li>`;
    }).join("");

    const talentCount = characters.filter((character) => character.talentBuild).length;
    const legacyCount = characters.filter((character) => character.legacyBuild).length;

    el.stats.innerHTML = `<div class="stats-head">
      <div><p class="eyebrow">${esc(t("statsEyebrow"))}</p><h2>${esc(t("statsTitle"))}</h2></div>
      <div class="stats-total">
        ${factions.map((faction) => `<span class="faction-tag"><span class="faction-dot" style="--faction-color:${faction.color};background:${faction.color}"></span><span style="color:${faction.color}">${esc(nm(faction))}</span> <span>(${faction.count})</span></span>`).join("")}
        <span>· ${total} ${esc(total === 1 ? t("charactersOne") : t("charactersMany"))}</span>
      </div>
    </div>
    <div class="stats-grid">
      <div class="panel"><h3>${esc(t("classes"))}</h3>${barsHtml(classItems, total)}</div>
      <div class="panel"><h3>${esc(t("races"))}</h3>${barsHtml(raceItems, total)}</div>
      <div class="panel panel-wide">
        <div style="display:flex;align-items:baseline;justify-content:space-between;gap:10px;flex-wrap:wrap">
          <h3>${esc(t("primaryProfessions"))}</h3>
          <p style="color:var(--muted);font-size:11px">${esc(t("coverage", { n: covered.size }))}</p>
        </div>
        <div class="prof-grid">${profCells}</div>
      </div>
      <div class="panel">
        <h3>${esc(t("secondaryBuilds"))}</h3>
        <ul class="simple-list">
          ${secondaryItems}
          <li style="border-top:1px solid var(--line);padding-top:8px"><span class="spacer">${esc(t("withTalent"))}</span><span class="num">${talentCount} / ${total}</span></li>
          <li><span class="spacer">${esc(t("withLegacy"))}</span><span class="num">${legacyCount} / ${total}</span></li>
        </ul>
      </div>
      <div class="panel">
        <h3>${esc(t("hints"))}</h3>
        <ul class="simple-list">${hintItems.join("")}</ul>
      </div>
    </div>`;
  }

  function renderCombos() {
    const header = `<tr><th scope="col">${esc(t("race"))}</th>${D.classes.map((cls) => `<th scope="col" title="${esc(nm(cls))}"><span class="cicon" aria-hidden="true">${cls.icon}</span>${esc(nm(cls))}</th>`).join("")}</tr>`;
    const rows = [];

    D.factions.forEach((faction) => {
      rows.push(`<tr class="group-row"><th colspan="${D.classes.length + 1}">${faction.mark} ${esc(nm(faction))}</th></tr>`);
      D.races.filter((race) => race.faction === faction.key).forEach((race) => {
        const cells = D.classes.map((cls) => {
          const possible = race.classes.includes(cls.key);
          if (!possible) return `<td class="no"><span aria-hidden="true">–</span><span class="sr-only">${esc(t("notPossible"))}</span></td>`;
          const fresh = race.newClasses.includes(cls.key);
          return `<td class="ok"><span aria-hidden="true">✓</span>${fresh ? `<span class="new" title="${esc(t("new"))}">${esc(t("new"))}</span>` : ""}</td>`;
        }).join("");
        rows.push(`<tr><th scope="row" class="race-cell"><span class="race-inner"><span class="race-ico" aria-hidden="true">${race.icon}</span><span class="race-name">${esc(nm(race))}</span></span></th>${cells}</tr>`);
      });
    });

    el.comboMatrix.innerHTML = `<div class="table-scroll"><table class="combo-table"><thead>${header}</thead><tbody>${rows.join("")}</tbody></table></div>`;
  }

  /* ---------------- acciones sobre el roster ---------------- */

  function switchRoster(key) {
    if (!D.ruleset(key) || key === active) return;
    active = key;
    persist();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleMain(id) {
    const characters = currentRoster().characters;
    const character = characters.find((entry) => entry.id === id);
    if (!character) return;
    const wasMain = character.isMain;
    characters.forEach((entry) => { entry.isMain = false; });
    if (!wasMain) {
      character.isMain = true;
      const index = characters.indexOf(character);
      if (index > 0) {
        characters.splice(index, 1);
        characters.unshift(character);
      }
    }
    markDirty();
    render();
  }

  function deleteCharacter(id) {
    const characters = currentRoster().characters;
    const index = characters.findIndex((entry) => entry.id === id);
    if (index < 0) return;
    const [removed] = characters.splice(index, 1);
    if (removed.isMain && characters.length) characters[0].isMain = true;
    markDirty();
    render();
    showToast(t("toastDeleted", { name: D.displayName(removed) }), t("undo"), () => {
      const list = currentRoster().characters;
      list.splice(Math.min(index, list.length), 0, removed);
      if (removed.isMain) {
        list.forEach((entry) => { entry.isMain = false; });
        removed.isMain = true;
        const position = list.indexOf(removed);
        if (position > 0) {
          list.splice(position, 1);
          list.unshift(removed);
        }
      }
      markDirty();
      render();
    });
  }

  function duplicateCharacter(id) {
    const characters = currentRoster().characters;
    if (characters.length >= D.limits.charactersPerRoster) {
      showToast(t("toastMax", { n: D.limits.charactersPerRoster }));
      return;
    }
    const index = characters.findIndex((entry) => entry.id === id);
    if (index < 0) return;
    const copy = JSON.parse(JSON.stringify(characters[index]));
    copy.id = D.randomId();
    copy.isMain = false;
    characters.splice(index + 1, 0, copy);
    markDirty();
    render();
    showToast(t("toastDuplicated"));
  }

  function toggleSecondary(id, key) {
    const character = findChar(id);
    if (!character || !D.secondaryProf(key)) return;
    const set = new Set(character.secondaryProfessions);
    if (set.has(key)) set.delete(key);
    else set.add(key);
    character.secondaryProfessions = D.secondary.filter((entry) => set.has(entry.key)).map((entry) => entry.key);
    markDirty();
    render();
  }

  function clearBuild(id, type) {
    const character = findChar(id);
    if (!character) return;
    if (type === "legacy") character.legacyBuild = null;
    else character.talentBuild = null;
    markDirty();
    render();
    showToast(t("buildRemoved"));
  }

  function moveCharacter(id, direction) {
    const characters = currentRoster().characters;
    const index = characters.findIndex((entry) => entry.id === id);
    if (index < 0) return;
    const target = index + direction;
    if (target < 0 || target >= characters.length) return;
    const [moved] = characters.splice(index, 1);
    characters.splice(target, 0, moved);
    markDirty();
    render();
  }

  function copyFromRoster(sourceKey) {
    const source = state.rulesets[sourceKey];
    if (!source || !source.characters.length) return;
    const def = D.ruleset(active);
    let list = source.characters;
    let skipped = 0;

    if (def.factionExclusive) {
      const locked = lockedFaction(active, null);
      const faction = locked || D.race(list[0].raceKey).faction;
      const filtered = list.filter((character) => D.race(character.raceKey).faction === faction);
      skipped = list.length - filtered.length;
      list = filtered;
    }

    const room = D.limits.charactersPerRoster - currentRoster().characters.length;
    if (room <= 0) {
      showToast(t("toastMax", { n: D.limits.charactersPerRoster }));
      return;
    }

    const copies = list.slice(0, room).map((character) => {
      const copy = JSON.parse(JSON.stringify(character));
      copy.id = D.randomId();
      copy.isMain = false;
      return copy;
    });

    currentRoster().characters.push(...copies);
    if (!currentRoster().characters.some((character) => character.isMain)) {
      currentRoster().characters[0].isMain = true;
    }
    markDirty();
    render();
    showToast(t("toastCopied", { n: copies.length, roster: nm(D.ruleset(sourceKey)) })
      + (skipped ? " " + t("filteredOut", { n: skipped }) : ""));
  }

  /* ---------------- modal de personaje ---------------- */

  function openModal(html, focusFirst) {
    if (!el.modalRoot.innerHTML) lastFocus = document.activeElement;
    el.modalRoot.innerHTML = html;
    document.body.style.overflow = "hidden";

    el.modalRoot.querySelectorAll("[data-close]").forEach((node) => {
      node.addEventListener("click", closeModal);
    });
    const backdrop = el.modalRoot.querySelector(".modal-backdrop");
    if (backdrop) {
      backdrop.addEventListener("mousedown", (event) => {
        if (event.target === backdrop) closeModal();
      });
    }
    if (focusFirst) {
      const target = el.modalRoot.querySelector(".modal-body button, .modal-body input, .modal-body select, .modal-body textarea");
      if (target) setTimeout(() => target.focus(), 30);
    }
  }

  function closeModal() {
    el.modalRoot.innerHTML = "";
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") {
      try { lastFocus.focus(); } catch (error) { /* ignore */ }
    }
    lastFocus = null;
    charDraft = null;
    buildDraft = null;
  }

  function openCharacterModal(id) {
    const existing = id ? findChar(id) : null;
    const locked = lockedFaction(active, id || null);
    charDraft = existing
      ? {
          mode: "edit",
          id: existing.id,
          faction: D.race(existing.raceKey).faction,
          raceKey: existing.raceKey,
          classKey: existing.classKey,
          gender: existing.gender,
          firstName: existing.firstName,
          lastName: existing.lastName,
          note: existing.note,
          lockedFaction: locked,
          notice: ""
        }
      : {
          mode: "create",
          id: null,
          faction: locked,
          raceKey: null,
          classKey: null,
          gender: "MALE",
          firstName: "",
          lastName: "",
          note: "",
          lockedFaction: locked,
          notice: ""
        };
    renderCharacterModal(true);
  }

  function redrawCharacterModal() {
    const modal = el.modalRoot.querySelector(".modal");
    const scrollTop = modal ? modal.scrollTop : 0;
    renderCharacterModal(false);
    const next = el.modalRoot.querySelector(".modal");
    if (next) next.scrollTop = scrollTop;
  }

  function previewHtml() {
    const race = D.race(charDraft.raceKey);
    const cls = D.cls(charDraft.classKey);
    const faction = race ? D.faction(race.faction) : null;
    const fullName = [charDraft.firstName, charDraft.lastName].join(" ").trim();
    const genderLabel = charDraft.gender === "FEMALE" ? t("female") : t("male");
    const subtitle = race
      ? `${nm(race.short)} (${genderLabel}) · ${cls ? `<span style="color:${cls.color}">${esc(nm(cls))}</span>` : esc(t("pickClass"))}${faction ? ` · <span style="color:${faction.color}">${esc(nm(faction))}</span>` : ""}`
      : esc(t("pickRace"));

    return `<div class="preview">
      <div class="avatar" aria-hidden="true">${race ? race.icon : "＋"}${cls ? `<span class="class-badge" style="background:${cls.color}">${cls.icon}</span>` : ""}</div>
      <div style="min-width:0">
        <div class="preview-name">${esc(fullName || (cls ? nm(cls) : t("previewName")))}</div>
        <div class="preview-sub">${subtitle}</div>
      </div>
    </div>`;
  }

  function renderCharacterModal(focusFirst) {
    if (!charDraft) return;
    const raceList = charDraft.faction ? D.races.filter((race) => race.faction === charDraft.faction) : D.races;

    const factionButtons = D.factions.map((faction) => {
      const selected = charDraft.faction === faction.key;
      const disabled = !!charDraft.lockedFaction && charDraft.lockedFaction !== faction.key;
      const count = D.races.filter((race) => race.faction === faction.key).length;
      return `<button type="button" class="choice faction-choice ${selected ? "selected" : ""} ${disabled ? "dimmed" : ""}" data-faction="${faction.key}" ${disabled ? "disabled" : ""} aria-pressed="${selected}" style="--choice-color:${faction.color}">
        <span class="c-icon" aria-hidden="true">${faction.mark}</span>
        <span><span class="c-name">${esc(nm(faction))}</span><span class="c-sub">${count} ${esc(t("races"))}</span></span>
      </button>`;
    }).join("");

    const raceButtons = raceList.map((race) => {
      const selected = charDraft.raceKey === race.key;
      return `<button type="button" class="choice ${selected ? "selected" : ""}" data-race="${race.key}" aria-pressed="${selected}" style="--choice-color:${D.faction(race.faction).color}">
        <span class="c-icon" aria-hidden="true">${race.icon}${race.isNew ? `<span class="new-badge">${esc(t("new"))}</span>` : ""}</span>
        <span class="c-name">${esc(nm(race.short))}</span>
        ${charDraft.faction ? "" : `<span class="c-sub">${esc(nm(D.faction(race.faction)))}</span>`}
      </button>`;
    }).join("");

    const classButtons = D.classes.map((cls) => {
      const raceOk = charDraft.raceKey ? D.race(charDraft.raceKey).classes.includes(cls.key) : null;
      const factionOk = charDraft.faction ? D.classesForFaction(charDraft.faction).includes(cls.key) : true;
      const disabled = raceOk === null ? !factionOk : !raceOk;
      const selected = charDraft.classKey === cls.key;
      const isNew = charDraft.raceKey ? D.isNewCombo(charDraft.raceKey, cls.key) : false;
      return `<button type="button" class="choice ${selected ? "selected" : ""} ${disabled ? "dimmed" : ""}" data-class="${cls.key}" ${disabled ? "disabled" : ""} aria-pressed="${selected}" title="${esc(nm(cls))}" style="--choice-color:${cls.color}">
        <span class="c-icon" aria-hidden="true">${cls.icon}${isNew ? `<span class="new-badge">${esc(t("new"))}</span>` : ""}</span>
        <span class="c-name" style="color:${disabled ? "" : cls.color}">${esc(nm(cls))}</span>
      </button>`;
    }).join("");

    const canSubmit = !!(charDraft.raceKey && charDraft.classKey && D.isValidCombo(charDraft.raceKey, charDraft.classKey));
    const title = charDraft.mode === "edit" ? t("modalEditTitle") : t("modalCreateTitle");
    const subtitle = charDraft.mode === "edit" ? t("modalEditSub") : t("modalCreateSub");

    const html = `<div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="charModalTitle">
        <div class="modal-head">
          <div><h2 id="charModalTitle">${esc(title)}</h2><p>${esc(subtitle)}</p></div>
          <button type="button" class="modal-close" data-close aria-label="${esc(t("cancel"))}">✕</button>
        </div>
        <form id="charForm">
          <div class="modal-body">
            <fieldset class="fieldset">
              <legend><span class="step-num">1</span>${esc(t("faction"))}</legend>
              <div class="choice-grid factions">${factionButtons}</div>
              ${charDraft.lockedFaction ? `<p style="margin-top:7px;color:var(--muted);font-size:11px">${esc(t("lockedFaction", { faction: nm(D.faction(charDraft.lockedFaction)) }))}</p>` : ""}
            </fieldset>

            <fieldset class="fieldset">
              <legend><span class="step-num">2</span>${esc(t("race"))}</legend>
              <div class="gender-row">
                <span class="gender-label">${esc(t("gender"))}</span>
                <div class="segmented" role="group" aria-label="${esc(t("gender"))}">
                  <button type="button" data-gender="MALE" class="${charDraft.gender === "MALE" ? "selected" : ""}" aria-pressed="${charDraft.gender === "MALE"}">♂ ${esc(t("male"))}</button>
                  <button type="button" data-gender="FEMALE" class="${charDraft.gender === "FEMALE" ? "selected" : ""}" aria-pressed="${charDraft.gender === "FEMALE"}">♀ ${esc(t("female"))}</button>
                </div>
              </div>
              <div class="choice-grid races">${raceButtons}</div>
            </fieldset>

            <fieldset class="fieldset">
              <legend><span class="step-num">3</span>${esc(t("class"))}</legend>
              <div class="choice-grid classes">${classButtons}</div>
            </fieldset>

            <fieldset class="fieldset">
              <legend><span class="step-num">4</span>${esc(t("name"))} <span class="legend-hint">${esc(t("nameHint"))}</span></legend>
              <div class="form-grid">
                <div class="field"><label for="charFirst">${esc(t("firstName"))}</label><input id="charFirst" type="text" maxlength="24" autocomplete="off" value="${esc(charDraft.firstName)}"></div>
                <div class="field"><label for="charLast">${esc(t("lastName"))}</label><input id="charLast" type="text" maxlength="24" autocomplete="off" value="${esc(charDraft.lastName)}"></div>
                <div class="field full"><label for="charNote">${esc(t("note"))} <span style="text-transform:none;letter-spacing:0;font-weight:500">${esc(t("noteHint"))}</span></label><textarea id="charNote" maxlength="200">${esc(charDraft.note)}</textarea><span class="counter" id="noteCount">${charDraft.note.length} / 200</span></div>
              </div>
            </fieldset>

            <div id="charPreview">${previewHtml()}</div>
            <p class="modal-notice" aria-live="polite">${esc(charDraft.notice)}</p>
          </div>
          <div class="modal-foot">
            <button type="button" class="btn ghost" data-close>${esc(t("cancel"))}</button>
            <button type="submit" class="btn primary" ${canSubmit ? "" : "disabled"}>${esc(charDraft.mode === "edit" ? t("apply") : t("create"))}</button>
          </div>
        </form>
      </div>
    </div>`;

    openModal(html, focusFirst);

    el.modalRoot.querySelectorAll("[data-faction]").forEach((button) => {
      button.addEventListener("click", () => draftSetFaction(button.dataset.faction));
    });
    el.modalRoot.querySelectorAll("[data-race]").forEach((button) => {
      button.addEventListener("click", () => draftSetRace(button.dataset.race));
    });
    el.modalRoot.querySelectorAll("[data-class]").forEach((button) => {
      button.addEventListener("click", () => draftSetClass(button.dataset.class));
    });
    el.modalRoot.querySelectorAll("[data-gender]").forEach((button) => {
      button.addEventListener("click", () => {
        charDraft.gender = button.dataset.gender;
        redrawCharacterModal();
      });
    });

    const first = document.getElementById("charFirst");
    const last = document.getElementById("charLast");
    const note = document.getElementById("charNote");
    const preview = document.getElementById("charPreview");
    const updatePreview = () => {
      if (preview) preview.innerHTML = previewHtml();
    };
    if (first) first.addEventListener("input", () => { charDraft.firstName = first.value; updatePreview(); });
    if (last) last.addEventListener("input", () => { charDraft.lastName = last.value; updatePreview(); });
    if (note) {
      note.addEventListener("input", () => {
        charDraft.note = note.value;
        const counter = document.getElementById("noteCount");
        if (counter) counter.textContent = `${note.value.length} / 200`;
      });
    }

    const form = document.getElementById("charForm");
    if (form) form.addEventListener("submit", submitCharacter);
  }

  function draftSetFaction(key) {
    if (!charDraft || !D.faction(key)) return;
    if (charDraft.lockedFaction && key !== charDraft.lockedFaction) return;
    if (charDraft.faction === key) return;
    charDraft.faction = key;
    charDraft.raceKey = null;
    charDraft.notice = "";
    if (charDraft.classKey && !D.classesForFaction(key).includes(charDraft.classKey)) {
      charDraft.notice = t("classResetFaction", { class: nm(D.cls(charDraft.classKey)) });
      charDraft.classKey = null;
    }
    redrawCharacterModal();
  }

  function draftSetRace(key) {
    if (!charDraft) return;
    const race = D.race(key);
    if (!race) return;
    charDraft.raceKey = key;
    charDraft.faction = race.faction;
    charDraft.notice = "";
    if (charDraft.classKey && !race.classes.includes(charDraft.classKey)) {
      charDraft.notice = t("classResetRace", { race: nm(race.short), class: nm(D.cls(charDraft.classKey)) });
      charDraft.classKey = null;
    }
    redrawCharacterModal();
  }

  function draftSetClass(key) {
    if (!charDraft || !D.cls(key)) return;
    if (charDraft.raceKey && !D.race(charDraft.raceKey).classes.includes(key)) return;
    if (!charDraft.raceKey && charDraft.faction && !D.classesForFaction(charDraft.faction).includes(key)) return;
    charDraft.classKey = key;
    charDraft.notice = "";
    redrawCharacterModal();
  }

  function submitCharacter(event) {
    event.preventDefault();
    if (!charDraft) return;
    const race = D.race(charDraft.raceKey);
    const cls = D.cls(charDraft.classKey);
    const notice = el.modalRoot.querySelector(".modal-notice");

    if (!race || !cls || !D.isValidCombo(charDraft.raceKey, charDraft.classKey)) {
      if (notice) notice.textContent = t("invalidCombo");
      return;
    }
    if (charDraft.lockedFaction && race.faction !== charDraft.lockedFaction) {
      if (notice) notice.textContent = t("lockedFaction", { faction: nm(D.faction(charDraft.lockedFaction)) });
      return;
    }

    const firstName = cleanText(document.getElementById("charFirst") ? document.getElementById("charFirst").value : charDraft.firstName, D.limits.name);
    const lastName = cleanText(document.getElementById("charLast") ? document.getElementById("charLast").value : charDraft.lastName, D.limits.name);
    const note = cleanText(document.getElementById("charNote") ? document.getElementById("charNote").value : charDraft.note, D.limits.note);

    if (charDraft.mode === "create") {
      if (currentRoster().characters.length >= D.limits.charactersPerRoster) {
        showToast(t("toastMax", { n: D.limits.charactersPerRoster }));
        return;
      }
      const character = {
        id: D.randomId(),
        firstName,
        lastName,
        raceKey: charDraft.raceKey,
        gender: charDraft.gender,
        classKey: charDraft.classKey,
        isMain: currentRoster().characters.length === 0,
        primaryProfessions: [],
        secondaryProfessions: [],
        note,
        talentBuild: null,
        legacyBuild: null
      };
      currentRoster().characters.push(character);
      markDirty();
      closeModal();
      render();
      showToast(t("toastAdded", { name: D.displayName(character) }));
      return;
    }

    const character = findChar(charDraft.id);
    if (!character) return;
    const classChanged = character.classKey !== charDraft.classKey;
    character.firstName = firstName;
    character.lastName = lastName;
    character.raceKey = charDraft.raceKey;
    character.gender = charDraft.gender;
    character.classKey = charDraft.classKey;
    character.note = note;
    if (classChanged) character.talentBuild = null;
    if (character.isMain) {
      const index = currentRoster().characters.indexOf(character);
      if (index > 0) {
        currentRoster().characters.splice(index, 1);
        currentRoster().characters.unshift(character);
      }
    }
    markDirty();
    closeModal();
    render();
    showToast(t("toastUpdated", { name: D.displayName(character) }));
  }

  /* ---------------- modal de builds ---------------- */

  function openBuildModal(charId, type) {
    const character = findChar(charId);
    if (!character) return;
    const existing = type === "legacy" ? character.legacyBuild : character.talentBuild;
    const points = type === "legacy" ? pointsFromCode(existing ? existing.buildString : "") : [0, 0, 0];
    buildDraft = {
      charId,
      type,
      title: existing && existing.title ? existing.title : "",
      code: existing ? existing.buildString : "",
      points,
      hasExisting: !!existing
    };
    renderBuildModal(true);
  }

  function pointsFromCode(code) {
    const segments = D.buildSegments(code);
    return [0, 1, 2].map((index) => Math.min(D.limits.legacyPoints, segments[index] || 0));
  }

  function previewBuildHtml() {
    const segments = D.buildSegments(buildDraft.code);
    if (!segments.length) return `<span class="empty">${esc(t("buildNothing"))}</span>`;
    if (buildDraft.type === "legacy") {
      const total = segments.reduce((sum, value) => sum + value, 0);
      return D.legacyTrees.map((tree, index) => `<div>${esc(nm(tree))}: <strong>${segments[index] || 0}</strong></div>`).join("")
        + `<div style="margin-top:6px">${esc(t("total"))}: <strong>${total}</strong> / ${D.limits.legacyPoints}</div>`;
    }
    return `<strong>${segments.map((value) => esc(value)).join(" / ")}</strong> · ${esc(t("talentPoints"))}`;
  }

  function syncBuildPreview() {
    const isLegacy = buildDraft.type === "legacy";
    if (isLegacy) {
      buildDraft.points.forEach((value, index) => {
        const node = document.getElementById(`allocVal${index}`);
        if (node) node.textContent = String(value);
      });
      const total = buildDraft.points.reduce((sum, value) => sum + value, 0);
      const totalBox = document.getElementById("allocTotal");
      if (totalBox) {
        totalBox.classList.toggle("full", total >= D.limits.legacyPoints);
        const strong = totalBox.querySelector("strong");
        if (strong) strong.textContent = `${total} / ${D.limits.legacyPoints}`;
      }
      el.modalRoot.querySelectorAll("[data-tree]").forEach((button) => {
        const index = Number(button.dataset.tree);
        const delta = Number(button.dataset.delta);
        button.disabled = delta < 0 ? buildDraft.points[index] <= 0 : total >= D.limits.legacyPoints;
      });
    }
    const preview = document.getElementById("buildPreview");
    if (preview) preview.innerHTML = previewBuildHtml();
  }

  function renderBuildModal(focusFirst) {
    if (!buildDraft) return;
    const isLegacy = buildDraft.type === "legacy";
    const title = isLegacy ? t("buildLegacyTitle") : t("buildTalentTitle");
    const placeholder = isLegacy ? t("buildCodePlaceholderLegacy") : t("buildCodePlaceholderTalent");
    const total = buildDraft.points.reduce((sum, value) => sum + value, 0);

    const allocator = isLegacy
      ? `<div class="allocator">
          <div class="section-label" style="margin-top:0">${esc(t("legacyAllocator"))}</div>
          ${D.legacyTrees.map((tree, index) => `<div class="alloc-row">
            <span>${esc(nm(tree))}</span>
            <button type="button" data-tree="${index}" data-delta="-1" ${buildDraft.points[index] <= 0 ? "disabled" : ""} aria-label="${esc(t("total"))} -1">−</button>
            <strong id="allocVal${index}">${buildDraft.points[index]}</strong>
            <button type="button" data-tree="${index}" data-delta="1" ${total >= D.limits.legacyPoints ? "disabled" : ""} aria-label="${esc(t("total"))} +1">+</button>
          </div>`).join("")}
          <div class="alloc-total ${total >= D.limits.legacyPoints ? "full" : ""}" id="allocTotal"><span>${esc(t("total"))}</span><strong>${total} / ${D.limits.legacyPoints}</strong></div>
        </div>`
      : "";

    const html = `<div class="modal-backdrop">
      <div class="modal narrow" role="dialog" aria-modal="true" aria-labelledby="buildModalTitle">
        <div class="modal-head">
          <div><h2 id="buildModalTitle">${esc(title)}</h2><p>${esc(t("buildSub"))}</p></div>
          <button type="button" class="modal-close" data-close aria-label="${esc(t("cancel"))}">✕</button>
        </div>
        <form id="buildForm">
          <div class="modal-body">
            <div class="field"><label for="buildTitle">${esc(t("buildTitle"))}</label><input id="buildTitle" type="text" maxlength="120" autocomplete="off" placeholder="${esc(t("buildTitlePlaceholder"))}" value="${esc(buildDraft.title)}"></div>
            <div class="field" style="margin-top:12px"><label for="buildCode">${esc(t("buildCode"))}</label><input id="buildCode" type="text" autocomplete="off" placeholder="${esc(placeholder)}" value="${esc(buildDraft.code)}"></div>
            <p style="margin-top:6px;color:var(--faint);font-size:11px;line-height:1.5">${esc(t("buildCodeHint"))}</p>
            ${allocator}
            <div class="section-label">${esc(t("buildPreview"))}</div>
            <div class="build-preview" id="buildPreview">${previewBuildHtml()}</div>
            <p class="modal-error" id="buildError" aria-live="polite"></p>
          </div>
          <div class="modal-foot">
            ${buildDraft.hasExisting ? `<button type="button" class="btn ghost" id="buildRemove">🗑 ${esc(t("buildRemove"))}</button>` : ""}
            <span class="spacer"></span>
            <button type="button" class="btn ghost" data-close>${esc(t("cancel"))}</button>
            <button type="submit" class="btn primary">${esc(t("buildSave"))}</button>
          </div>
        </form>
      </div>
    </div>`;

    openModal(html, focusFirst);

    const codeInput = document.getElementById("buildCode");
    if (codeInput) {
      codeInput.addEventListener("input", () => {
        buildDraft.code = codeInput.value;
        if (isLegacy) {
          const segments = D.buildSegments(codeInput.value);
          buildDraft.points = [0, 1, 2].map((index) => Math.min(D.limits.legacyPoints, segments[index] || 0));
        }
        syncBuildPreview();
      });
    }

    if (isLegacy) {
      el.modalRoot.querySelectorAll("[data-tree]").forEach((button) => {
        button.addEventListener("click", () => {
          const index = Number(button.dataset.tree);
          const delta = Number(button.dataset.delta);
          const currentTotal = buildDraft.points.reduce((sum, value) => sum + value, 0);
          const next = buildDraft.points[index] + delta;
          if (next < 0 || currentTotal + delta > D.limits.legacyPoints) return;
          buildDraft.points[index] = next;
          buildDraft.code = buildDraft.points.join("-");
          if (codeInput) codeInput.value = buildDraft.code;
          syncBuildPreview();
        });
      });
    }

    const remove = document.getElementById("buildRemove");
    if (remove) {
      remove.addEventListener("click", () => {
        const character = findChar(buildDraft.charId);
        if (!character) return;
        if (buildDraft.type === "legacy") character.legacyBuild = null;
        else character.talentBuild = null;
        markDirty();
        closeModal();
        render();
        showToast(t("buildRemoved"));
      });
    }

    const form = document.getElementById("buildForm");
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const error = document.getElementById("buildError");
        let code = codeInput ? codeInput.value.trim() : buildDraft.code;
        if (isLegacy && !code) code = buildDraft.points.join("-");
        const segments = D.buildSegments(code);
        if (!code || !segments.length) {
          if (error) error.textContent = t("buildError");
          return;
        }
        if (isLegacy) {
          const total = segments.reduce((sum, value) => sum + value, 0);
          if (total <= 0 || total > D.limits.legacyPoints) {
            if (error) error.textContent = t("buildError");
            return;
          }
        }
        const character = findChar(buildDraft.charId);
        if (!character) return;
        const titleInput = document.getElementById("buildTitle");
        const build = {
          buildId: null,
          title: cleanText(titleInput ? titleInput.value : buildDraft.title, 120) || null,
          buildString: code,
          encodingVersion: null
        };
        if (buildDraft.type === "legacy") character.legacyBuild = build;
        else character.talentBuild = build;
        markDirty();
        closeModal();
        render();
        showToast(t("buildSaved"));
      });
    }
  }

  /* ---------------- compartir / exportar / importar ---------------- */

  function fromBase64Url(text) {
    const padded = text.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (text.length % 4)) % 4);
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  function exportState() {
    state.active = active;
    const payload = {
      app: "rosterplaner-local",
      version: 1,
      exportedAt: new Date().toISOString(),
      ...state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `rosterplaner-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 2000);
    showToast(t("toastExported"));
  }

  async function importFile() {
    const file = el.importFile.files && el.importFile.files[0];
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      let next;

      if (parsed && parsed.rulesets && typeof parsed.rulesets === "object") {
        next = sanitizeState(parsed);
      } else if (parsed && Array.isArray(parsed.characters) && D.ruleset(parsed.ruleset)) {
        next = emptyState();
        next.rulesets[parsed.ruleset] = sanitizeRuleset(parsed, D.ruleset(parsed.ruleset));
        next.active = parsed.ruleset;
        next.rulesets[parsed.ruleset].title = cleanText(parsed.title, D.limits.title);
      } else {
        throw new Error("Formato desconocido");
      }

      if (!window.confirm(t("confirmReplace"))) return;
      state = next;
      active = state.active;
      persist();
      render();
      showToast(t("toastImported"));
    } catch (error) {
      console.error("[rosterplaner] Error al importar:", error);
      showNotice(t("importError"));
    } finally {
      el.importFile.value = "";
    }
  }

  function handleShareHash() {
    const match = location.hash.match(/^#kader=(.+)$/);
    if (!match) return;
    let payload;
    try {
      payload = JSON.parse(fromBase64Url(match[1]));
    } catch (error) {
      return;
    }
    if (!payload || !Array.isArray(payload.characters) || !D.ruleset(payload.ruleset)) return;

    const def = D.ruleset(payload.ruleset);
    const count = payload.characters.length;
    const label = payload.title ? payload.title : `${nm(def)}`;
    setTimeout(() => {
      const accepted = window.confirm(t("shareConfirm", { title: label, n: count, roster: nm(def) }));
      history.replaceState(null, "", location.pathname + location.search);
      if (!accepted) return;
      const roster = sanitizeRuleset(payload, def);
      roster.title = cleanText(payload.title, D.limits.title);
      state.rulesets[payload.ruleset] = roster;
      state.active = payload.ruleset;
      active = payload.ruleset;
      persist();
      render();
      showToast(t("toastShareImported", { n: roster.characters.length }));
    }, 250);
  }

  /* ---------------- eventos ---------------- */

  function onCardsClick(event) {
    if (event.target.matches("select, option, input, textarea")) return;
    const actionNode = event.target.closest("[data-act]");
    if (!actionNode) return;
    const card = actionNode.closest("[data-id]");
    const id = card ? card.dataset.id : null;
    const action = actionNode.dataset.act;

    switch (action) {
      case "add":
        openCharacterModal();
        break;
      case "edit":
        if (id) openCharacterModal(id);
        break;
      case "duplicate":
        if (id) duplicateCharacter(id);
        break;
      case "delete":
        if (id) deleteCharacter(id);
        break;
      case "main":
        if (id) toggleMain(id);
        break;
      case "secondary":
        if (id) toggleSecondary(id, actionNode.dataset.key);
        break;
      case "build":
        if (id) openBuildModal(id, actionNode.dataset.type);
        break;
      case "clearbuild":
        if (id) clearBuild(id, actionNode.dataset.type);
        break;
      case "copy":
        copyFromRoster(actionNode.dataset.source);
        break;
      default:
        break;
    }
  }

  function onCardsChange(event) {
    const select = event.target.closest("select[data-act='primary']");
    if (!select) return;
    const card = select.closest("[data-id]");
    if (!card) return;
    const character = findChar(card.dataset.id);
    if (!character) return;
    const slot = Number(select.dataset.slot);
    const next = [...character.primaryProfessions];
    if (select.value === "") next.splice(slot, 1);
    else next[slot] = select.value;
    character.primaryProfessions = next.filter(Boolean).slice(0, D.limits.primaryProfessions);
    markDirty();
    render();
  }

  function bindDragAndDrop() {
    el.cards.addEventListener("dragstart", (event) => {
      const handle = event.target.closest(".drag");
      if (!handle) {
        event.preventDefault();
        return;
      }
      const card = handle.closest("[data-id]");
      if (!card) return;
      dragId = card.dataset.id;
      card.classList.add("dragging");
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", dragId);
      }
    });

    el.cards.addEventListener("dragover", (event) => {
      if (!dragId) return;
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
    });

    el.cards.addEventListener("drop", (event) => {
      if (!dragId) return;
      const card = event.target.closest("[data-id]");
      if (!card) return;
      event.preventDefault();
      const characters = currentRoster().characters;
      const from = characters.findIndex((entry) => entry.id === dragId);
      const to = characters.findIndex((entry) => entry.id === card.dataset.id);
      if (from < 0 || to < 0 || from === to) return;
      const [moved] = characters.splice(from, 1);
      characters.splice(to, 0, moved);
      dragId = null;
      markDirty();
      render();
    });

    el.cards.addEventListener("dragend", () => {
      dragId = null;
      el.cards.querySelectorAll(".dragging").forEach((card) => card.classList.remove("dragging"));
    });

    el.cards.addEventListener("keydown", (event) => {
      if (!event.altKey || (event.key !== "ArrowUp" && event.key !== "ArrowDown")) return;
      const handle = event.target.closest(".drag");
      if (!handle) return;
      const card = handle.closest("[data-id]");
      if (!card) return;
      event.preventDefault();
      moveCharacter(card.dataset.id, event.key === "ArrowUp" ? -1 : 1);
    });
  }

  function init() {
    el.tabs = document.getElementById("rulesetTabs");
    el.heroStats = document.getElementById("heroStats");
    el.rosterKicker = document.getElementById("rosterKicker");
    el.rosterTitle = document.getElementById("rosterTitle");
    el.saveState = document.getElementById("saveState");
    el.saveText = document.getElementById("saveText");
    el.cards = document.getElementById("cards");
    el.stats = document.getElementById("stats");
    el.comboMatrix = document.getElementById("comboMatrix");
    el.modalRoot = document.getElementById("modalRoot");
    el.toast = document.getElementById("toast");
    el.notice = document.getElementById("notice");
    el.addBtn = document.getElementById("addBtn");
    el.exportBtn = document.getElementById("exportBtn");
    el.importFile = document.getElementById("importFile");

    el.tabs.addEventListener("click", (event) => {
      const button = event.target.closest("[data-ruleset]");
      if (button) switchRoster(button.dataset.ruleset);
    });
    el.addBtn.addEventListener("click", () => openCharacterModal());
    el.exportBtn.addEventListener("click", exportState);
    el.importFile.addEventListener("change", () => { void importFile(); });
    el.rosterTitle.addEventListener("input", () => {
      currentRoster().title = el.rosterTitle.value.slice(0, D.limits.title);
      markDirty();
    });

    el.cards.addEventListener("click", onCardsClick);
    el.cards.addEventListener("change", onCardsChange);
    bindDragAndDrop();

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && el.modalRoot.innerHTML) closeModal();
    });

    window.addEventListener("pagehide", () => {
      if (saveTimer) {
        clearTimeout(saveTimer);
        saveTimer = null;
        persist();
      }
    });

    render();
    renderSave();
    handleShareHash();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
