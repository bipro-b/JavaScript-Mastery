let user = {
    name:"john",
    age:30,
    toString(){
        return `{name: "${this.name}", age: ${this.age}}`;
    }
}
console.log(user);

// stringify

let student ={
    name:'john',
    age:18,
    isAdmin:false,
    courses:['html','css','js'],
    spouse:null
}
console.log(student);
let json = JSON.stringify(student);
console.log(json);