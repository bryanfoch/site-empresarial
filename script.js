// Variáveis
const menuIcon = document.querySelector('.menu__icon');
const nav = document.querySelector('nav');
const projeto = document.querySelector('.projeto-link');
const contatoLink = document.querySelector('.contato-link');
const text2 = document.querySelector('.text__projects3');

// Esconde o menu quando o site inicia
nav.style.display = 'none';

// Função para esconder o menu
function hideNav() {
  nav.style.display = 'none';
  menuIcon.innerHTML = '&#9776;'; // retorna ícone para o original
}

// Função para mostrar o menu
function showNav() {
  nav.style.display = 'block';
  menuIcon.innerHTML = '&#9932;'; // transforma ícone
}

// Evento de clique no ícone de menu
menuIcon.addEventListener('click', function() {
  if (nav.style.display === 'block') {
    hideNav();
  } else {
    showNav();
  }
});

// Evento de clique no link "Nossas Soluções"
projeto.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: text2.offsetTop, behavior: 'smooth' });
    hideNav();
});

// Evento de clique no link "Contato"
contatoLink.addEventListener('click', function(event) {
  event.preventDefault();
  const footer = document.querySelector('footer');
  footer.scrollIntoView({ behavior: 'smooth' });
  hideNav();
});

// Evento de clique fora do menu
document.addEventListener('click', function(event) {
  if (!nav.contains(event.target) && !menuIcon.contains(event.target)) {
    hideNav();
  }
});

// Evento de rolagem da página
window.addEventListener('scroll', function() {
  hideNav();
});

// Dark Theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);

  const iconToggle = document.getElementById("icon-toggle");
  if (newTheme === "dark") {
    iconToggle.classList.remove("bi-sun");
    iconToggle.classList.add("bi-moon");
  } else {
    iconToggle.classList.remove("bi-moon");
    iconToggle.classList.add("bi-sun");
  }
}

const themeButton = document.getElementById("theme-toggle");
themeButton.addEventListener("click", toggleTheme);

// Seletor de Idiomas
const languageSelector = document.querySelector('.language-selector');
const languageLinks = document.querySelectorAll('.language-link');

languageSelector.addEventListener('click', () => {
  languageLinks.forEach(link => {
    link.classList.toggle('hidden');
  });
});
