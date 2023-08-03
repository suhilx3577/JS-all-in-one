// Creating Objects using Object Constructors with new Keyword

function Person(name, age){
    this.name=name;
    this.age=age;
};

const person1 = new Person('Suhil',23);

person1["second name"]='Khan'



// Creating New Object using object.create() and passing the prototype;

var personPrototype = {
    speak : function(){
        console.log("Hello Bhaiya")
    }
}

var obj1 = Object.create(personPrototype)
obj1.name='Rahil'
obj1.speak()

console.log(obj1)
console.log(obj1.speak)