

// const property = 'fname'
// const value = 'suhil'

// var obj = {}
// obj[property] = value

// console.log(obj)

let obj = {
    user:"suhil",
    age:23
};

let clone = { ...obj }
clone.user = 'Different'
console.log(obj,clone)