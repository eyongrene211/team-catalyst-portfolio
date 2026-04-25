//functionality to handle theme-toggle
const toggleContainer = document.getElementById('theme-toggle-btn');
const toggleBtn = document.getElementById('toggle-btn');
const html = document.documentElement;

function updateThemeUI() {
    const isDark = html.classList.contains('dark');
    if (isDark) {
        toggleBtn.style.transform = 'translateX(1.1rem)';
        toggleBtn.style.backgroundColor = '#111827';
    } else {
        toggleBtn.style.transform = 'translateX(0)';
        toggleBtn.style.backgroundColor = '#ffffff';
    }
}

// restore saved theme on load
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    html.classList.add('dark');
} else if (storedTheme === 'light') {
    html.classList.remove('dark');
}
updateThemeUI();

// adding EventListener to listen to action
toggleContainer.addEventListener('click', () => {
    html.classList.toggle('dark');
    updateThemeUI();
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});