 // here we learn about the difference between the let and var keyword


//  let a=10;
//  var b=20;

 {
    // this is simple block
    // console.log(b);
    // console.log(a);
    // let a=100;  error let have global scope
    // console.log(a);
    // var b=200;
    // console.log(b);
 }
    //here we declare b using the var then b is affected outside block also
    // console.log(a);
    // console.log(b); //ama b ni value change thai jay che


    // let d=24;
    // {
    //     let d=34;
    //     console.log(d);
    // }
    // console.log(d);

    // var thi declare karel ne block ni bahar access kari shakay che
    
    // let thi declare karyu hoy tene  block ni bahar access kari shakatu nathi

    /*
    That means :
    1) Var have a global decalration

    */

    // typeof operator
    // let a = 5, b = "5", c = true, d = 3.5, e;
    // console.log(typeof(a));
    // console.log(typeof(d));
    // console.log(typeof(b));
    // console.log(typeof(c));
    // console.log(typeof(e));


    // comparistion operator

    // let a=5 ,b="5";

    // == ->loose Comparision ->here it check only value
    // console.log(a==b);//true
    //=== ->Tight Comparision ->here it check value and data type also
    // console.log(a===b);//false

    // console.log(a!=b);//false
    // console.log(a!==b);//true




    // Taking input from the user
    // prompt take input as a string
    // var x=prompt("Enter the Number");
    // console.log("Value of x is "+ x); 
    // console.log("Type of x is "+typeof(x));


    //type Casting
    // var y=Number(prompt("Enter the value of y"));
    // console.log("value of y is "+y);
    // console.log("Type of y is "+typeof(y));


    // now we learn about the Ternary Operator
    // var marks=Number(prompt("Enter the marks"));
    // var ans=marks>75 ?"Passs":"Fail";
    // console.log("Result is "+ans);
    // alert("Your are "+ans);
    

    //now we learn about the String

    var a="I don't have\tenough time.";
    var b= 'I don\'t have enough time.';

    //Escape Sequence Character :\n ,\t

    console.log("Length "+a.length);
    // console.log("uppercase "+a.toUpperCase);

    //Slicing

    // slicing use x axis
    // first include and last exclude
    console.log(a.slice(3,7));
    console.log(a.slice(-5,-1));

    //in substing we give the stating and ending index number
    console.log(a.substring(3,8));

    //here in the substr we give the stating point and total char required
    console.log(a.substr(2,20));

    console.log(a.indexOf('g'));
    console.log(a.lastIndexOf('g'));
    console.log(b.length);


    console.log(a.charAt(11));
    // charCodeAt return the universal code or ascii code of that character
    console.log(a.charCodeAt(9));


    a=a.replace("don't","do")
    console.log(a);

    let c="                             happbirthday    ";
    console.log(c.length);
    c=c.trim();
    console.log(c.length);


    let date=prompt("Enter the data in (dd)");
    let month=prompt("Enter month(mm)");
    let year="2000";

    let dob=date.padStart(2,0)+ "/" +month.padStart(2,0)+"/"+year;
    console.log(dob);



