let baseSalary = 3000;
let bonusPrecentage = .10;
let deduction = 150;
let bonus = baseSalary * bonusPrecentage;
baseSalary += bonus;
baseSalary -= deduction;
baseSalary += 350;

if (baseSalary  >= 3500) {
console.log(`Good`);

    
}else{
    console.log(`Needs More`);
    
}

console.log(`Bouns Precentage`, bonusPrecentage);
console.log(`Deduction` , deduction);
console.log(`Bonus`, bonus);
console.log(`Base Salary`, baseSalary);
