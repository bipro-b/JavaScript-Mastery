// Map

// Key Value == 
// 1  x
// 2  y
// 3  z
// 4  a
// x 1
// y 2

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);
for (let vegetable of recipeMap.keys()){
    console.log(vegetable);
}
for (let amount of recipeMap.values()){
    console.log(amount);
}

recipeMap.forEach((value,key)=>{
    console.log(`${key} : ${value}`);

});

