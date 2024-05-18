//  e-commerce 
// laptop,mobile, ---
//  mobile , image:"url",feature:"string ",ram:"4gb",price:5600.90 , RestfulAPI.. JSON ..

let mobile={
    image:"jpg",
    feature:"Good to use",
    ram:"4GB",
    price:890
}
// mobile.key = value
console.log(mobile.ram);


function makeUser(name,age){
    return {
        name: name,
        age:age
    }
}

let user1 = makeUser("John",60);
console.log(user1.name)

let users = {
    name:"John",
    age:30,
    isAdmin:true
};

// for( let i=0;i<n;i++) // 1--10, 1,

for(let k in users){
    console.log(k); // name, age, isAdmin

    console.log(users[k]); // John, 30, true

    // 

}

/*
Task
   1. let salaries = {
    John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
 
2. 
  // object
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// Result
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
Please note that multiplyNumeric does not need to return anything. It should modify the object in-plac



*/