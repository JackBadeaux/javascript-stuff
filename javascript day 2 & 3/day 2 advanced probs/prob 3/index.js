let price1 = 10;
let price2 = 20;
let price3 = 30;

let discountThreshold = 15;
let discount = 5;

let total = price1 + price2 + price3 

if (total >=discountThreshold) {
  total = total-discount
}
console.log(` item 1:${price1},item 2:${price2}, item 3:${price3},`);

console.log("total after discount:",total);
console.log(typeof total);


