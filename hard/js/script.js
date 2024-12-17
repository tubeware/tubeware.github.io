// Dark/Light Mode Toggle
const modeToggle = document.getElementById('mode-toggle');

// Check if the theme is already set in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    modeToggle.textContent = '🌞';  // Change icon to light mode
} else {
    document.body.classList.remove('dark-mode');
    modeToggle.textContent = '🌙';  // Change icon to dark mode
}

// Toggle the mode
modeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        modeToggle.textContent = '🌙';  // Change icon to dark mode
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add('dark-mode');
        modeToggle.textContent = '🌞';  // Change icon to light mode
        localStorage.setItem('theme', 'dark');
    }
});

// Smooth Scroll for Anchor Links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60,  // Add offset for the fixed navbar
            behavior: 'smooth',
        });
    });
});
