const toggleThemeBtn = document.getElementById('toggle-theme');
const logoTheme = document.getElementById('logo-theme');
const terreTheme = document.getElementById('terre-theme');
const themeLogo = logoTheme.querySelector('i');
const themeIcon = toggleThemeBtn.querySelector('i');

// Charger le thème
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeIcon.classList.replace('fa-sun', 'fa-moon');
  logoTheme.src = logoTheme.src.replace('img/logow-removebg.png', 'img/logo-removebg.png');
  terreTheme.src = terreTheme.src.replace('img/terre.png', 'img/terrew.png');
}

toggleThemeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  const logoSrc = logoTheme.src;
  logoTheme.src = isDark ? logoSrc.replace('img/logow-removebg.png', 'img/logo-removebg.png') : logoSrc.replace('img/logo-removebg.png', 'img/logow-removebg.png');
  terreTheme.src = isDark ? terreTheme.src.replace('img/terre.png', 'img/terrew.png') : terreTheme.src.replace('img/terrew.png', 'img/terre.png');
  themeIcon.classList.replace(isDark ? 'fa-sun' : 'fa-moon', isDark ? 'fa-moon' : 'fa-sun');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const menu = document.querySelector(".menu-toggle")
const navLinks = document.querySelector(".nav-links")

menu.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu')
})