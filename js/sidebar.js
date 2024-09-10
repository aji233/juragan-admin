document.getElementById('design-button').addEventListener('click', function() {
    var dropdown = document.getElementById('design-dropdown');
    var icon = document.getElementById('design-icon');
    dropdown.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
});