//var myArray=Array(8);
//for (i=0; i< myArray.length; i++){
//    myArray[i]= myArray.length)
//    for(var j=0; j<myArray[i].length;j++){
//        myArray[i][j]=i
//    }
//}
//
//console.log (myArray)

//outer array
//
//var myArray=Array(8) 
//
//for (var i=0; i<myArray.length ;i++){
//    myArray[i]=Array(8)
//}
//var counter=10;
//
//  //printing 
//for (var i=0; i<myArray.length;i++){
//    var str= ""
//    
//    for (j=0;j<myArray[i].length;j++){
//        myArray[i][j]=counter++;
//        str=str+myArray[i][j]+ " ";
//}
//    console.log (str)
//}
    
    
    
//=======================================



//


////
//var letter1="W";
//var letter2="B";
//
//for(var i=1; i<=8; i++){
//console.log(a="");
//for(c=1; c<=8; c++){
//if(c%2==1 && i%2==1){
//b=letter1;
//}else if(c%2==0 && i%2==0){
//b=letter1;
//}else{
//b=letter2;
//}a+=b+"\t";
//}
//console.log(a);
//}
// 
//function caughtSpeeding(speed, birthday){
//
//   if((speed<=60)&&(birthday==false)){
//       console.log(0);
//       
//    }else if((speed>60&&speed<=80)&&(birthday==false)){
//       console.log(1);
//   }else if((speed>80)&&(birthday==false)){
//       console.log(2);
//
//   }else if((speed<=65)&&(birthday==true)){
//       console.log(0);
//   }else if((speed>65&&speed<=85)&&(birthday==true)){
//       console.log(1);
//   }else if((speed>85)&&(birthday==true)){
//       console.log(2);
//   }
//}
//
//caughtSpeeding(60, false);
//caughtSpeeding(65, false);
//caughtSpeeding(65, true);

//function palindrome(word){
//var reverse=""
//   for (var i=word.length-1; i>=0;i-- ){
//      var x= word.charAt(i)
//       
//       reverse=reverse+x
//   }
//    if (reverse==word){
//        console.log("palindrome");
//    }else {console.log(" NOT palindrome")}
//       
//}
//palindrome("noon" );
//palindrome("racecar");
//palindrome("apple");

//===================================
    


var myArray=Array(8);

for(var i=0; i<myArray.length;i++){
myArray[i]=Array(8);
}
var x=1;

for(var i=0;i<myArray.length;i++){
for(var j=0;j<myArray[i].length;j++){
myArray[i][j]=x++;
}
}

for(var i=0;i<myArray.length;i++){
var str="";
for(var j=0;j<myArray[i].length;j++){
str=str+myArray[i][j]+" ";
}
console.log(str);
}


var myArray=Array(8);

for(var i=0; i<myArray.length;i++){
myArray[i]=Array(8);
}
var ctr=1;

for(var i=0;i<myArray.length;i++){
for(var j=0;j<myArray[i].length;j++){
if((i+j)%2==0){
myArray[i][j]="W";
}else{
myArray[i][j]="B";
}
}
}

for(var i=0;i<myArray.length;i++){
var str="";
for(var j=0;j<myArray[i].length;j++){
str=str+myArray[i][j]+" ";
}
console.log(str);
}



var x=1;
for(var i=0;i<numbers.length;i++)
{
for(var j=0;j<numbers[i].length;j++)
{
if(numbers[i][j]>x) 
{
x=numbers[i][j]; 
}
}
}
console.log(x);

 

