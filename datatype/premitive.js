let str = "Hello";
console.log(str.toUpperCase()); // HELLO

console.log(str.toLowerCase()); // hello

let n = 1.23456; // 1.23
console.log(n.toFixed(2));

// Documentation  // Flex 
// Bootstrap/ Tailwind / MUI

// Math.round // Math.ceil// Math.floor

let num1 = 1.2345;
console.log(Math.round(num1)); //1
let num2 = 2.67;
console.log(Math.ceil(num2));// 3
let num3 = -1.3;
console.log(Math.floor(num3)); //-2 // 1.3 // 1 // -1.3 // -1 //-2

// parsing parse parseInt
console.log(parseInt('100px')); // 100 
console.log(parseFloat('12.5cm')); //12.5 
// '12.5cm' , '5.8cm' // 

// console.log(Math.random()); // OTP / Code
console.log(Math.floor(Math.random()*10)+1); 


// max min
console.log(Math.max(3,5,6,7,8));//8
console.log(Math.min(1,2,3));//1
console.log(Math.pow(6,2)); // 36

const numbers = [1,2,3,4,100,90];
let maxValue = -1;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>maxValue){
        maxValue = numbers[i];
    }
}
console.log(maxValue);