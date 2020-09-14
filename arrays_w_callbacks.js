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