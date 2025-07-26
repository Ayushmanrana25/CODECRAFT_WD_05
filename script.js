// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const menu   = document.querySelector('nav');
toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});
