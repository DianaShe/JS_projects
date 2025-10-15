console.log((0.1 + 0.2).toFixed(1));

let a = "1";
let b = 2;
console.log(+a + b);

let memoryGb = prompt('What is your usb stick memory in GB?')
const memoryFile = 820;
const numberOfFiles = memoryGb * 1024 / memoryFile;
console.log(numberOfFiles)
alert(`You can have ${Math.floor(numberOfFiles)} files on your usb stick`);

let sumOfMoney = prompt('How much money do you have?');
let priceOfChoc = prompt('How much does a chocolate cost?')
const numOfChocs = Math.floor(sumOfMoney / priceOfChoc);
const change = sumOfMoney % priceOfChoc;
alert(`You can buy ${numOfChocs} chocolates and you will have ${change} UAH left`)

let num = prompt('Enter your number');
let char1 = num % 10;
let char2 = (num-char1) % 100 /10;
let char3 = Math.floor(num /100) 
alert(`${char1}${char2}${char3}`)

const reverseNum = Math.floor((num % 10) * 100 + (Math.floor(num / 10) % 10) * 10 + Math.floor(num / 100))
console.log(reverseNum);
