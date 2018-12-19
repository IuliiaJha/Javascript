//Question #1 
//
//var num = 12;
//for (var i=1; i<=10; i++){
//    console.log (num + " * " + i + " =" + num*i);
//}
//Question #2 
//Write a program to print Fibonacci series of n terms where n is input by user : 
//
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34,......
 
var rep=parseInt(prompt("How many time do u want me to repeat"));
var num1=0;
var num2=1;
var total=0;

console.log(num1);
console.log(num2);
for(var i=0; i<rep; i++){
total=num1+num2; 
num1=num2; 
num2=total; 
console.log(total);
}



//Ouestion #3
//Write a JavaScript program to print all the numbers between 1 and 100 (including 1 and 100)
//which are divisible by 5.
//
//for (var i=1; i<=100; i++){
//if (i%5==0) {
//console.log (i);
//}
//}


//Question #4
//Print the multiples of 5 starting from 200 to 5 
//
//for (var i=200; i>=5; i-=5){
//    console.log (i);
//}

