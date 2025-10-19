"use strict";

let userAge = +prompt("How old are you?");

if (userAge > 0 && userAge <= 11) {
  alert("You are a child");
} else if (userAge >= 12 && userAge <= 17) {
  alert("You are a teenager");
} else if (userAge >= 18 && userAge <= 59) {
  alert("You are an adult");
} else if (userAge >= 60 && userAge <= 120) {
  alert("You are a pensioner");
} else if (userAge > 120) {
  alert("You are a turtle");
} else {
  alert("Data is not valid");
}

let num = +prompt("Enter number from 0 to 9");
let specSymb;

switch (num) {
  case 0:
    specSymb = ")";
    break;
  case 1:
    specSymb = "!";
    break;
  case 2:
    specSymb = "@";
    break;
  case 3:
    specSymb = "#";
    break;
  case 4:
    specSymb = "$";
    break;
  case 5:
    specSymb = "%";
    break;
  case 6:
    specSymb = "^";
    break;
  case 7:
    specSymb = "&";
    break;
  case 8:
    specSymb = "*";
    break;
  case 9:
    specSymb = "(";
    break;
  default:
    specSymb = "not in the range";
    break;
}
alert(`Special symbol is ${specSymb}`);

let startNum = +prompt("Enter the first number of a range");
let endNum = +prompt("Enter the last number of a range");
let sum = 0;
for (let i = startNum; i <= endNum; i++) {
  sum += i;
}

alert(`The sum is ${sum}`);

let num1 = +prompt("Enter the bigger number");
let num2 = +prompt("Enter the last number");
let div = 1;

for (let i = 1; i <= num2; i++) {
  if (num1 % i || num2 % i) {
    continue;
  } else {
    console.log(i);
    div = i;
  }
}

alert(`The biggest divider is ${div}`);

let numb = +prompt("Enter the number");

for (let i = 1; i <= numb; i++) {
  if (numb % i) {
    continue;
  } else {
    console.log(i);
  }
}

let userNum = prompt("Enter your number");
let reverseNum = userNum.split("").reverse().join("");

if (reverseNum === userNum) {
  alert(`Your number is palindrom : ${userNum} = ${reverseNum}`);
} else {
  alert("Your number is not palindrom");
  console.log(reverseNum);
}

let userSum = +prompt("Enter the amount due");
let sumWithDiscount = 0;
if (userSum >= 200 && userSum < 300) {
  sumWithDiscount = userSum - userSum * 0.03;
} else if (userSum >= 300 && userSum < 500) {
  sumWithDiscount = userSum - userSum * 0.05;
} else if (userSum >= 500) {
  sumWithDiscount = userSum - userSum * 0.07;
} else {
  sumWithDiscount = userSum;
}

alert(`Your amount due with discount is ${sumWithDiscount} golden coins`);



alert("Think of a number from 1 to 100. Let me guess it.");
let minNumber =0;
let maxNumber = 100;

while (minNumber != maxNumber) {
  let guessNumber = Math.floor((minNumber + maxNumber) / 2)
  let reply = prompt(`Is your number > ${guessNumber}, = ${guessNumber} or < ${guessNumber}`)
  if (reply === '>') {
    minNumber = guessNumber
  } else if (reply === "="){
    alert(`Your number is ${guessNumber}`)
    break;
  } else if (reply === '<'){
    maxNumber = guessNumber
  } else if (reply == null){
    break;
  } else {
    alert(`Enter > = or <`)
  }
}