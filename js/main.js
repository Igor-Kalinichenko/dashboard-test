const menu = document.querySelector('.nav-block');

function showMenu (menu) {
    menu.classList.remove('hideMenu');
    menu.classList.add('showMenu');
}
function hideMenu (menu) {
    menu.classList.remove('showMenu');
    menu.classList.add('hideMenu');
}
document.querySelector('.main-block__header img').onclick = () => showMenu(menu);
document.querySelector('.nav-block__close-icon img').onclick = () => hideMenu(menu);

document.querySelectorAll('.menu__item').forEach(el => el.onclick = () => {
    hideMenu(menu);
});