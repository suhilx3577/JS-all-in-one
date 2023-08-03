// Creating Objects using Object Literals 

var obj = {
    name:"suhil D",
    age: 35,
    work:"Software Developer"
}
console.log(obj)

// Accessing the Objects
console.log(obj.age)

// Modify the Property Valye
obj.age = 21;
console.log(obj.age)


// another way to insert key-value pain into Objects
// With this method we can also insert Key with Spaces
obj["new key"] = "this is new Key";

console.log(obj["new key"])

// console.log(obj)