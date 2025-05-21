// api.js
const DEEZER_API_BASE = 'https://api.deezer.com/search?q=';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

export async function searchMusic(query) {
    if (!query) throw new Error('Empty query');

    const url = CORS_PROXY + DEEZER_API_BASE + encodeURIComponent(query);

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data; // returns array of tracks
}
