let single = 'single quoute';
let double ="double quouted";

let backtick = `backticks`;

function sum(a,b){
    return a+b;
}

console.log(` a+b = ${sum(3,10)}`);

// special character
        // 0 1 2 3 4
let str = 'javaScript';   // HI len = 2
                          // 01 // 2-1=1
let l = str.length;
console.log(str[0]); // t
console.log(str[l-1]); // t
console.log(str.at(-1)); //  t

console.log('Index'[0].toLowerCase());