function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.style.display = 'flex';
  } else {
    menu.classList.add('hidden');
    menu.style.display = 'none';
  }
}