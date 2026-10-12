# HOT TO TUNE – E-Scooter-Wissensdatenbank

Eine responsive, vollständig deutschsprachige Website im dunklen Neon-/Cyberpunk-Stil. Die Seite ist ein markenübergreifender Einstieg in Modellrecherche, Technikverständnis, Sicherheitsprüfungen und Einstellungsdokumentation.

## Dateien
- `index.html` – deutsche Seitenstruktur und Inhalte
- `style.css` – Layout, Farben und mobile Darstellung
- `script.js` – Modellsuche, Markenfilter, dynamische Modellprofile, Einstellungs-Checkliste und Kopierfunktion

## Modellkatalog
Der Katalog enthält derzeit mehr als 60 Modell-/Modellfamilien-Einträge aus zahlreichen Marken. Er ist ein Startbestand, keine vollständige Liste aller weltweit erhältlichen Scooter. Ein Klick auf „Modelldetails öffnen“ zeigt ein Profil mit technischen Datenfeldern, Versionshinweisen und einem Link zur Herstellerseite. Nicht belegte Werte werden ausdrücklich als „Noch nicht verifiziert“ angezeigt, statt erfunden zu werden.

Modellprofile sind über Hash-Adressen wie `#modell/modell-1` direkt ansteuerbar. Da die Website statisch ist, benötigt sie keinen Server und speichert keine Nutzerdaten. Die Profilfelder sind noch nicht mit einer zentralen Datenbank verbunden und die Website greift nicht auf Scooter-Hardware zu.

## Veröffentlichung mit GitHub Pages
1. Bei https://github.com/ anmelden.
2. Ein Repository namens `hot-to-tune-my-electric-scooter` erstellen.
3. `index.html`, `style.css`, `script.js` und `README.md` in das Stammverzeichnis hochladen.
4. `Settings → Pages` öffnen.
5. Bei „Build and deployment“ `Deploy from a branch` auswählen.
6. Branch `main` und Ordner `/(root)` auswählen und speichern.
7. Die veröffentlichte Adresse wird in den Pages-Einstellungen angezeigt. Sie folgt üblicherweise dem Muster `https://DEIN-BENUTZERNAME.github.io/hot-to-tune-my-electric-scooter/`.

## Technische Daten richtig ergänzen
Für jeden Scooter müssen Modelljahr, Verkaufsregion, Hardware-Revision und Firmwarestand möglichst genau erfasst werden. Werte sollten aus Herstellerhandbüchern, offiziellen Datenblättern oder nachvollziehbaren Messungen stammen. Jede spätere Ergänzung sollte Quelle, Abrufdatum und Gültigkeitsbereich dokumentieren. Keine universellen Controller- oder Akkuwerte ungeprüft auf andere Modelle übertragen.
