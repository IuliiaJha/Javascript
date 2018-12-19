var a = "apple";
console.log (isNaN(a));// true

var b = "23";
console.log (isNaN(b));// false

var c = "abc23";
console.log (isNaN(c));// true

var d = " ";
console.log (isNaN(d));// false

var e = 23;
console.log (isNaN(e));// false

console.log(b+c)


//========toFixed()Method=====
    var a = 213.731;
console.log (a.toFixed());// 213

var b = 213.73145;
console.log (b.toFixed(3));//213.731

var c = 213.73645;
console.log (b.toFixed(2));//213.74

var d = 2.13e+15;
console.log (d.toFixed(2));// 2130000000000000.00

//========toPrecision()Method======
var a=13.3714;
console.log(a.toPrecision())//13.3714
console.log(a.toPrecision(2))//13
console.log(a.toPrecision(3))//13.
console.log(a.toPrecision(10))//13.37140000;

var b=0.001658853;
console.log(b.toPrecision())//0.001658853
console.log(b.toPrecision(2))//0.0017
console.log(b.toPrecision(10))//0.001658853000
//
//=========toExponentional()Metod======
    
    var c=123456;
console.log(c.toExponential())// 1.23456e+5
//
//--====toString Metod()-
    
//    var num =15;
//var str =num.toString();
//console.log (typeof(num));
//console.log (typeof(str));


var S1= "dfgsdA08awq #23423wefa^$#saaag5345sfs";
var counterNum=0;
var counterNotNum=0;
for (i=0; i<S1.length; i++ ){
    if (isNaN(S1.charAt(i))==true){
        counterNotNum++;
    }else{
        counterNum++;
    } 
}

console.log ("Not numeric - " + counterNotNum);
console.log ("Numbers - " + counterNum);
    
    
//  ====Math.round() Method====Rounds number to the nearest integer 
//  
  var a= Math.round(2.60)// 3
  console.log(a)
  var a= Math.round(2.50)// 3
  console.log(a)
  var a= Math.round(2.49)// 2
  console.log(a)
  var a= Math.round(-2.50)// -2
  console.log(a)
  var a= Math.round(-2.49)// -2
  console.log(a)
  var a= Math.round(-2.60)// -3
  console.log(a)

//=========Math.sqrt()=====
//    Returns square root of positive number
  
var a = Math.sqrt(0)// 0
console.log(a);
var a = Math.sqrt(1)// 1
console.log(a);
var a = Math.sqrt(64)// 8
console.log(a)
var a = Math.sqrt(-9)// Nan
console.log(a)
var a = Math.sqrt(9)// 3
console.log(a)

//=========Math.floor()========
//Rounds number down to the nearest integer


var a = Math.floor(0.61)//0
console.log(a)
var a = Math.floor(0.40)//0
console.log(a)
var a = Math.floor(5)//5
console.log(a)
var a = Math.floor(-5.1)//-6
console.log(a)
var a = Math.floor(-5.9)//-6
console.log(a)
var a = Math.floor(5.1)//5
console.log(a)

//  =========Math.ceil()=======================Rounds number up to the nearest integer



var a = Math.ceil(0.61)//1
console.log(a)
var a = Math.ceil(0.40)//1
console.log(a)
var a = Math.ceil(5)//5
console.log(a)
var a = Math.ceil(-5.1)//-5
console.log(a)
var a = Math.ceil(-5.9)//-5
console.log(a)
var a = Math.ceil(5.1)//6
console.log(a)


// =========Math.random()==============
    
   var a=Math.random ()// from 0 -- 1 
console.log(a);
var b=Math.random()*10+1 //from 0-- 10
console.log(b);

 var c=Math.random()*100+1// from 0 -- 100
console.log(c);   



//Task:•Create a random number between 0 and 200 and check if this number is greater than 100. 
 var c = Math.round(Math.random()*200);
if (c > 100){
console.log(c + " is bigger than 100"); 
}else{
    console.log(c + " is less than 100")
       }