# HOT TO TUNE – E-Scooter-Wissensdatenbank

Eine responsive, vollständig deutschsprachige Website im dunklen Neon-/Cyberpunk-Stil. Die Seite ist ein markenübergreifender Einstieg in Modellrecherche, Technikverständnis, Sicherheitsprüfungen und Einstellungsdokumentation.

## Dateien
- `index.html` – deutsche Seitenstruktur und Inhalte
- `style.css` – Layout, Farben und mobile Darstellung
- `script.js` – Modellsuche, Markenfilter, dynamische Modellprofile, Einstellungs-Checkliste und Kopierfunktion

## Modellkatalog
Der Katalog enthält derzeit mehr als 60 Modell-/Modellfamilien-Einträge aus zahlreichen Marken. Er ist ein Startbestand, keine vollständige Liste aller weltweit erhältlichen Scooter. Ein Klick auf „Modelldetails öffnen“ zeigt ein Profil mit technischen Datenfeldern, Versionshinweisen und einem Link zur Herstellerseite. Für einige Modelle sind jetzt Stammdaten aus offiziellen Herstellerseiten oder Handbüchern hinterlegt (u. a. Segway ZT3 Pro D, MAX G2 D und F2 Pro D, Xiaomi Electric Scooter 4 Pro Generation 1/2, NIU KQi3 Sport/Pro/Max, KQi Air sowie NAVEE ST3 Pro). Nicht belegte Werte bleiben ausdrücklich als „Noch nicht verifiziert“ markiert. Herstellerangaben gelten nur für die genannte regionale Variante und sind keine Tuning-Freigabe.

Modellprofile sind über Hash-Adressen wie `#modell/modell-1` direkt ansteuerbar. Da die Website statisch ist, benötigt sie keinen Server und speichert keine Nutzerdaten. Die Profilfelder sind noch nicht mit einer zentralen Datenbank verbunden und die Website greift nicht auf Scooter-Hardware zu.

## Veröffentlichung mit GitHub Pages
1. Bei https://github.com/ anmelden.
2. Ein Repository namens `hot-to-tune-my-electric-scooter` erstellen.
3. `index.html`, `style.css`, `script.js` und `README.md` in das Stammverzeichnis hochladen.
4. `Settings → Pages` öffnen.
5. Bei „Build and deployment“ `Deploy from a branch` auswählen.
6. Branch `main` und Ordner `/(root)` auswählen und speichern.
7. Die veröffentlichte Adresse wird in den Pages-Einstellungen angezeigt. Sie folgt üblicherweise dem Muster `https://DEIN-BENUTZERNAME.github.io/hot-to-tune-my-electric-scooter/`.

## Datenstand und Quellen
Die in `script.js` hinterlegten Profilquellen sind direkt verlinkt. Werte, die vom Hersteller nicht veröffentlicht werden (z. B. genaue MCU-/Controller-Revision oder Firmwarestand), werden nicht geschätzt und müssen am konkreten Fahrzeug geprüft werden. Reichweiten sind Hersteller-Testwerte und nicht als garantierte Alltagsreichweite zu verstehen. Bei Varianten mit unterschiedlichen Marktversionen sind Typenschild, Zulassung und passende Bedienungsanleitung maßgeblich.

## Technische Daten richtig ergänzen
Für jeden Scooter müssen Modelljahr, Verkaufsregion, Hardware-Revision und Firmwarestand möglichst genau erfasst werden. Werte sollten aus Herstellerhandbüchern, offiziellen Datenblättern oder nachvollziehbaren Messungen stammen. Jede spätere Ergänzung sollte Quelle, Abrufdatum und Gültigkeitsbereich dokumentieren. Keine universellen Controller- oder Akkuwerte ungeprüft auf andere Modelle übertragen.
