

function sum(a){
    return function (c , d){
        return a+c+d;
    }
}

// Partial Application as it fixed 
var sumWith5 = sum(5);

console.log(sumWith5(10,10));