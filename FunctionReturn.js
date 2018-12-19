//function calculateArea(width, height){
//    var area=width*height ;
//    console.log(area);
//    return area;
//}
//var x= calculateArea (3,5);
//console.log (x*6);
//
//
//function calculateArea(width, height){
//    var area=width*height ;
//    return area;
//}
//var wallOne= calculateArea (3,58);
//console.log(wallOne);

//function login(){
//    var verified=true;
//    return verified
//    if (verified==true){
//        function buy
//    }
//}

//function calculateSum(num1, num2){
//    var sum=num1+num2;
//     return sum;
//} 
////var x= calculateSum (4,7);
////var y= calculateSum (10,9);
//console.log (calculateSum (4,7));
//console.log (calculateSum (10,9));


//function calculateAge(year){
// var age =2018-year;
//    return age;
//}
//
//function yearsUntilRetirement(name,year){
//   var retirement=65-calculateAge(year)
//   console.log ( name + " retires in " + retirement + " years")
//}
//yearsUntilRetirement ("Iuliia", 1980)
// 
//===OVER LOADING====JavaSript is raning last function (if they are the same)
//=======1==========
//    function addTen(a){
//    return a+10;
//}
//
//function addTen(a,b){
//    return a+b+10;
//}
//var result = addTen(100);
//console.log(result);
// 
//==========2==========

//function addTen(a,b){
//    return a+b+10;
//}
//function addTen(a){
//    return a+10;
//}
//var result = addTen(100);
//console.log(result);

//
//=======Function Statement vs Expressin====
//
//var add=function(a,b){
//    return a+b;
//}
// var result = add (10,20);
//console.log(result);//30

//var area=function(width, hight){
//    return width*hight;
//}
//var result=area (10,20);
//console.log(result);


//Write a function that accepts 2 non-negative numbers and return if they have the same last digit.Sample Output
//lastDigit(7,17) ->true
//lastDigit(6,17) ->false
//lastDigit(3,113) ->true


function lastDigit(num1,num2){
     if (num1-num2%10==0){
         return "true";
     }else
        return "false";
}
console.log (lastDigit(7,17)) 
console.log (lastDigit(6,17)) 
console.log (lastDigit(3,113))




