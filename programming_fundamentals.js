//Common programming principles
// DRY - Dont repeat yourself - if its too long it probably go into a funtion

// KISS - keep it simple stupid - don't make it harder than it is!

// Avoid creating a YAGNI - You Arent GOing to Need It - don't write code that you won't need.

// Do the simplest thing that could possibly work - don't make your code complicated start off small then add if needed.

// Don't make me think - code should be readable and easy to understand.

// Write code for the maintainer - write code with comments for users to understand

// Single responsibility principle - a component of code (class or function) should have responsibility over a single part of that programs functionality

// Avoid premature optimization - if it aint broken dont fix it -

// Separation of concerns - a design principle for separating a computer program into distinct sections such that each section addresses a separate concern. Figuring out a problem you want to solve and then build code for each.

//=====================================================================
// Commenting Code

// const f = l => {
//   let es = 0, p = 0, c = 1, n = 0
//   while (c <= l) {
//     n = c + p;
//     [c, p] = [n, c]
//     es += (c % 2 === 0) ? c : 0
//   }
//   return es
// }

// console.log(f(55))

// DESCRIPTION
// f delclated as a variable = 
// l is the function 
// let es p c and n are variables given a value that may change
// while loop while (c is less than equal to l) go inside the loop and execute the fucntion { n = c + p } n = 1.
// [1,0] = [0,1]
// if c is divisible by 2 (even) add them

// const f2 = (limit) => {
//   let evenSum = 0;
//   let previous = 0;
//   let current = 1;
//   while (current <= limit) {
//     let next = current + previous;
//     previous = current;
//     current = next;
//     if (current % 2 === 0) { //if current number is divisible by 2 + we add them 
//       evenSum += current; evenSum + 
//     }
//   }
//   return evenSum;
// }

// console.log(f2(55))

// loop
// next = Current + previous
// ? = 1 + 0
// 2 = 1 + 1
// 3 = 2 + 1
// 5  = 3 + 2
// 8  = 5 + 3
// 13 = 8 + 5
// 21 = 13 + 8
// 34 = 21 + 13
// 55  = 34 + 21
// if current number is divisible by 2 + we add them

// answer with comments

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?

//this is similar to the fibonacci sequence - the varibale could have been named differenty.
//instead of using in F1 single letters p,c,n and in F2 current previous next, they could be more specifit such as "evenNum" "index or Array"

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?

// f2 because it is written more simple and could work off it more easily than the first fucntion.
// the if statment on F2 is a lot eaiser to understand than the first function.

//Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?

// yes the semicolons are necessary



