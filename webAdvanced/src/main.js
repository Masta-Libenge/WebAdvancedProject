import { searchMusic } from './api.js';
import { setupFilterListener } from './ui.js';
let currentSort = '';

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
    let filtered = currentFilter
        ? allTracks.filter(track =>
            track.album.title.toLowerCase().includes(currentFilter)
        )
        : [...allTracks];

    if (currentSort) {
        filtered.sort((a, b) => {
            if (currentSort === "title") {
                return a.title.localeCompare(b.title);
            } else if (currentSort === "album") {
                return a.album.title.localeCompare(b.album.title);
            } else if (currentSort === "duration") {
                return a.duration - b.duration;
            }
            return 0;
        });
    }

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
document.getElementById('sortSelect').addEventListener('change', () => {
    const sortBy = document.getElementById('sortSelect').value;

    const filtered = currentFilter
        ? allTracks.filter(track =>
            track.album.title.toLowerCase().includes(currentFilter)
        )
        : [...allTracks];

    const sorted = [...filtered];

    sorted.sort((a, b) => {
        if (sortBy === "title") {
            return a.title.localeCompare(b.title);
        } else if (sortBy === "album") {
            return a.album.title.localeCompare(b.album.title);
        } else if (sortBy === "duration") {
            return a.duration - b.duration;
        }
        return 0;
    });

    renderResults(sorted);
});
