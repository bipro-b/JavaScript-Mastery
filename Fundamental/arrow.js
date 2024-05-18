let sum=(a,b)=> a+b;
let s = sum(20,30);
console.log(s);

/*

// =>
let sum=(a,b,c)=>{

}

*/

let sum1 = (a,b)=>{
    let result = a+b;
    return result;
    // console.log(result);
}
// sum1(40,50);
// console.log(sum1(40,50)); // 90

let sum2 =(c,d)=>{
    let finalResult = c+d+sum1(40,90);
    return finalResult;
    // console.log(finalResult);
}
console.log(sum2(50,70));

/*
Variable
Operation
Loop
Function
*/