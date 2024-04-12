// Today Our Topic Is Object:

// What is Object: Object have Property And Valeu pair 
// In Other word we can say object have colllection of the Key and Value Pair


let result={"Physics":92 ,"c":95,"JavaScript":100};
// let bollywoodHero = {
//     cap : "Hat",
//     shirt : "Yellow",
//     "neck tie" : "Red",
//     'trousers' : "Green",
//     "2shoes" : "White",
//     brain : false
    
// }

// console.log(result.Physics);
// console.log(result["Physics"]);
// // console.log(result[Physics]); this give the error

// console.log(bollywoodHero.cap);
// console.log(bollywoodHero.trousers);
// // console.log(bollywoodHero[0]); object ma index na hoy

// console.log(bollywoodHero["neck tie"]);
// console.log(bollywoodHero["cap"]);


// Nested object
let myHome = {
    house : {
        "drawing room" : "TV",
        "kitchen" : "wife",
        "upper floor" : {
            "living room" : {
                cupboard : {
                    wardrobe : "Clothes",
                    locker : {
                        "outer locker" : "ancient coins",
                        "safe box" : "Empty"
                    }
                },
                furniture : "table"
            },
            "bedroom" : {
                "wall" : "mirror",
                "bed" : "messy"
            }
        }
    },
    "compound" : {
        "garden" : {
            "trees" : 2,
            "other plants" : 10
        }
    }
}

console.log(myHome.house["upper floor"]["living room"].cupboard.locker["outer locker"]);
console.log(myHome["house"]["upper floor"]["living room"]["cupboard"]["locker"]["outer locker"]);



// Complex Object
myHome = {
    house : {
        "drawing room" : "TV",
        "kitchen" : "wife",
        "upper floor" : {
            "living room" : ["table", {
                cupboard : {
                    wardrobe : ["Clothes", "Photo Albums", "Cosmetics", "Perfume"],
                    locker : {
                        "outer locker" : "ancient coins",
                        "safe box" : "Empty"
                    }
                },                    
            }, "refridgerator", "show-case"],
            "bedroom" : {
                "wall" : "mirror",
                "bed" : "messy"
            }
        }
    },
    "compound" : {
        "garden" : {
            "trees" : 2,
            "other plants" : 10
        }
    }
}

//i want to access the perfum
console.log(myHome.house["upper floor"]["living room"][1].cupboard.wardrobe[3]);


result["c"]=90;
console.log(result);
// delete form object
delete result.c;
console.log(result);







  // Write a code to access "rose" from the given array:

let myGarden = [
    {
        type: "potted plants",
        plants: [
            "tulip",
            "jasmine",
            "rose"
        ]
    },
    {
        type: "trees",
        plants: [
            "neem",
            "mango",
        ]
    }
]


console.log(myGarden[0].plants[2]);


// Write a code to show the number of formats in which the title 'this girl' is available
    
let myCollections = [
    {
        "artist":"2 unlimited",
        "title":"no limit",
        "release_year":1991,
        "formats":[
            "cassate",
            "cd",
            "mp3",
            "youtube"
        ],
        "genre":"rap"
    },
    {
        "artist":"Kungs",
        "title":"this girl",
        "release_year":2016,
        "formats":[
            "mp3",
            "youtube"
        ],
        "genre":"remix"
    }
]

//formats in length find karvani che
console.log(myCollections[1].formats.length);


let bollywoodHero = {
    cap : "Hat",
    shirt : "Yellow",
    "neck tie" : "Red",
    'trousers' : "Green",
    "2shoes" : "White",
    brain : false
    
}
// console.log(bollywoodHero["tail"]);

// hasOwnProperty it help to check the given key is Present or not in the Object:
// if key is present in the Object Then it return the true otherwise it return the false:
console.log(bollywoodHero.hasOwnProperty("tail"));
console.log(bollywoodHero.hasOwnProperty("brain"));





 // Write a function that takes two arguments- obj & property and logs on the console the value of that property if it exists in the object otherwise, logs the message 'Sorry, this object does not own the said property'
   
 function propertyChecker(obj,property){
    if(obj.hasOwnProperty(property)){
        console.log(obj[property]);
    }
    else{
        console.log("Property doesn't exist in the object");
    }
   }

   let bollywoodHero1 = {
        cap : "Hat",
        shirt : "Yellow",
        "neck tie" : "Red",
        'trousers' : "Green",
        "2shoes" : "White"
    };
    propertyChecker(bollywoodHero1, "shirt");    // This should log: "Yellow" in the console
    propertyChecker(bollywoodHero1, "brain");    // This should log: 'Sorry, this object does not own the said property'



    // Make the Simple Calculator with add ,sub,mul,div functionality:

    var n1=10,n2=2;
    var choice=1;
    switch (choice) {
        case 1:
            console.log(n1+n2);
            break;
        case 2:
            console.log(n1-n2);
            break;
        case 3:
            console.log(n1*n2);
            break;
        case 4:
            console.log(n1/n2);
            break;
        default:
            console.log("Enter the valid Choice");
            break;
    }



    // Pro People Approch For the Making The Simple Calculator:

// let a=Number(prompt("Enter the Value Of Num1"));
// let b=Number(prompt("Enter the Value Of Num2"));
// let operator=prompt("+ , - ,/ ,*");

// let result1={
//     "+":a+b,
//     "-":a-b,
//     "*":a*b,
//     "/":a/b 
// }

// console.log("Type Of Operator:"+typeof(operator));
// alert("Answer is "+result1.operator);




let a =Number(prompt("Enter the First Number"));
let b=Number(prompt("Enter the Second number"));

let operation=prompt("+ ,- ,* ,/");
let result1={
    "+":a+b,
    "-":a-b,
    "*":a*b,
    '/':a/b
}
console.log("Result is :"+result1[operation]);



 // Coding Challenge
 var collection = {
    "2548" : {
        "album" : "Slippery When Wet",
        "artist" : "Bon Jovi",
        "tracks" : [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468" : {
        "album" : "1999",
        "artist" : "Prince",
        "tracks" : [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245" : {
        "artist" : "Robert Palmer",
        "tracks" : [ ]
    },
    "5439" : {
        "album" : "ABBA Gold"
    }
}

function updateRecords(id, prop, value){
    // Your code goes here
    
    return collection;
}

// Write a function (updateRecords), where user can pass id (eg. "2548"), property (eg. "artist") and value (eg. "MJ"), that updates the value of the property of the given id in the collection and return the updated collection. If user passes the empty string as value, the function should completely delete that property. If the property is an array then the function should just add the value at the end of that property's array.
/*
Test Cases:
updateRecords(5439, "album", "The Visitors");
updateRecords(2548, "album", "");
updateRecords(5439, "artist", "ABBA");
updateRecords(2468, "tracks", "Lady Cab Driver");
*/
collection = updateRecords()
console.log(collection);



















