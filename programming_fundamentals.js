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


