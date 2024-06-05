//Array
let a = 40;
let b= 80;
          // 0   1    2   3
let arr = ["I","go","home",6];
delete arr[1];
console.log(arr[1]);
console.log(arr);


//splice
let arr1 =["I","study","JavaScript"];
arr1.splice(1,2); // index 
console.log(arr1);

let arr2 =["I","study","JavaScript"];
arr2.splice(2,1,"complex","language");
console.log(arr2);

// slice  
           //0  1   2    3
let arr3 = ["t","e","s","t"];

console.log(arr3.slice(1,3));//e,s
console.log(arr3.slice(-1));

// concat 

let arr5 = [1,2];
console.log(arr5.concat([3,4]));

// forEach
['Bilbo','Gandalf','Nazgul'].forEach((item,index,array)=>{
    console.log(`${item} is at index ${index} in ${array}`);
});

// searching

let arr6 = [1,0,false,'Alice'];
console.log(arr6.indexOf(false));
console.log(arr6.indexOf(true));

if(arr6.indexOf('Alice')!=-1){
    console.log("exist in array");
}

console.log(arr6.includes(0));//true

if(arr6.includes('Alice')){
    console.log("He is  present here")
}

//find
let users = [
    {id:1,name:'John'},
    {id:1,name:'Alice'},
    {id:3,name:'Bob'},
    {id:4,name:'Mary'}
]

let user = users.find(item=>item.id==1);
console.log(user);

// console.log(users.findIndex(user=>user.name=="John"));

// Filter

let someUsers = users.filter(item=>item.id==1);
console.log(someUsers);

//map

let lengths = ['Bilbo','Gandalf','Nazgul'].map(item=>item.length);

console.log(lengths);

let arr7 =[1,2,3,4,5,6];
arr7.reverse();
console.log(arr7);

// split and join
// split string convert into array here

let names = 'Bilbo, Gandalf, Nazgul';
let arr8 = names.split(', ');
console.log(arr8);

let str = "te+s+t";
console.log(str.split('+'));

// reduce
let arr10 = [1,2,3,4,5];

let result = arr10.reduce((sum,current)=>sum+current,10);
console.log(result);