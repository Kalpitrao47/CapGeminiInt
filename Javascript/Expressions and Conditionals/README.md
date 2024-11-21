(Arithmetic Operators)
+   - Addition
-   - Subtraction
*   - Multiplication
**  - Exponention
/   - Division
%   - Modulus
++  - Increment
--  - Decrement




(Assignment Operators)
=    - x=y
+=   - x=x+y
-=   - x=x-y
*=   - x=x*y
/=   - x=x/y
%=   - x=x%y
**=  - x=x**y




(Comparison Operator)
==   - equal to
!=   -not equal
===  - equal value and type
!==  - not equal to value or not equal to type
>    - Greater than  
<    - Less than
>=   - Greater than Equal to
<=   - Less Than Equal to
?    - Ternary Operator




(Logical Operator)
&&   - Logical and 
||   - Logical or
!    - Logical not




(Conditional Statements)
if statement
if else statement
if.... else if....else statement



1)if statement
if (condition) { 
    //execute this code
}


2)if-else statement
The if statement can have optional else clause
The syntax looks something like this.
if(consition){
    //Block of code if condition is true
}
else{
    //block of code if the condition is false

}


3)if- elseif statement
Sometimes we might want to keep rechecking a set of conditions one by one until one matches.
We use if- else if for achieving this.

Syntax:
if(age>0){
    log("valid age")
}
else if (age>10 && age<15){
    log("but you are a kid")
}
else if (age>18){
    log("not a kid")
}
else{
    log("Invalid age")
}