Function.prototype.myBind = function ( context={}, ...args){

    if(typeof this!=='function'){
        throw new Error('The Bound is Not Callable')
    }

    context.fn = this;
    return function (...next){
        context.fn(...args, ...next)
    }
}

const con = {
    name:'Suhil'
}

function m (arg1, arg2){
    console.log('Hello THis is '+this.name + ' Just adding args '+ arg1 +"  "+ arg2)
}


const ca = m.bind(con,12)
ca(121)
