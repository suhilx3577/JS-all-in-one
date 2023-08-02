// sum(1)(2)(3)

function sum(a){
    return function(b){
        return function (c){
            console.log(a+b+c);
        }
    }
}
sum(5)(10)(20)


// sol("SUM")(2)(4) return 6   and all other cases for SUB-MUL-DIV

function sol(a) {
    return function (b){
        return function(c){
            if(a=="ADD") console.log(b+c);
            else if(a=="SUB") console.log(b-c);
            else if(a=="MUL") console.log(b*c);
            else if(a=="DIV") console.log(b/c);
            else console.log("No valid Input")

        }
    }
}
// This is a good example of resuing Varibale for LOGIC 
// One function Based on INPUT parameters Performing Different Actions
sol("ADD")(4)(5)
sol("SUB")(4)(5)
sol("DIV")(4)(5)
sol("MUL")(4)(5)
