// ui.js
export function setupFilterListener(onFilterChange) {
    const filterInput = document.getElementById('filterAlbum');
    filterInput.addEventListener('input', () => {
        const filterValue = filterInput.value.trim().toLowerCase();
        onFilterChange(filterValue);
    });
}
