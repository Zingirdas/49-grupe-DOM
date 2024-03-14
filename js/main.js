console.log('Labas rytas, Lietuva');

const h1DOM = document.getElementsByTagName('h1');

console.log(h1DOM[0]);

console.log('"' + h1DOM[0].innerText + '"');
console.log('"' + h1DOM[0].textContent + '"');

h1DOM[0].innerText = 'Paskutinis "pirmadienis" :(';

const titleDOM = document.getElementsByTagName('title');
titleDOM[0].innerText = 'AAAAAA';


// vienkartine logika
// setTimeout(() => {
//     console.log('Laikas - 1');
// }, 3000);
// timeout 3000 - nurodytas milisekundemis


// daukartine logika
// setInterval(() => {
//     console.log('labas');
// }, 1000);

const clockDOM = document.getElementById('clock');

clockDOM.innerText = '0:0';

let i = 0;
// setInterval(() => {
//     i++;

//     const s = i % 60;
//     const m = (i - s) / 60;

//     clockDOM.innerText = `${m}:${s < 10 ? '0' : ''} ${s}`;
// }, stop 50);

// requestAnimationFrame - jei reikia tikslesnio laikrodzio parodymo;
let count = 0;
setInterval(() => {
    count++;
    console.log('count');

    if (count % 2 === 0) {
        titleDOM[0].innerText = 'DOM';
    } else {
        titleDOM[0].innerText = '***New message***';
    }
}, 500);

