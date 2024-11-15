What is a variable?
A variable is a container that stores a value.

let a = 7;                       ----------->Declaring Variables
(a is the identifier and =  is the assignment operator)


Rules for chossing variable names:-
1- letters,digits,underscores & $ sign allowed.
2- Must Begin with a $, _ or a letter.
3- Javascript reserved words cannot be used as a variable name.
4- Harry and harry are different varibales (case sensitive).


var vs let in javascript:-
1- var is global scope while let and const are block scope.
2- var can be updated & redeclared within its scope.
3- let can be updated but not re-declared.
4- const can neither be updated nor be re-declared.
5- var varibales are initialized with undefined whereas let and const are not initialized.
6- const must be initialized during declaration unlike let and var.


Primitive Data Types & Objects
Primitive data types are a set of basic data types in javascript.
Object is non primitive data type in javscript.

These are the 7 primitive datatype in javscript.
1- Null                  5-Undefined               
2- Number                6- Boolean    
3- String                7- BigInt
4- Symbol 


Object :-

const item = {
    name: "LED Bulb",
    price: "150"
}

