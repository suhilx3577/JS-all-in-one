/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

const billip=document.getElementById('billTotalInput')
const tipip=document.getElementById('tipInput')
const numpeople=document.getElementById('numberOfPeople')
const pptotal=document.getElementById('perPersonTotal')



// ** Calculate the total bill per person **
const calculateBill = () => {
  
  // get bill from user input & convert it into a number
  var billvalue= Number(billip.value)
  // console.log('bill value is :',billvalue)

  
  // get the tip from user & convert it into a percentage (divide by 100)
  var tipval=Number(tipip.value)
  // console.log('tip percent is :',tipval)
  
  
  // get the total tip amount
  var tipamt= (tipval/100)*billvalue
  // console.log('tip value is :',tipamt)


  // calculate the total (tip amount + bill)
  var totalamt=tipamt+billvalue
  // console.log('total value is :',totalamt)
  

  // calculate the per person total (total divided by number of people)
  var totalppl=Number(numpeople.innerText)
  // console.log('totalpeople value is :',totalppl)

  
  var perpersonamt= totalamt/totalppl
  perpersonamt=perpersonamt.toFixed(2)
  // console.log('total per person value is :',perpersonamt)

  
  // update the perPersonTotal on DOM & show it to user
  pptotal.innerText=`$${perpersonamt.toLocaleString('en-US')}`

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people

  var numppl=Number(numpeople.innerText)
  numppl+=1

  // update the DOM with the new number of people
  numpeople.innerText=numppl

  // calculate the bill based on the new number of people
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
    var numppl=Number(numpeople.innerText)

    if(numppl<=1){
      return
    }
  
  // decrement the amount of people
    numppl-=1

  // update the DOM with the new number of people
    numpeople.innerText=numppl


  // calculate the bill based on the new number of people
    calculateBill()

}