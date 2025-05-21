const FAVORITES_KEY = 'masta_music_favorites';

export function getFavorites() {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveFavorites(favorites) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function toggleFavorite(track) {
    const favorites = getFavorites();
    const exists = favorites.find(fav => fav.id === track.id);

    let updated;
    if (exists) {
        updated = favorites.filter(fav => fav.id !== track.id);
    } else {
        updated = [...favorites, track];
    }

    saveFavorites(updated);
    return updated;
}

export function isFavorite(id) {
    return getFavorites().some(fav => fav.id === id);
}
