let coin = document.getElementById('plus_coin')
coin.innerText = 0

function coinCounter() {
    let counter = Number(coin.innerText)
    if (counter < 200) {
        counter += 5
        coin.innerText = counter
    }
}

let electric = document.getElementById('minus_electric')

electric.innerText = 200

function electricCounter() {
    let counter = Number(electric.innerText)
    if (counter > 0) {
        counter -= 5
        electric.innerText = counter
    }
}

let homak = document.getElementById('homak_click')
function homakCounter() {
    coinCounter()
    electricCounter()
}
homak.addEventListener("click", homakCounter)