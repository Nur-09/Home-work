// 1
let country = {
    country: 'Kyrgyzstan',
    population: '7 231 000',
    square: '199 951 км²',
    capital: 'Bishkek',
    currency: 'Som' 
}
console.log(country);

// 2
let temp = prompt('Введите погоду')

if(temp >= -20 && temp < 0){
    alert('холод')
}else if(temp >= 0 && temp < 15){
    alert('прохладно')
}else if(temp >= 15 && temp < 28){
    alert('тепло')
}else{
    alert('жарко')
}