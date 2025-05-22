Masta Music

Projectbeschrijving:
Masta Music is een interactieve single-page webapplicatie waarmee gebruikers muziek kunnen zoeken, filteren, sorteren en favoriete nummers kunnen opslaan. De app maakt gebruik van de Deezer API en demonstreert moderne JavaScript-technieken zoals async/await, localStorage, de Observer API en meer.

Deze applicatie is ontwikkeld als eindopdracht voor het vak Advanced Web.
________________________________________________________________________________________________________________________________________________________________________________________________________________________________
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
________________________________________________________________________________________________________________________________________________________________________________________________________________________________
Gebruikte API:
Deezer API – https://developers.deezer.com/api

Let op: Om de Deezer API via de browser te gebruiken moet je tijdelijke CORS-toegang aanvragen.
Ga hiervoor naar: https://cors-anywhere.herokuapp.com/
Klik daar op “Request temporary access to the demo server”.
________________________________________________________________________________________________________________________________________________________________________________________________________________________________


 Technische Vereiste

| Concept            | Bestandsnaam        | Lijnnummer(s)                    | Toelichting                                                      |
|--------------------|---------------------|---------------------------------|-----------------------------------------------------------------|
| DOM-manipulatie    | `main.js`           | 23, 28–29, 31–32, 47–60, 111–112, 150, 154 | Elementen aanmaken, toevoegen, aanpassen (`createElement`, `innerHTML`, etc.) |
| Event listeners    | `main.js`           | 125–136, 139–141, 144–146, 149–151 | Klik, keydown en change events op knoppen, input en dropdowns  |
| Const en let       | `main.js`           | 6–15, door het hele bestand      | Declaratie van variabelen en constante waarden                   |
| Template literals  | `main.js`           | 47–56                           | Dynamische HTML-kaarten via `` `...` ``                         |
| Array methods      | `main.js`           | 63–65, 67–73, 75, 91            | `.filter()`, `.sort()`, `.forEach()`, `.concat()`               |
| Arrow functions    | `main.js`           | 133, 136, 141, 151              | Korte functies gebruikt in events en callbacks                   |
| Ternary operator   | `main.js`           | 54, 58                         | `isFavorite(track.id) ? '❤️' : '🤍'`                            |
| Callbacks          | `main.js + ui.js`   | 130 + `setupFilterListener(...)` | Callback voor filterinput                                        |
| Promises & async/await | `main.js`       | 75–115                         | `async` function, `await searchMusic(...)` voor API requests    |
| Observer (visueel) | `main.js`           | 33, 60, 114, 153                | Aantal resultaten tonen via DOM, niet een echte MutationObserver |
| Fetch & JSON       | `api.js`            | (aangeroepen via `searchMusic` in `main.js`) | API-call met `fetch()` en `.json()` binnen `searchMusic()`      |
| LocalStorage       | `storage.js`        | (aangeroepen via imports op lijn 2, gebruikt in 57–59, 150) | Opslaan en ophalen van favorieten lokaal                        |
| Form validatie     | `main.js`           | 91–95                          | Check op lege zoekterm                                           |

________________________________________________________________________________________________________________________________________________________________________________________________________________________________

Installatie en gebruik:
1. Clone de repository

(In je terminal)

git clone https://github.com/jouwgebruikersnaam/masta-music.git


2. Installeer dependencies

npm install

3. Start de server

npm run dev

4. Open de app in je browser
Meestal: http://localhost:5173

5. Activeer CORS voor Deezer API
Ga naar: https://cors-anywhere.herokuapp.com/
Klik op: Request temporary access to the demo server


________________________________________________________________________________________________________________________________________________________________________________________________________________________________

Bronnen:
Deezer API Documentatie

Vite Build Tool

CORS Anywhere Proxy

AI Assistentie: ChatGPT (OpenAI)

