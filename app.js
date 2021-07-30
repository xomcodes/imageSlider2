// Declare Variables
const carouselSlider = document.querySelector('.carousel-slider');
const carouselContainer = document.querySelector('.carousel-container');
const carouselImages = document.querySelectorAll('.carousel-slider img');
const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';



// Add Event Listener
nextbtn.addEventListener('click', function() {
    if (counter >= carouselImages.length - 1) return;
    carouselSlider.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevbtn.addEventListener('click', function() {
    if (counter <= 0) return;
    carouselSlider.style.transition = 'transform 0.4s ease-in-out'
    counter--;
    carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlider.addEventListener('transitionend', function() {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlider.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlider.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlider.style.transform = 'translateX(' + (-size * counter) + 'px';
    }
});