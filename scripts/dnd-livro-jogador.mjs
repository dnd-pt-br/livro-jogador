import PlayersHandbookJournalSheet from "./apps/journal-sheet.mjs";
import {
  replacementAbilityReferences,
  replacementConditionTypes,
  replacementSkillReferences,
  replacementSpellSchoolReferences,
  replacementRules,
  newRules,
  weaponMasteriesReferences
} from './references.mjs';

/* -------------------------------------------- */
/*  Hooks                                       */
/* -------------------------------------------- */

Hooks.once("init", () => {

  game.settings.register("dnd-livro-jogador", "lastVersion", {
    name: "PHB.SETTING.VERSION.name",
    hint: "PHB.SETTING.VERSION.hint",
    scope: "world",
    config: false,
    type: String,
    default: "1.0.0"
  })

  // Register Journal Sheet
  DocumentSheetConfig.registerSheet(JournalEntry, "dnd-livro-jogador", PlayersHandbookJournalSheet, {
    types: ["base"],
    label: "PHB.JOURNAL.Label",
    makeDefault: false
  });

  // Merging system level alterations (rules and weapon types)
  foundry.utils.mergeObject(CONFIG.DND5E.abilities, replacementAbilityReferences, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.skills, replacementSkillReferences, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.spellSchools, replacementSpellSchoolReferences, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.rules, replacementRules, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.conditionTypes, replacementConditionTypes, {insertKeys: false});
  foundry.utils.mergeObject(CONFIG.DND5E.rules, newRules);
  foundry.utils.mergeObject(CONFIG.DND5E.weaponMasteries, weaponMasteriesReferences);
  foundry.utils.mergeObject(CONFIG.DND5E.weaponIds, {
    musket: "Compendium.dnd-livro-jogador.equipment.Item.phbwepMusket0000",
    pistol: "Compendium.dnd-livro-jogador.equipment.Item.phbwepPistol0000"
  });
});

Hooks.once("ready", async () => {
  // Handle showing changelog
  const currentVersion = game.modules.get("dnd-livro-jogador").version;
  const lastVersion = game.settings.get("dnd-livro-jogador", "lastVersion");

  if (foundry.utils.isNewerVersion(currentVersion, lastVersion)) {
    const journal = await fromUuid("Compendium.dnd-livro-jogador.content.JournalEntry.phbChangelog0000");
    const page = journal.pages.contents[journal.pages.contents.length - 1];
    journal.sheet.render(true, {pageId: page.id});
    game.settings.set("dnd-livro-jogador", "lastVersion", currentVersion)
  }
});
