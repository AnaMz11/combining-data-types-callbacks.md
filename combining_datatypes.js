

//_____________________________________________________________________
//      SECTION 2 COMBINING OBJECTS, ARRAYS, AND FUNCTIONS
//_____________________________________________________________________

// Create an object, called crayonBox, that has a property that is an array. The array should have the names of some crayons. Log one of the elements of that array.

const crayonBox = ["orange","black","blue","yellow"]

console.log(crayonBox[2]);

//Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc. Log one of the properties of that inner object

const bottle = {name: "cap", material: "plastic", color: "red"}

console.log(bottle.material);

//Create an array called receipt that has at least one object in it. The inner objects should be items that have a name and a price. Log one of the properties of that inner object.


const receipt =[ 
  {item: "water", price: "$5"},
  {item: "milk", price: "$2.50"},
  {item: "fruit", price: "$6"},
]

console.log(receipt[1].item)

//Create an array called apartmentBuilding that has an array as one of its elements, the inner array should be the names of the tenants. Log one of the elements of the inner array.

const apartmentBuilding = [
  {tenants:["Lisa", "Rob", "Lucy"]}
];

console.log(apartmentBuilding[0].tenants[2])


// //Combine objects, arrays, and functions more than one level deep

// Create a function knit that returns an object that has the following kinds of properties item: scarf, size : 6ft etc. Log a value of that object (hint: call the function and then call a property on the return value).

const knit = () => {
  return {
      item: "scarf", 
      size: "6ft"}
}

console.log(knit().item)

// Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). Log one of the elements of that array.

const crayonSelector = () => {
  return {
      crayonBox : ["orange","black","blue","yellow"]
  }
} 

console.log(crayonSelector().crayonBox[0])

// // Create a function powerButton that returns a function called options - options should console.log a simple message like select a song. Call that inner function

const powerButton = () => {
  return {
   options: () => {
   console.log("hey");
   }
  }
}

powerButton().options();

// VENDING MACHINE
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack


const vendingMachine = {
  snacks : [
      {name:"snickers", price:"$1"}, {name:"skittles", price: "$2"},{name:"M&Ms", price: "$3"},
], 
  vend:(choice) => {
      return vendingMachine.snacks[choice].name;//change to price will give price
  }
}


console.log(vendingMachine.vend(1));//item


//_____________________________________________________________________
//      CALLBACKS
//_____________________________________________________________________

// Make a function add that takes two arguments (numbers) and sums them together
const sum = (num1, num2) => {
  return num1 + num2
}

sum(20,5)

// Make a function subtract that takes two arguments (numbers) and subtracts them

const subtract = (num1, num2) => {
  return num1 - num2
}

subtract(10,2)
// Make a function multiply that takes two arguments and multiplies them
const multiply = (num1, num2) => {
  return num1 * num2
}

multiply(2,2)

// Make a function divide that takes two arguments and divides them

const divide = (num1, num2) => {
  return num1 / num2
}

divide(6,2)
// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).

const calcualte = (num1,num2, operates) => {
  return operates(num1,num2);
}

// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// Call calculate 4 times, each time using one of the operation functions you wrote


console.log(calcualte(2,2,sum))
console.log(calcualte(8,1,subtract))
console.log(calcualte(4,4,multiply))
console.log(calcualte(10,2,divide))

// Clean up this code, so that it works and has function definitions in the correct place

// bar();
const bar = () => {
    console.log('bar here');
}
// foo();

const foo = () => {
    console.log('foo here');
}

bar () 
foo () //cant call a function before it is declared

//Error reading
foo();

const foo ()=>{
    console.log('hi');
}

// /home/runner/WORKING/index.js:176
// const foo ()=>{
//       ^^^

// SyntaxError: Missing initializer in const declaration
//error is saying that the funcion was initialized since it was called before the function was declared