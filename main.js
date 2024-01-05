var navBar = document.querySelector('.navbar');
var menuIcon = document.querySelector('.image');
var opacity = document.querySelector('.name')

menuIcon.onclick = () => {
    if (navBar.style.opacity === '0') {
        navBar.style.opacity = '1';
        opacity.style.opacity = '0';
    } else {
        navBar.style.opacity = '0';
        opacity.style.opacity = '1';

    }
};
