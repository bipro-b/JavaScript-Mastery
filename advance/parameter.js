function sum(a,b,c,d,e,f,g,h){
    return a+b+c+d;
}
console.log(sum(1,2,3,4,5,6,7,8)); // 3

// ... = spread operator

function sumAll(...args){
    let sum=0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
}

console.log(sumAll(1,2)); //3
console.log(sumAll(1,2,3,4)); // 10

function showName(firstName,lastName,...titles){
    console.log(firstName+' '+lastName); // Julius Caesar

    console.log(titles[0]); // Consul
    console.log(titles[1]);// Imperator
    console.log(titles.length);// 2
    console.log(titles);//
}

showName("Julius","Caesar","Consul","Imperator");

// Syntax of Spread

let arr = [3,4,5];  //()-list//{}-object

console.log(Math.max(arr));//list
console.log(Math.max(2,3,5));
console.log(Math.max(...arr));

let arr1= [1,-2,7];

console.log(Math.max(...arr,...arr1));

// Merge

let mergedArray = [9,...arr,6,...arr1];
console.log(mergedArray);

// copy
let arrCopy = [...arr];
console.log(arrCopy);
arr.push(6);
console.log(arr);
console.log(arrCopy);

// copy of object
let obj = {a:1,b:2,c:6};
let objCopy = {...obj};
obj.d=5;
console.log(obj);
console.log(objCopy);
console.log(obj===objCopy) // false
console.log(JSON.stringify(obj)===JSON.stringify(objCopy)); // true

