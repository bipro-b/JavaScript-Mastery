//if, else if, else
// jodi, 

let x = 30;

if(x<30){
    console.log("X is smaller than 30");
}
else if(x>30){
    console.log("X is bigger than 30.")
}
else{
    console.log("X is equal to 30");
}

// nested condition

let y =500;
if(y%2==0){
    if(y<100){
        console.log("y is less than 100");
    }
    else{
        console.log("y is greater than 100")
    }
}
else{
    console.log("y is odd number");
}

// Relational/ comparision operation

/*
<
>
>=
<=
==

*/

/*
1. take three value for a,b,c
   determine max number

2. Rewrite this if using the conditional operator '?''

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

3. Rewrite if .. else using multiple ternary operators '?'

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

*/