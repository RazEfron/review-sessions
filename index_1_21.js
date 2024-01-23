// ---------------- Instructions -------------------
// 1. Copy the content of this file to a local file in your local review git repo
// 2. Solve each function
// 3. Call the function and console log the result with 2 different inputs
// 4. add/commit and push after each function

// Given an array of numbers and a given target. return the target if it's in the array or undefined if it's not

function findNumber(arr, target) {
  //   for (let i = 0; i < arr.length; i++) {
  //     let currNum = arr[i];

  //     if (currNum === target) {
  //       return currNum;
  //     }
  //   }
  //   return undefined;
  return arr.find((num) => num === target);
}

// console.log(findNumber([3, 12, 9, 6, 17, 22], 12));
// console.log(findNumber([3, 12, 9, 6, 17, 22], 177));

// Given an array of numbers, return the first number that's bigger than 14 or undefined if no number is bigger than 14

function findBiggerNumber(arr, numToFind) {
  //   for (let num of arr) {
  //     if (num > numToFind) {
  //       return num;
  //     }
  //   }
  //   return undefined;
  return arr.find((num) => num > 14);
}

// console.log(findBiggerNumber([15, 13, 16], 14));
// console.log(findBiggerNumber([9, 6, 3, 1], 14));
// console.log(findBiggerNumber([1, 2, 3, 4, 14, 15], 14));

// Given an array of strings, return the first string with length greater than 4 or undefined if no such string is found

function stringLengthGreaterThanFour(arr) {
  //   return arr.find((str) => str.length > 4);
  for (let el of arr) {
    if (el.length > 4) {
      return el;
    }
  }
  //   return undefined
}

// console.log(stringLengthGreaterThanFour(["abc", "def", "ghijj", "klmnop"])); // "ghijj"
// console.log(stringLengthGreaterThanFour(["abc", "def", "ghi", "kop"])); // "ghij"
// console.log(stringLengthGreaterThanFour([])); // "ghij"

// Given an array of Objects and a target id return the first object that matches the id or undefined if no such object is found
// Expected Structure of a SINGLE object -

function findFirstObject(arr, target) {
  for (let obj of arr) {
    if (obj.id === target) {
      return obj;
    }
  }
  //   return undefined
}

const arrayOfObjects = [
  { id: "Y42C_a", name: "Robert", occupation: "Chef", eyeColor: "green" },
  { id: "X31D_b", name: "Alice", occupation: "Engineer", eyeColor: "blue" },
  { id: "Z12E_c", name: "John", occupation: "Teacher", eyeColor: "brown" },
  { id: "W23F_d", name: "Emily", occupation: "Artist", eyeColor: "hazel" },
  { id: "V34G_e", name: "Michael", occupation: "Doctor", eyeColor: "gray" },
  { id: "U45H_f", name: "Sophia", occupation: "Scientist", eyeColor: "amber" },
  { id: "T56I_g", name: "Daniel", occupation: "Writer", eyeColor: "blue" },
  { id: "S67J_h", name: "Megan", occupation: "Athlete", eyeColor: "green" },
  { id: "R78K_i", name: "Ryan", occupation: "Musician", eyeColor: "brown" },
  { id: "Q89L_j", name: "Olivia", occupation: "Lawyer", eyeColor: "green" },
];

console.log(findFirstObject(arrayOfObjects, "U45H_f"));
console.log(findFirstObject(arrayOfObjects, "id"));

/*
{
 id: "Y42C_a",
 name: "Robert",
 occupation: "Chef",
 eyeColor: "green"
}
*/

// Given an array of objects and a target id return a new object with only the name. The structure for a single object in the array would be as the one above. The returned object would look like this -

/*
{
 name: "Robert"
}
*/
