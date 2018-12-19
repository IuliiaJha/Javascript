//ES5
//
//var  name5 = "Mike Smith";
//var age5 = 23;
//name5= "Mike Miller"
//console.log (name5)// Mike Miller

// ES6

//const: if value is not changing 
//let:if value is changing 

//const  name6 = "Mike Smith";
//let age6 = 23;
//name6="Mike Miller"
////name6= "Mike Miller"
//console.log (name6);// error
//console.log (age6);


//Variables declared with var in ES5 is function scoped, and the variable declared with let and const in ES6 are block scoped.

//function driverLicence5(passedTest){
//    if (passedTest){
//        var firstName = "Mike"
//        var yearOfBirth=1970;
//    }
//console.log (firstName + ", born in " + yearOfBirth + " is now allowed to drive");
//}
//driverLicence5(true);
//=========ES6=========
//function driverLicence5(passedTest){
//
////   const  yearOfBirth=1970 ;
//    if (passedTest){
//    let firstName =name; 
//console.log (firstName+ ", born in" + yearOfBirth + " is now allowed to drive");
//         let firstName ="Mike"; 
//    }
//}
//driverLicence5(true);


//let i =23;
//for (let i=0; i<5; i++){
//    console.log(i)
//}
//console.log(i)
//
//let i =23;
//let sum=24;
//for (let i=0; i<5; i++){
//    sum= 0;
//    sum= sum+i;
//    console.log(sum)
//   
//}
//console.log(sum)

//var a= 10;
//var b= 10;
//console.log("JavaScript first appeared " + " " + (a+b) +" years ago.");

// Template String

//console.log(`JavaScript first appeared ${a+b} years ago.`)

//let firstName= "Mike";
//let lastName= "Smith";
//const yearOfBirth=1970;
//function calculateAge(year){
//    return 2018 -year
//
//}
//
//console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}, he is ${calculateAge(yearOfBirth)} years old. `)
//
//String Methods

//let fName= "Mike";
//let lName= "Smith";
//const n = `${fName} ${lName}`;
//console.log (n.startsWith("m"))// false
//console.log (n.endsWith("Sm"))// false
//console.log (n.endsWith("th"))// true
//
//console.log(`${fName} `.repeat(3));

/////////////////////////////////////////
//Arrow Function

//var x = function (a){
//    return a;
//}
// ES6
// let x = a => a;
//console.log(x(2)) // 2
//
//if we do not have any parametres

//ES5
//var y = function(){
//    console.log ("Hello");
//}
// ES6
//let y = ()=> {console.log ("Hello")}
//y()


//if we have multiple parametres:

//ES5
//var d = function(a,b,c){
//    return a+b+c
//}
//console.log(d(1,2,3))
//
////ES6
//let z = (a,b,c)=> a+b+c;
//console.log(z(1,2,3))

//========map () Method ===========
//
//var array1 = [1,4,9,14];
//let map1 = array1.map(x=>x*2)
//console.log(map1)
//
//
//const years = [1990, 1965, 1982,1957];
//let ages6 = years.map(el=> 2018-el);
//console.log(ages6);

//var materials =[
//    "Hydrogene",
//    "Helium",
//    "Lithium",
//    "Berillium"
//]
//console.log(materials.map(x => x.length))

//var Foo =()=>{};
//var foo = new Foo();
////
//arrow function CAN NOT be used as a constructor and will throw an error when used with new. Arror function  do not have a prototype property 
//
//var Foo =()=> {}
//console.log (Foo.prototype)

//Destructuring is a JS expression that makes impposible to unpackt values from array, or properties from objects, into distinct variables. 

//var john=["John",26];
//var name =john[0];
//var age = john[1];



//let [name,age]=["jonh", "26"]
//console.log (name);
//console.log(age);

//const obj={
//    firstName:"Mike",
//    lastName: "Smith"
//}
//
//const{firstName,lastName}=obj;
//console.log (firstName)

//function calcAgeRetirement(year){
//    const age = new Date().getFullYear()-year;
//    return [age, 65-age];
//}
//
//const [age2,retirement] = calcAgeRetirement(1990)
//
//console.log (age2)
//console.log (retirement)
//
//=================
//    Arrays 

//var x = Array.from("Black");
//console.log(x)
//
//var ages = [23,45,67,87,22];
//var full=ages.map(function(cur){
//        return cur >=18
//    });
//console.log(full)
//console.log(full.indexOf(true))//0
//console.log(ages[full.indexOf(true)])//23
//
//find () = returns the value of the first  element in the array  that 

//var ages = [15,45,67,87,22];
//console.log (ages.findIndex(cur=>cur >= 18))
//console.log (ages.find(cur=>cur >= 18))

//for ...of

//let myArray= [10,20,30];
//for(let x of myArray){
//    x+=1;
//    console.log(x)
//}

//let myObj={
//    x:1,
//    y:2,
//    z:3
//}
//for(let i in myObj){
//  console.log (i) //x,y,z
//   console.log (myObj[i]) // 1,2,3
//}

//=====Differense between for in and for of  in the Array

//let list = [4,5,6]
//for(let a in list){
//    console.log (a)// 0,1,2
//}
//for(let a of list){
//    console.log(a)// 4,5,6
//}
//
//====Spread Operator======
    
//let mid= [3,4];
//let arr = [1,2, mid, 5,6]
//console.log(arr)///[1, 2, Array(2), 5, 6]
//
//let arr2 = [1,2,...mid, 5,6];
//console.log(arr2)//[1, 2, 3, 4, 5, 6]

//function addFourAges(a,b,c,d){
//    return a+b+c+d
//}
//let sum1 = addFourAges(10,20,30,40);
//console.log(sum1)
    
//function addFourAges(a,b,c,d){
//    return a+b+c+d;
//}
//let ages = [10,20,30,40]
//let sum = addFourAges(...ages);
//console.log(sum)


//short way ||
//          \/
//let ages = [10,20,30,40];
//let sum=(a,b,c,d)=>a+b+c+d;
//console.log(sum(...ages))



//=======Rest oPERATOR+++++++++
//
//function sumAll(...args){
//    let sum=0;
//    for (let arg of args){
//        sum+=arg;
//    }
//    return sum;
//}
//console.log (sumAll(1));
//console.log (sumAll(1,2,))
//console.log (sumAll(1,2,3))

//function multiply(multiplier,...theArg){
//return theArg.map(function(element){
//    return multiplier*element;
//});
//}
//var arr = multiply(2,1,2,3)
//console.log(arr);

//let multiply=(multiplier,...theArg) => theArg.map(element => multiplier*element);
//                                               
//var arr = multiply(2,1,2,3)
//console.log(arr);
//
//==========MAP Method===============
//var myMap = new Map();
//myMap.set("keyString","value associated with a string");
//myMap.set("keyObj", "value associated with a keyObj");
//myMap.set("keyFunc", "value associated with a keyFunc")
//console.log (myMap.size);//3
//
//console.log(myMap.get("keyString"));//value associated with a string
//
//console.log(myMap.get("keyObj"))// value associated with a keyObj
//console.log(myMap.get("keyFunc"))// value associated with a keyFunc


let question = new Map();
question.set("question", "What is the name of latest version of JS");
question.set(1, "ES1");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set("correct", "3");
question.set(true, "Correct answer is D");
question.set(false, "wrong try again");

console.log(question.get("question"));
console.log (question.size);
 for (let[key,value] of question.entries()){
     console.log(`This is ${key}, and it is set to ${value}`);
 }

