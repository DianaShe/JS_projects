'use strict';

function countArgs () {
    return arguments.length
}

console.log(countArgs(1, 'h', 89))

const compareNum = function (num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 < num2) {
        return -1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return null
    }
}

console.log(compareNum(45, "t"));
console.log(compareNum(-5, 0));

function factorial(num) {
  if (num < 0) {
    console.log("Факторіал можна визначити лише для невід'ємних чисел.");
  }
  return num === 0 ? 1 : num * factorial(num - 1);
}

console.log(factorial(5));

const joinNums = (...args) => args.join('')

console.log(joinNums(3, 45, 76));

const countRectArea = (wid, len) => {
    if (!len) {
        len = wid;
    }
     return wid * len
}

console.log(countRectArea(6.5, 4.1));
console.log(countRectArea(6.5));

const checkPerfectNum = (num) => {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i) {
            continue
        } else {
            sum += i
        }    
    }
    return sum === num

}

console.log(`Is the number perfect?`, checkPerfectNum(45));
console.log(`Is the number perfect?`, checkPerfectNum(6));

const givePerfectNums = (num1, num2) => {
    let perfectNums = [];
    for (let i = num1; i < num2; i++) {
        if (checkPerfectNum(i)) {
            perfectNums.push(i)
     }   
    }
    return perfectNums;
}

console.log(givePerfectNums(6, 35));
