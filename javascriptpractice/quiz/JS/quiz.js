/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswer = 0;
// 2. Store the rank of a player
const rankOne = "Gold";
const rankTwo = "Silver";
const rankThree = "Bronze";
const rankFour = "No Crown";

// 3. Select the <main> HTML element

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const questionOne = prompt("1. Is programming hard?");
const questionTwo = prompt("2. Are tacos good?");
const questionThree = prompt("3. True or False. The desert is hot.");
const questionFour = prompt("4. Sausage or Pepperoni?");
const questionFive = prompt("5. Does bacon come from a tree?");

const answerOne = "Yes";
const answerTwo = "Yes";
const answerThree = "True";
const answerFour = "Sausage";
const answerFive = "No";

if (questionOne === answerOne) {
  correctAnswer += 1;
}

if (questionTwo === answerTwo) {
  correctAnswer += 1;
}

if (questionThree === answerThree) {
  correctAnswer += 1;
}

if (questionFour === answerFour) {
  correctAnswer += 1;
}

if (questionFive === answerFive) {
  correctAnswer += 1;
}

console.log(correctAnswer);

/* Inserting <p> into <main> with the amount of answeres they got correct */

if (correctAnswer === 0) {
  document.querySelector(
    "main"
  ).innerHTML = `<p>Try again you answered ${correctAnswer} Correct. No medal today!</p>`;
} else if (correctAnswer === 1) {
  document.querySelector(
    "main"
  ).innerHTML = `<p>Congratulations you got ${correctAnswer} Correct! You get the Bronze medal! </p>`;
} else if (correctAnswer === 2) {
  document.querySelector(
    "main"
  ).innerHTML = `<p>Congratulations you got ${correctAnswer} Correct! You get the Bronze medal! </p>`;
} else if (correctAnswer === 3) {
  document.querySelector(
    "main"
  ).innerHTML = `<p>Congratulations you got ${correctAnswer} Correct! You get the Silver medal! </p>`;
} else if (correctAnswer === 4) {
  document.querySelector(
    "main"
  ).innerHTML = `<p>Congratulations you got ${correctAnswer} Correct! You get the Silver medal! </p>`;
} else if (correctAnswer === 5) {
  document.querySelector(
    "main"
  ).innerHTML = `<p>Congratulations you got ${correctAnswer} Correct! You get the Gold medal! </p>`;
}
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

// 6. Output results to the <main> element
