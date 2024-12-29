function Star(isChecked) {
    const div = document.createElement('div')
    div.className = 'fa fa-star'
    if (isChecked) {
        // div.className += 'checked' 
        div.classList.add('checked')
    }
    return div
}

const stars = document.querySelector(".stars")

function StarRating(rating = 0) {
    stars.innerHTML = ''
    const maxRating = 5
    for (let i = 0; i < maxRating; i++) {
        const star = Star(i < rating)
        stars.append(star)
        star.onclick = function () {
            const starPosition = i + 1
            StarRating(starPosition)
            if (starPosition === maxRating) {
                blowConfetti()
            }
        }
    }
}

StarRating(0);

function blowConfetti() {
    let confetti = new Confetti('container');

    confetti.setCount(75);
    confetti.setSize(1);
    confetti.setPower(25);
    confetti.setFade(false);
    confetti.destroyTarget(false);
}