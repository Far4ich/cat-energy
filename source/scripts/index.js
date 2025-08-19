const header = document.querySelector('.header');
const headerNavToggle = document.querySelector('.header__nav-toggle');

headerNavToggle.addEventListener('click', () => {
  if (header.classList.contains('header--nav-closed')){
    header.classList.remove('header--nav-closed');
    headerNavToggle.classList.remove('button--burger');
    headerNavToggle.classList.add('button--x');
  } else {
    header.classList.add('header--nav-closed');
    headerNavToggle.classList.add('button--burger');
    headerNavToggle.classList.remove('button--x');
  }
});
