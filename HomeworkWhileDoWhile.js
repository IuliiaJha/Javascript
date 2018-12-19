//Assignement -5 
//
////Question-1
//
//Use pre-decrement operator in while's boolean_expression to print HELLO 5 times on to the console.
//
//var count=1;
//while (count <=5){
//console.log("HELLO");
//count++
//}

//Question-2

//Write a program to calculate the sum of the numbers from 1 till upper bound. 
//If upper bound is 5, sum should be 1 + 2 + 3 + 4 + 5 = 15.
//If upper bound is 11, sum should be 1 + 2 + ... + 11 = 66.
//If upper bound is 100, sum should be 1 + 2 + ... + 100 = 5050.
//
//You should use while loop.

//
var number=0;                        
var sum=0;
while (number<=11){
sum=(sum+number);
number++
}
console.log(sum)

  
//Question-3
//Write a program using while loop to print Even numbers from 1 to 100.


//var number=1;
//while(number<=100){
//if (number%2==0){
//console.log(number + " is Even")
//}
//number++
//}
//
//Question-4
//Write a program for following logic:
//Print all the odd numbers in comma separated form from 1 till end (you may change it):
//if end = 10, OUTPUT = 1, 3, 5, 7, 9
//if end = 11, OUTPUT = 1, 3, 5, 7, 9, 11
//
//You should use while loop and if - else statements. Note that, there should not be any comma after last digit.

//var num=3;
//var odd="1";
//while (num<=10){
//if (num%2==1){
//odd=odd + "," + num;         
//}
//num++
//}
//console.log (odd);
//
//var num=3;
//var odd="1";
//while (num<=10){
//if (num%2==1){
//odd=odd + "," + num;         
//}
//num++
//}



//var num=1;
//var odd=1;
//do{
//   num++
//   if(num%2==1){
//       odd=odd+","+num;
//   }
//}while(num<=10);
//console.log(odd);


//var num=parseInt(prompt("Please enter the number"));
//var total=1; 
//var end=3;
//while(end<=num){
//if (end%2==1){
//total= total + ","+end
//}
// end++  
//}   console.log(total);

//var start=1;
//var sum=0;
//do {
//    if(start%2==0){
//        start++;
//    }
//    sum=sum+start
//    console.log(sum + "PPP" + start);
//}while(++start<=10);
//console.log(sum)













