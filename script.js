const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

// Startbestand: Modellnamen dienen der Suche, nicht als technische Freigabe.
const scooterModels = [
  {brand:'Segway-Ninebot', model:'ZT3 Pro', note:'Geländetauglicher E-Scooter; Varianten und Controller-Version prüfen.'},
  {brand:'Segway-Ninebot', model:'MAX G2 / G2 D', note:'Regionale Varianten unterscheiden sich; Zulassungs- und Firmwarestand beachten.'},
  {brand:'Segway-Ninebot', model:'MAX G30 / G30D', note:'Modellgeneration und Länderkennung genau erfassen.'},
  {brand:'Segway-Ninebot', model:'F2 / F2 Plus / F2 Pro', note:'Untermodell und Baujahr können relevant sein.'},
  {brand:'Segway-Ninebot', model:'E2 / E2 Plus / E2 Pro', note:'Exakte Modellvariante und regionale Version prüfen.'},
  {brand:'Xiaomi', model:'Electric Scooter 4 / 4 Lite / 4 Pro', note:'Generation und genaue Modellbezeichnung ergänzen.'},
  {brand:'Xiaomi', model:'Electric Scooter 4 Ultra', note:'Technische Angaben vor Änderungen anhand der passenden Dokumentation prüfen.'},
  {brand:'Xiaomi', model:'Mi Electric Scooter 1S / Pro 2', note:'Modellgeneration und Controller-/Firmwareversion dokumentieren.'},
  {brand:'NIU', model:'KQi2 Pro', note:'Herstellerunterlagen für die genaue Variante heranziehen.'},
  {brand:'NIU', model:'KQi3 Sport / Pro / Max', note:'Die Varianten nicht als technisch identisch behandeln.'},
  {brand:'NIU', model:'KQi Air', note:'Gewichts- und Bauteilvarianten beachten.'},
  {brand:'VMAX', model:'VX2 / VX2 Pro', note:'Leistungs- und Ausstattungsvariante prüfen.'},
  {brand:'VMAX', model:'VX4', note:'Nur verifizierte Werte für die genaue Version übernehmen.'},
  {brand:'Navee', model:'S65 / S65C', note:'Modellkennung und regionale Version prüfen.'},
  {brand:'Navee', model:'V50 / V40', note:'Die genaue Variante kann Ausstattung und Daten verändern.'},
  {brand:'KuKirin', model:'G2 / G2 Max', note:'Baujahr und Hardwareversion genau identifizieren.'},
  {brand:'KuKirin', model:'G3 / G3 Pro', note:'Technische Angaben nur modellgenau verwenden.'},
  {brand:'KuKirin', model:'M4 Max', note:'Vor Wartung oder Änderung die passenden Unterlagen suchen.'},
  {brand:'Dualtron', model:'Mini / Mini Special', note:'Version und Controller-Ausführung beachten.'},
  {brand:'Dualtron', model:'Popular / Victor / Thunder', note:'Modellfamilie ist keine eindeutige Hardwareangabe.'},
  {brand:'Apollo', model:'Go / City / Explore', note:'Baujahr und Generation ergänzen.'},
  {brand:'Pure Electric', model:'Air / Advance / Escape', note:'Produktgeneration und genaue Modellvariante prüfen.'},
  {brand:'Inmotion', model:'Climber / S1 / S1F', note:'Je nach Modell unterschiedliche Plattformen und Bauteile.'},
  {brand:'E-TWOW', model:'Booster / GT', note:'Ausführung und regionale Variante exakt bestimmen.'},
  {brand:'Egret', model:'X / Pro / One', note:'Ausstattung und Versionsstand verifizieren.'},
  {brand:'Andere Marke', model:'Modell noch nicht gelistet', note:'Melde die genaue Marke, Modellbezeichnung und Baujahr zur späteren Ergänzung.'}
];

const modelSearch = document.getElementById('modelSearch');
const brandFilter = document.getElementById('brandFilter');
const modelResults = document.getElementById('modelResults');
const modelCount = document.getElementById('modelCount');
const brands = [...new Set(scooterModels.map(item => item.brand))].sort((a,b) => a.localeCompare(b, 'de'));
brands.forEach(brand => {
  const option = document.createElement('option');
  option.value = brand;
  option.textContent = brand;
  brandFilter.appendChild(option);
});

function renderModels() {
  const query = modelSearch.value.trim().toLocaleLowerCase('de');
  const brand = brandFilter.value;
  const matches = scooterModels.filter(item => {
    const matchesBrand = brand === 'all' || item.brand === brand;
    const matchesQuery = `${item.brand} ${item.model} ${item.note}`.toLocaleLowerCase('de').includes(query);
    return matchesBrand && matchesQuery;
  });
  modelCount.textContent = `${matches.length} Treffer`;
  modelResults.replaceChildren();
  if (!matches.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-state';
    empty.textContent = 'Kein Treffer. Prüfe die Schreibweise oder nutze „Andere Marke“, um ein noch nicht gelistetes Modell zu markieren.';
    modelResults.appendChild(empty);
    return;
  }
  matches.forEach(item => {
    const card = document.createElement('article');
    card.className = 'model-card';
    const title = document.createElement('h3');
    title.textContent = item.model;
    const brandLabel = document.createElement('span');
    brandLabel.className = 'tag';
    brandLabel.textContent = item.brand;
    const note = document.createElement('p');
    note.textContent = item.note;
    const button = document.createElement('button');
    button.className = 'button ghost model-use';
    button.type = 'button';
    button.textContent = 'IM EINSTELLUNGS-CHECK NUTZEN ↘';
    button.addEventListener('click', () => {
      document.getElementById('model').value = `${item.brand} ${item.model}`;
      document.getElementById('labor').scrollIntoView({behavior:'smooth'});
      document.getElementById('firmware').focus({preventScroll:true});
    });
    card.append(brandLabel, title, note, button);
    modelResults.appendChild(card);
  });
}
modelSearch.addEventListener('input', renderModels);
brandFilter.addEventListener('change', renderModels);
renderModels();

const form = document.getElementById('setupForm');
const resultTitle = document.getElementById('resultTitle');
const resultText = document.getElementById('resultText');
const resultList = document.getElementById('resultList');
const copyPlan = document.getElementById('copyPlan');
const copyStatus = document.getElementById('copyStatus');

function buildPlan() {
  const model = document.getElementById('model').value.trim();
  const firmware = document.getElementById('firmware').value.trim();
  const goal = document.getElementById('goal').value;
  const checked = [...form.querySelectorAll('input[name="checks"]:checked')].map(el => el.value);
  const goals = {
    reliability: 'Zuverlässigkeit und Akkulebensdauer',
    comfort: 'Sanfte Beschleunigung und Fahrkomfort',
    range: 'Reichweite und Effizienz',
    diagnostics: 'Fehlersuche und Technik verstehen'
  };
  const items = [
    model ? `Modell dokumentiert: ${model}` : 'Ermittle Modell, genaue Variante und Hardware-Revision.',
    firmware ? `Firmware / Controller dokumentiert: ${firmware}` : 'Notiere Firmware- und Controller-Version, sofern verfügbar.',
    `Ziel: ${goals[goal]}. Bevorzuge nachweislich geeignete und herstellerkonforme Einstellungen.`,
    checked.includes('backup') ? 'Sicherung / Wiederherstellung als geprüft markiert.' : 'Vor Firmwareänderungen eine überprüfte Original-Sicherung und realistische Wiederherstellungsmöglichkeit klären.',
    checked.includes('battery') ? 'Akku und Steckverbindungen als geprüft markiert.' : 'Akku, Leitungen und Steckverbindungen auf Schäden, ungewöhnliche Wärme oder Verfärbungen prüfen.',
    checked.includes('brakes') ? 'Bremsen, Reifen und Beleuchtung als geprüft markiert.' : 'Bremsen, Reifen, Beleuchtung und Befestigungen kontrollieren.',
    checked.includes('rules') ? 'Herstellergrenzen und geltende Vorschriften als geprüft markiert.' : 'Herstellergrenzen und geltende Vorschriften für den konkreten Scooter prüfen.',
    'Ausgangswerte sichern; Änderungen einzeln dokumentieren und nicht mehrere Variablen zugleich verändern.',
    'Bei ungewöhnlicher Wärme, Geräuschen, Fehlercodes, Leistungsverlust oder unerwartetem Verhalten abbrechen.'
  ];
  const missing = ['backup','battery','brakes','rules'].filter(value => !checked.includes(value));
  resultTitle.textContent = missing.length ? `Noch ${missing.length} Sicherheitsprüfung(en) offen` : 'Basis-Checkliste erstellt';
  resultText.textContent = missing.length
    ? 'Nutze den Plan als Erinnerung. Vor technischen Änderungen müssen die offenen Prüfungen erledigt und die konkreten Bauteilgrenzen verifiziert werden.'
    : 'Alle Punkte sind markiert. Das ist keine technische Freigabe: Werte und Grenzwerte müssen weiterhin anhand verlässlicher Unterlagen geprüft werden.';
  resultList.replaceChildren(...items.map(text => {
    const li = document.createElement('li');
    li.textContent = text;
    return li;
  }));
  copyStatus.textContent = '';
}
form.addEventListener('submit', event => { event.preventDefault(); buildPlan(); });
copyPlan.addEventListener('click', async () => {
  const text = `${resultTitle.textContent}\n${resultText.textContent}\n\n${[...resultList.querySelectorAll('li')].map(li => `- ${li.textContent}`).join('\n')}`;
  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = 'Checkliste wurde kopiert.';
  } catch {
    copyStatus.textContent = 'Der Browser blockiert den Kopierzugriff. Markiere und kopiere die Checkliste bitte manuell.';
  }
});
