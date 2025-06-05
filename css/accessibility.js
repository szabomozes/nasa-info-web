function toggleHighContrast() {
    var body = document.body;
    body.classList.toggle('high-contrast');
    var button = document.getElementById('accessibilityButton');
    button.textContent = body.classList.contains('high-contrast') ? 'Normál mód' : 'Nagy betűméret mód';
}
