function getPrice(num, num1) {
    let example = num * num1 / 100
    let result = num - example
    return result
}
console.log(getPrice(1000, 50));
console.log(getPrice(4000, 25));



function capitalizeString(name) {
    let str = name[0].toUpperCase() + name.slice(1).toLowerCase()
    return str
}

console.log(capitalizeString("ЕВГЕНИЙ"));



function getRatingStars(star) {
    if (star >= 1 && star <= 5) {
        return "★".repeat(star)
    } else {
        return ''
    }
}

console.log(getRatingStars(2));
console.log(getRatingStars(5));
console.log(getRatingStars(10));
console.log(getRatingStars(-5));

