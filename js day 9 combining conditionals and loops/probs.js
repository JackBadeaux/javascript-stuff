//! Prob 1
// for(let numbers = 1; numbers <= 50; numbers++){
//   if (numbers % 2 === 0) {
//     console.log(numbers);
//   }    
// }
//! Prob 2
// const sentence = `The snow-covered path was no help in finding his way out of the back-country.`;
// let vowels = [`A`,`a`,`E`,`e`,`U`,`u`,`I`,`i`,`O`,`o`];
// let vowelsCount = 0;
// for(let i = 0; i < sentence.length;i++) {
// let char = sentence[i];
// if (vowels.includes(char)) {
//     vowelsCount++
//     console.log(vowelsCount);
// }
// }
//! Prob 3
const start = 1
const end = 500
for (let i = start; i <= end; i++) {
    let isPrime = true;
    
    for (let j = 2; j < i; j++) {
       
        if (i % j === 0) {
            isPrime = false;
            break;
        }
        if (isPrime) {
            console.log(i); 
        }
    }

    }
