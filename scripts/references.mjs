export {
  replacementAbilityReferences,
  replacementConditionTypes,
  replacementSkillReferences,
  replacementSpellSchoolReferences,
  replacementRules,
  newRules,
  weaponMasteriesReferences,
};

// Enrichment changes
const replacementAbilityReferences = {
  str: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.VlMPiSBnkvw1WI2i",
  },
  dex: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.qkGaEW1yaUjgvkP7",
  },
  con: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.MmK76E2svGQnKsIQ",
  },
  int: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.bTeNK1UwR30k2u9r",
  },
  wis: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.4r8xGUXgTyoy3Ju4",
  },
  cha: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.RPHT29Qdl0C8EpZA",
  },
};

const replacementSkillReferences = {
  acr: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.AvvBLEHNl7kuwPkN",
  },
  ani: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.xb3MCjUvopOU4viE",
  },
  arc: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.h3bYSPge8IOqne1N",
  },
  ath: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.rIR7ttYDUpH3tMzv",
  },
  dec: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.mqVZ2fz0L7a9VeKJ",
  },
  his: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.kRBZbdWMGW9K3wdY",
  },
  ins: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.8R5SMbAGbECNgO8z",
  },
  itm: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.4VHHI2gJ1jEsppfg",
  },
  inv: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.Y7nmbQAruWOs7WRM",
  },
  med: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.GeYmM7BVfSCAga4o",
  },
  nat: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.ueMx3uF2PQlcye31",
  },
  prc: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.zjEeHCUqfuprfzhY",
  },
  prf: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.hYT7Z06yDNBcMtGe",
  },
  per: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.4R5H8iIsdFQTsj3X",
  },
  rel: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.CXVzERHdP4qLhJXM",
  },
  slt: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.yg6SRpGNVz9nDW0A",
  },
  ste: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.4MfrpERNiQXmvgCI",
  },
  sur: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.t3EzDU5b9BVAIEVi",
  },
};

const replacementSpellSchoolReferences = {
  abj: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.849AYEWw9FHD6JNz",
  },
  con: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.TWyKMhZJZGqQ6uls",
  },
  div: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.HoD2MwzmVbMqj9se",
  },
  enc: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.SehPXk24ySBVOwCZ",
  },
  evo: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.kGp1RNuxL2SELLRC",
  },
  ill: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.smEk7kvVyslFozrB",
  },
  nec: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.W0eyiV1FBmngb6Qh",
  },
  trs: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.IYWewSailtmv6qEb",
  },
};

const replacementRules = {
  inspiration:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.AQ1oTG7jHy5kZuN9",
  carryingcapacity:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.xk9KqsS54w8EpbZn",
  push: "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.Hni8DjqLzoqsVjb6",
  lift: "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.Hni8DjqLzoqsVjb6",
  drag: "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.Hni8DjqLzoqsVjb6",
  encumbrance:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.JwqYf9qb6gJAWZKs",
  hiding:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.plHuoNdS0j3umPNS",
  passiveperception:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.988C2hQNyvqkdbND",
  time: "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.eihqNjwpZ3HM4IqY",
  speed:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.NSU7TjeJbJ0vVQaZ",
  travelpace:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.eFAISahBloR2X8MX",
  forcedmarch:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.uQWQpRKQ1kWhuvjZ",
  difficultterrainpace:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.hFW5BR2yHHwwgurD",
  climbing:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.KxUXbMrUCIAhv4AF",
  swimming:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.KxUXbMrUCIAhv4AF",
  longjump:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.1U0myNrOvIVBUdJV",
  highjump:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.raPwIkqKSv60ELmy",
  falling:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.kREHL5pgNUOhay9f",
  suffocating:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.BIlnr0xYhqt4TGsi",
  vision:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.O6hamUbI9kVASN8b",
  light:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.O6hamUbI9kVASN8b",
  lightlyobscured:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.MAxtfJyvJV7EpzWN",
  heavilyobscured:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.wPFjfRruboxhtL4b",
  brightlight:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.RnMokVPyKGbbL8vi",
  dimlight:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.n1Ocpbyhr6HhgbCG",
  darkness:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.4dfREIDjG5N4fvxd",
  blindsight:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.sacjsfm9ZXnw4Tqc",
  darkvision:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.ldmA1PbnEGVkmE11",
  tremorsense:
    "Compendium.dnd5e.rules.JournalEntry.eVtpEGXjA2tamEIJ.JournalEntryPage.8AIlZ95v54mL531X",
  truesight:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.kNa8rJFbtaTM3Rmk",
  food: "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.jayo7XVgGnRCpTW0",
  water:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.iIEI87J7lr2sqtb5",
  resting:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.dpHJXYLigIdEseIb",
  restrained:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.dqLeGdpHtb8FfcxX",
  grappled:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.KbQ1k0OIowtZeQgp",
  charmed:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.vLAsIUa0FhZNsyLk",
  deafened:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.qlRw66tJhk0zLnwq",
  exhaustion:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.jSQtPgNm0i4f3Qi3",
  frightened:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.93uaingTESo8N1qL",
  incapacitated:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.4i3G895hy99piand",
  invisible:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.MQIZ1zRLWRcNOtPN",
  paralyzed:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.RnxZoTglPnLc6UPb",
  petrified:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.6vtLuQT9lwZ9N299",
  poisoned:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.HWs8kEojffqwTSJz",
  prone:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.QxCrRcgMdUd3gfzz",
  stunned:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.EjbXjvyQAMlDyANI",
  unconscious:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.fZCRaKEJd4KoQCqH",
  shortrest:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.1s2swI3UsjUUgbt2",
  longrest:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.6cLtjbHn4KV2R7G9",
  surprise:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.YmOt8HderKveA19K",
  initiative:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.RcwElV4GAcVXKWxo",
  bonusaction:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.2fu2CXsDg8gQmGGw",
  reaction:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.2VqLyxMyMxgXe2wC",
  difficultterrain:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.6tqz947qO8vPyxvD",
  beingprone:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.bV8akkBdVUUG21CO",
  droppingprone:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.hwTLpAtSS5OqQsI1",
  standingup:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.hwTLpAtSS5OqQsI1",
  crawling:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.VWG9qe8PUNtS28Pw",
  movingaroundothercreatures:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.9ZWCknaXCOdhyOrX",
  flying:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.0B1fxfmw0a48tPsc",
  size: "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.HWHRQVBVG7K0RVVW",
  space:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.WIA5bs3P45PmO3OS",
  squeezing:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.wKtOwagDAiNfVoPS",
  attack:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.f4fZHwBvpbpzRyn4",
  castaspell:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.GLwN36E4WXn3Cp4Z",
  dash: "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.6l6nBKip4LqB1sCU",
  disengage:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.w1AGsemFERfjqWNx",
  dodge:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.3YJIuyCMmuUrfmuX",
  help: "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.5S8i59qskkd9GGcJ",
  hide: "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.rqhOsUY4wWa1oHTy",
  ready:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.nI9tN6Oq7fCV7hcA",
  search:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.ySj4gYZ4ADZoia7R",
  useanobject:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.ljqhJx8Qxu2ivo69",
  attackrolls:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.W8uJrd1D8NeOuawp",
  unseenattackers:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.5ZJNwEPlsGurecg5",
  unseentargets:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.5ZJNwEPlsGurecg5",
  rangedattacks:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.S9aclVOCbusLE3kC",
  range:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.HjKXuB8ndjcqOds7",
  rangedattacksinclosecombat:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.qEZvxW0NM7ixSQP5",
  meleeattacks:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.GTk6emvzNxl8Oosl",
  reach:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.hgZ5ZN4B3y7tmFlt",
  unarmedstrike:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.xJjJ4lhymAYXAOvO",
  opportunityattacks:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.eNvzQabiTqTtfzis",
  twoweaponfighting:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.FQTS08uH74A6psL2",
  grappling:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.YSLWJcQCP6kzsPql",
  escapingagrapple:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.2TZKy9YbMN3ZY3h8",
  movingagrappledcreature:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.x5bUdhAD7u5Bt2rg",
  shoving:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.hrdqMF8hRXJdNzJx",
  cover:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.W7f7PcRubNUMIq2S",
  halfcover:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.hv0J61IAfofuhy3Q",
  threequarterscover:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.zAMStUjUrPV10dFm",
  totalcover:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.BKUAxXuPEzxiEOeL",
  hitpoints:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.PFbzoMBviI2DD9QP",
  damagerolls:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.hd26AqKrCqtcQBWy",
  criticalhits:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.gFL1VhSEljL1zvje",
  damagetypes:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.jVOgf7DNEhkzYNIe",
  damageresistance:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.v0WE18nT5SJO8Ft7",
  damagevulnerability:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.v0WE18nT5SJO8Ft7",
  healing:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.ICketFqbFslqKiX9",
  instantdeath:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.8BG05mA0mEzwmrHU",
  deathsavingthrows:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.JL8LePEJQYFdNuLL",
  deathsaves:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.JL8LePEJQYFdNuLL",
  stabilizing:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.r1CgZXLcqFop6Dlx",
  knockingacreatureout:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.uEwjgKGuCRTNADYv",
  temporaryhitpoints:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.AW6HpJZHqxfESXaq",
  temphp:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.AW6HpJZHqxfESXaq",
  mounting:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.MFpyvUIdcBpC9kIE",
  dismounting:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.MFpyvUIdcBpC9kIE",
  controllingamount:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.khmR2xFk1NxoQUgZ",
  underwatercombat:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.6zVOeLyq4iMnrQT4",
  spelllevel:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.A6k5fS0kFqPXTW3v",
  knownspells:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.oezg742GlxmEwT85",
  preparedspells:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.oezg742GlxmEwT85",
  spellslots:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.Su6wbb0O9UN4ZDIH",
  castingatahigherlevel:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.4H9SLM95OCLfFizz",
  upcasting:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.4H9SLM95OCLfFizz",
  castinginarmor:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.z4A8vHSK2pb8YA9X",
  cantrips:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.jZD5mCTnMPJ9jW67",
  rituals:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.FjWqT5iyJ89kohdA",
  castingtime:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.zRVW8Tvyk6BECjZD",
  bonusactioncasting:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.RP1WL9FXI3aknlxZ",
  reactioncasting:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.t62lCfinwU9H7Lji",
  longercastingtimes:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.gOAIRFCyPUx42axn",
  spellrange:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.RBYPyE5z5hAZSbH6",
  components:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.xeHthAF9lxfn2tII",
  verbal:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.6UXTNWMCQ0nSlwwx",
  spellduration:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.9mp0SRsptjvJcq1e",
  instantaneous:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.kdlgZOpRMB6bGCod",
  concentrating:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.ow58p27ctAnr4VPH",
  spelltargets:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.G80AIQr04sxdVpw4",
  areaofeffect:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.wvtCeGHgnUmh0cuj",
  pointoforigin:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.8HxbRceQQUAhyWRt",
  spellsavingthrows:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.8DajfNll90eeKcmB",
  spellattackrolls:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.qAFzmGZKhVvAEUF3",
  combiningmagicaleffects:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.TMIN963hG773yZzO",
  schoolsofmagic:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.TeF6CKMDRpYpsLd4",
  detectingtraps:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.DZ7AhdQ94xggG4bj",
  disablingtraps:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.DZ7AhdQ94xggG4bj",
  curingmadness:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.6Icem7G3CICdNOkM",
  damagethreshold:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.9LJZhqvCburpags3",
  poisontypes:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.I6OMMWUaYCWR9xip",
  contactpoison:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.kXnCEqqGUWRZeZDj",
  ingestedpoison:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.Y0vsJYSWeQcFpJ27",
  inhaledpoison:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.KUyN4eK1xTBzXsjP",
  injurypoison:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.LUL48OUq6SJeMGc7",
  attunement:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.UQ65OwIyGK65eiOK",
  wearingitems:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.iPB8mGKuQx3X0Z2J",
  wieldingitems:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.iPB8mGKuQx3X0Z2J",
  multipleitemsofthesamekind:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.rLJdvz4Mde8GkEYQ",
  paireditems:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.rd9pCH8yFraSGN34",
  commandword:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.HiXixxLYesv6Ff3t",
  consumables:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.UEPAcZFzQ5x196zE",
  itemspells:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.DABoaeeF6w31UCsj",
  charges:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.NLRXcgrpRCfsA5mO",
  spellscroll:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.gi8IKhtOlBVhMJrN",
  creaturetags:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.9jV1fFF163dr68vd",
  telepathy:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.geTidcFIYWuUvD2L",
  legendaryactions:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.C1awOyZh78pq1xmY",
  lairactions:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.07PtjpMxiRIhkBEp",
  regionaleffects:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.uj8W27NKFyzygPUd",
  disease:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.oNQWvyRZkTOJ8PBq",
};

const newRules = {
  d20test:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.nxPH59t3iNtWJxnU",
  advantage:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.lvs9RRDi1UA1Lff8",
  disadvantage:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.fFrHBgqKUMY0Nnco",
  difficultyclass:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.afnB0KZZk2hKtjv4",
  armorclass:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.IL73rq9BlQowdon7",
  abilitycheck:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.XBQqXCoTbvp5Dika",
  savingthrow:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.Vlri6Mp6grn9wt3g",
  challengerating:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.BMoxmXB8pX6bOBus",
  expertise:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.69nu4Sk3V5O15GFf",
  influence:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.4V59Q1dlWjNhpJGo",
  magic:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.iIIDUsmSOkL0xNzF",
  study:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.Nuz0Wx4a4aAPcC34",
  utilize:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.UDlogfdiT2uYEZz4",
  friendly:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.RVcWSqblHIs7SUzn",
  indifferent:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.eYX5eimGuYhHPoj4",
  hostile:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.BNxLbtJofbNGzjsp",
  breakingobjects:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.RXTLVpAwcGm1qtKf",
  hazards:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.5hyEitPd1Kb27fP5",
  burning:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.mPBGM1vguT5IPzxT",
  dehydration:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.FZFvLNOX0lHaHZ1k",
  malnutrition:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.earBo4vQPC1ti4g7",
  suffocation:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.gAvV8TLyS8UGq00x",
  bloodied:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.shZaSIlFPpHufPFn",
  jumping:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.aaJOlRhI1H6vAxt9",
  resistance:
    "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.Uk3xhCTvEfx8BN1O",
};

const replacementConditionTypes = {
  blinded: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.uDogReMO6QtH6NDw",
  },
  charmed: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.vLAsIUa0FhZNsyLk",
  },
  deafened: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.qlRw66tJhk0zLnwq",
  },
  dehydration: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.FZFvLNOX0lHaHZ1k",
  },
  exhaustion: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.jSQtPgNm0i4f3Qi3",
  },
  falling: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.kREHL5pgNUOhay9f",
  },
  frightened: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.93uaingTESo8N1qL",
  },
  grappled: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.KbQ1k0OIowtZeQgp",
  },
  incapacitated: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.4i3G895hy99piand",
  },
  invisible: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.MQIZ1zRLWRcNOtPN",
  },
  malnutrition: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.earBo4vQPC1ti4g7",
  },
  paralyzed: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.RnxZoTglPnLc6UPb",
  },
  petrified: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.6vtLuQT9lwZ9N299",
  },
  poisoned: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.HWs8kEojffqwTSJz",
  },
  prone: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.QxCrRcgMdUd3gfzz",
  },
  restrained: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.dqLeGdpHtb8FfcxX",
  },
  stunned: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.EjbXjvyQAMlDyANI",
  },
  suffocation: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.gAvV8TLyS8UGq00x",
  },
  unconscious: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixCRule.JournalEntryPage.fZCRaKEJd4KoQCqH",
  },
};

const weaponMasteriesReferences = {
  cleave: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.ULDpodOdTxTTiNEx",
  },
  graze: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.PPnaXKPsQvAZp0J4",
  },
  nick: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.l0uao3UVco5ptQso",
  },
  push: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.BPD7ScnLyuPwl145",
  },
  sap: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.fPkZQ7TkKCCA3nTc",
  },
  slow: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.OQQ7hAp6OAxX1rXY",
  },
  topple: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.IMnpuysdrSalmZJg",
  },
  vex: {
    reference:
      "Compendium.dnd-players-handbook.content.JournalEntry.phbAppendixDRule.JournalEntryPage.hg3adn9O1O5Z2QxL",
  },
};
