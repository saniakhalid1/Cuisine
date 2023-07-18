const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav-list');
const navBgOverlay = document.querySelector('.nav__bgoverlay');
const navopen = () => {
    navList.classList.add('show');
    navBgOverlay.classList.add('active');
    document.body.style='visibility:visible; height:100vh; width:100vw; overflow:hidden;'
}
const navClose =() =>{
    navList.classList.remove('show');
    navBgOverlay.classList.remove('active');
    document.body.style='visibility:visible; height:initial; width:100%; overflow-x:hidden;'
}
navIconEl.addEventListener('click', navopen);
navCloseEl.addEventListener('click', navClose);
navBgOverlay.addEventListener('click',navClose);