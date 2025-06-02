const toggleThemeBtn = document.getElementById('toggle-theme');
const logoTheme = document.getElementById('logo-theme');
const themeLogo = logoTheme.querySelector('i');
const themeIcon = toggleThemeBtn.querySelector('i');

// Charger le thème
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  themeIcon.classList.replace('fa-sun', 'fa-moon');
  logoTheme.src = logoTheme.src.replace('img/logow-removebg.png', 'img/logo-removebg.png');
}

toggleThemeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  const logoSrc = logoTheme.src;
  logoTheme.src = isDark ? logoSrc.replace('img/logow-removebg.png', 'img/logo-removebg.png') : logoSrc.replace('img/logo-removebg.png', 'img/logow-removebg.png');
  themeIcon.classList.replace(isDark ? 'fa-sun' : 'fa-moon', isDark ? 'fa-moon' : 'fa-sun');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
