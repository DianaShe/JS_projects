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
let reply1 = confirm("Is your number bigger than 50?");
let userNumber = "lower than I expected";
if (reply1) {
  if (confirm("Is your number bigger than 75?")) {
    if (confirm("Is your number bigger than 88?")) {
      if (confirm("Is your number bigger than 94?")) {
        if (confirm("Is your number bigger than 97?")) {
          if (confirm("Is your number bigger than 99?")) {
            userNumber = 100;
          } else {
            userNumber = confirm("Is your number bigger than 98?") ? 99 : 98;
          }
        } else if (confirm("Is your number bigger than 96?")) {
          userNumber = 97;
        } else {
          userNumber = confirm("Is your number bigger than 95?") ? 96 : 95;
        }
      } else if (confirm("Is your number bigger than 91?")) {
        if (confirm("Is your number bigger than 93?")) {
          userNumber = 94;
        } else {
          userNumber = confirm("Is your number bigger than 92?") ? 93 : 92;
        }
      } else if (confirm("Is your number bigger than 90?")) {
        userNumber = 91;
      } else {
        userNumber = confirm("Is your number bigger than 89?") ? 90 : 89;
      }
    } else if (confirm("Is your number bigger than 81?")) {
      if (confirm("Is your number bigger than 84?")) {
        if (confirm("Is your number bigger than 86?")) {
          userNumber = confirm("Is your number bigger than 87?") ? 88 : 87;
        } else {
          userNumber = confirm("Is your number bigger than 85?") ? 86 : 85;
        }
      } else if (confirm("Is your number bigger than 83?")) {
        userNumber = 84;
      } else {
        userNumber = confirm("Is your number bigger than 82?") ? 83 : 82;
      }
    } else if (confirm("Is your number bigger than 78?")) {
      if (confirm("Is your number bigger than 80?")) {
        userNumber = 81;
      } else {
        userNumber = confirm("Is your number bigger than 79?") ? 80 : 79;
      }
    } else if (confirm("Is your number bigger than 77?")) {
      userNumber = 78;
    } else {
      userNumber = confirm("Is your number bigger than 76?") ? 77 : 76;
    }
  } else if (confirm("Is your number bigger than 63?")) {
    if (confirm("Is your number bigger than 69?")) {
      if (confirm("Is your number bigger than 72?")) {
        if (confirm("Is your number bigger than 73?")) {
          userNumber = 74;
        } else {
          userNumber = confirm("Is your number bigger than 72?") ? 73 : 72;
        }
      } else if (confirm("Is your number bigger than 71?")) {
        userNumber = 72;
      } else {
        userNumber = confirm("Is your number bigger than 70?") ? 71 : 70;
      }
    } else if (confirm("Is your number bigger than 66?")) {
      if (confirm("Is your number bigger than 68?")) {
        userNumber = 69;
      } else {
        userNumber = confirm("Is your number bigger than 67?") ? 68 : 67;
      }
    } else if (confirm("Is your number bigger than 65?")) {
      userNumber = 66;
    } else {
      userNumber = confirm("Is your number bigger than 64?") ? 65 : 64;
    }
  } else if (confirm("Is your number bigger than 57?")) {
    if (confirm("Is your number bigger than 60?")) {
      if (confirm("Is your number bigger than 62?")) {
        userNumber = 63;
      } else {
        userNumber = confirm("Is your number bigger than 61?") ? 62 : 61;
      }
    } else if (confirm("Is your number bigger than 59?")) {
      userNumber = 60;
    } else {
      userNumber = confirm("Is your number bigger than 58?") ? 59 : 58;
    }
  } else if (confirm("Is your number bigger than 54?")) {
    if (confirm("Is your number bigger than 56?")) {
      userNumber = 57;
    } else {
      userNumber = confirm("Is your number bigger than 55?") ? 56 : 55;
    }
  } else if (confirm("Is your number bigger than 52?")) {
    userNumber = confirm("Is your number bigger than 53?") ? 54 : 53;
  } else {
    userNumber = confirm("Is your number bigger than 51?") ? 52 : 51;
  }
} else {
  alert("Think of number bigger than 50");
}

alert(`Your number is ${userNumber}`);
