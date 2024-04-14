// Today We Discuss About the More Into Function and Then After (HOF) : High Order Function

// Question 1: Write A Arrow Function To Find The Factorial

let getFact = (num) => {
  if (num === 1 || num === 0) {
    return 1;
  }
  return num * getFact(num - 1);
};

// Calling THE FUNCTION
console.log("Factorial Of 5 is " + getFact(5));

let myArray = [2, 3, 4, 5, 6, 7, 8];
// myArray Element find the factorial of each element and add in the new Array

/*
        Here we learn about the map function 
        map function take function name in the argument 
    */

/*
When We Use the Map Function:
when we have a collection like array and we want to apply the same functionality on the array elemenent then we can use the map array
*/
let newArr=myArray.map(getFact);
console.log(newArr);




// Now we Learn about the filter Function:
// Filter take function in argumenent that function return only boolena value
// Filter e je function boolena vlaue return kartu hahse te argumenet ma leshe

let transaction=[2,-3,4,-5,6,-7,8];
// apre positive vara new array ma nakahavana che

let getPo=(n)=>{
    if(n>=0){
        return true;
    }
    else{
        return false;
    }

}

let posarr=transaction.filter(getPo);
console.log("Positive Array Is "+posarr);



// Now we Introduce the Reduce Function 

/*
let transaction=[2,-3,4,-5,6,-7,8];
    apre aa transcation no  absolute sum karvno che
*/

// absolute sum without a reduce function->reduce function take two argument
const absoluteSum=(a,b)=>{
    return Math.abs(a)+Math.abs(b);
}
// using this function find the absolute sum

// work on the transcation array
let totalTranAmount=0;
for(let i=0;i<transaction.length;i+=2){
    if(i+1==transaction.length){
        
    }
}


