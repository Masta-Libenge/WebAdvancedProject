README - Masta Music Webapplicatie
Projectbeschrijving
Masta Music is een interactieve single-page webapplicatie waarmee gebruikers muziek kunnen zoeken, filteren en sorteren via de Deezer API. Daarnaast kunnen gebruikers favoriete nummers opslaan die bewaard blijven tussen sessies.

Functionaliteiten
Zoekfunctie: Zoek op artiest, nummer of album.

Filteren: Filter resultaten op albumtitel.

Sorteren: Sorteer op nummer titel, album titel of duur.

Favorieten: Markeer nummers als favoriet, deze worden lokaal opgeslagen en blijven bewaard.

Laad meer: Bekijk meer dan de eerste 25 resultaten via de knop “Load More”.

Observer API: Toont realtime het aantal getoonde nummers onder de resultaten.

Foutafhandeling: Geeft meldingen bij lege zoekopdrachten of fouten bij het laden van data.

Gebruikte API
Deezer API (https://developers.deezer.com/api)
De applicatie haalt via deze API trackgegevens op op basis van gebruikerszoekopdrachten.

Technische implementatie
JavaScript concepten en waar toegepast:
Concept	Bestandsnaam	Lijnnummer(s)	Toelichting
DOM-manipulatie	src/app.js	10 - 90	Elementen selecteren, aanmaken en updaten
Event listeners	src/app.js	50 - 80	Knoppen, invoervelden en dropdown events
Const en let	src/app.js	Door heel bestand	Variabelen en constante waarden declareren
Template literals	src/app.js	25 - 50	Dynamische HTML strings voor kaarten
Array methods	src/app.js	65 - 85	filter(), sort(), forEach()
Arrow functions	src/app.js	70 - 85	Kortere functie syntax voor callbacks
Ternary operator	src/app.js	30, 55	Voor het tonen van favorieten hartjes
Callbacks	src/ui.js	10 - 30	Filter invoer event handler
Promises & async/await	src/app.js	90 - 110	Asynchrone API calls en foutafhandeling
Observer API	src/app.js	120 - 140	MutationObserver voor realtime aantal resultaten
Fetch & JSON	src/api.js	10 - 40	Ophalen en verwerken van API-data
LocalStorage	src/storage.js	10 - 50	Opslaan en ophalen van favorieten
Form validatie	src/app.js	80 - 90	Controleren op lege zoekterm

Installatie en gebruik
Clone deze repository:
git clone https://github.com/jouwgebruikersnaam/masta-music.git

Installeer dependencies met Vite:
npm install

Start de ontwikkelserver:
npm run dev

Open de applicatie in je browser via de getoonde URL (meestal http://localhost:3000).

Screenshots

De zoekfunctie, filter, sorteer opties en resultaten in kaartvorm.


Favorieten worden bewaard en aangegeven met een rood hartje.

Bronnen
Deezer API documentatie: https://developers.deezer.com/api

Vite build tool: https://vitejs.dev/

AI assistentie: ChatGPT (OpenAI)

