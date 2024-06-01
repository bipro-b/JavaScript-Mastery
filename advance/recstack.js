//Stack ,Queue 

// Recursion

// 2^4, 2*2*2*2  // pow(2,4)= 16
// 2^1 = 2
// 10^1 = 10
// 2^4
// x=2, n=4
// 2*2,4*2,8*2=16
function pow(x,n){
    if(n==1){
        return x;
    }
    else {
        return x*pow(x,n-1);
        // po
    }
}

console.log(pow(2,4));
/*
  pow(2,4) = 2*pow(2,3) //2*8=16
  pow(2,3) = 2*pow(2,2) //2*4 = 8
  pow(2,2) = 2*pow(2,1)  //2*2=4
  pow(2,1) = 2
*/