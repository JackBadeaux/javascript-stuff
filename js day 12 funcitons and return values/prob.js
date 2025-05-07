// ! Prob 1
// function convertKilometersToMiles(kilometers) {
// return kilometers * 0.621371 + ` Miles`
// }
// console.log(convertKilometersToMiles(40));
// ! Prob 2
// function sumArray(...numbers){
//     let sum = 0
//    for (let index = 0; index < numbers.length; index++) {
//        sum += numbers[index];
//    }
//     return sum
// }
// console.log(sumArray(10,40,20));
// ! Prob 3
// function calculateCircleArea(radius) {
//      let area = Math.PI * (radius * radius);
//     return area
// }
// console.log(calculateCircleArea(10));
// ! Prob 4

function convertCurrency(amountUSD, toCurrency = "EUR") {
    const rates = {
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110
    };
    if (!rates[toCurrency]) {
        return "Unsupported currency";
    }
    let converted = amountUSD * rates[toCurrency];
    return converted.toFixed(2);
}
console.log(convertCurrency(40,`AUD`));

