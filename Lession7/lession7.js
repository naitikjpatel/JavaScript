
// The Object.freeze() method is used to freeze an object. Freezing an object does not allow new properties to be added to the object and prevents removing or altering the existing properties. Object.freeze() preserves the enumerability, configurability, writability, and prototype of the object. It returns the passed object and does not create a frozen copy.
freezFunction =(object)=>{
    Object.freeze(object);
}
let arr=[3,4,5,6,7];
console.log(arr);
console.log("After freezing");
freezFunction(arr);
arr[2]=10;
console.log(arr);


const AVG_TEMPARATURES={
    today:37,
    tomorrow:39.5
};



// This is Destrucring : We can see More About this in Next Lecture
getTempOfTom=({tomorrow}=AVG_TEMPARATURES)=>{
    console.log("temp of tomorrow is "+tomorrow);
}

getTempOfTom();
