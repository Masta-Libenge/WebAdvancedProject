import { searchMusic } from './api.js';
import { setupFilterListener } from './ui.js';
import { toggleFavorite, isFavorite, getFavorites } from './storage.js';

let currentSort = '';
let currentFilter = '';
let allTracks = [];
let currentQuery = '';
let currentIndex = 0;   // track API offset index
const PAGE_SIZE = 25;   // Deezer returns max 25 per request

const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');
const viewFavoritesBtn = document.getElementById('viewFavoritesBtn');

// Create Load More button
const loadMoreBtn = document.createElement('button');
loadMoreBtn.textContent = 'Load More';
loadMoreBtn.style.display = 'none'; // hide initially
loadMoreBtn.style.margin = '1rem auto';
results.after(loadMoreBtn);

// Create observer info
const observerInfo = document.createElement('div');
observerInfo.id = 'observerInfo';
observerInfo.style.marginTop = '1rem';
observerInfo.style.fontStyle = 'italic';
loadMoreBtn.after(observerInfo);

function renderResults(tracks, append = false) {
    if (!append) {
        results.innerHTML = '';
    }

    if (tracks.length === 0 && !append) {
        results.innerHTML = '<p>No results found.</p>';
        loadMoreBtn.style.display = 'none';
        observerInfo.textContent = 'Observer: 0 tracks displayed.';
        return;
    }

    tracks.forEach(track => {
        const card = document.createElement('div');
        card.className = 'card';
        const favStatus = isFavorite(track.id) ? '❤️' : '🤍';

        card.innerHTML = `
      <img src="${track.album.cover_medium}" alt="Album cover" />
      <h3>${track.title}</h3>
      <p>Artist: ${track.artist.name}</p>
      <p>Album: ${track.album.title}</p>
      <audio controls src="${track.preview}"></audio>
      <button class="fav-btn" data-id="${track.id}">${favStatus} Favorite</button>
    `;

        results.appendChild(card);
        card.querySelector('.fav-btn').addEventListener('click', () => {
            toggleFavorite(track);
            // re-render hearts (do not reset all results, just update icons)
            // To optimize, update button icon only:
            const btn = results.querySelector(`button[data-id="${track.id}"]`);
            btn.textContent = isFavorite(track.id) ? '❤️ Favorite' : '🤍 Favorite';
        });
    });

    observerInfo.textContent = `Results: ${results.children.length} tracks displayed.`;
}

function applyFilterAndSort() {
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

async function fetchTracks(query, index = 0) {
    try {
        const tracks = await searchMusic(query, index);
        return tracks;
    } catch (error) {
        results.innerHTML = `<p>Error loading data: ${error.message}</p>`;
        loadMoreBtn.style.display = 'none';
        observerInfo.textContent = '';
        return [];
    }
}

async function handleSearch() {
    currentQuery = searchInput.value.trim();
    currentIndex = 0;
    allTracks = [];

    if (!currentQuery) {
        results.innerHTML = '<p>Please enter a search term.</p>';
        loadMoreBtn.style.display = 'none';
        observerInfo.textContent = '';
        return;
    }

    results.innerHTML = '<p>Loading...</p>';
    observerInfo.textContent = '';
    loadMoreBtn.style.display = 'none';

    const tracks = await fetchTracks(currentQuery, currentIndex);
    allTracks = tracks;

    applyFilterAndSort();

    // Show Load More button only if we got exactly PAGE_SIZE tracks (may be more)
    if (tracks.length === PAGE_SIZE) {
        loadMoreBtn.style.display = 'block';
    }
}

async function handleLoadMore() {
    currentIndex += PAGE_SIZE;
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = 'Loading...';

    const newTracks = await fetchTracks(currentQuery, currentIndex);

    if (newTracks.length > 0) {
        allTracks = allTracks.concat(newTracks);
        applyFilterAndSort();
    }

    // Hide load more if less than PAGE_SIZE tracks returned (end of results)
    if (newTracks.length < PAGE_SIZE) {
        loadMoreBtn.style.display = 'none';
    }

    loadMoreBtn.disabled = false;
    loadMoreBtn.textContent = 'Load More';
}

setupFilterListener((filterValue) => {
    currentFilter = filterValue.toLowerCase();
    applyFilterAndSort();
});

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});
document.getElementById('sortSelect').addEventListener('change', () => {
    currentSort = document.getElementById('sortSelect').value;
    applyFilterAndSort();
});

loadMoreBtn.addEventListener('click', handleLoadMore);
