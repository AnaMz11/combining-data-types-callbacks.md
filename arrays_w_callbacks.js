//_____________________________________________________________________
//   Section 3 Array Methods with Callbacks
//_____________________________________________________________________

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']


// Every
// Determine if every number is greater than or equal to 0

for (num of nums) {
  if (num >= 0){
      console.log(num);
  }
}

// determine if every word shorter than 8 characters

for (word of panagram) {
  if (word.length < 8){
   console.log(word)
  }
}

// Filter
// filter the array for numbers less than 4

let filterNum = nums.filter((num) => {
  if (num > 4 ){
      return num;
  }
})

console.log(filterNum)

// filter words that have an even length

const filterWord = panagram.filter((word) => {
  if (word.length % 2 === 0){
      return word;
  }
})

console.log(filterWord)


// Find
// Find the first value divisible by 5


const divFive = (number) => {
  return (number % 5 ===0)
}

nums.find(divFive)

// find the first word that is longer than 5 characters

const fiveChars = (word) =>{
  return (word.length > 4)//no word is longer than 4 characters the longest is 5 so I used number 4 to get first word with 5 charcaters
}

panagram.find(fiveChars)

// Find Index
// find the index of the first number that is divisible by 3


const divByThree = (nums) => {
  return (nums % 3 === 0)
}

nums.findIndex(divByThree)// #3 at index 2

// find the index of the first word that is less than 2 characters long

const twoChar = (word) => {
  return (word.length < 2)
 }
 
 panagram.findIndex(twoChar)

//  For Each
// console.log each value of the nums array multiplied by 3


nums.forEach((num)=> {
  console.log(num * 3)
})

// console.log each word with an exclamation point at the end of it

panagram.forEach((word) => {
  console.log(word + "!")
})

// Map
// make a new array of each number multiplied by 100

const newArr = nums.map(x => x * 100)
console.log(newArr)


// make a new array of all the words in all uppercase
const upperCase = (word) => {
  return word.toUpperCase()
}

panagram.map(upperCase)

// Some
// Find out if some numbers are divisible by 7

const divSeven = (num) => {
  return (num % 7 === 0)
}

nums.some(divSeven)

// Find out if some words have the letter a in them

const letterAwords = panagram.some(word => {
  return word.includes('')
})
console.log(letterAwords)