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

// header height
document.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector('header').offsetHeight;
    document.documentElement.style.setProperty('--headerHeight', `${header}px`);

    // simulate a hover effect on mobile
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function () {
            this.classList.add('touched');
        });

        button.addEventListener('touchend', function () {
            this.classList.remove('touched');
        });
    });

    // document.addEventListener("touchstart", function() {}, true);

    
});