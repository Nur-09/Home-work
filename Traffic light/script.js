let red = document.querySelector('#red');
let yellow = document.querySelector('#yellow');
let green = document.querySelector('#green');
let trafficText = document.querySelector('#trafficText');

red.addEventListener('click', () => {
    trafficText.textContent = 'STOP';
    resetColors();
    red.style.backgroundColor = 'red';
    trafficText.style.color = 'red'
});


yellow.addEventListener('click', () => {
    trafficText.textContent = 'WAIT';
    resetColors();
    yellow.style.backgroundColor = 'yellow';
    trafficText.style.color = 'yellow'
});


green.addEventListener('click', () => {
    trafficText.textContent = 'GO';
    resetColors();
    green.style.backgroundColor = 'green';
    trafficText.style.color = 'green'
});

function resetColors() {
    red.style.backgroundColor = 'grey';
    yellow.style.backgroundColor = 'grey';
    green.style.backgroundColor = 'grey';
}
