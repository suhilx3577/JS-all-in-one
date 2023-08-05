Function.prototype.myCall = function (context={}, ...args){

    if(typeof this !== 'function'){
        throw new Error(this + 'Is Not Callable');
    }

    context.fn = this;
    fn(...args);
}

function p() {
    console.log(this.name+ " Is Beautiful")
}

var flower = {
    name:"Rose"
}

p.call(flower)

