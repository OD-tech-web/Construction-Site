const menuBtn = document.querySelector('.menu-btn');
const hamburger1 = document.querySelector('.bar1');
const hamburger2 = document.querySelector('.bar2');
const hamburger3 = document.querySelector('.bar3');
const sidebar = document.querySelector('.sidebar');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('open');
        hamburger2.classList.add('open2');
        hamburger1.classList.add('open1');
        hamburger3.classList.add('open3');
        sidebar.classList.add('show');

        showMenu = true;
    }else {
        menuBtn.classList.remove('open');
        hamburger2.classList.remove('open2');
        hamburger1.classList.remove('open1');
        hamburger3.classList.remove('open3');
        sidebar.classList.remove('show');

        showMenu = false;
    }
}