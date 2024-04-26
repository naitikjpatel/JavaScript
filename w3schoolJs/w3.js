console.log("TODAY TOPIC IS Function");

// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// This is the function defination and declration
function print(a,b,c){
    // This is formal parameter
    console.log("a is "+a);
    console.log("b is "+b);
    console.log("c is "+c);
}

// Ths is function calling
// This is actual parameter
print(2,3,4);

/*
Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)


Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller"
*/


let x = myFunction(4, 3);
console.log(" x value is "+x);
function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}





// Now we discuss about the javaScript Object
// Object have Key:Value Pair

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


// How to Access The object:
// Using 2 way we can the access the object properties:
// 1.objectName.propertyName
// 2.objectName["propertyName"]



console.log(person.fullName());
console.log(person.fullName);



// Do Not Declare Strings, Numbers, and Booleans as Objects!
// When a JavaScript variable is declared with the keyword "new", the variable is created as an object:
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object