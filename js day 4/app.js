
// ! Problem 1 
//? let itemPrice = 10;
//? let quantity = 10;
//? const discount = .10;
//? let subTotal = itemPrice * quantity;
//? let discountAmount = subTotal * discount;
//? let total = subTotal - discountAmount;
//? console.log(total);

// ! Problem 2
// prompt that asks for celsius temperature
// convert the input to fahrenheit
// alert shows the result
//? let input = prompt(`Celsius temperature`);
//? let celsius = parseFloat(input);
//? let fahrenheit = (celsius * 9/5) + 32;
//? alert(`Fahrenheit temperature ${fahrenheit}`);

// ! Problem 3
//? let num = 10;
//? let str = "10";
//? console.log(`number:`,num);
//? console.log(`string:`,str);
//? console.log(`str + num: the string and number merge into one:`,str + num); 
//? console.log(`str - num: -, *, /, operators make the strings into numbers because they only work on numbers: ` , str - num);
//? console.log(`num == str: this operator uses type coercion so it says they are the same,`,num == str);
//? console.log(`num === str: this operator is the strict equality operator so it says false because one is a string and one is a number`,num === str);


// ! Problem 4
//* Variables
//? let billAmount = 65.55;
//? let tipRate = .20;
//? let people = 3;
//* Computations
//? tipRate = billAmount * tipRate;
//? billAmount = tipRate + billAmount;
//? let billAmountall = billAmount / people;
//* Log
//? console.log(`Tip: $${tipRate}`);
//? console.log(`Toal with tip: $${billAmount}`,);
//? console.log(`Each Person Pays: $${billAmountall}`,);

//! Problems 5
//* Variables
//? let price = 23;
//? let taxRate = .075;
//* Computations
//? price = price + (price * taxRate);
//? console.log(price.toFixed(2));

// ! Problem 6
//? let password = prompt(`Enter New Password:`);
//? console.log(password.length);
//? if (password.length >= 8) {
//?     console.log(`Good Length`);
//? } else
//? {
//?     console.log(`Bad Length`); 
//? }
