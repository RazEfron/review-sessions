// 1. Write a function that takes in an array and returns an object where each element in the array is a key, and the values are the number of times each element appears in the array -


// Questions to ask ourselves while reading a prompt
// 1. What are my inputs? 
// 2. What is my output?
// 3. What are the steps I need to take to get from input to output ? --> pseudo code

// YOUR CODE HERE

function countElements(arr) {
  // create an object to count the elements
  const obj = {};
  // create a for loop to access each element
  for (let key of arr) {
    debugger
    // check if the current element is already in the object 
    if (obj[key]) {
      // if it is, increment it's value by one
      obj[key]++; // obj[key] = obj[key] + 1
    } else {
      obj[key] = 1;
      // if it isn't set/assign it's value in the object to 1
    }
    console.log("key: ", key)
    console.log("object: ", obj)
    console.log("count: ", obj[key])
  }
  // return the object after the loop
  return obj;
}

// Example:
console.log(countElements(["apple", "orange", "apple", "banana", "apple", "orange"]))
// { apple: 3, orange: 2, banana: 1}

// ------------------------------------------------------------------------

// 2. Write a function that takes an object and a property name (key), and returns the value of the property. If the property doesn't exist in the object return an error message

// 1. input - object, key
// 2. output/return value - the value or error message if no value


// YOUR CODE HERE

function returnPropertyFromObject(obj, key) {
  // check if the property exists in the object by passing it the key
  if (obj[key]) {
    // if the property exists we return the value
    return obj[key];
  } else {
    // if it doesn't exist we return an error message
    return "ERRRORRRRRRRR";
  }
  // return obj[key] ? obj[key] : "ERRORRRRRRRRRRRRR";
  // return obj[key] || "ERRORRRRR" // short circuting. Return the left side if it's true/truthy, otherwise return the right side
}

console.log(returnPropertyFromObject({}, "name"))
console.log(returnPropertyFromObject({ name: "Maayan" }, "name"))

// ------------------------------------------------------------------------

// 3. Given a person object, update their street to the new given street. The person object will have these properties -

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345"
  }
};

// YOUR CODE HERE

person.address.street = "New Street"
console.log(person)
// ------------------------------------------------------------------------

// 4. Given the following object, preform the following tasks -


const companyOrganizationalStructure = {
  companyName: "TechCorp",
  CEO: {
    name: "John CEO",
    office: {
      location: "Floor 10, Building A",
      employees: {
        executiveAssistant: {
          name: "Alice Executive",
          desk: "A101",
        },
      },
    },
  },
  departments: {
    development: {
      head: {
        name: "Bob Head",
        office: {
          location: "Floor 8, Building B",
          employees: {
            softwareEngineer1: {
              name: "Charlie Engineer",
              desk: "B801",
            },
            softwareEngineer2: {
              name: "David Coder",
              desk: "B802",  
            },
          },
        },
      },
    },
    marketing: {
      head: {
        name: "Eva Marketer",
        office: {
          location: "Floor 6, Building C",
          employees: {
            marketingSpecialist1: {
              name: "Frank Specialist",
              desk: "C601",
            },
            marketingSpecialist2: {
              name: "Grace Promoter",
              desk: "C602",
            },
          },
        },
      },
    },
  },
};
//   a. Log the desk of the second software engineer in the development department
//   b. Log the location of the head of the marketing department
//   c. Log the name of the CEO's executive assistant
//   d. Add yourself as a third software engineer to the development office
//   e. Update the name of the head of marketing to "Johann Marketer"

// YOUR CODE HERE

console.log(companyOrganizationalStructure.departments.development.head.office.employees.softwareEngineer2.desk)
console.log(companyOrganizationalStructure.departments.marketing.head.office.location)
// ------------------------------------------------------------------------

// 5. Given the following variables, create a new object. the key variable should be the key and the value variable should be it's corresponding value. You have to use the variables!

const key = "name";
const value = "Roberto Robertson";

// 6. Write a function that takes an object as it's only parameter and logs each property to the console. The function ONLY LOGS

// YOUR CODE HERE

// ------------------------------------------------------------------------

// 7. Write a function that takes two objects and checks if they have the same values. HINT: use the (for.. in..) loop

// YOUR CODE HERE

// ------------------------------------------------------------------------
