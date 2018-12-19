//Write a JavaScript Program to store numbers from 1 to 1000 in One-dimensional array and then print array contents as follows (10 elements per row): 
//1 2 3 4 5 6 7 8 9 10 
//11 12 13 14 15 16 17 18 19 20 
//21 22 23 24 25 26 27 28 29 30 
//.
//.
//.
//991 992 993 994 995 996 997 998 999 1000


//var num=Array(1000);
//for(var y=0; y<num.length;){
//   var result="";
//   for( x=0; x<10; x++){
//       num[y]=y; 
//          y++
//      result = result+y+ " "
//}
//   console.log(result);
//}
 

//========Question 2:==========
//
//Write a JavaScript program to store numbers 1 to 10 in an array using data instantiation.
//Then write a for loop to multiply each member of above array by 19, this way you will get table of 19 stored in the above array.
//Finally write another for loop to print all the array elements.
//You should get following output:
//19
//38
//57
//76
//95
//114
//133
//152
//171
//190
//
//
//var num=[1,2,3,4,5,6,7,8,9,10];
//for(var i=0; i<num.length;i++){
//     num[i] =i*19;
//}
//for (j=1;j<num.length;j++){
//console.log(num[j]);
//}

//-------Question 3------------------
//Below is One-dimensional array code:
//var arr = ['A', 'Z', 'B', 'N', 'P', 'T', 'X', 'C'];
//
//Write the code to search for particular character in above array.
//If I search for 'B', then output should be: "B found!"
//If I search for 'E', then output should be: "E Not found!"
//
//
//
//
//var arr = ['A', 'Z', 'B', 'N', 'P', 'T', 'X', 'C'];
//var letter=prompt("Enter a letter");
//for(i=0; i<arr.length; i++){
//      if(arr[i] == letter)
//   {
//console.log(letter+ " found ");
//        break;
//    
//    }else if(i == arr.length -1){
//             
//        console.log(letter+ " Not found ");
//        
//    }
//      
//}
//--------------Question 4:------------
//var scores = [51, 85, 32, 0, 98, 157, 82, 101, 64, 249];
//Above array stores the scores of a batsman in his last 10 innings in the game of cricket.
//If score is greater than or equal to 50 but less than 100, it is regarded as half-century.
//If score is greater than or equal to 100 but less than 200, it is regarded as a century.
//If score is greater than or equal to 200, it is regarded as a double-century.
//
//
//NOTE: No scenario of triple-century in this case.
//
//Write the code to print the number of half-centuries, centuries and double-centuries scored by the batsman.
//
//
//var double= "";
//var half="";
//var scores = [51, 85, 32, 0, 98, 157, 82, 101, 64, 249];
//for (i=0; i<scores.length;i++){
//if (scores[i]>=249)
//{ 
//console.log("Centuries scored by the batsman: " + scores[i]);
//
//}else if 
//     (scores[i]>=100)
//    {
//        double+=scores[i]+"  "
//     }  else if   (scores[i]>=50)
//         {
//             half+=scores[i]+"  "
//         }
//    else{
//      console.log("No scenario");
//  break;
//}
//console.log("Double-centuries scored by the batsman: " + double);
//console.log("Double-centuries scored by the batsman: " + half);
//
//}
//Question 5:
//In mathematics, the Fibonacci series are the numbers in the following integer sequence:
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
//By definition, the first two numbers in the Fibonacci sequence are 0 and 1, 
//and each subsequent number is the sum of the previous two.
//
//Write a JavaScript Program to generate above series till n number of times (For example you can try with 
//n = 10 and n = 15) and store it in One-dimensional array.
//For n = 10, Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//For n = 15, Fibonacci series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377
//
//Write a for loop to print all the elements of the array.
//
//
// 
//
////
var n=15;
var Fibonacci=Array(n);
Fibonacci[0]=0;
Fibonacci[1]=1;
for (var i=[2]; i<Fibonacci.length; i++){
   Fibonacci[i]=Fibonacci[i-1]+Fibonacci[i-2]
}
    console.log(Fibonacci);




var space = " "
var str= space+"Hello"+space+space
str.concat("world")
var str1=str.trim();
console.log(str1.length)
