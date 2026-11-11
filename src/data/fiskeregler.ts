// Mindstemål og fredningstider for lystfiskere.
// Kilde: Miljøstyrelsen, https://mst.dk/borger/lyst-og-fritidsfiskeri/mindstemaal-og-fredningstider
// (BEK nr 1673 af 10/12/2025). Læst og tjekket 2026-11-11. Tjek kilden igen hvert år i januar,
// og når der kommer nye regler for torsk, ål og havbars (EU-regler, der gælder for ét år ad gangen).
//
// Kun de arter, danske lystfiskere typisk fisker efter, er med. Alt her er hentet fra kilden;
// hvor kilden ikke nævner en art i et farvand, står det som "ikke nævnt" og vises som "tjek".

export const RULES_SOURCE = {
  url: 'https://mst.dk/borger/lyst-og-fritidsfiskeri/mindstemaal-og-fredningstider',
  name: 'Miljøstyrelsen: Mindstemål og fredningstider',
  law: 'BEK nr. 1673 af 10/12/2025',
  checked: '2026-11-11',
};

// Where you fish. Salt water zones map to the three areas Miljøstyrelsen uses for minimum sizes.
export type Zone = 'nordsoen' | 'ringkobing' | 'vadehavet' | 'kattegat' | 'baelt' | 'bornholm' | 'fersk' | 'fersk-bornholm';
export type SizeArea = 'N' | 'K' | 'B' | 'F';

export const ZONES: { key: Zone; label: string; water: 'salt' | 'fersk'; area: SizeArea }[] = [
  { key: 'nordsoen', label: 'Nordsøen, Vesterhavet og Limfjorden', water: 'salt', area: 'N' },
  { key: 'ringkobing', label: 'Ringkøbing, Nissum eller Stadil Fjord (og Von Å)', water: 'salt', area: 'N' },
  { key: 'vadehavet', label: 'Vadehavet', water: 'salt', area: 'N' },
  { key: 'kattegat', label: 'Skagerrak og Kattegat (fx Isefjorden, Roskilde, Mariager og Randers Fjord)', water: 'salt', area: 'K' },
  { key: 'baelt', label: 'Bælterne, Øresund og Østersøen (fx Lillebælt, Storebælt, Det Sydfynske Øhav)', water: 'salt', area: 'B' },
  { key: 'bornholm', label: 'Farvandet omkring Bornholm', water: 'salt', area: 'B' },
  { key: 'fersk', label: 'Å, bæk eller sø', water: 'fersk', area: 'F' },
  { key: 'fersk-bornholm', label: 'Å eller bæk på Bornholm', water: 'fersk', area: 'F' },
];

export const AREA_NAMES: Record<SizeArea, string> = {
  N: 'Nordsøen (inkl. Limfjorden og Ringkøbing Fjord)',
  K: 'Skagerrak og Kattegat',
  B: 'Bælterne og Østersøen',
  F: 'Ferskvand',
};

const SALT: Zone[] = ['nordsoen', 'ringkobing', 'vadehavet', 'kattegat', 'baelt', 'bornholm'];
const FRESH: Zone[] = ['fersk', 'fersk-bornholm'];

// kind:
//  closed  = fredet / forbudt for alle fisk af arten i perioden
//  colored = kun farvede fisk (i yngledragt) er fredet; helt blanke fisk med løse skæl må tages
//  check   = der gælder særlige regler, som værktøjet ikke kan afgøre; læseren skal tjekke selv
export type Period = {
  from: string; // 'MM-DD'
  to: string;   // 'MM-DD' (to < from betyder over nytår)
  zones: Zone[];
  kind: 'closed' | 'colored' | 'check';
  text: string; // vises til læseren
  years?: number[]; // kun disse år (EU-regler for ét år ad gangen)
};

export type Species = {
  slug: string;
  name: string;
  latin: string;
  waters: ('salt' | 'fersk')[]; // hvor kilden har regler for arten
  min: Partial<Record<SizeArea, number>>;
  noMin?: boolean; // kilden siger udtrykkeligt: intet mindstemål
  minZone?: Partial<Record<Zone, number>>; // afvigelser for enkelte zoner
  periods: Period[];
  notes?: string[];
  zoneNotes?: Partial<Record<Zone, string>>;
  // Tekst til oversigtstabellen
  table: { salt: string; fersk: string; min: string };
};

const YEAR = { from: '01-01', to: '12-31' };

export const SPECIES: Species[] = [
  {
    slug: 'havoerred', name: 'Havørred', latin: 'Salmo trutta', waters: ['salt', 'fersk'],
    min: { N: 40, K: 40, B: 40, F: 40 },
    periods: [
      { from: '11-16', to: '01-15', zones: ['nordsoen', 'kattegat', 'baelt'], kind: 'colored', text: 'Farvede havørreder (i yngledragt) er fredet 16. november – 15. januar. Kun helt blanke fisk med løse skæl må tages med hjem.' },
      { from: '09-15', to: '02-29', zones: ['vadehavet'], kind: 'closed', text: 'I Vadehavet er alle havørreder fredet 15. september – 28./29. februar.' },
      { from: '09-15', to: '02-29', zones: ['bornholm'], kind: 'colored', text: 'Omkring Bornholm er farvede havørreder (i yngledragt) fredet 15. september – 28./29. februar. Kun helt blanke fisk med løse skæl må tages med hjem.' },
      { ...YEAR, zones: ['ringkobing'], kind: 'closed', text: 'I Ringkøbing, Nissum og Stadil Fjorde og Von Å er havørred totalfredet hele året.' },
      { from: '11-16', to: '02-29', zones: FRESH, kind: 'closed', text: 'I ferskvand er havørred fredet 16. november – 28./29. februar.' },
      { from: '09-16', to: '11-15', zones: ['fersk-bornholm'], kind: 'colored', text: 'I bornholmske vandløb er farvede havørreder fredet fra 16. september.' },
    ],
    table: { salt: '16. nov. – 15. jan. (farvede fisk). Vadehavet: 15. sep. – 28./29. feb. Bornholm: 15. sep. – 28./29. feb. (farvede). Ringkøbing, Nissum, Stadil Fjord: hele året', fersk: '16. nov. – 28./29. feb. (Bornholm: farvede fra 16. sep.)', min: '40 cm' },
  },
  {
    slug: 'laks', name: 'Laks', latin: 'Salmo salar', waters: ['salt', 'fersk'],
    min: { N: 60, K: 60, B: 60, F: 40 },
    periods: [
      { from: '11-16', to: '01-15', zones: ['nordsoen', 'kattegat', 'baelt', 'bornholm'], kind: 'colored', text: 'Farvede laks (i yngledragt) er fredet 16. november – 15. januar. Kun helt blanke fisk med løse skæl må tages med hjem.' },
      { from: '09-15', to: '02-29', zones: ['vadehavet'], kind: 'closed', text: 'I Vadehavet er laks fredet 15. september – 28./29. februar.' },
      { ...YEAR, zones: ['ringkobing'], kind: 'closed', text: 'I Ringkøbing, Nissum og Stadil Fjorde og Von Å er laks totalfredet hele året.' },
      { from: '11-16', to: '02-29', zones: FRESH, kind: 'closed', text: 'I ferskvand er laks fredet 16. november – 28./29. februar.' },
    ],
    zoneNotes: {
      vadehavet: 'Nord for Låningsvejen til Mandø er laks totalfredet hele året.',
      baelt: 'I Østersøen (underområde 22–31) må du højst tage én fedtfinneklippet (udsat) laks med hjem pr. dag, og den skal hjemtages hel.',
      bornholm: 'I Østersøen (underområde 22–31) må du højst tage én fedtfinneklippet (udsat) laks med hjem pr. dag, og den skal hjemtages hel.',
    },
    table: { salt: '16. nov. – 15. jan. (farvede fisk). Vadehavet: 15. sep. – 28./29. feb. Ringkøbing, Nissum, Stadil Fjord: hele året', fersk: '16. nov. – 28./29. feb.', min: '60 cm (saltvand), 40 cm (ferskvand)' },
  },
  {
    slug: 'baekoerred', name: 'Bækørred', latin: 'Salmo trutta forma fario', waters: ['fersk'],
    min: { F: 30 },
    periods: [{ from: '11-16', to: '02-29', zones: FRESH, kind: 'closed', text: 'Bækørred er fredet 16. november – 28./29. februar.' }],
    table: { salt: '–', fersk: '16. nov. – 28./29. feb.', min: '30 cm' },
  },
  {
    slug: 'soeoerred', name: 'Søørred', latin: 'Salmo trutta forma lacustris', waters: ['fersk'],
    min: { F: 40 },
    periods: [{ from: '11-16', to: '02-29', zones: FRESH, kind: 'closed', text: 'Søørred er fredet 16. november – 28./29. februar.' }],
    table: { salt: '–', fersk: '16. nov. – 28./29. feb.', min: '40 cm' },
  },
  {
    slug: 'regnbueoerred', name: 'Regnbueørred', latin: 'Oncorhynchus mykiss', waters: ['salt', 'fersk'],
    min: {}, noMin: true,
    periods: [{ ...YEAR, zones: ['ringkobing'], kind: 'closed', text: 'I Ringkøbing og Stadil Fjord og Von Å er alle ørredarter fredet hele året.' }],
    notes: ['Regnbueørred har hverken mindstemål eller fredningstid. I put and take søer gælder søens egne regler for, hvor mange fisk du må tage.'],
    table: { salt: 'Ingen (Ringkøbing og Stadil Fjord: fredet hele året)', fersk: 'Ingen', min: 'Intet mindstemål' },
  },
  {
    slug: 'gedde', name: 'Gedde', latin: 'Esox lucius', waters: ['salt', 'fersk'],
    min: { N: 60, K: 60, B: 60, F: 60 },
    periods: [
      { from: '04-01', to: '05-15', zones: SALT, kind: 'closed', text: 'I saltvand er gedde fredet 1. april – 15. maj.' },
      { from: '03-15', to: '04-30', zones: FRESH, kind: 'closed', text: 'I ferskvand er gedde fredet 15. marts – 30. april.' },
    ],
    table: { salt: '1. apr. – 15. maj', fersk: '15. mar. – 30. apr.', min: '60 cm' },
  },
  {
    slug: 'aborre', name: 'Aborre', latin: 'Perca fluviatilis', waters: ['salt', 'fersk'],
    min: { N: 20, K: 20, B: 20, F: 20 },
    periods: [],
    notes: ['I visse salt- og ferskvandsområder ved Sydsjælland, Møn, Lolland og Falster er mindstemålet 24 cm, og der er et maksimumsmål på 30 cm. I visse ferskvandsområder dér må aborrer ikke landes 1. marts – 30. april.'],
    table: { salt: 'Ingen (særregler ved Sydsjælland, Møn, Lolland og Falster)', fersk: 'Ingen (dog 1. mar. – 30. apr. i visse områder ved Sydsjælland, Møn, Lolland og Falster)', min: '20 cm (24–30 cm i visse områder ved Sydsjælland, Møn, Lolland og Falster)' },
  },
  {
    slug: 'sandart', name: 'Sandart', latin: 'Sander lucioperca', waters: ['fersk'],
    min: { F: 50 },
    periods: [{ from: '05-01', to: '05-31', zones: FRESH, kind: 'closed', text: 'Sandart er fredet 1. – 31. maj.' }],
    table: { salt: 'Ikke nævnt', fersk: '1. – 31. maj', min: '50 cm' },
  },
  {
    slug: 'torsk', name: 'Torsk', latin: 'Gadus morhua', waters: ['salt'],
    min: { N: 35, K: 30, B: 35 },
    periods: [
      { ...YEAR, zones: ['baelt'], kind: 'closed', years: [2026], text: 'Torskefiskeri er forbudt i hele 2026 i den vestlige Østersø (underområde 22, 23 og 24), som dækker Bælterne, Øresund og Østersøen vest for Bornholm.' },
      { ...YEAR, zones: ['bornholm'], kind: 'check', years: [2026], text: 'Dele af farvandet ved Bornholm ligger i underområde 24, hvor torskefiskeri er forbudt i hele 2026. Tjek kortet over underområderne hos Miljøstyrelsen.' },
    ],
    notes: ['Reglerne for torsk i Østersøen er EU-regler, der fastsættes for ét år ad gangen. Tjek Miljøstyrelsen, når et nyt år begynder.'],
    table: { salt: 'Forbudt i hele 2026 i Bælterne, Øresund og den vestlige Østersø (underområde 22–24)', fersk: '–', min: '35 cm (Nordsøen, Bælterne og Østersøen), 30 cm (Skagerrak og Kattegat)' },
  },
  {
    slug: 'sild', name: 'Sild', latin: 'Clupea harengus', waters: ['salt'],
    min: { N: 20, K: 18 },
    periods: [],
    table: { salt: 'Ingen', fersk: '–', min: '20 cm (Nordsøen), 18 cm (Skagerrak og Kattegat), ikke nævnt for Bælterne og Østersøen' },
  },
  {
    slug: 'makrel', name: 'Makrel', latin: 'Scomber scombrus', waters: ['salt'],
    min: { N: 30, K: 20 },
    periods: [],
    table: { salt: 'Ingen', fersk: '–', min: '30 cm (Nordsøen), 20 cm (Skagerrak og Kattegat), ikke nævnt for Bælterne og Østersøen' },
  },
  {
    slug: 'hornfisk', name: 'Hornfisk', latin: 'Belone belone', waters: ['salt'],
    min: {}, noMin: true,
    periods: [],
    notes: ['Hornfisk har hverken mindstemål eller fredningstid.'],
    table: { salt: 'Ingen', fersk: '–', min: 'Intet mindstemål' },
  },
  {
    slug: 'roedspaette', name: 'Rødspætte', latin: 'Pleuronectes platessa', waters: ['salt'],
    min: { N: 27, K: 27, B: 25 },
    periods: [],
    table: { salt: 'Ingen', fersk: '–', min: '27 cm (Nordsøen, Skagerrak og Kattegat), 25 cm (Bælterne og Østersøen)' },
  },
  {
    slug: 'skrubbe', name: 'Skrubbe', latin: 'Platichthys flesus', waters: ['salt'],
    min: { B: 23 },
    periods: [],
    zoneNotes: { baelt: 'Mindstemålet i Bælterne og Østersøen afhænger af underområdet: 23 cm i underområde 22–25 (de danske farvande), 21 cm i 26–28 og 18 cm i 29–32.', bornholm: 'Mindstemålet i Østersøen afhænger af underområdet: 23 cm i underområde 22–25, som dækker farvandet omkring Bornholm.' },
    table: { salt: 'Ingen', fersk: '–', min: '23 cm (Bælterne og Østersøen, underområde 22–25), ikke nævnt for de andre farvande' },
  },
  {
    slug: 'pighvar', name: 'Pighvar', latin: 'Scophthalmus maximus', waters: ['salt'],
    min: { B: 30 },
    periods: [],
    table: { salt: 'Ingen', fersk: '–', min: '30 cm (Bælterne og Østersøen), ikke nævnt for de andre farvande' },
  },
  {
    slug: 'slethvar', name: 'Slethvar', latin: 'Scophthalmus rhombus', waters: ['salt'],
    min: { B: 30 },
    periods: [],
    table: { salt: 'Ingen', fersk: '–', min: '30 cm (Bælterne og Østersøen), ikke nævnt for de andre farvande' },
  },
  {
    slug: 'havbars', name: 'Havbars', latin: 'Dicentrarchus labrax', waters: ['salt'],
    min: { N: 42, K: 42 },
    periods: [
      { ...YEAR, zones: ['nordsoen', 'vadehavet', 'ringkobing'], kind: 'check', text: 'I Nordsøen syd for Hanstholm gælder EU-regler for havbars: i perioder er kun catch & release tilladt, og ellers må du højst tage 3 havbars med hjem pr. dag. Tjek de gældende regler hos Miljøstyrelsen.' },
    ],
    table: { salt: 'Særlige EU-regler i Nordsøen syd for Hanstholm (catch & release i perioder, ellers højst 3 pr. dag)', fersk: '–', min: '42 cm' },
  },
  {
    slug: 'aal', name: 'Ål', latin: 'Anguilla anguilla', waters: ['salt', 'fersk'],
    min: { F: 45 },
    periods: [
      { ...YEAR, zones: SALT, kind: 'closed', years: [2026, 2027, 2028], text: 'Rekreativt fiskeri efter ål er forbudt i saltvand i 2026, 2027 og 2028 (EU-forordning 2026/249).' },
    ],
    notes: ['I ferskvand er der ingen generel fredningstid, men regler for redskaber: ruser må ikke bruges i ferskvand 16. oktober – 31. juli.'],
    table: { salt: 'Forbudt i 2026, 2027 og 2028', fersk: 'Ingen generel fredningstid (ruser forbudt 16. okt. – 31. jul.)', min: '45 cm (ferskvand)' },
  },
  {
    slug: 'helt', name: 'Helt', latin: 'Coregonus lavaretus', waters: ['salt', 'fersk'],
    min: { N: 36, K: 36, B: 36, F: 36 },
    minZone: { ringkobing: 34 },
    periods: [
      { from: '11-01', to: '01-31', zones: ['nordsoen', 'vadehavet', 'kattegat', 'baelt', 'bornholm'], kind: 'closed', text: 'Helt er fredet 1. november – 31. januar.' },
      { from: '11-01', to: '02-29', zones: ['ringkobing'], kind: 'closed', text: 'I Ringkøbing og Stadil Fjord er helt fredet 1. november – 28./29. februar, og i Nissum Fjord 1. oktober – 31. marts.' },
      { from: '10-01', to: '10-31', zones: ['ringkobing'], kind: 'check', text: 'I Nissum Fjord er helt fredet fra 1. oktober. I Ringkøbing og Stadil Fjord først fra 1. november.' },
      { from: '03-01', to: '03-31', zones: ['ringkobing'], kind: 'check', text: 'I Nissum Fjord er helt fredet til 31. marts. I Ringkøbing og Stadil Fjord kun til 28./29. februar.' },
      { from: '11-01', to: '01-31', zones: FRESH, kind: 'closed', text: 'I ferskvand er helt og heltling fredet 1. november – 31. januar.' },
    ],
    table: { salt: '1. nov. – 31. jan. (Nissum Fjord: 1. okt. – 31. mar., Ringkøbing og Stadil Fjord: 1. nov. – 28./29. feb.)', fersk: '1. nov. – 31. jan.', min: '36 cm (34 cm i Ringkøbing Fjord)' },
  },
  {
    slug: 'stalling', name: 'Stalling', latin: 'Thymallus thymallus', waters: ['fersk'],
    min: {},
    periods: [{ from: '03-15', to: '05-15', zones: FRESH, kind: 'closed', text: 'Stalling er fredet 15. marts – 15. maj.' }],
    table: { salt: '–', fersk: '15. mar. – 15. maj', min: 'Ikke nævnt' },
  },
];
