// Shared "what's biting this month" data, used by the homepage season block
// and the WhatsBitingNow component. Single source of truth so both stay in sync.

export type MonthEntry = {
  season: string;
  color: string;
  bg: string;
  fish: string[];
  tip: string;
};

export const monthNames = [
  "Januar", "Februar", "Marts", "April", "Maj", "Juni",
  "Juli", "August", "September", "Oktober", "November", "December",
];

// Species name → guide URL. Used for the fish chip links.
export const speciesHref: Record<string, string> = {
  "Havørred": "/guide-til-fisk/havorredfiskeri/",
  "Makrel": "/guide-til-fisk/makrelfiskeri/",
  "Torsk": "/guide-til-fisk/torskefiskeri/",
  "Hornfisk": "/guide-til-fisk/hornfisk/",
  "Fladfisk": "/guide-til-fisk/fladfisk-fiskeri/",
  "Sild": "/guide-til-fisk/sildefiskeri/",
  "Regnbueørred": "/guide-til-fisk/regnbueorredfiskeri/",
  "Aborre": "/guide-til-fisk/aborrefiskeri/",
  "Gedde": "/guide-til-fisk/geddefiskeri/",
};

export const monthData: MonthEntry[] = [
  { season: "Vinter",  color: "#1e40af", bg: "#eff6ff", fish: ["Torsk","Regnbueørred","Aborre"],          tip: "Januar er en stille måned på vandet — men torsk og regnbueørred belønner den tålmodige fisker." },
  { season: "Vinter",  color: "#1e40af", bg: "#eff6ff", fish: ["Torsk","Regnbueørred","Gedde"],            tip: "Februar byder på koldt vand og aktive torsk fra kysten. Gedde er på toppen i ferskvand." },
  { season: "Forår",   color: "#2d6a4f", bg: "#f0faf4", fish: ["Havørred","Gedde","Regnbueørred"],         tip: "Marts markerer opvågningen — havørreden søger ind mod kysten og gedden er aggressiv i ferskvand." },
  { season: "Forår",   color: "#2d6a4f", bg: "#f0faf4", fish: ["Havørred","Hornfisk","Sild"],              tip: "April er forårets højdepunkt. Havørreden er aktiv langs hele kysten, hornfisken er på vej ind og sildestimerne starter." },
  { season: "Forår",   color: "#2d6a4f", bg: "#f0faf4", fish: ["Hornfisk","Havørred","Sild"],              tip: "Maj bringer hornfisken i store mængder og sildestimerne topper i de sydlige farvande." },
  { season: "Sommer",  color: "#b45309", bg: "#fffbeb", fish: ["Makrel","Hornfisk","Fladfisk"],             tip: "Juni er makrelfiskerens måned. Hornfisken er fortsat aktiv og fladfisken er udbredt på sandede bunde." },
  { season: "Sommer",  color: "#b45309", bg: "#fffbeb", fish: ["Makrel","Fladfisk","Havørred"],             tip: "Juli giver de varmeste vande — makrel og fladfisk er i topform, og havørreden søger dybere." },
  { season: "Sommer",  color: "#b45309", bg: "#fffbeb", fish: ["Makrel","Fladfisk","Aborre"],               tip: "August er sensommerens fiskemåned med masser af makrel og aktiv aborre i ferskvand." },
  { season: "Efterår", color: "#92400e", bg: "#fff7ed", fish: ["Havørred","Torsk","Sild"],                  tip: "September er efterårets første måned — havørreden er på vej op, torsken søger ind mod land og efterårets sildestimer ankommer." },
  { season: "Efterår", color: "#92400e", bg: "#fff7ed", fish: ["Havørred","Torsk","Sild"],                  tip: "Oktober er en af årets bedste måneder. Havørred og torsk er i topform, og efterårssilden er i de danske farvande." },
  { season: "Efterår", color: "#92400e", bg: "#fff7ed", fish: ["Havørred","Torsk","Regnbueørred"],          tip: "November byder på de klassiske efterårsfangster — havørred og torsk dominerer langs kysterne." },
  { season: "Vinter",  color: "#1e40af", bg: "#eff6ff", fish: ["Torsk","Regnbueørred","Havørred"],          tip: "December er torskens måned. Regnbueørreden er aktiv i put & take-søerne og havørreden er fortsat aktiv." },
];
