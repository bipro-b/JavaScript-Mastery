// 1,2,3,4,5,6,10
// while, for, do .. while

let sum =0;
for(let i=1;i<=10;i++){
    sum=sum+i;
} // 1, 4, 5, 10 // 2,4,6,8,10 // 1 3 5 7
console.log(sum);

let j=1;
sum=0;
while(j<=10){
    sum+=j; // sum = sum +i;
    j++;
}
console.log(sum);

let a=11;
do{
    console.log(a);
    a++;
}while(a<11);

let b=11;
while(b<11){
console(b);
b++;
}

// switch
// fruits = {}


/*
tasks
1. determine the the last code
let i = 3;

while (i) {
  alert( i-- );
}

2. The prefix form ++1;

let i = 0;
while (++i < 5) alert( i );
for (let i = 0; i < 5; ++i) alert( i );


The postfix
let i = 0;
while (i++ < 5) alert( i );
for (let i = 0; i < 5; i++) alert( i );

3. Rewrite code

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}


*/