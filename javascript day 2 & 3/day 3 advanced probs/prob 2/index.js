let item1 = 45;
let item2 = 30;
let item3 = 25;
let total = 0;
let discountThreshold = 100;
let discountAmount = .20;

total = item1 + item2 + item3;
console.log(total);
//? applies the discount to the total based off the precent
if (total>= discountThreshold) {
    let discount = discountAmount * total;
    total -= discount
}
console.log(total);
