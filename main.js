var navBar = document.querySelector('.navbar');
var menuIcon = document.querySelector('.image');
var opacity = document.querySelector('.name')

menuIcon.onclick = () => {
    if (navBar.style.right === '-250px') {
        navBar.style.right = '0';
        opacity.style.opacity = '0';
    } else {
        navBar.style.right = '-250px';
        opacity.style.opacity = '1';

    }
};
