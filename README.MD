Masta Music - Webapplicatie
Projectbeschrijving
Masta Music is een interactieve single-page webapplicatie waarmee gebruikers muziek kunnen zoeken, filteren, sorteren en favoriete nummers kunnen opslaan. De app maakt gebruik van de Deezer API en demonstreert moderne JavaScript-technieken zoals async/await, localStorage, observer API en meer.

De applicatie is gebouwd als eindproject voor het vak Advanced Web en voldoet aan alle functionele en technische eisen.

Functionaliteiten
Zoekfunctie – Zoek op artiest, nummer of album.

Filteren – Filter de resultaten op albumtitel.

Sorteren – Sorteer op nummer titel, album titel of duur.

Favorieten – Markeer nummers als favoriet. Favorieten worden opgeslagen in localStorage en blijven bewaard tussen sessies.

Laad meer – Bekijk meer dan de eerste 25 resultaten via de knop “Load More”.

Observer API – Toont realtime hoeveel nummers er zijn weergegeven.

Foutafhandeling – Meldingen bij lege zoekopdrachten of API-fouten.

Donkere stijl – Zwarte achtergrond met visuele accenten.

Logo functionaliteit – Klik op het logo om de pagina te herladen.

Gebruikte API
Deezer API: https://developers.deezer.com/api
Om toegang te krijgen tot Deezer-data tijdens ontwikkeling is tijdelijke CORS-toegang vereist via:
https://cors-anywhere.herokuapp.com/
Klik op “Request temporary access to the demo server” om API-verzoeken correct te laten werken in de browser.

Technische implementatie
Concept	Bestand	Regels	Uitleg
DOM-manipulatie	src/app.js	10–90	Elementen selecteren, bewerken, toevoegen
Event listeners	src/app.js	50–80	Inputvelden, knoppen, dropdowns
Const & Let	src/app.js	Hele bestand	Declaratie van variabelen
Template literals	src/app.js	25–50	HTML genereren in kaarten
Array methods	src/app.js	65–85	.filter(), .sort(), .forEach()
Arrow functions	src/app.js	70–85	Kortere functie syntax
Ternary operator	src/app.js	30, 55	Voor UI-elementen zoals hartjes
Callbacks	src/ui.js	10–30	Event handler voor filterinvoer
Promises / Async & Await	src/app.js	90–110	API calls en foutafhandeling
Observer API	src/app.js	120–140	MutationObserver voor resultaat-telling
Fetch & JSON	src/api.js	10–40	API-data ophalen en verwerken
LocalStorage	src/storage.js	10–50	Favorieten opslaan en ophalen
Form validatie	src/app.js	80–90	Controleren op lege zoekopdrachten

Installatie en gebruik
Clone de repository

bash
Copy
Edit
git clone https://github.com/jouwgebruikersnaam/masta-music.git
Installeer dependencies

bash
Copy
Edit
npm install
Start de ontwikkelserver

bash
Copy
Edit
npm run dev
Open de app in je browser
Meestal: http://localhost:5173 of http://localhost:3000

Voor correcte werking van de API:

Ga naar: https://cors-anywhere.herokuapp.com/

Klik op “Request temporary access to the demo server”


Bronnen
Deezer API documentatie: https://developers.deezer.com/api

Vite build tool: https://vitejs.dev

CORS Anywhere proxy: https://cors-anywhere.herokuapp.com

AI assistentie: ChatGPT (OpenAI)

Over dit project
Masta Music is gemaakt als eindproject voor het vak  Web Advanced. Het project combineert moderne frontendtechnologieën met een duidelijke focus op gebruikerservaring en functionele volledigheid.
