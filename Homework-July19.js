//Question#1
//Write a javascript program for following logic.
//    if marks < 60, then print "Fail"
//    if marks >= 60 but less than 90 , then print "Pass"
//    if marks >= 90, then print "Passed with Distinction"

//var mark = prompt("Enter your score");
//mark =parseInt(mark);
//if (mark<60){
//          console.log ("You Fail");
//          }
//else if (mark<90) {
//          console.log ("You Pass");
//} else
//if (mark>=90) {
//          console.log ("You Passed with Distinction");
//}
 
//Question#2

//Login Functionality Logic
//   UserName,Password
//   --- > Program will ask to enter username and password
//   --- > If both username and password are blank
//       -- > "UserName and Password Fields cannot be empty"
//   --- > If userName is blank and password is not blank
//       -- > "UserName cannot be empty"
//   --- > If userName is not blank and password is blank
//       -- > "Password cannot be empty"
//   --- > If the username or password is not valid
//       -- > "UserName or password is not valid. Please verify"
//   --- > If the username and password are both valid
//       -- > "User Logged in successfully"


//
//var usename= "Iuliia";
//var password1= 1234;
//var name = prompt("Enter your User Name");
//var password = prompt("Enter your Password");
//if ((name=="") && (password==""))
//          {console.log ("User Name and Password Fields can not be empty");
//}else if
//((name =="") && (password!="")) {
//console.log ("User Name cannot be empty");
//}
//else if
//((password=="")&&(name!="")){
//console.log ("Password cannot be empty");
//}
//else if
//((usename!=name) || (password1!=password)){
//console.log ("UserName or password is not valid. Please verify");
//}
//else if
//((usename==name) && (password1==password)){
//console.log ("User Logged in successfully");
// }

//Question #3
//
//Calculator Logic with 2 numbers
//    User is able to enter 2 numbers
//    User is able to enter one of these operators:
//        +,-,/,*
//    Program needs to perform the operation and display the result
//    If either number1 or number2 is blank:
//        "Please enter valid numbers"

//Tax Calculator:
//
//    - Let user enter his income
//
//    - Calculate the tax amount according to below table
//
//    
//
//var num1 =prompt("Enter your number 1");
//num1=parseInt(num1);
//var num2 =prompt("Enter your number2");
//num2=parseInt(num2);
//var math= prompt("Enter one of the operators: +; -; /; * you would like to use");
//
//var sub=(num1-num2);
//var dev=(num1/num2);
//var mul=(num1*num2);
//var add=(num1+num2);
//if (math == "+")
//{console.log(num1 +" + "+ num2 + " = "+add);
//}
//else if (math == "-")
//{console.log(num1 +" - "+ num2 + " = "+sub);
//}
//else if
//(math == "/")
//{console.log (num1 +" / "+ num2 + " = "+dev);
//} 
//else if
//(math == "*")
//{console.log (num1 +" * "+ num2 + " = "+mul);
//}
//else if
//((num1=="")||(num2=="")||(math==""))
//{console.log("Please enter valid numbers");
//}
//else {
//    console.log ("You entered invalid operator")
//}
////    }
//// Question 4
//
//
//- Print the tax amount
//
//Income	Tax Ratio
//income ≤150,000,000	%25
//income ≤ 300,000,000	%30
//income ≤ 600,000,000	%35
//income ≤ 1,200,000,000	%40
//income > 1,200,000,000	%50
//Sample Output-1
//
//Your Income : 1500
//
//The tax amount you have to pay : 375.0
//
//Sample Output-2
//
//Your Income : 1200000
//
//The tax amount you have to pay : 300000.0
//
//Note: IF Your Income is 200,000,000, your tax will be calculated this way: %25 for 150,000,000 and %30 for the rest of the amount which is 50,000,000

//var Inc=prompt("Enter your income");
//var Inc=parseInt(Inc);
//if(Inc >0 && Inc < 150000000)
//{tax1 = (Inc*0.25);
// console.log ("Your Income : " + Inc);
// console.log("The tax amount you have to pay : " +  tax1);
//}else{
//if((Inc >=150000000) && (Inc < 200000000))
//{tax2=(Inc*0.30);
// console.log ("Your Income : " + Inc);
// console.log("The tax amount you have to pay : " +  tax2);
//}
//else if
//((Inc >=200000000) && (Inc < 300000000))
//{tax3=(3750000+(Inc-150000000)*0.30);
//console.log ("Your Income : " + Inc);
//console.log("The tax amount you have to pay : " +  tax3);
//}
//else if
//((Inc >=300000000) && (Inc < 600000000))
//{tax4=Inc*0.35;
//console.log ("Your Income : " + Inc);
//console.log("The tax amount you have to pay : " +  tax4);
//}
// else if
//((Inc >=600000000) && (Inc < 1200000000))
//{tax5=Inc*0.40;
//console.log ("Your Income : " + Inc);
//console.log("The tax amount you have to pay : " +  tax5); 
//} 
//  else if
//(Inc >=1200000000) 
//{tax6=Inc*0.50;
//console.log ("Your Income : " + Inc);
//console.log("The tax amount you have to pay : " +  tax6); 
//}
//}
// Question #5 
//
//var num = prompt("Enter any year");
//num=parseInt(num);
//if (num%4==0){
//    if (num%100!=0){
//        console.log(num + " Leap Year");
//    }else if(num%100==0&&num%400==0){console.log(num + " Leap Year");
//}else{
//    console.log (num + " NOT a Leap Year")
//}
//} 

// Question #6
// 
//var numberOfCalls = prompt("Enter number of calls");
//numberOfCalls=parseInt(numberOfCalls);
//if (numberOfCalls<0){
//    console.log("you entered invalid number " + numberOfCalls );
//}
//  else  if (numberOfCalls==0){
//    console.log("This month you must pay $00.00" );
//    }
//else if (numberOfCalls >0 && numberOfCalls <=100){
//    console.log("This month you must pay $200");
//}
//else if (numberOfCalls>100 && numberOfCalls<=150){
//    bill1= (200+(numberOfCalls-100)*0.60)
//    console.log("This month you must pay $"+ bill1);
//}
// else if (numberOfCalls>150 && numberOfCalls<=200){
//    bill2 = (230+(numberOfCalls-150)*0.50)
//    console.log("This month you must pay $"+ bill2);
//}    
//    else if (numberOfCalls>200){
//    bill3 = (255+(numberOfCalls-200)*0.40)
//    console.log("This month you must pay $"+ bill3);
//    }
//             