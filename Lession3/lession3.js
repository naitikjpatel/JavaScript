console.log("This is  Lession 3");
// Today our moto is learn about the function

// Write a javascript function that takes an integer as argument and returns its number of digits. Also write a main program that asks an integer from user (prompt) and pops up (alert) the number of digits using that function.

function countOfDigit(n){
    var cnt=0;
    while(n!=0){
        cnt++;
        n=Math.floor(n/10);
    }
    return cnt
}

let number=Number(prompt("Enter the Number"));

console.log("Total Count of Digit is"+countOfDigit(number));


// This is all about the array

let yourArray = [
    ["Grapes", "Kiwi", "Cherries", "Berries", "Banana"],
    ["Potato", "Tomato", "Cabbage"],
    ["Ahmedabad", "Surat", "Jamnagar"],
    [
        [1, 2, "Mango"],
        [3.5, 4, "Pineapple"]
    ]
];

console.log(yourArray[3][1][2]);




