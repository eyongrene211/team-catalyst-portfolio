//functionality to  handle theme-toggle
const toggleContainer = document.getElementById('theme-toggle-btn');
const toggleBtn = document.getElementById('toggle-btn');
const html = document.documentElement;

//adding EventListener to listen to action
toggleContainer.addEventListener('click', () => {
    //Toggle the class on  <html>
    isLight=html.classList.toggle('dark');
    // toggleBtn.style.transform =   'translateX(1.1rem)';
    //Toggle UI manipulation
    if (!isLight) {
        //going to dark mode
        toggleBtn.style.transform =   'translateX(1.1rem)';
        toggleBtn.style.backgroundColor ='#111827';
        
    } else {
        //going back to light mode
        toggleBtn.style.transform =  'translateX(0)';
        toggleBtn.style.backgroundColor = "#ffffff";
    }

    //save preference to localStorage
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light')
})