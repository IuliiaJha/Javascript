/*var firstName=prompt("What is your First name"), 
    lastName=prompt("What is your Last name");
console.log("Your name is " + firstName + " " + lastName);

var a=5, b=12, c=20;
a=b;
b=c;
c=a;
console.log(a,b,c)

var x=4;
var y=x*4-x++;
console.log(y);*/


//var firstName,lastName, salary;
//firstName= "Iuliia";
//lastName= "Jha";
//salary= "$120k";
//console.log ("Hi! My name is " + firstName +" " + lastName + " and my salary is " + salary);

//var hourlyRate,hours,salary
//hourlyRate= 10;
//hours= prompt("How many hours did you work this week?");
//hours=parseInt(hours);
//salary=(10*hours);         
//console.log ("You worked " + hours+ " hours this week and you made $"+ salary);

//var hourlyRate,hours,salary
//hourlyRate= 10;
//hours= prompt("How many hours did you work this week?");
//hours=parseInt(hours);
//salary=(10*hours);         
//console.log ("You worked " + hours+ " hours this week and you made $"+ salary);

//x="5"+5;
//console.log(x);

//num1=parseInt(prompt("Enter number 1"));
//num2=parseInt(prompt("Enter number 2"));
//num3=parseInt(prompt("Enter number 3"));
//num4=parseInt(prompt("Enter number 4"));
//average=(num1+num2+num3+num4)/4
//console.log ("The Average of numbers you entered is " + average);

//var x=5, y=4;
//console.log(!(x==y));

//num=parseInt(prompt("Enter number "));
//if (num%2==0){
//console.log (num + " is Even");
//}else{
//console.log (num + " is Odd");
//}

//num1=parseInt(prompt("Enter number 1"));
//num2=parseInt(prompt("Enter number 2"));
//if (num1==num2){
//console.log (num1 + " is equel to " + num2);
//}else{
//console.log (num1 + " is NOT equel to " + num2);
//}

//score=parseInt(prompt("Enter your score"));
//if (score >90){
//console.log ("Your grade is A" )
//}else if 
//(score>80)
//{console.log ("Your grade is B");
//}else if 
//(score>70)
//{console.log ("Your grade is C");
//}else {
//console.log ("Your grade is F");
//}


//var quntity=parseInt(prompt("Enter the quntity"));
//var price =parseInt(prompt("Enter the price"));
//var result= quntity*price;
//if (result<3000 ) {
//console.log ("No Discount" )
//}else if 
//(result>=3000&& result<5000 )
//{disc=result*0.15;
//console.log ("Discount is $" + disc + ", revenue is "+ (result-disc));
//}
//else if 
//(result>=5000 && result< 10000){
//disc=result*0.25;
//console.log ("Discount is $" + disc + ", revenue is "+ (result-disc));
//}else 
//{disc=result*0.40;
//console.log ("Discount is $" + disc + ", revenue is "+ (result- disc));
//}


//var carModel=prompt("Enter one of the car model: Toyota, Ferrari, Audi ")
//switch (carModel) {
//case"Toyota":
//     console.log ("You entered Toyota");
//     break; 
//case"Ferrari":
//     console.log ("You entered Ferrari");
//     break;
//case"Audi":
//     console.log ("You entered Audi");
//     break;
//     default:
//console.log ("You entered wrong car");
//}


//while(number<=100){
//if (number%2==0) { 
//sum1=sum1+number;
//
//}else{
//sum2=sum2+number;
//}    
//number++;
//}
//console.log ("Even total " +sum1);
//console.log ("Odd total " + sum2);

//do {
//    var num=parseInt(prompt ("Enter a positive number"))
//    } while (num<0);
//for (var i=1; i<=10; i++){
//    console.log (num + " * " i " = " + (i*num))
//}


//var sum=0
//var number=parseInt (prompt ("Enter a positive integer"))
//for( i=1;i<=number; i++){
//for (p=1; p<=10; p++){
//    sum=(i*p)
//    console.log( i + " * " + p + " = " + sum );
//}
//     }



//var i=1;
//while (i<=15){
//console.log (i);
//i++
//}


//for (i=1;i<=100;i++){
//    if (i%5==0||i%7==0 ){
//        console.log (i);
//}
//}


//let user enter 5 numbers and print how many times are they between 10 and 20.
//
//var counter=0;
//for(i=1;i<=5; i++){
//var number = parseInt(prompt("Enter number"));
//if (number>=10 && number<=20){
//counter=counter +1 ; // or short form for "counter=counter +1" is "count++ "
//}}
//console.log (counter);


//var counter=0;
//for(i=1;i<=50; i++){
//if (i%3==0||i%5==0){
//counter++
//}}
//console.log (counter);

//var counter=0;
//for(i=1;i<=50; i++){
//if (i%3==0&&i%5==0){
//console.log (i);
//}}

//let user to enter numbers until user enterad number is equel to 0 if the entered number is even then add number to total, if the intered number is odd substrakt. Print the total result.
//
//var total=0;
//while(number!=0){
//var number = parseInt(prompt("Enter number"));
//if (number%2==0){
//total=total+number;
//}else{
//total=total-number;
//}
//}
//console.log(total)



//
//var repetition = parseInt(prompt("Enter number of repetition"));
//for(i=1;i<=repetition;i++){
//var num1=parseInt(prompt("Enter number 1 "));
//var num2=parseInt(prompt("Enter number 2 "));
//var num3=parseInt(prompt("Enter number 3 "));
//if (num1>num2&&num1>num3){
//    alert("The First Number "+ num1 + " is largest");
//}else if (num2>num1&&num2>num3)
//       {alert("The Second Number " + num2 + " is largest");
//}else if  (num3>num1&&num3>num2)
//       {alert("Third Number "+ num3+ " is largest");
//}else if (num1==num2&&num2==num3){
//       alert("The Numbers are equel");
//}
//}

//User should be able to enter 3 values and program should display which number is largest.
//if numbers are equal, it should display numbers are equal 
//Above steps need to repeated to number of times that is also inputted by user.

//do{
//var cont;
//var num1=parseInt(prompt("Enter number 1 "));
//var num2=parseInt(prompt("Enter number 2 "));
//var num3=parseInt(prompt("Enter number 3 "));
//if (num1>num2&&num1>num3){
//    alert("The First Number "+ num1 + " is largest");
//}else if (num2>num1&&num2>num3)
//       {alert("The Second Number " + num2 + " is largest");
//}else if  (num3>num1&&num3>num2)
//       {alert("Third Number "+ num3+ " is largest");
//}else if (num1==num2&&num2==num3){
//       alert("The Numbers are equel");}
//cont = parseInt(prompt("Would you like to continue?  1. Yes 2. No "));
//if (cont == 1){
//continue;
//}else{
//    break;
//}}while(true);

//User should be able to enter 3 values and program should display(alert) which number is largest.
//if numbers are equal, it should display numbers are equal 
//after each result program should ask user "Do you want to continue 1.Yes 2.No", if user enter 1 it should ask again, if user enter 2 it should stop and display"Thank you!". 
    

//do{
//var counter =1;
//var num1=parseInt(prompt("Enter number 1 "));
//var num2=parseInt(prompt("Enter number 2 "));
//var num3=parseInt(prompt("Enter number 3 "));
//if (num1>num2&&num1>num3){
//    alert("The First Number "+ num1 + " is largest");
//}else if (num2>num1&&num2>num3)
//       {alert("The Second Number " + num2 + " is largest");
//}else if  (num3>num1&&num3>num2)
//       {alert("Third Number "+ num3+ " is largest");
//}else if (num1==num2&&num2==num3){
//       alert("The Numbers are equel");
//}
//cont = parseInt(prompt("Would you like to continue?  1. Yes 2. No "));
//if (conter==1){
//counter ++;
//continue;
//}else{
//    alert("thank you have tried " + counter + " times")
//    break;
//}}
//while(true);


//var numArray=Array(15);
//numArray[0]=2;
//numArray[1]=4;
//numArray[2]=6;
//numArray[3]=8;
//numArray[4]=10;
//numArray[5]=12;
//numArray[6]=14;
//numArray[7]=16;
//numArray[8]=18;
//numArray[9]=20;
//numArray[10]=22;
//numArray[11]=24;
//numArray[12]=26;
//numArray[13]=28;
//numArray[14]=30;
//console.log(numArray[10]);
//numArray[4]=35;
//console.log(numArray[4]);
//numArray[8]=numArray[5]+numArray[12];
//console.log(numArray[8]);
//console.log(numArray);


//var days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//for(i=0; i<days.length; i++)
//{
//   console.log (days[i]);
//}

var sum=0;
var myArray=Array(10);
for (i=0; i<myArray.length;i++)
    {
    myArray[i] = parseInt (prompt("Enter number"));
        sum = sum + myArray[i];
    }
console.log(sum);
    
       


