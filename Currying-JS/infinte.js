// INFINITE CURRYING Solve
// sum(10)(10)(10)(10)(10)(10)(10).......()
// Simplify The Following Currying Function with a New function

function sum(a){
    return function (b){
        if(b) return sum(a+b);
        else return a; 
    };
}

console.log(sum(10)(12)(12)(12)(12)())

