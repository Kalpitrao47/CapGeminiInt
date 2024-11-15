//Write a Javscript program to store name,phonenumber and marks of a student using objects.
const StudentDetails  = {
    name:"Vishal",
    phone:8928439573,
    marks:{
        english:35,
        hindi:45,
        marathi:85
    }
}

console.log(StudentDetails)


// Create a variable of type string and try to add a number to it.
let a = "10"
console.log(a);


// Use typeof Operator to find the datatype of the string in last question?
console.log(typeof(a))

// Create a const object in js.Can you change it to hold a number later?
const myObject = {
    name: "John",
    age: 30
  };
  console.log(myObject)

// This is allowed:
myObject.age = 31; // This will change the value of the age property
myObject.name = "Jane"; // This will change the value of the name property

console.log(myObject) 

 
//Try to add a New Key to the const object in Problem 3.
myObject.address = "123 Main St";

console.log(myObject);

