function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
    const dropdown = document.getElementById('dropdownMenu');
    if (!event.target.matches('.profile-pic')) {
        dropdown.style.display = 'none';
    }
};

