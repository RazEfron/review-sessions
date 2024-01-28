// Acc Pattern

/*
- It accumulates in a for loop
- It accumulates everything in an array to a single value
- Native array methods use the accumulator pattern
- Steps to use the acc pattern
    1. initialize a variable to accumulate into, with a default value
        3. Create a for loop and in the for loop - Accumulate
    2. At the end of the function, return the variable
*/

// Find the max value in an array -

function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([1, 3, 2])); // 3

// Iterative Native Array Methods

// 1. .filter - filters out what you specify to it in the return value of the callback function and returns a new array.
// 2. .every - returns a boolean based on the specified condition if all the elements return true
// 3. .some - returns a boolean based on the specified condition if at least one element returns true
// 4. .find - returns the first element that returns true from a specified condition
// 5. .map - returns a new array where each element is transformed based on the return value of the callback
// 6. .reduce - Can do multiple functions. Can emulate all the other native array methods

// For each of the following exercises,
// 1. write them using a for loop first
// 2. comment out the accumulator pattern solution and write it using a native array method
// 3. call the function and console.log the result

// 1. Write a function that takes in an array of strings and returns a new array where each string is replaced by it's length
// ["hello", "world"] => [5, 5]

function getLengths(arr) {
  // const lengths = []; // initialize accumulator

  // for (let str of arr) { // loop
  //     lengths.push(str.length); // transform the accumulator
  // }

  // return lengths; // return the accumulator
  const stringLengths = arr.map((el) => el.length);
  return stringLengths;
}

// console.log(getLengths(["a", "bc", "def"]));

// 2. Write a function that takes an array of strings and returns an array of strings longer than 5 characters (spaces count)

function replaceWithLength(arr) {
  //   const newArr = [];
  //   for (let str of arr) {
  //       if (str.length > 5) {
  //           newArr.push(str);
  //       }
  //   }
  //   return newArr;
  return arr.filter((str) => str.length > 5);
}

// ["helllllo", "hi", "sup", "what's up"].filter(str => str.length > 5);

console.log(replaceWithLength(["helllllo", "hi", "sup", "what's up"])); // ["helllllo","what's up"]
// 3. Write a function that takes an array of strings, and returns a new array of the lengths of strings longer than 5 characters

function transformAndFilterByLength(arr) {
  //   const longerThanFive = []; // initialize acc
  //   for (const str of arr) {
  //     if (str.length > 5) {
  //       longerThanFive.push(str.length);
  //     }
  //   }
  //   return longerThanFive;
  // return arr.reduce((acc, str) => {
  //     if (str.length > 5) {
  //         acc.push(str.length);
  //     }
  //     return acc;
  // }, [])
  // return arr.filter((str) => str.length > 5).map((str) => str.length);
  // return arr.map((str) => str.length).filter((num) => num > 5);
}

["helllllo", "hi", "sup", "what's up"].map;

// function myMap(arr, callback) {
//   const newArr = [];

//   for (let el of arr) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// }

// function myFilter(arr, callback) {
//   const newArr = [];

//   for (let el of arr) {
//     if (callback(el)) {
//       newArr.push(el);
//     }
//   }

//   return newArr;
// }

console.log(transformAndFilterByLength(["helllllo", "hi", "sup", "what's up"]));

// 4. Write a function that takes an array of numbers and returns the sum of all even numbers

// 5. Write a function that takes an array of numbers and returns the min num

// 6. Write a function that takes in a string and returns the character that appears the most times (only letters count)
