//var A = [10,20,30];
//var B =[2,4,5];
//
//console.log(A.map(i,y)=>i/B[y]) 

//var A = [2,6,12,18]
//var B = [2,3,4,6]
//var result = A.map(function(n, i) { return n / B[i]; });
//console.log(result)



//for (let i=0; i<2;i++){
//    setTimeout(function(){
//        console.log(i);
//    },i*1000);
//}


// var title='Computer Parts, Laptops, Electronics, and More - Newegg.com'
//// console.log(title.length)
//var newTitle = title.substr(0,36)
//        console.log(newTitle);

//1-      Declare 3 variables and assign different numbers.
//
//2-      Find the greatest one between those numbers.
//
//3-      Print the greatest one in the console.
//1-      Create an array and assign 4 values.
//
//2-      Print each value in the console by using loop.

//var a = [1,3,5,7]
//for (var i=0; i< a.length; i++){
//    
//        console.log(a[i]);
//};



//Write a JavaScript Program:
//
//1-      Write a function that accepts a number and return the remainder of that number divisible by 3
//
//For example: if number is 10 , remainder is 1
//If number is 20, remainder is 2


//function remainder(num){
//    if (num%3!=0){
//		return console.log (num%3)
//	}else{}
//    
//    return console.log("Remainder of " + num + " is 0")
//}
//remainder(10);
//remainder(20);


//          Display “Mike knows Java and he got an offer from Geico”

//var student ={
//
//fname: "Mike",
//
//lName: "Smith",
//
//age: 20,
//
//languages:{
//
//b8:"Java",
//
//b9:"JavaScript"
//
//},
//
// offers:["capitalOne","Geico","accenture"]
//
//};
//
//
//
//
//console.log(student.fname + " knows "+ student.language(b8)
//			
//			knows Java and he got an offer from Geico”)


//1-      Create 2 String variables
//
//2-      Create a password by using those variables.
//
//The password is Last 3 letters of String1 and Length of String2
//
//              Note: Write such a code that works for different Strings
//
//              Example1:
//
//  String1 is javascript
//String2 is java
//
//The password should be  ipt4
//
//Example2:
//
//  String1 is protractor
//
//  Srtring2 is angular
//
//The password should be tor7









//let x = 2;   
//
//(function (x) {
//  x = 3;  
//	console.log( x)
//})
//(5);






var a = "banananh"
var output = '';
for(var x=0; x<a.length; x++) {
  var y = a.charAt(x);
  if (output.indexOf(y) !== -1) {
      continue;
    } else {
      output = output + y;
    }
}

console.log(output);






















