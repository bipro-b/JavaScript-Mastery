// false true

function ternary(){
    let color = true;
    let result = color == false?0:1;
    console.log(result);
    console.log(color==true?0:1);

    // undefined
    let user;
    console.log(user); // undefined
    console.log(user ?? "Anonymous");

    let firstName = null;
    let lastName = null;
    let nickName = "SuperCoder";
    console.log(firstName ?? lastName ?? nickName ?? "Anonymous");

    console.log(firstName || lastName || nickName || "Anonymous");

    // || vs ??

    // || doesn't distinguish among false, 0, empty string "" and null, undefined

    let height = 0;
    console.log(height || 100); // 100
    console.log(height ?? 100); // 0

}

ternary();

/*

Check
let x = (null && 2) ?? 3; // nul/1/2/3
console.log(x);

*/