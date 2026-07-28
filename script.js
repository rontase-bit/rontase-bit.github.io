
// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle with persistence — defaults to light (sky blue) unless the user chose dark
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');
if (savedTheme !== 'dark') root.classList.add('light');

document.getElementById('themeToggle').addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
