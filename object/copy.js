// copy , reference
let user = {name:"John"};
let admin = user;
console.log(admin.name);

// Object assign

let user1 = {name:"Alice"};

let newObject1 = {canView:true};  // {age:"40"}
let newObject2= {canEdit:true};

Object.assign(user1,newObject1,newObject2);

console.log(user1.canEdit);// true
