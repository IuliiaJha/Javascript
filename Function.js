//function sayHello(){
//    console.log("Hello");
//}
//sayHello();
//for (var i=0; i<100; i++){
//    sayHello();
//}


//function sumOf3(){
//    
//var num1=5;
//var num2=4;
//var num3=2;
//console.log(num1+num2+num3);
//    
//}
//sumOf3();


//function convertKM(){
//    
//var mile= parseInt (prompt ("Enter number of miles"));
//var km = 1.6 * mile;
//console.log(km);
//    
//}
//convertKM();
//convertKM();

//function convertKM(){
//    
//console.log(parseInt (prompt ("Enter number of miles"))*1.6);
//    
//}
//convertKM();
//convertKM();

//function greaterNumber(){
//var num1= parseInt(prompt ("Enter number 1"));
//var num2 =parseInt (prompt ("Enter number 2"));
//if (num1>num2) { 
//    console.log ('The Greatest number is ' + num1);
//}else{
//    console.log ('The Greatest number is ' + num2); 
//   }  
//}
//greaterNumber();


//function calculateArea(width,height){
//    
//var area = width*height
//console.log(area);
//    
//}
//calculateArea(10,19);
//calculateArea(3,2);



//x=5;
//y=5;
//function calculateArea(width,height){
//    
//var area = width*height
//console.log(area);
//    
//}
//calculateArea(x,y);


//function calculatSalary(hours,hourlyPay){
//    
//var salary=hours*hourlyPay
//console.log(salary);
//}
//calculatSalary(1,6000);
//calculatSalary(2,500);
//
//



//function calculator(num1,num2,operator){
//    
//    console.log (result)
//}
//calculator(parseInt (prompt("Enter number 1")), prompt("Enter number 2"),prompt("Enter operator (-,+,*,/)"));

    
// function calculator(num1,num2,operator){
//   if (operator=="+"){
//      result=num1+num2;
//  }else if (operator=="-"){
//      result=num1-num2; 
//  }else if (operator=="*"){
//      result=num1*num2;
//  }else if (operator=="/"){
//     result=num1/num2;
//   } 
//       console.log (result);
//}
//calculator(6,3,"+");   
//calculator(98,9,"-"); 
//calculator(34,8,"*");
//calculator(5,4,"/");
    
//function calculateAge(currentYear, birthYear){
//     console.log ("Your age is " + (currentYear-birthYear))
//}
//calculateAge(2018, 1980);   

//function findGreatest(num1, num2, num3){
//    if (num1>num2 && num1>num3){
//        console.log( num1 +" is greatest");
//    } else if (num2>num1 && num2>num3){
//        console.log( num2+ " is greatest");
//    }else if(num3>num1 && num3>num2){
//        console.log(num3 +" is greatest");
//    }
//}
//findGreatest (5,2,3);


//function convertFahrenheit(fahrenheit){
//  result = (fahrenheit-32)*5/9
//        console.log(result + " Celcius");
//}
//convertFahrenheit(32);
//convertFahrenheit(50);

//function calculateGrade(num1, num2, num3){
//   var average=(num1+num2+num3)/3;
//if (average>=90){
//    console.log("You got A");
//}else if (average>=80){
//    console.log("You got B");
//}else if (average>=70){
//    console.log("You got C");
//}else if (average>=60){
//    console.log("You got D");
//}else if (average>=0){
//    console.log("You got F");
//}
//}
//calculateGrade(70,76,80)
//calculateGrade(50,80,70)
//calculateGrade(90,90,90)

//var yourArray=[2,5,6, "apple"]
//function findElement(myArray,element){
//   for(i=0;i<myArray.length;i++){
//       if (myArray[i]==element){
//           console.log("I found " + element);
//           break;
//       }else if(i==myArray.length-1){
//           myArray.push(element)
//           break;
//       }
//   }
//    console.log(myArray);   
//}
//findElement (yourArray, "banana")



//function findElement(fruit,element){
//   for(i=0;i<fruit.length;i++){
//if (fruit[i]==element){
//           console.log("I found " + element);
//           break;
//       }else if(i==fruit.length-1){
//           fruit.push(element)
//           break;
//       }
//   }
//    console.log(fruit);   
//}
//findElement ([2,5,6, "apple"], "apple")
//findElement ([2,5,6, "apple"], "banana")


function calculateArea(width, height){
    var area=width*height ;
}
wallOne= calculateArea (3,5);
wallTwo= calculateArea (8,6);