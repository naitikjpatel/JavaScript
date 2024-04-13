// Today Our Topic Is Array And Function:
let myArray = ["Puri", "Butter Roti", "Plain Roti", "Butter Naan", "Cheese Naan", "Lachha Paratha", "Chur chur Naan", "Paratha"]


// Now We use The Math Random Function and We Printing The random item from the Array
for (let index = 0; index < 5; index++) {
    let x=Math.floor(Math.random()*myArray.length);
    // Returns a random integer from 0 to (array length-1):
    console.log(Math.random()*myArray.length);
    console.log(x);
    console.log(myArray[x]);
    
}


// exapmle of 2d array
// Write a code for the 2d array

function scantwo(dim){
    let arr=[];
    for(let i=0;i<dim;i++){
        let temp=[];
        for(let j=0;j<dim;j++){
            var number=Number(prompt("Enter the Number "));
            temp.push(number);
        }
        arr.push(temp);
    }
    return arr;
}

// let dim=Number(prompt("Enter the Dimenstion Of the Array"));
// let finalArr=scantwo(dim);

// console.log(finalArr);



// Now we Learn About the Arrow Function:
// This Function Declaration and Defination
function printHello(){
    console.log("Hello World");
}


// This is the Function Calling
printHello();




// Arrow Function Syntax:
printHello =()=>{
    console.log("This is the Arrow Funtion ");

}
// arrowFunction Calling
printHello();




// Find the Average Of the Two Number Using The Arrow Function
average=(a,b=30)=>{
    console.log("Average Is "+(a+b)/2);
}
// Calling Function
average(10,300);




    // this is the homework we need to complete this all question for the improve the logic building

       // HW: 
    /*
    1. write a code that asks 'key', 'msg' and 'option'(cipher/decipher) and cipher/decipher the 'msg' accordingly using an arrow function
    2. options = ["rock", "paper", "scissors"]
    // create a simulation in which user & computer will play 20 turns. In each turn you need to take an input from user (either rock, paper or scissors) and create a random guess by computer. If computer wins, increase the score of computer by 1 and if user wins, do the same with user's score. After 20 turns, display the final score & declare the winner. Do this using an arrow function with name 'gameLoop' that takes input from user, generates option of computer and returns the winner (either 'user' or 'computer').
    */