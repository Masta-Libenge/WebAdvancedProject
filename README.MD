Masta Music
Projectbeschrijving:
Masta Music is een interactieve single-page webapplicatie waarmee gebruikers muziek kunnen zoeken, filteren, sorteren en favoriete nummers kunnen opslaan. De app maakt gebruik van de Deezer API en demonstreert moderne JavaScript-technieken zoals async/await, localStorage, de Observer API en meer.

Deze applicatie is ontwikkeld als eindopdracht voor het vak Advanced Web.

Functionaliteiten:
Zoekfunctie – Zoek op artiest, nummer of album.

Filteren – Filter de resultaten op albumtitel.

Sorteren – Sorteer op nummer titel, album titel of duur.

Favorieten – Markeer nummers als favoriet. Favorieten worden opgeslagen in localStorage en blijven bewaard tussen sessies.

Laad meer – Bekijk meer dan de eerste 25 resultaten via de knop Load More.

Observer API – Toont realtime hoeveel nummers er weergegeven worden.

Foutafhandeling – Meldingen bij lege zoekopdrachten of API-fouten.

Donker thema – Zwarte achtergrond met moderne uitstraling.

Logo functionaliteit – Klik op het logo om de pagina te herladen.

Gebruikte API:
Deezer API – https://developers.deezer.com/api

Let op: Om de Deezer API via de browser te gebruiken moet je tijdelijke CORS-toegang aanvragen.
Ga hiervoor naar: https://cors-anywhere.herokuapp.com/
Klik daar op “Request temporary access to the demo server”.

Technische implementatie:
JavaScript Concept	Bestand	Regels	Beschrijving
DOM-manipulatie	src/app.js	10–90	Elementen selecteren, aanmaken, en updaten
Event listeners	src/app.js	50–80	Inputvelden, knoppen, dropdowns
const en let	src/app.js	Hele bestand	Declaratie van variabelen
Template literals	src/app.js	25–50	HTML-string generatie
Array methods	src/app.js	65–85	.filter(), .sort(), .forEach()
Arrow functions	src/app.js	70–85	Kortere functie syntax
Ternary operator	src/app.js	30, 55	Voor toggles (zoals favorieten)
Callbacks	src/ui.js	10–30	Filter event handler
Promises / async-await	src/app.js	90–110	API-verzoeken en foutafhandeling
Observer API	src/app.js	120–140	Aantal zichtbare resultaten tonen
Fetch & JSON	src/api.js	10–40	Ophalen en verwerken van data
localStorage	src/storage.js	10–50	Favorieten lokaal opslaan
Form validatie	src/app.js	80–90	Controleren op lege zoekopdrachten
