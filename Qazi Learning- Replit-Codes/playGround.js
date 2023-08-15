/*TIP CALCULATOR
food = Number(prompt('What is the amount of Food'))
tip = Number(prompt('What is the Tip %') / 100)

tipamt = food * tip
total = food+tipamt

console.log('Food Amount is ', food)
console.log('Tip Amount is ', tipamt)
console.log('Total Amount is ', total)

*/


//           MATH METHODS
/* 
Math.floor = Gives Floor Value Of Decimal
Math.ceil, = Gives Next Nearest Value of Decimal
Math.random = Gives the Random Number From 0 to specified Number 

console.log(Math.floor(2.455))   o/p is 2
console.log(Math.ceil(2.455))  o/p is 3
console.log(Math.floor(Math.random()*4)) o/p is 0,1,2,3

 */

// let weather

// weather = prompt('Hows the Weather ? [rain or sunny]')

// if(weather == 'rain'){
//   console.log('Carry Umbrella')
// }
// else {
//   console.log('Carry SunGlasses')
// }




//       CONDITIONAL OPERATORS
/*
==
=== if its equal && if Same Data-Type
!=
!== if its Not Equal and Not Same Data-type

*/

//     FUNCTIONS CONCEPT


//This is function which is 0 Arguments
//Does: Logs out Your Name to Console
function sayMyName() {
    console.log('My Name is Suhil')
  }
  
  
  
  //This is a Function which has 1 Argument
  //Does: Logs out the passed name to the console
  function greeting(name) {
    //WAY-1--> console.log('Hi '+name+', Nice to Meet You') 
    //WAY-2--> is to use Template Literals ``.
    //By using the BackTicks(``) Along with {} and $ for the JS     Part
  
    greet = `Hi ${name}, Nice to Meet You`
    console.log(greet)
  }
  
  //name1=prompt('Enter Your Name')
  //greeting(name1)
  
  
  //this function has 2 Arguments 
  //Does: Returns the sum of 2 arguments
  function sumoftwo(a, b) {
  
    return a + b
  }
  //a=Number(prompt('Enter Your First Number'))
  //b=Number(prompt('Enter Your Second Number'))
  //console.log(`sum of ${a} and ${b} is ${sumoftwo(a,b)}`)
  
  
  
  //This function take 2 Arguments
  //Does : This Function Returns the Total Amount + Including Tip Amount
  function tipcalci(food, tip) {
  
    tipPercent = tip / 100
    tipamt = food * tipPercent
    total = sumoftwo(food, tipamt)
  
    //console.log('Food Amount is ', food)
    //console.log('Tip Amount is ', tipamt)
    //console.log('Total Amount is ', total)
    return total
  
  }
  
  //console.log('total amount is ',tipcalci(1000, 20))
  
  
  //    ARROW FUNCTIONS  =>
  
  //Arrow function with Explicit Return
  const sumArrow = (a, b) => {
    return a + b
  }
  //Arrow Function with Implicit Return
  //IMPORTANT: for Implicit Return Remove Curly Braces
  const sumArrow2 = (a, b) => a + b
  //console.log(sumArrow2(10,20))
  
  
  
  /* ARRAYS BASICS,CONCEPTS,METHODS
  
   METHODS
   slice()   : It slices the array from the given index till given end                index
   push()    : It adds the element to end of the array
   indexOf() : It gives the Index of the Given Element if Present                     else gives -1 if not Present
   length    : Gives the Length of the array
      
  */
  
  //const fruits=['banana','pear','orange','mango']
  //console.log(fruits)
  //fruits.push('Cookies')
  //console.log(fruits)
  //fruits.push('Chocolate')
  //console.log(fruits.slice(3,7))
  //console.log(fruits.indexOf('Chocolate'))
  //console.log(fruits.length)
  
  
  
  
  /*
  
  OBJECTS
  
  for example
    person.name     is a property
    person.name()   is a method
    name()          is a fucntion
  */
  
  // const person = {
  //   name:'Virat',
  //   birth:'Delhi',
  //   ranking:1
  // }
  
  // access using .(dot) -- dot notation
  // console.log('Person Name is :',person.name)
  
  // //access using the[''] -- bracket notation
  // console.log('Person Rank is :',person['ranking'])
  
  // //assigning the new property to the object
  // person.surname='Kohli'
  // console.log('Person Surname is :',person.surname)
  
  // //printing the entire object
  // console.log(person)
  
  //My Exercise
  // const person2 ={
  //   name:'Qazi',
  //   shirt:'black'
  // }
  
  // console.log('Name is :',person2['name'])
  // console.log('Shirt color is :',person2['shirt'])
  
  // person2.work='YouTube'
  // console.log('Work is :',person2['work'])
  // console.log('Entire Details are :',person2)
  
  
  //ES 6 Syntax
  //Ojects are used in this
  //Useage of Template Literals
  //usage of functions
  //usage of the methods
  /* NOTE: We call the methods with () only then Recognizes                 Else Just the Property is Spit Out
     ex: person3.networth()
  */
  /*
  const introducer = (name,shirt,assets,liability)=>{
    
    const person3={
      name: name,
      shirt: shirt,
      assets: assets,
      liability : liability,
      networth : function(){
        return this.assets - this.liability
      }
      
    }
    const intro=`Hello, My Name is ${person3.name} and Color of my shirt is ${person3.shirt} and my NetWorth is $${person3.networth()} USD`
    
    return intro
    
  }
  
  console.log(introducer('Suhil','Red',100000,5000))
  console.log(introducer('Leonardo','White',560000,34000))
  
  */
  
  
  //LOOPS
  //ForLoops-  in will give index and of will give the value
  
  //const fruits = ['banana', 'pear', 'orange', 'mango', 'apple', 'grapes']
  
  //My FOR-LOOP 
  // for(i in fruits){
  //   console.log(fruits[i])
  // }
  
  /*     UGLY FOR-LOOP
    for(let i=0;i<fruits.length;i++){
      console.log(fruits[i])
    }
  */
  
  //    Simple FOR-LOOP
  // for(const fruit of fruits){
  //   console.log(fruit)
  // }
  
  
  //const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  /*    SUM of all the elements in the ARRAY
  let sum=0
  for(const num of nums){
    sum=sum+num
  }
  
  console.log('Sum is :',sum)
  
  */
  
  /* DOUBLE The ARRAY element and STORE it in NEW ARRAY and print
  const result=[]
  for( const num of nums){
    result.push(num * 2)
  }
  
  // for( const ans of result){
  //   console.log(ans)
  // }
  
  console.log(result)
  
  */
  
  
  //const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //const numbers = [10, 20, 30, 40, 50]
  
  //Functions that returns the double of array elements
  const double = (nums) => {
    const result = []
    for (const num of nums) {
      result.push(num * 2)
    }
    return result
  }
  //function that returns the sqaure of array elements
  const square = (nums) => {
    const result1 = []
    for (const num of nums) {
      result1.push(num * num)
    }
    return result1
  }
  //function that returns the cube of the array elements
  const cube = (nums) => {
    const result2 = []
    for (const num of nums) {
      result2.push(num * num * num)
    }
    return result2
  }
  
  //console.log(double(numbers))
  //console.log(double(nums))
  //console.log(double([1,1,1,1]))
  //console.log(square([1, 2, 3, 4]))
  //console.log(cube([1,2,3]))
  
  
  
  //This Function counts the number of letters in the Passed String 
  const count = (phrase) => {
  
    let result = 0
    for (letters in phrase) {
      console.log(Number(letters) + 1)
      result = result + 1
    }
  
    console.log('The Result is :', result)
    return 'Successful'
  }
  
  //const phrase = prompt('What is your String.?')
  //const phrase='hello'
  //console.log(count(phrase))
  //We can replace the above Function with an one liner property
  //result=phrase.length
  //console.log({result})
  
  
  
  //Create function to add all the numbers in an array
  //go to python tutor to visualize anything you want to 
  const sumofarray = (array) => {
  
    sum = 0
    for (const num of array) {
      sum += num
    }
  
    return sum
  }
  //const arr=[1,2,3,4,5]
  //console.log("The Result of Sum of array is :",sumofarray(arr))
  
  
  
  //write a function to find the max in an array
  const findmax = (arr) => {
  
    let max = 0
    for (const num of arr) {
      if (num > max)
        max = num
    }
  
    return max
  }
  //const arr=[3,5,10,2,9,3]
  //console.log('The Maximum from the given array is :',findmax(arr))
  
  
  //write a function the count the frequency of the letters
  const findfreq = (phrase) => {
  
    const freq = {}
  
    for (letter of phrase) {
      if (letter in freq) {//this is the function for incrementing the value by 1
        freq[letter]++
      }
      else {// this is to create a new object with that letter ka value and set it to 1
        freq[letter] = 1
      }
    }
    return freq
  }
  
  // const phrase = 'hahaaaa'
  // console.log(findfreq(phrase))
  
  
  const wordfrequency = (phrase) => {
  
    wordfreq = {}
    //split method is used to spilt the sentence into words based on the parameter passed to it
    //since ' ' is passed all the words are sliced based on the space
    const words = phrase.split(' ')
    for (word of words) {
      if (word in wordfreq) {//if word already present then increment by one
        wordfreq[word]++
      }
      else {// else initialise the object of word and set it to one
        wordfreq[word] = 1
      }
    }
    //console.log(words)
    return wordfreq
  }
  //const phrase='lol what are you doing bro lol bro why bro'
  //console.log(wordfrequency(phrase))
  
  
  
  // THE Above two functions can be optimised into this
  /* 
  once after splitting the sentence into array it becomes similar to that of finding the frequency of letter in a sentence
  >> therefore we can pass the array in the parameter to findfreq    function
  */
  const wordfreq = (phrase) => {
    words = phrase.split(' ')
    return findfreq(words)
  }
  //console.log(wordfreq('what are what you are'))
  
  
  //We are now diving into :-
  //-MAP     - it loops and returns an array
  //-FILTER  - it loops as well but returns an array with matching conditions
  //-REDUCE  - 
  
  //MAP
  //it just works like the loops as if .loop
  
  
  //the below is an IMPLICIT function without no `{ }`
  // [1,2,3,4,5].map(number=>console.log(number))
  
  
  /*
    This is map function with EXPLICIT style with `{ }`
    [1,2,3,4,5].map(numbers => {
      console.log(numbers)
      console.log('hello namaste')
    })
  */
  
  /*
    If we ever have to write a program in one line of loops
    * for Example Double the Number
      We can do it using the map function
      
    const result =[1,2,3,4,5].map(numbers=>numbers*2)
    console.log(result)
  */
  
  // one liner for the square of numbers
  // const result1=[1,2,3,4,5].map(numbers=>numbers*numbers)
  // console.log(result1)
  
  
  // The best thig about the map is it Loops and Returns an Array
  // lets use this in proper way
  
  //use map to return the double of numbers
  const doubleMap = (numbers) => {
    const result3 = numbers.map(num => num * 2)
    return result3
  }
  //console.log(doubleMap([1,2,3,4,5]))
  
  
  //use map to return the numbers greater than `target`
  const greaterMap = (numbers, target) => {
    const result = []
    numbers.map(number => {
      if (number > target)
        result.push(number)
    }
    )
  
    return result
  }
  //console.log(greaterMap([3,2,5,1,7],2))
  
  
  // Using map it is also possible to store the double into array
  // let result = numbers.map(num=> num*2)
  // console.log(result)
  
  
  /*
  NOTE : With Map i can just traverse array and play with it but in Filter I can match the number and print the altered array
  */
  //FILTER- It returs an array of matching conditions
  //the same above greater function can be done in simple way using filter
  
  const doubleFilter = (numbers) => {
    const result = numbers.filter(num => num > 2)
    return result
  }
  
  const doubleMapp = (numbers) => {
    const result = []
    numbers.map(num => {
      if (num > 2) {
        result.push(num)
      }
    })
    return result
  }
  
  
  //const numbers = [4, 3, 6, 1, 5, 8, 3]
  //console.log(doubleFilter(numbers))
  //console.log(doubleMapp(numbers))
  
  
  
  /*
    In The Above Example using Filter
      I was able to push all the elements greater than 2 into the result and          print it. All just in one line
  
    But Using Map
      I could only Print it by using a seperate comparision
      or can push into result by using a comparision or check
      
  */
  
  //console.log(numbers.filter(num=> num>4))
  //console.log(numbers.map(num=>num*2))
  
  /* 
  The best thing about the filter and map is that we can use them in a single line to print those elements as well
  Examples like the above Two Console.log
    We could filter out and print all number greated than 4 
    we could print the double value of all the numbers in that array
  */
  
  
  //Now lets create an array of objects and print using filter
  
  const actors = [
    { name: 'Jhonny', networth: 12000 },
    { name: 'Amber', networth: 100 },
    { name: 'Bobby', networth: 20000 },
  ]
  
  // console.log(actors.filter(act=> act.networth>100))
  
  // since the(abpve) one liner was not showing the Exact OP I used a for loop
  // for(let i=0;i<2;i++){
  //   const result= actors.filter(act => act['networth'] > 100)
  //   console.log(result[i])
  
  // }
  
  
  /*
    We can also just print names of actors greater than some           networth by using Map and Filter together
    we have used Join() Operator to Join different names with any      specified Character passed to it with '' 
  */
    
  // const results = actors.filter(actor => actor.networth > 100)
  // const names = results.map(act => act.name).join('-')
  
  // console.log(results.map(act=> act.name).join('-'))
  
  //we can also print out the data on the HTML Page as well
  //playground.innerHTML = `<h1>${names}</h1>`
  
    
  /*
                Now We are gonna study - REDUCE
  
    Reduce function is used to Sum throught the Entire array
    it basically reduces the entire array to a single Number
  
    it consistes of 2 number (prev,curr)
      prev is sum of all the prev number and curr is the current         number which hasnt included in the prev(sum)
  
    we can manipulate the reduce function to +, *  as  well
    we can define our own  2 parameter function and map it to the      reduce function
  */
  
  // const numberss = [1, 2, 3, 4]
  // const result = numberss.reduce((a, b) => a / b)
  // console.log(result)
  
  // const sum=(a,b)=>a+b
  // const result = numberss.reduce(sum)
  // console.log(result)
  
  
  
  /* 
    with the help of Filter,Map,Reduce
    we can print the sum of all the actor's Networth
  */
  
  // const result = actors.filter(actor=>actor.networth>0)
  // const ans=result.map(act=> act.networth)
  // console.log(ans)
  // const answer = ans.reduce((a,b)=> a+b)
  // console.log(answer)
  
  
  
  
  /*  
    Working of Random Fucntion
    Warmup for Rock Papers Scissors Game
  */
  
  // let friends=['suhil','kiran','yash','manish']
  // const randomName = (friends) => {
  //   const number= Math.floor(Math.random()*4)
  //   console.log(friends[number])
  // }
  // randomName(friends)
  
  
  /*
    Basic Logic for R-P-S Game
    Make A weather Score Function App
    which reads the weather and gives score
  */
  
  const weather=['rainy','sunny','overcast']
  
  const weatherscore =(weather) => {
    
    const index = Math.floor(Math.random()*3)
    const value=weather[index]
    
    if(value=='rainy')
      console.log("Score is 1 as its ",value)
    else if(value=='sunny')
      console.log("Score is 0 as its ",value)
    else if(value=='overcast')
      console.log("Score is -1 as its ",value)
    
  }
  
  weatherscore(weather)
  
  
  
  
  
  
  
  
    