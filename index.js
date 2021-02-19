let counter = document.querySelector('.wrapper__counter');
let plus = document.querySelector('.wrapper__plus');
let minus = document.querySelector('.wrapper__minus');
let center = document.querySelector('.wrapper__center');


let count = 0;
plus.addEventListener('click', () => {
    counter.textContent = ++count;
    if (count >= 10) {
        center.style.borderLeft = '10px solid white';
    } if (count >= 20) {
        center.style.borderRight = '10px solid white';
    } if (count >= 30) {
        center.style.borderTop = '10px solid white';
    } if (count >= 40) {
        center.style.borderBottom = '10px solid white';
    }
});



minus.addEventListener('click', () => {
    counter.textContent = --count;
    if (count <= 0) {
        count = 0;
        counter.textContent = 0;
    } if (count <= 10) {
        center.style.borderLeft = '1px solid white';
    } if (count <= 20) {
        center.style.borderRight = '1px solid white';
    } if (count <= 30) {
        center.style.borderTop = '1px solid white';
    } if (count <= 40) {
        center.style.borderBottom = '1px solid white';
    }
});