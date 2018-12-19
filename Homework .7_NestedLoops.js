//Print following output using nested for loops:
//1
//22
//333
//4444
//55555
//666666
//7777777

////question #1
//
//for (var i=1; i<=7; i++){
//   str="" 
//for (var p=1; p<=i ;p++){
//   str = str+i
//}console.log(str);
//}
  

////Question #2
////    
//for(var i=0; i<4; i++){
//   var space=" ";
//   for (var j=1;j<i+1;j++) {
//       space=space+" ";
//   }
//   for( j=4-i; j>=1; j--){
//       space= space+j+" "
//   }
//   console.log(space);
//}
//    
////    Question #3 
////    
// for(var y=1; y<11; y++){
//   var result="";
//   for( x=1; x<=10; x++){
//      result = result+x*y+ " "
//   }
//   console.log(result);
//}   
    
////Question #4
//
//
    letters = ""
for (var y = 1; y <= 8; y++) {
for (var x = 1; x <=4 ; x++) {
     if (y % 2 === 0) {
        letters=letters + " B W" 
   } else {
        letters=letters + " W B"
    }
    }
        letters=letters+ "\n"
        }
    console.log(letters)



