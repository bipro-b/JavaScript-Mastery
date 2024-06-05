// Array

let arr = ["John","Smith"];

let [firstName,lastName] = arr;
console.log(firstName);

let user = {};

[user.name,user.sureName] = "Alice Bob".split(' ');
console.log(user.name);

// object

let options ={
    title:'Menu',
    width:100,
    height:200
}
let {height,width} = options;
console.log(height);

//rest     ... (spread operator)

let {title,...rest}= options;
console.log(rest.height);
console.log(title);