let userAnswers = [`B`,`B`,`C`,`D`];
let expectedAnswers = [`A`,`B`,`C`,`D`];
let correctAnswers = 0

//compare answers
for (let i = 0; i < userAnswers.length; i++) {
  if (userAnswers[i] === expectedAnswers[i]) {
    correctAnswers++;
  }
}
let questions = userAnswers.length;
let precentScore =(correctAnswers/questions)*100;

//log
console.log(`Correct Answers`,correctAnswers);
console.log(`Score Precent` ,precentScore);
if (precentScore >= 75) {
  console.log(`pass`);
  
} else  {
  console.log(`failed`);
  
}