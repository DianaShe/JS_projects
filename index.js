'use strict';

let fullName;
let full_Name;
let FullName;
let full_name;

let userName = prompt('Як вас звати?');
console.log("Привіт, " + userName);
alert("Привіт, " + userName)

let yearOfBirth = prompt('Вкажіть ваш рік народження?')
const CURRENT_YEAR = new Date().getFullYear();

if (yearOfBirth >= CURRENT_YEAR) {
    alert('Введені дані не коректні')
} else {
    const userAge = CURRENT_YEAR - yearOfBirth;
    console.log('Ваш вік - ' + userAge + ' років');
    alert('Ваш вік - ' + userAge + ' років')
}

let squareWidth = prompt('Яка сторона квадрата?');
const squareArea = squareWidth * squareWidth;
console.log('Площа квадрата - ' + squareArea + ' метрів квадратних');
alert('Площа квадрата - ' + squareArea + ' метрів квадратних')

let circleRadius = prompt('Вкажіть радіус кола');
let circleArea = (Math.PI * circleRadius * circleRadius).toFixed(2);
console.log('Площа кола - ' + circleArea);
alert('Площа кола - ' + circleArea)

let distance = prompt('Вкажіть віжстань між містами');
let time = prompt('Вкажіть час подорожі');
let speed = Math.floor(distance / time);
console.log(`Орієнтовна щвидкість руху - ${speed} км/год`);
alert(`Орієнтовна щвидкість руху - ${speed} км/год`);

let dollarSum = prompt('Введіть суму в доларах');
const RATE = 0.86;
const eurSum = (dollarSum*RATE).toFixed(2)

console.log(`Ви отримаєте - ${eurSum} євро згідно курсу Мінфін`)
alert(`Ви отримаєте - ${eurSum} євро згідно курсу Мінфін`)
