const slider = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.flecha.izquierda');
const rightArrow = document.querySelector('.flecha.derecha');

let index = 0;  // slide actual
const total = dots.length;

// Función para mostrar slide
function showSlide(i) {
    index = (i + total) % total; // loop infinito
    slider.style.transform = `translateX(${-index * 100}%)`;
    
    dots.forEach((dot, j) => dot.classList.toggle('active', j === index));
}

// Flechas
leftArrow.addEventListener('click', () => showSlide(index - 1));
rightArrow.addEventListener('click', () => showSlide(index + 1));

// Dots
dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));

// Slide inicial
showSlide(index);

