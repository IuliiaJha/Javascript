// Creating Arrays in different ways

//var scores1 = new Array();
//var scores2 = Array(10);
//var scores3 = new Array(9,"10",5,8);
//var scores4 = ["red", 1, false];
//var scores5 = [];
//
//var names = ["Mike","Smith","Jonh", "Tedd"];
//console.log(names[0]);
//console.log(names[1]);
//console.log(names[2]);
//console.log(names[3]);
//
//console.log (names[1]+ " , " + names [0]);

//Ask user to enter index of month and print the name of the month.

//var monthNames=["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"] 
//var index = parseInt (prompt ("Enter the index of month"));
//console.log ("The month name is " + monthNames[index] );


//  var myArray = Array (11);
//myArray[0]="jan";
//myArray[1]="Feb"; 
//myArray[2]="March";
//myArray[3]="April";
//myArray[4]="May";
//myArray[5]="June";
//myArray[6]="July";
//myArray[7]="August";
//myArray[8]="Sept";
//myArray[9]="Oct";
//myArray[10]="Nov";
//myArray[11]="Decemb";
//var index = parseInt (prompt ("Enter the index of month"));
//console.log ("The month name is " + myArray[index] );

//var  myArray= Array (6);
//myArray[0]="Monday";
//myArray[1]="Tuesday";
//myArray[2]="Wedensday";
//myArray[3]="Thuresday";
//myArray[4]="Friday";
//myArray[5]="Sutarday";
//myArray[6]="Sunday";
//var index = parseInt (prompt ("Enter the index of day"));
//console.log ("The day name is " + myArray[index] );


//var shoppinglist=["chees", "pumpkin", "bred", "eggs", "milk", "almonds"];
//for (var i=0;i< shoppinglist.lenght; i++){
// console.log(shoppinglist[i]);   
//}



var cars = ["Toyota", "Honda", "Lexus", "BMW", "Mercedes", "Nissan"];

for(i=0; i<cars.length; i++){
    
    if(cars[i] == "Honda"){
        
        console.log("I found your car Honda in this array");
        break;
    
    }else if(i == cars.length -1){
             
        console.log("I could not find your car Honda in this array");
        
    }
      
}


//var cars = ["Toyota", "Honda", "Lexus", "BMW", "Mercedes", "Nissan"];
//var bool = false;
//for(i=0; i<cars.length; i++){
//    
//    if(cars[i] == "Honda"){
//        
//        bool = true;
//       
//    }
//    }
//if(bool == true){
//    
//    console.log("Found it");
//}else{
//    
//    console.log("not found it");


//console.log(Array.isArrays (cars));
//console.log(cars.toString());

//var shoppinglist=["chees", "pumpkin", "bred", "eggs", "milk", "almonds"];
//if (Array.isArray(shoppinglist)){
//console.log (shoppinglist.toString());
//}else {
//    console.log("This is not array")
//}

//
//var stack=[];
//stack.push(1);
//stack.push(2);
//stak.push(3);
//console.log(stack);
//
//for (var i=0; i< stack.length;i++){
//    console.log(stack[i]);
//}



var shoppinglist=["chees", "pumpkin", "bred", "eggs", "milk", "almonds"];
 console.log(shoppinglist.length);






















