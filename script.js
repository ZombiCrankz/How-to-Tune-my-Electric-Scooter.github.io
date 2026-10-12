const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
}));

// Modellindex: Ein Eintrag bedeutet nur, dass das Modell im Katalog geführt wird.
// Technische Felder bleiben bewusst offen, bis sie für Modelljahr/Region/Hardware belegt sind.
const scooterModels = [
  ['Segway-Ninebot','ZT3 Pro','Geländetaugliche Modellfamilie; Variante und Controllerstand genau erfassen.','https://www.segway.com/'],
  ['Segway-Ninebot','MAX G2','MAX-Modellfamilie; Länderkennung und Baujahr ergänzen.','https://www.segway.com/'],
  ['Segway-Ninebot','MAX G2 D','D-Variante; Zulassungs- und Firmwarestand separat dokumentieren.','https://www.segway.com/'],
  ['Segway-Ninebot','MAX G30','Ältere MAX-Modellfamilie; Untermodell und Region unterscheiden.','https://www.segway.com/'],
  ['Segway-Ninebot','MAX G30D','D-Variante; genaue Hardware- und Firmwareversion erforderlich.','https://www.segway.com/'],
  ['Segway-Ninebot','F2','F2-Modellfamilie; Untermodell und Baujahr erfassen.','https://www.segway.com/'],
  ['Segway-Ninebot','F2 Plus','Plus-Variante nicht automatisch als hardwaregleich behandeln.','https://www.segway.com/'],
  ['Segway-Ninebot','F2 Pro','Pro-Variante; genaue regionale Ausführung prüfen.','https://www.segway.com/'],
  ['Segway-Ninebot','E2','E2-Modellfamilie; Modelljahr und Länderkennung ergänzen.','https://www.segway.com/'],
  ['Segway-Ninebot','E2 Plus','Plus-Variante; technische Daten erst nach Quellenprüfung eintragen.','https://www.segway.com/'],
  ['Segway-Ninebot','E2 Pro','Pro-Variante; genaue Hardware und Region dokumentieren.','https://www.segway.com/'],
  ['Xiaomi','Electric Scooter 4','Modellgeneration und regionale Ausführung prüfen.','https://www.mi.com/global/'],
  ['Xiaomi','Electric Scooter 4 Lite','Lite-Variante; genaue Generation erfassen.','https://www.mi.com/global/'],
  ['Xiaomi','Electric Scooter 4 Pro','Pro-Generation und Baujahr müssen eindeutig sein.','https://www.mi.com/global/'],
  ['Xiaomi','Electric Scooter 4 Ultra','Daten anhand der passenden Herstellerunterlagen prüfen.','https://www.mi.com/global/'],
  ['Xiaomi','Mi Electric Scooter 1S','Ältere Modellfamilie; Controller und Firmwarestand erfassen.','https://www.mi.com/global/'],
  ['Xiaomi','Mi Electric Scooter Pro 2','Regionale Version und Hardware-Revision unterscheiden.','https://www.mi.com/global/'],
  ['Xiaomi','Electric Scooter 3','Generation und genaue Modellkennung prüfen.','https://www.mi.com/global/'],
  ['NIU','KQi2 Pro','Herstellerunterlagen für die genaue Modellvariante heranziehen.','https://www.niu.com/'],
  ['NIU','KQi3 Sport','Sport-Ausführung; nicht mit anderen KQi3-Versionen gleichsetzen.','https://www.niu.com/'],
  ['NIU','KQi3 Pro','Pro-Ausführung; genaue Modell- und Firmwareversion erfassen.','https://www.niu.com/'],
  ['NIU','KQi3 Max','Max-Ausführung; technische Daten einzeln verifizieren.','https://www.niu.com/'],
  ['NIU','KQi Air','Leichtbau-Modell; Komponenten und Varianten prüfen.','https://www.niu.com/'],
  ['NIU','KQi 300X','Modellgeneration und regionale Ausführung ergänzen.','https://www.niu.com/'],
  ['VMAX','VX2','Leistungs- und Ausstattungsvariante genau bestimmen.','https://www.vmax-escooter.de/'],
  ['VMAX','VX2 Pro','Pro-Variante; Baujahr und Hardwareversion ergänzen.','https://www.vmax-escooter.de/'],
  ['VMAX','VX4','Nur verifizierte Werte für die genaue Version übernehmen.','https://www.vmax-escooter.de/'],
  ['VMAX','VX5','Modelljahr und Ausstattungsvariante prüfen.','https://www.vmax-escooter.de/'],
  ['Navee','S65','Modellkennung und regionale Version unterscheiden.','https://naveetech.com/'],
  ['Navee','S65C','C-Variante separat dokumentieren.','https://naveetech.com/'],
  ['Navee','V50','Genaue Ausführung und Baujahr ergänzen.','https://naveetech.com/'],
  ['Navee','V40','Genaue Ausführung und Baujahr ergänzen.','https://naveetech.com/'],
  ['Navee','ST3 Pro','Modelljahr, Region und Controllerstand erfassen.','https://naveetech.com/'],
  ['KuKirin','G2','Baujahr und Hardwareversion genau identifizieren.','https://www.kukirin-scooter.com/'],
  ['KuKirin','G2 Max','Max-Variante nicht ohne Beleg mit G2 gleichsetzen.','https://www.kukirin-scooter.com/'],
  ['KuKirin','G3','Technische Angaben modellgenau verifizieren.','https://www.kukirin-scooter.com/'],
  ['KuKirin','G3 Pro','Pro-Variante und Baujahr erfassen.','https://www.kukirin-scooter.com/'],
  ['KuKirin','M4 Max','Vor Wartung oder Änderung passende Unterlagen suchen.','https://www.kukirin-scooter.com/'],
  ['Dualtron','Mini','Generation und Controller-Ausführung beachten.','https://www.dual-tron.com/'],
  ['Dualtron','Mini Special','Special-Ausführung separat erfassen.','https://www.dual-tron.com/'],
  ['Dualtron','Popular','Konkrete Version und elektrische Ausstattung prüfen.','https://www.dual-tron.com/'],
  ['Dualtron','Victor','Modellrevision und Controllerkonfiguration ergänzen.','https://www.dual-tron.com/'],
  ['Dualtron','Thunder','Generation und genaue Version erforderlich.','https://www.dual-tron.com/'],
  ['Apollo','Go','Modelljahr und Region ergänzen.','https://apolloscooters.co/'],
  ['Apollo','City','Generation und genaue Modellvariante prüfen.','https://apolloscooters.co/'],
  ['Apollo','Explore','Ausstattung und Modelljahr dokumentieren.','https://apolloscooters.co/'],
  ['Pure Electric','Air','Produktgeneration und regionale Variante prüfen.','https://www.pureelectric.com/'],
  ['Pure Electric','Advance','Generation und genaue Modellkennung erfassen.','https://www.pureelectric.com/'],
  ['Pure Electric','Escape','Produktgeneration und Ausführung prüfen.','https://www.pureelectric.com/'],
  ['Inmotion','Climber','Plattform und Bauteilvariante genau bestimmen.','https://www.inmotionworld.com/'],
  ['Inmotion','S1','Regionale Variante und Firmwarestand dokumentieren.','https://www.inmotionworld.com/'],
  ['Inmotion','S1F','S1F-Ausführung separat verifizieren.','https://www.inmotionworld.com/'],
  ['E-TWOW','Booster','Version und regionale Ausführung erfassen.','https://www.etwow.com/'],
  ['E-TWOW','GT','GT-Modellfamilie; genaue Version erforderlich.','https://www.etwow.com/'],
  ['Egret','X','Ausstattung und Versionsstand prüfen.','https://egret.com/'],
  ['Egret','Pro','Genaue Modellgeneration dokumentieren.','https://egret.com/'],
  ['Egret','One','Modelljahr und Ausführung prüfen.','https://egret.com/'],
  ['Inöe','Bloomy','Markt- und Modellvariante mit Herstellerunterlagen abgleichen.','https://www.inoe-scooter.com/'],
  ['OKAI','Neon','Genaue Modellnummer und Region ergänzen.','https://okai.co/'],
  ['OKAI','Ceetle','Modellnummer und Firmwarestand prüfen.','https://okai.co/'],
  ['Razor','E Prime','Ausführung und Modelljahr dokumentieren.','https://razor.com/'],
  ['Razor','C25','Genaue C25-Variante anhand der Herstellerangaben identifizieren.','https://razor.com/'],
  ['Hiboy','S2','Untermodell und Baujahr erfassen.','https://hiboy.com/'],
  ['Hiboy','MAX Pro','Genaue Modellvariante prüfen.','https://hiboy.com/'],
  ['TurboAnt','X7 Max','Version und regionale Ausführung dokumentieren.','https://turboant.com/'],
  ['TurboAnt','M10 Lite','Modellkennung und Baujahr erfassen.','https://turboant.com/'],
  ['Andere Marke','Modell noch nicht gelistet','Neues Modell kann als Anfrage für die spätere Ergänzung vorgemerkt werden.','']
].map((row, i) => ({id:`modell-${i+1}`, brand:row[0], model:row[1], note:row[2], source:row[3], status:'Grunddatensatz – technische Daten noch nicht verifiziert'}));

const modelSearch = document.getElementById('modelSearch');
const brandFilter = document.getElementById('brandFilter');
const modelResults = document.getElementById('modelResults');
const modelCount = document.getElementById('modelCount');
const modelDetail = document.getElementById('modelDetail');
const brands = [...new Set(scooterModels.map(item => item.brand))].sort((a,b) => a.localeCompare(b, 'de'));
brands.forEach(brand => { const option=document.createElement('option'); option.value=brand; option.textContent=brand; brandFilter.appendChild(option); });

function safeText(tag, text, className) { const el=document.createElement(tag); el.textContent=text; if(className) el.className=className; return el; }
function showModelDetail(item, updateHash=true) {
  modelDetail.replaceChildren(); modelDetail.hidden=false;
  const top=document.createElement('div'); top.className='detail-top';
  const info=document.createElement('div');
  info.append(safeText('span', item.brand.toUpperCase(), 'tag'), safeText('h3', item.model, 'detail-title'), safeText('p', item.note));
  const status=safeText('span', 'DATENSTATUS: NOCH NICHT VERIFIZIERT', 'status-label');
  top.append(info,status); modelDetail.append(top);
  modelDetail.append(safeText('p','Dieser Eintrag ist ein Modellprofil-Gerüst. Die folgenden Werte werden nicht geraten: Sie müssen zur genauen Variante, Region, zum Modelljahr und zur Hardware passen.','detail-warning'));
  const specs=[['Motor / Nennleistung','Noch nicht verifiziert'],['Akku / Zellkonfiguration','Noch nicht verifiziert'],['Nennspannung / Kapazität','Noch nicht verifiziert'],['BMS / Stromgrenzen','Noch nicht verifiziert'],['Controller / MCU','Noch nicht verifiziert'],['Firmware / Versionsstand','Noch nicht verifiziert'],['Bremsen / Reifen','Noch nicht verifiziert'],['Zulassung / regionale Version','Noch nicht verifiziert']];
  const grid=document.createElement('div'); grid.className='spec-grid';
  specs.forEach(([label,value])=>{const cell=document.createElement('div');cell.className='spec-cell';cell.append(safeText('span',label),safeText('strong',value));grid.append(cell);});
  modelDetail.append(grid);
  const actions=document.createElement('div'); actions.className='detail-actions';
  const use=document.createElement('button'); use.type='button'; use.className='button primary'; use.textContent='IN EINSTELLUNGS-CHECK ÜBERNEHMEN';
  use.addEventListener('click',()=>{document.getElementById('model').value=`${item.brand} ${item.model}`;document.getElementById('labor').scrollIntoView({behavior:'smooth'});document.getElementById('firmware').focus({preventScroll:true});});
  actions.append(use);
  if(item.source){const link=document.createElement('a');link.className='button ghost';link.href=item.source;link.target='_blank';link.rel='noopener noreferrer';link.textContent='HERSTELLERSEITE ÖFFNEN ↗';actions.append(link);}
  const close=document.createElement('button');close.type='button';close.className='button ghost';close.textContent='DETAILS SCHLIESSEN';close.addEventListener('click',()=>{modelDetail.hidden=true;if(location.hash.startsWith('#modell/'))history.replaceState(null,'',location.pathname+location.search+'#modelle');});actions.append(close);
  modelDetail.append(actions);
  if(updateHash){history.replaceState(null,'',`${location.pathname}${location.search}#modell/${item.id}`);}
}
function renderModels() {
  const query=modelSearch.value.trim().toLocaleLowerCase('de'); const brand=brandFilter.value;
  const matches=scooterModels.filter(item=>(brand==='all'||item.brand===brand)&&`${item.brand} ${item.model} ${item.note}`.toLocaleLowerCase('de').includes(query));
  modelCount.textContent=`${matches.length} von ${scooterModels.length} Einträgen`;
  modelResults.replaceChildren();
  if(!matches.length){modelResults.append(safeText('p','Kein Treffer. Prüfe die Schreibweise oder wähle eine andere Marke.','empty-state'));return;}
  matches.forEach(item=>{
    const card=document.createElement('article');card.className='model-card';
    card.append(safeText('span',item.brand,'tag'),safeText('h3',item.model),safeText('p',item.note));
    const status=safeText('p','Technische Daten: noch nicht verifiziert','model-status');card.append(status);
    const detail=document.createElement('button');detail.type='button';detail.className='button ghost model-use';detail.textContent='MODELLDETAILS ÖFFNEN ↗';detail.addEventListener('click',()=>showModelDetail(item));card.append(detail);
    modelResults.append(card);
  });
}
modelSearch.addEventListener('input',renderModels);brandFilter.addEventListener('change',renderModels);renderModels();
function routeToHash(){if(location.hash.startsWith('#modell/')){const id=location.hash.slice('#modell/'.length);const item=scooterModels.find(x=>x.id===id);if(item){showModelDetail(item,false);modelDetail.scrollIntoView({block:'nearest'});}}}
window.addEventListener('hashchange',routeToHash);routeToHash();

const form=document.getElementById('setupForm'); const resultTitle=document.getElementById('resultTitle'); const resultText=document.getElementById('resultText'); const resultList=document.getElementById('resultList'); const copyPlan=document.getElementById('copyPlan'); const copyStatus=document.getElementById('copyStatus');
function buildPlan(){
 const model=document.getElementById('model').value.trim();const firmware=document.getElementById('firmware').value.trim();const goal=document.getElementById('goal').value;const checked=[...form.querySelectorAll('input[name="checks"]:checked')].map(el=>el.value);
 const goals={reliability:'Zuverlässigkeit und Akkulebensdauer',comfort:'Sanfte Beschleunigung und Fahrkomfort',range:'Reichweite und Effizienz',diagnostics:'Fehlersuche und Technik verstehen'};
 const items=[model?`Modell dokumentiert: ${model}`:'Ermittle Modell, genaue Variante und Hardware-Revision.',firmware?`Firmware / Controller dokumentiert: ${firmware}`:'Notiere Firmware- und Controller-Version, sofern verfügbar.',`Ziel: ${goals[goal]}. Bevorzuge nachweislich geeignete und herstellerkonforme Einstellungen.`,checked.includes('backup')?'Sicherung / Wiederherstellung als geprüft markiert.':'Vor Firmwareänderungen eine überprüfte Original-Sicherung und Wiederherstellungsmöglichkeit klären.',checked.includes('battery')?'Akku und Steckverbindungen als geprüft markiert.':'Akku, Leitungen und Steckverbindungen auf Schäden oder ungewöhnliche Wärme prüfen.',checked.includes('brakes')?'Bremsen, Reifen und Beleuchtung als geprüft markiert.':'Bremsen, Reifen, Beleuchtung und Befestigungen kontrollieren.',checked.includes('rules')?'Herstellergrenzen und geltende Vorschriften als geprüft markiert.':'Herstellergrenzen und geltende Vorschriften für den konkreten Scooter prüfen.','Ausgangswerte dokumentieren und Änderungen einzeln notieren.','Bei ungewöhnlicher Wärme, Geräuschen, Fehlercodes oder unerwartetem Verhalten abbrechen.'];
 const missing=['backup','battery','brakes','rules'].filter(v=>!checked.includes(v));resultTitle.textContent=missing.length?`Noch ${missing.length} Sicherheitsprüfung(en) offen`:'Basis-Checkliste erstellt';resultText.textContent=missing.length?'Nutze den Plan als Erinnerung. Offene Prüfungen zuerst erledigen. Dies ist keine technische Freigabe.':'Alle Punkte sind markiert. Werte und Grenzwerte müssen trotzdem anhand passender Unterlagen verifiziert werden.';resultList.replaceChildren(...items.map(text=>safeText('li',text)));copyStatus.textContent='';
}
form.addEventListener('submit',event=>{event.preventDefault();buildPlan();});
copyPlan.addEventListener('click',async()=>{const text=`${resultTitle.textContent}\n${resultText.textContent}\n\n${[...resultList.querySelectorAll('li')].map(li=>`- ${li.textContent}`).join('\n')}`;try{await navigator.clipboard.writeText(text);copyStatus.textContent='Checkliste wurde kopiert.';}catch{copyStatus.textContent='Der Browser blockiert den Kopierzugriff. Markiere und kopiere die Checkliste bitte manuell.';}});
