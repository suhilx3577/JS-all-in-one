
function myPromise(executor){

    let isFulFilled=false, isCalled=false, isRejected=false,onResolve,onReject,val;

    function resolve(value){
        isFulFilled=true;
        val=value;
        if(typeof onResolve ==='function'){
            onResolve(value)
        }
    }
    function reject(value){
        isRejected=true;
        val=value;
        if(typeof onReject === 'function'){
            onReject(value)
        }
    }

    this.then = function (cb){
        onResolve=cb;
        if(isFulFilled && !isCalled){
            onResolve(val)
            isCalled=true;
        }
        return this;
    }
    this.catch = function (cb){
        onReject=cb;
        if(isRejected && !isCalled){
            onReject(val)
            isCalled=true;
        }
        return this;
    }


    try{
        executor(resolve,reject);
    }
    catch(err){
        console.log(err)
    }

}

const prom = new myPromise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Hello')
    },2000)
})

prom.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

