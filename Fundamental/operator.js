// unary, binary
// unary , operator 1 operand 1 ++x;
// binary 2 operand 1 operator  y+x;

// Unary Increment , Decrement 
let x = 1;
x++;
console.log(x);

// suffix x++, prefix ++x
let a1 = 10;
let b = a1++;
console.log(b); // 10
console.log(a1);// 11

let a2 = 10;
let b2 = ++a2;
console.log(b2); //  11

// test

let a=5;
let sum = ++a + a++ + ++a + a++;
console.log(sum);// 6 + 6 + 6+ 6+
// 6+6 + 8+8 = 28

let y = 20;

if(y>30 && y++!=54);
console.log(y); //20

let y1 = 20;
if(y1<30 && y1++!=54);
console.log(y1); // 21

// 2 operand

let s2 = '123' +2;
console.log(s2);12

// tasks 

/*
Output
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

values of a and x 

let a = 2;
let x = 1 + (a *= 2);

*/