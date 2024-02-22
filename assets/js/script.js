let closeButton = document.querySelector('.menu-mobile-close');
let menu = document.querySelector('.menu__nav');

const toggleMenu = () => {
    menu.classList.toggle('active');
    closeButton.classList.add('show');
}

const closeMobMenu = () => {
    menu.classList.toggle('active');
    closeButton.classList.remove('show');
} 

document.addEventListener('DOMContentLoaded', () => {
    // header height
    let header = document.querySelector('header').offsetHeight;
    document.documentElement.style.setProperty('--headerHeight', `${header}px`);

    // sliders
    document.querySelectorAll('.slide-in').forEach(slider => {
        slider.classList.add('appear');
    });

    // simulate hover effect on mobiles
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function () {
            this.classList.add('touched');
        });

        button.addEventListener('touchend', function () {
            this.classList.remove('touched');
        });
    });
    
});