/* =========================================================
   Rosterplaner Forever - datos base (copia local)
   Datos de juego de World of Warcraft: Forever.
   Implementación propia, sin código de chromie.de.
   ========================================================= */
(function () {
  "use strict";

  const factions = [
    {
      key: "ALLIANCE",
      name: { es: "Alianza" },
      color: "#2f6fd6",
      mark: "⚜"
    },
    {
      key: "HORDE",
      name: { es: "Horda" },
      color: "#c42b2b",
      mark: "⚔"
    }
  ];

  const classes = [
    { key: "WARRIOR", name: { es: "Guerrero" }, plural: { es: "Guerreros" }, color: "#c69b6d", icon: "icons/classicon_warrior.jpg" },
    { key: "PALADIN", name: { es: "Paladín" }, plural: { es: "Paladines" }, color: "#f48cba", icon: "icons/classicon_paladin.jpg" },
    { key: "HUNTER", name: { es: "Cazador" }, plural: { es: "Cazadores" }, color: "#aad372", icon: "icons/classicon_hunter.jpg" },
    { key: "ROGUE", name: { es: "Pícaro" }, plural: { es: "Pícaros" }, color: "#fff468", icon: "icons/classicon_rogue.jpg" },
    { key: "PRIEST", name: { es: "Sacerdote" }, plural: { es: "Sacerdotes" }, color: "#ffffff", icon: "icons/classicon_priest.jpg" },
    { key: "SHAMAN", name: { es: "Chamán" }, plural: { es: "Chamanes" }, color: "#0070dd", icon: "icons/classicon_shaman.jpg" },
    { key: "MAGE", name: { es: "Mago" }, plural: { es: "Magos" }, color: "#3fc7eb", icon: "icons/classicon_mage.jpg" },
    { key: "WARLOCK", name: { es: "Brujo" }, plural: { es: "Brujos" }, color: "#8788ee", icon: "icons/classicon_warlock.jpg" },
    { key: "DRUID", name: { es: "Druida" }, plural: { es: "Druidas" }, color: "#ff7c0a", icon: "icons/classicon_druid.jpg" }
  ];

  const races = [
    {
      key: "HUMAN", faction: "ALLIANCE",
      name: { es: "Humano" }, short: { es: "Humano" },
      icon: "icons/achievement_character_human_male.jpg",
      classes: ["WARRIOR", "PALADIN", "HUNTER", "ROGUE", "PRIEST", "MAGE", "WARLOCK"],
      newClasses: ["HUNTER"]
    },
    {
      key: "DWARF", faction: "ALLIANCE",
      name: { es: "Enano" }, short: { es: "Enano" },
      icon: "icons/achievement_character_dwarf_male.jpg",
      classes: ["WARRIOR", "PALADIN", "HUNTER", "ROGUE", "PRIEST", "SHAMAN"],
      newClasses: ["SHAMAN"]
    },
    {
      key: "NIGHT_ELF", faction: "ALLIANCE",
      name: { es: "Elfo de la noche" }, short: { es: "Elfo de la noche" },
      icon: "icons/achievement_character_nightelf_male.jpg",
      classes: ["WARRIOR", "HUNTER", "ROGUE", "PRIEST", "DRUID"],
      newClasses: []
    },
    {
      key: "GNOME", faction: "ALLIANCE",
      name: { es: "Gnomo" }, short: { es: "Gnomo" },
      icon: "icons/achievement_character_gnome_male.jpg",
      classes: ["WARRIOR", "ROGUE", "PRIEST", "MAGE", "WARLOCK"],
      newClasses: ["PRIEST"]
    },
    {
      key: "SKYBORNE_HIGH_ORDER", faction: "ALLIANCE",
      name: { es: "Nacido del cielo del Alto Orden" },
      short: { es: "Alto Orden" },
      icon: "icons/inv_icon_wing01e.jpg",
      classes: ["WARRIOR", "HUNTER", "ROGUE", "MAGE", "DRUID"],
      newClasses: ["WARRIOR", "HUNTER", "ROGUE", "MAGE", "DRUID"],
      isNew: true
    },
    {
      key: "ORC", faction: "HORDE",
      name: { es: "Orco" }, short: { es: "Orco" },
      icon: "icons/achievement_character_orc_male.jpg",
      classes: ["WARRIOR", "HUNTER", "ROGUE", "SHAMAN", "MAGE", "WARLOCK"],
      newClasses: ["MAGE"]
    },
    {
      key: "UNDEAD", faction: "HORDE",
      name: { es: "No-muerto" }, short: { es: "No-muerto" },
      icon: "icons/achievement_character_undead_male.jpg",
      classes: ["WARRIOR", "PALADIN", "ROGUE", "PRIEST", "MAGE", "WARLOCK"],
      newClasses: ["PALADIN"]
    },
    {
      key: "TAUREN", faction: "HORDE",
      name: { es: "Tauren" }, short: { es: "Tauren" },
      icon: "icons/achievement_character_tauren_male.jpg",
      classes: ["WARRIOR", "HUNTER", "SHAMAN", "DRUID"],
      newClasses: []
    },
    {
      key: "TROLL", faction: "HORDE",
      name: { es: "Troll" }, short: { es: "Troll" },
      icon: "icons/achievement_character_troll_male.jpg",
      classes: ["WARRIOR", "HUNTER", "ROGUE", "PRIEST", "SHAMAN", "MAGE", "WARLOCK"],
      newClasses: ["WARLOCK"]
    },
    {
      key: "SKYBORNE_WINDSHAPER", faction: "HORDE",
      name: { es: "Nacido del cielo Formavientos" },
      short: { es: "Formavientos" },
      icon: "icons/ability_druid_galewinds.jpg",
      classes: ["WARRIOR", "HUNTER", "ROGUE", "SHAMAN", "DRUID"],
      newClasses: ["WARRIOR", "HUNTER", "ROGUE", "SHAMAN", "DRUID"],
      isNew: true
    }
  ];

  const professions = [
    { key: "ALCHEMY", kind: "CRAFTING", name: { es: "Alquimia" }, icon: "icons/ui_profession_alchemy.jpg", supplier: "HERBALISM" },
    { key: "BLACKSMITHING", kind: "CRAFTING", name: { es: "Herrería" }, icon: "icons/ui_profession_blacksmithing.jpg", supplier: "MINING" },
    { key: "ENCHANTING", kind: "CRAFTING", name: { es: "Encantamiento" }, icon: "icons/ui_profession_enchanting.jpg", supplier: null },
    { key: "ENGINEERING", kind: "CRAFTING", name: { es: "Ingeniería" }, icon: "icons/ui_profession_engineering.jpg", supplier: "MINING" },
    { key: "LEATHERWORKING", kind: "CRAFTING", name: { es: "Peletería" }, icon: "icons/ui_profession_leatherworking.jpg", supplier: "SKINNING" },
    { key: "TAILORING", kind: "CRAFTING", name: { es: "Sastrería" }, icon: "icons/ui_profession_tailoring.jpg", supplier: null },
    { key: "HERBALISM", kind: "GATHERING", name: { es: "Herboristería" }, icon: "icons/ui_profession_herbalism.jpg", supplier: null },
    { key: "MINING", kind: "GATHERING", name: { es: "Minería" }, icon: "icons/ui_profession_mining.jpg", supplier: null },
    { key: "SKINNING", kind: "GATHERING", name: { es: "Desuello" }, icon: "icons/ui_profession_skinning.jpg", supplier: null }
  ];

  const secondary = [
    { key: "COOKING", name: { es: "Cocina" }, icon: "icons/trade_cooking_2.jpg" },
    { key: "FIRST_AID", name: { es: "Primeros auxilios" }, icon: "icons/inv_firstaid_bandage.jpg" },
    { key: "FISHING", name: { es: "Pesca" }, icon: "icons/trade_fishing.jpg" }
  ];

  const rulesets = [
    { key: "PVE", slug: "pve", label: { es: "PvE" }, short: { es: "PvE" }, factionExclusive: false },
    { key: "PVP", slug: "pvp", label: { es: "PvP" }, short: { es: "PvP" }, factionExclusive: true },
    { key: "RP", slug: "rp", label: { es: "RP" }, short: { es: "RP" }, factionExclusive: true },
    { key: "HARDCORE", slug: "hc", label: { es: "Hardcore" }, short: { es: "HC" }, factionExclusive: true }
  ];

  const legacyTrees = [
    { key: "professions", name: { es: "Profesiones" } },
    { key: "adventure", name: { es: "Aventura" } },
    { key: "resourcefulness", name: { es: "Ingenio" } }
  ];

  const limits = {
    charactersPerRoster: 50,
    name: 24,
    note: 200,
    primaryProfessions: 2,
    title: 60,
    legacyPoints: 16
  };

  const byKey = (list) => new Map(list.map((item) => [item.key, item]));

  const raceMap = byKey(races);
  const classMap = byKey(classes);
  const factionMap = byKey(factions);
  const professionMap = byKey(professions);
  const secondaryMap = byKey(secondary);
  const rulesetMap = byKey(rulesets);

  function race(key) { return raceMap.get(key) || null; }
  function cls(key) { return classMap.get(key) || null; }
  function faction(key) { return factionMap.get(key) || null; }
  function profession(key) { return professionMap.get(key) || null; }
  function secondaryProf(key) { return secondaryMap.get(key) || null; }
  function ruleset(key) { return rulesetMap.get(key) || null; }

  function isValidCombo(raceKey, classKey) {
    const r = race(raceKey);
    return !!r && r.classes.includes(classKey);
  }

  function isNewCombo(raceKey, classKey) {
    const r = race(raceKey);
    return !!r && r.newClasses.includes(classKey);
  }

  function classesForFaction(factionKey) {
    const set = new Set();
    races.filter((r) => r.faction === factionKey).forEach((r) => r.classes.forEach((c) => set.add(c)));
    return classes.filter((c) => set.has(c.key)).map((c) => c.key);
  }

  function displayName(character) {
    const full = [character.firstName, character.lastName].map((s) => (s || "").trim()).filter(Boolean).join(" ");
    if (full) return full;
    const c = cls(character.classKey);
    return c ? c.name.es : "Sin nombre";
  }

  function warnings(character) {
    const out = [];
    if (character.raceKey === "GNOME" && character.primaryProfessions.includes("ENGINEERING")) {
      out.push("Bonificación racial: especialización en ingeniería – los aparatos fallan menos.");
    }
    if (character.raceKey === "TAUREN" && !character.primaryProfessions.includes("HERBALISM")) {
      out.push("Bonificación racial: Cultivar – los tauren recolectan hierbas incluso sin Herboristería.");
    }
    return out;
  }

  function buildSegments(buildString) {
    if (typeof buildString !== "string" || !/^[0-9-]{1,200}$/.test(buildString)) return [];
    return buildString.split("-").map((segment) => {
      const value = Number(segment);
      return Number.isFinite(value) ? value : 0;
    });
  }

  function extractBuildString(raw, baseHref) {
    const value = typeof raw === "string" ? raw.trim() : "";
    if (!value) return "";
    if (/^[0-9-]{1,200}$/.test(value)) return value;
    try {
      const url = new URL(value, baseHref || "https://example.invalid/");
      const b = url.searchParams.get("b");
      return b && /^[0-9-]{1,200}$/.test(b.trim()) ? b.trim() : "";
    } catch (error) {
      return "";
    }
  }

  function randomId() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let id = "c";
    for (let i = 0; i < 15; i += 1) id += chars[Math.floor(Math.random() * chars.length)];
    return id;
  }

  function totalCombos() {
    return races.reduce((sum, r) => sum + r.classes.length, 0);
  }

  window.RP = {
    factions, classes, races, professions, secondary, rulesets, legacyTrees, limits,
    race, cls, faction, profession, secondaryProf, ruleset,
    isValidCombo, isNewCombo, classesForFaction,
    displayName, warnings, buildSegments, extractBuildString, randomId, totalCombos
  };
})();
