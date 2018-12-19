//1-----LENGTH
// var string = "Java Script";
//console.log(string.length);
// 
//var name="Iuliia";
//var lastName="Jha";
//console.log (name.length+lastName.length)

//=========2. charAt========
//    
//var string= "Java Script";
//console.log(string.charAt(2));//v
//console.log(string.charAt(4));//
//console.log(string.charAt(9));//p

//var x="Java Script";
//for (i=0; i<x.length;i++){
//    console.log(x.charAt(i));
//}

//=========concat()===========
// 
//var s1='hello ';
//var s2='wonderful ';
//var s3="world "
//var s4=s1.concat(s2).concat(s3);
//console.log(s4);// hello world
//
// =======includes()Method=====
//var str = "Hello, Mike";
//var n= includes("Mike");
//console.log(n);//true
//
//===========indexOf () Method====
//var str = "Hello Mike, welcome to Amazon"
//var n = str.indexOF("Amazon");
//console.log(n)//23
//
//======replaced()

//var str = "Ebay is very good website";
//var replaced= str.replace("Ebay", "Amazon");
//console.log(replaced)//Amazon is very good website
//vat srt - stay the same

//===========search()Method=====
    
//var str= "I want to be number 1 test automation developer.";
//console.log (str.search("automation"));//27
//console.log (str.search("1"));//20

//=========SLICE()

//var str="Welcome to JavaScrpit";
//console.log (str.slice(2))//lcome to JavaScrpit
//console.log (str.slice(10))// JavaScrpit
// console.log (str.slice(2,9))//c
// console.log (str.slice(6,14))//e to Jav
//console.log (str.slice(4,-3)) //ome to JavaScr
//console.log (str.slice(5, -12 ))//me t
//console.log (str.slice(2, -12 ))//lcome t
//==========Split ()========

//var str=("I will display the array of the");
//var newArray=str.split(" ");
//console.log (newArray )
//console.log (str )
//Array(7)["I", " I", "will", "display", "the", "array", "of", "the"]


//=========Substr()=====
var str = "JavaScript";
console.log (str.substr(0,1))//J
console.log (str)
console.log (str.substr(1,0))//  
console.log (str.substr(-1,1))//t
console.log (str.substr(1,-1))//  
console.log (str.substr(-3))// ipt
console.log (str.substr(1))//avaScript
console.log (str.substr(-20,2))//Ja
console.log (str.substr(20,2))//
//
//========substring ()====
//var str = "Hello world";
//console.log (str.substring(0,1), str)//H
//console.log (str.substring(1,0))//H
//console.log (str.substring(0,6))//Hello
//console.log (str.substring(Float64Array))// o world;
//console.log (str.substring(4,7))// o w
//console.log (str.substring(7,4))//o w
//console.log (str.substring(0,7))//Hello
//console.log (str.substring(0,10))//Hello world
//=========trim ====Method
//var str= "   JavaScript";
//console.log(str.trim());//JavaScript
//var str= "JavaScript     ";
//console.log(str.trim());//JavaScript
//var str= "   JavaScript   ";
//console.log(str.trim());//JavaScript
//var str= "   Ja va Scri pt  ";
//console.log(str.trim());// Ja va Scri pt



//============

//var x="";
//var string1="";
//var string2="";
//passwordCreate=function(string1, string2){  
//    string1 = prompt("Enter str1 "); var string2 = prompt("Enter str2");
//    
//    for(i=0; i<string1.length; i++){
//    x=x.concat(string1.charAt(i));
//               if (i==2){
//        break;
//    }
//}
//   return x.concat(string2.length)                                    
//}
//var password = passwordCreate(string1, string2);
//console.log(password);

//function checkedString(str1, str2){
//    if (str1.includes(str2)){
//        console.log(str2.length)
//    }else{ 
//        console.log("not found")
//    } 
//}
//checkedString ("Your oder confirmation number XYZ", "confirmation")


//function checkedString(str1, str2){
//    if (str1.includes(str2)){
//        console.log(str1.indexOf(str2))
//    }else{ 
//        console.log("not found")
//    } 
//}
//checkedString ("Your order confirmation number XYZ", "confirmation")


//var s1 = "Orcun";
//var s2= "Canlilar";
//var x = s1.charAt(0)+s1.charAt(1);// Or
//var y = (s2.charAt(s2.length-2) + s2.charAt(s2.length-1));// ar
//var replaced = s2.replace(y,x)
//console.log (replaced);//CanlilOr
 
  
//var str="In oder to be a good test automation developer, I need to practice at least 2 to 3 hours a day"
//if (str.search("automation")>=0){
//        console.log("found")
//}else{ 
//       console.log("not found")
//   } 


//var str="In oder to be a good test automation developer, I need to practice at least 2 to 3 hours a day"
//var x=str.slice(26,36)
//console.log(x)
//if (x=="automation"){
//        console.log("found")
//}else{ 
//       console.log("not found")
//   } 


//
//How many words in the text


//var str="In 1993, the National Center for Supercomputing Applications (NCSA), a unit of the University of Illinois at Urbana-Champaign, released NCSA Mosaic, the first popular graphical Web browser, which played an important part in expanding the growth of the nascent World Wide Web. In 1994, a company called Mosaic Communications was founded in Mountain View, California and employed many of the original NCSA Mosaic authors to create Mosaic Netscape. However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for Mosaic killer, as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994. Within four months it had already taken three-quarters of the browser market and became the main browser for the Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications. Netscape Communications realized that the Web needed to become more dynamic. Marc Andreessen, the founder of the company believed that HTML needed a glue language that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup  ";
//var array=str.split(" ");
//var counter = 0;
//for (var i=0; i<array.length; i++){
//    if (array[i] == "Netscape"){
//        counter++;
//    console.log ("I found it");    
////    }else if (i == array.length-1){
////        console.log("Not found")
//    
//    }
//    
//}
//    console.log("I found counter "  + " " + counter)
//    
//
var str = "JavaScript";
console.log(str.substring(str.length-4,2))//vaSc
console.log(2,3)//v
console.log(str.substring(str.length, 2))//vaScript

 var str = "Javascript";
var a="";
for (var i=0; i< str.length; i++){
 if  (i==2 || i==5){
     var x = str.charAt(i).toUpperCase();
     } else{ 
     x=str.charAt(i);
     }
    a=a+x
} 
console.log ( a )


var str = "   342   ";
console.log("|" + str.trim()+ "|");

