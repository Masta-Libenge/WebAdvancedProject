import { searchMusic } from './api.js';
import { setupFilterListener } from './ui.js';

const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');
let allTracks = []; // store all fetched tracks here
let currentFilter = '';

function renderResults(tracks) {
    results.innerHTML = '';
    if (tracks.length === 0) {
        results.innerHTML = '<p>No results found.</p>';
        return;
    }

    tracks.forEach(track => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
      <img src="${track.album.cover_medium}" alt="Album cover" />
      <h3>${track.title}</h3>
      <p>Artist: ${track.artist.name}</p>
      <p>Album: ${track.album.title}</p>
      <audio controls src="${track.preview}"></audio>
    `;

        results.appendChild(card);
    });
}

function applyFilter() {
    if (!currentFilter) {
        renderResults(allTracks);
        return;
    }

    const filtered = allTracks.filter(track =>
        track.album.title.toLowerCase().includes(currentFilter)
    );

    renderResults(filtered);
}

async function handleSearch() {
    const query = searchInput.value.trim();
    if (!query) {
        results.innerHTML = '<p>Please enter a search term.</p>';
        return;
    }

    results.innerHTML = '<p>Loading...</p>';

    try {
        const tracks = await searchMusic(query);
        allTracks = tracks; // save original list
        applyFilter();
    } catch (error) {
        results.innerHTML = `<p>Error loading data: ${error.message}</p>`;
    }
}

setupFilterListener((filterValue) => {
    currentFilter = filterValue;
    applyFilter();
});

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});
