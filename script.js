function getPoints(value) {
   switch (value) {
     case 'nice':
       return 1;
     case 'naughty':
       return -1;
     default:
       return -1;
   }
}

function checkNaughtyOrNice() {
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    const q3 = document.getElementById('q3').value;
    const q4 = document.getElementById('q4').value;
    const q5 = document.getElementById('q5').value;


const score = getPoints(q1) + getPoints(q2) + getPoints(q3) + getPoints(q4) + getPoints(q5);


const meterFill = document.querySelector('.meter-fill');


let percent = ((score + 5) / 10) * 100;
if (percent < 0) percent = 0;
if (percent > 100) percent = 100;

meterFill.style.width = percent + '%';

const card = document.querySelector('.card');


card.classList.remove('nice-glow', 'naughty-glow');

let message = '';

if (score > 2.5) {
    card.classList.add('nice-glow');
    message = "You are on the Nice List! ";
} else {
    card.classList.add('naughty-glow');
    message = "You are on the Naughty List! ";
}


let resultDiv = document.getElementById('result');
if (!resultDiv) {
    resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    resultDiv.style.marginTop = '1rem';
    resultDiv.style.fontWeight = '700';
    resultDiv.style.textAlign = 'center';
    document.querySelector('.card-body').appendChild(resultDiv);
}
resultDiv.textContent = message;



}