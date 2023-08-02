
function curriedFunc(sum){
    return function curry (...args ){
        if(args.length>=sum.length){
            return sum(...args)
        }
        else{
            return function(...next){
                return curry(...args , ...next);
            }
        }
    }
}

const sum =( a , b , c , d ) => a + b + c + d; 

const totalSumof4 = curriedFunc(sum);

console.log(totalSumof4(10)(20)(30)(40));