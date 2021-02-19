let counter = document.querySelector('.wrapper__counter');
let plus = document.querySelector('.wrapper__plus');
let minus = document.querySelector('.wrapper__minus');
let count = 0;
plus.addEventListener('click', () => {
    console.log(counter.textContent = ++count);


});

minus.addEventListener('click', () => {
    console.log(counter.textContent = --count);
    if (count <= 0) {
        count = 0;
        counter.textContent = 0;
    }


});