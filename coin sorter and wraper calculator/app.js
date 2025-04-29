//! how much of each coin
const pennies = 100;
const nickels = 100;
const dimes = 100;
const quarters = 100;

//! value of each coin
const penniesValue = 0.01;
const nickelsValue = 0.05;
const dimesValue = 0.10;
const quartersValue = 0.25;

//! how much each coin is in dollars
let dollarInPennies = pennies * penniesValue;
let dollarInNickels = nickels * nickelsValue;
let dollarInDimes = dimes * dimesValue;
let dollarInQuarters = quarters * quartersValue;

//! total value
let totalValue = dollarInDimes + dollarInNickels + dollarInPennies + dollarInQuarters;
console.log(`Total value: $${totalValue.toFixed(2)}`);

//! wrappers
const penniesPerWrapper = 50;
const nickelsPerWrapper = 40;
const dimesPerWrapper = 50;
const quartersPerWrapper = 40;

//! wrappers and leftovers
let penniesWrapped = Math.floor(pennies / penniesPerWrapper);
let leftoverPennies = pennies % penniesPerWrapper;

let nickelsWrapped = Math.floor(nickels / nickelsPerWrapper);
let leftoverNickels = nickels % nickelsPerWrapper;

let dimesWrapped = Math.floor(dimes / dimesPerWrapper);
let leftoverDimes = dimes % dimesPerWrapper;

let quartersWrapped = Math.floor(quarters / quartersPerWrapper);
let leftoverQuarters = quarters % quartersPerWrapper;

//! output
console.log(`Pennies Wrapped: ${penniesWrapped}, Leftover: ${leftoverPennies}`);
console.log(`Nickels Wrapped: ${nickelsWrapped}, Leftover: ${leftoverNickels}`);
console.log(`Dimes Wrapped: ${dimesWrapped}, Leftover: ${leftoverDimes}`);
console.log(`Quarters Wrapped: ${quartersWrapped}, Leftover: ${leftoverQuarters}`);
