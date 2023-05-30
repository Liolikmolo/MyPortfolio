const   hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close'),
        sidepanel = document.querySelector('.sidepanel'),
        sidepanelLink = document.querySelectorAll('.sidepanel__link'),
        sidepanelDivider = document.querySelector('.sidepanel__divider');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

window.addEventListener('scroll', () => {
    let scrollingNum = scrollY;

    if (scrollingNum >= 300) {
        sidepanel.classList.add('sidepanel_black');
        sidepanelDivider.classList.add('sidepanel__divider_black');
        sidepanelLink.forEach(element => {
            element.classList.add('sidepanel__link_black');
        });
    } else {
        sidepanel.classList.remove('sidepanel_black');
        sidepanelDivider.classList.remove('sidepanel__divider_black');
        sidepanelLink.forEach(element => {
            element.classList.remove('sidepanel__link_black');
        });
    }
});

const   counter = document.querySelectorAll('.skills__progress-percent'),
        lines = document.querySelectorAll('.skills__progress-bar_fill');

counter.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});