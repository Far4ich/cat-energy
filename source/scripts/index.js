const header = document.querySelector('.header');
const headerNavToggle = document.querySelector('.header__nav-toggle');

headerNavToggle.addEventListener('click', () => {
  if (header.classList.contains('header--nav-closed')){
    header.classList.remove('header--nav-closed');
  } else {
    header.classList.add('header--nav-closed');
  }
});
