//functionality to handle theme-toggle
const toggleContainer = document.getElementById('theme-toggle-btn');
const toggleBtn = document.getElementById('toggle-btn');
const html = document.documentElement;
const showProjectsBtn = document.getElementById('more-projects-btn');
const detailedContent = document.querySelector('.more-projects');

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

//toggle  'show more' btn 
showProjectsBtn.addEventListener('click', () => {
    const isVisible = detailedContent.classList.toggle('visible');
    if (isVisible) {
        showProjectsBtn.textContent= 'view less'
    } else {
        showProjectsBtn.textContent= 'view more'
    }
    // curentBtnState = detailedContent.textContent.trim()
    console.log('bnt pressed!')
    // console.log(curentBtnState)
    // if (curentBtnState == 'view more') {
    //     detailedContent.style.display = 'block';
    //     // moreProjects.style.clock = 'blue';
    //     showProjectsBtn.textContent = ' view less'
    // } else {
    //     // moreProjects.style.display = 'none';
    //     showProjectsBtn.textContent = 'view more'
    // }
})