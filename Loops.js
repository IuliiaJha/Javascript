//console.log("JavaScript");
//console.log("JavaScript");
//console.log("JavaScript");
//console.log("JavaScript");
//console.log("JavaScript");



//for (var i=0; i<5;i++){
//console.log ("JavaScript");  
//}

//for (var i=0; i<10; i++){
//    console.log("5" + i);
//}

//for(var i=1; i<=10; i+=2){
//console.log (i);
//}

//print all numbers between 0-50 that are divisible by 4

// for (var i=0;  i<50; i++){
//     if i%4==0{
//     console.log (i);
//}     
// }
//
// for (var i=0;  i<50; i+=4){
//     console.log (i);
//}     
// for (var i =100; i>=80; i--){
//if (i%3==0){
//console.log (i + " is divisible by 3" );
//}
//else {
//console.log (i + " is not divisible by 3" );
//     }
// }

//
//var num3 = prompt ("Enter number of times to repeat");
//num3=parseInt (num3);
//for (var i=0; i<num3; i++){
//var num1 = prompt ("Enter number 1");
//num1=parseInt (num1);
//var num2 = prompt ("Enter number 2");
//num2=parseInt (num2);
//if (num1>num2){
//    console.log ("Number "+ num1 + " is largest" )
//}else
//if (num1<num2){
//    console.log ("Number "+ num2 + " is largest" )
//}
//else {console.log ("Number "+ num1 + " is quel to Number  " + num2)
//     }
//}
// write a program that displays each even/odd number in popup between 1 and 32


//for (var i=0; i<=32; i++){
//if (i%2==0) {
//console.log(i + " is Even number");
//}
//else{
//    console.log (i + " is Odd number");
// }
//}




//if (i%3==0){
//console.log (i + " is divisible by 3" );
//}
//else {
//console.log (i + " is not divisible by 3" );
//     }
// }
//How to culculate the total 0f 5 numbers

//var total=0;
//for (var i=0; i<=5; i++){
//var num=prompt("Enter your number");
//num=parseInt(num);
//total=total+num;
//console.log (total);
//}
 
//var n=prompt("Enter your number");
//n=parseInt(n);
//for (var i=1; i<=100; i++){
//if ((n-1)+(n-2)>=0){ 
//    f=(n-1)+(n-2);
//    console.log(f);
//}
//}


    

//var num = parseInt (prompt("Enter your positive integer"));
//for (var i=1; i<=10; i++){
//console.log(num + " * " + i + " = " + (num*i));
//}
//
//to calculate the sum of following series where n is input by user. 1+1/2+ 1/3+1/4+1/5+1/n

var sum=0;
var num=prompt ("Enter number");
num=parseInt (num);
for (var i=1; i<=num; i++){
sum= sum + 1/i;
console.log (sum);
}
console.log (sum);


