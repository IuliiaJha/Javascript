//How to print certan element from Multidimentional Array

            
var activities=[["work",9],["eat",2],["commute",2]["play game",2],["sleep",7]];
                       
 for(var i=0;i<activities.length;i++){
     var innerArrayLength=activities[i].length;
     for(var j=0;j<innerArrayLength;j++){
console.log("[" +i+ "," +j+ "]="+activities[i][j])
     }
 }

//var arrayLength = 3;
//
//var multiArray=Array(arrayLength);
//multiArray[0]=Array(arrayLength);
//multiArray[1]=Array(arrayLength);
//multiArray[2]=Array(arrayLength);
//

//multiArray=[
//    [.....,.....,...],
//    [.....,.....,...],
//    [.....,.....,...],
//]
    
//var arrayLength = 3;
//var multiArray=Array(arrayLength);
//for(i=0; i<multiArray.length; i++){
//multiArray[i]=Array(arrayLength);
//}
////first
//multiArray[0][0]="apple";
//multiArray[0][1]="banana";
//multiArray[0][2]="cherry";
//
////second
//multiArray[1][0]=10;
//multiArray[1][1]=20;
//multiArray[1][2]=5;

//third
//multiArray[2][0]=["test", "again"];
//multiArray[2][1]=["Java", "Script"];
//multiArray[2][2]=["read", "books"];

//console.log(multiArray[2])
//console.log(multiArray[2][2])
//console.log(multiArray[2][2][1])

    
//    var multiArray=[
//    ["apple","banana","cherry"],
//    [10,20,5], 
//    [  ["test","again"], ["Java","Script"], ["read", "books"]]
//    ];
//   for (i=0;i<multiArray.length;i++){
//for(j=0;j<multiArray[i].length;j++){
//  console.log (multiArray[i] [j]) 
//   }
//   }