let grades = [5, 4, 3, 5, 4, 3, 2, 4, 5, 4];

for (let grade of grades) {
    switch (grade) {
        case 5:
            console.log('A - ' + grade);
            break;
        case 4:
            console.log('B - ' + grade);
            break;
        case 3:
            console.log('C - ' + grade);
            break;
        case 2:
            console.log('D - ' + grade);
            break;
        case 1:
            console.log('F - ' + grade);
            break;
    }
}



let currency = [50000, 20000, 15000]
for (let currencys of currency) {
    switch (currencys) {
        case 50000:
            console.log(currencys + ' сом = ' + (currencys / 87).toFixed(0) + '$')
            break;
        case 20000:
            console.log(currencys + ' сом = ' + (currencys / 87).toFixed(0) + '$');
            break;
        case 15000:
            console.log(currencys + ' сом = ' + (currencys / 87).toFixed(0) + '$');
            break;
    }
}



const arryInn = ["21212201212345", "11212201212345", "21212201212345", "11212201212345", "11212201212345", "11212201212345", "21212201212345"]

let boy = 0
let girl = 0
for (const soloInn of arryInn) {
    switch (soloInn[0]) {
        case '1':
            girl++
            break
        case '2':
            boy++
            break
        default:
            console.log("takih dannih net");
            break
    }

}

console.log("Men" + boy + " " + "Women" + girl);