// Seleccionar elementos
const header = document.querySelector('.web__header');
const menuOpen = document.querySelector('.menu__open');
const menuClose = document.querySelector('.menu__close');
const dropDown = document.querySelector('.drop__down');

// Funciones
function openMenu() {
  header.classList.add('menu-open');
}

function closeMenu() {
  header.classList.remove('menu-open');
}

// Eventos de botones
if (menuOpen) menuOpen.addEventListener('click', openMenu);
if (menuClose) menuClose.addEventListener('click', closeMenu);

// Cerrar al hacer clic fuera
document.addEventListener('click', (e) => {
  const clickInsideMenu = dropDown.contains(e.target) || 
                         (menuOpen && menuOpen.contains(e.target)) || 
                         (menuClose && menuClose.contains(e.target));
  
  if (!clickInsideMenu && header.classList.contains('menu-open')) {
    closeMenu();
  }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header.classList.contains('menu-open')) {
    closeMenu();
  }
});