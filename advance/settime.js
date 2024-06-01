function sayHi(phrase,who){
    console.log(phrase+' '+who);
}
// setTimeout(sayHi,2000,"Hi","Alice");

// setTimeout(sayHi,1000,"Hello","John");

// console.log("under the function");

let timerId = setInterval(()=>console.log("tick"),1000);

// alerm
setTimeout(()=>{clearInterval(timerId);console.log("stop")},5000)

// nested
let timerId1 = setTimeout(function tick(){
    console.log('tick');
    timerId1 = setTimeout(tick,2000);
},2000);