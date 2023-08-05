

Function.prototype.myApply = function (context={}, args=[]){
    if(typeof this !=='function'){
        throw new Error(this+" is Not Callable")
    }

    if(!Array.isArray(args)){
        throw new Error('ClearListFromArrayLike Is called on Non Object')
    }

    context.fn=this;
    context.fn(...args)
}


myContext ={
    name:'suhil',
    age:25
}

function printperson (company,ctc) {
    console.log(this.name+" is aroung age of :"+this.age+" Working at :"+company+" with ctc of "+ctc);
}


printperson.apply(myContext,['Uber',34])


