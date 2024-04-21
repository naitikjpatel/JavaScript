
/*
JavaScript can "display" data in different ways:

Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().



var	Declares a variable
let	Declares a block variable
const	Declares a block constant
if	Marks a block of statements to be executed on a condition
switch	Marks a block of statements to be executed in different cases
for	Marks a block of statements to be executed in a loop
function	Declares a function
return	Exits a function
try	Implements error handling to a block of statements


Fixed values are called Literals.

Variable values are called Variables.


Expression : An expression is a combination of values, variables, and operators, which computes to a value

============================

JavaScript Identifiers / Names
Identifiers are JavaScript names.

Identifiers are used to name variables and keywords, and functions.

The rules for legal names are the same in most programming languages.

A JavaScript name must begin with:

A letter (A-Z or a-z)
A dollar sign ($)
Or an underscore (_)
Subsequent characters may be letters, digits, underscores, or dollar signs.




What is the use of the comment:
->comment is use for the prevent exrac code :
->comment is helpful in debug the code


*/



/*
Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const

It is considered good programming practice to always declare varible before use


====
When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers

*/

/*
If you re-declare a JavaScript variable declared with var, it will not lose its value.

The variable carName will still have the value "Volvo" after the execution of these statements:
*/
var a="nj";
console.log(a);
var a;
console.log(a);

var x = "5" + 2 + 3;
//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.



// About Let Keyowrd Of the Javascript
// ======================================
// Variables declared with let have Block Scope
// Variables declared with let must be Declared before use
// Variables declared with let cannot be Redeclared in the same scope

// Variables declared inside a { } block cannot be accessed from outside the block:

{
  let x = 2;
}
// x can NOT be used here


// Global Scope

// Variables declared with the var always have Global Scope.
// Variables declared with the var keyword can NOT have block scope:
// Variables declared with varinside a { } block can be accessed from outside the block:
{
  var x = 2;
}
// x CAN be used here



// Redecalrring:
// with var Redeclaring is allowed anywhere in a program:
// With let, redeclaring a variable in the same block is NOT allowed
// Redeclaring a variable using the var keyword can impose problems.
// Redeclaring a variable inside a block will also redeclare the variable outside the block:


var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2


// Hoisting:
// This is for the var keyword:
// Variables defined with var are hoisted to the top and can be initialized at any time.
// Meaning: You can use the variable before it is declared:
carName = "Volvo";
var carName;


// This is For the Let Keyword:
// Variables defined with let are also hoisted to the top of the block, but not initialized.
// Meaning: Using a let variable before it is declared will result in a ReferenceError:

// carname1="mercedise";
// let carName1="volvo";
// This raise the error



// Now we discuss about the const Keyword:

// The const keyword was introduced in ES6 (2015)
// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

// When to use JavaScript const?
// Always declare a variable with const when you know that the value should not be changed.

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp


// :

// Constant Objects and Arrays
// The keyword const is a little misleading.

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object
// Constant Arrays
// You can change the elements of a constant array: