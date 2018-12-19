//Write a program  that asks user to enter his/her selection and based on the selection add or remove elements from the array
//Selections 
//          1- Add a new element to the  array
//          2- Remove an element from the array
//          3- Print each element from array
//          4- Exit the program


//var stack=[];
//while(true){
//    
//var selection=parseInt(prompt("Please select one of them: \n 1-Add a new element to the  array \n 2- Remove an element from the array \n 3- Print each element from array \n 4- Exit the program"));
//if(selection==1){
//    var input=prompt("Enter your element");
//    stack.push(input);
//}else if(selection==2){
//    stack.pop();
//}else if(selection==3){
//    console.log(stack);
//    console.log(stack.toString());
////    for(var i=0;i<stack.length;i++){
////        console.log(stack[i]);
////    }
//}else if(selection==4){
//    console.log("Bye");
//    break;
//}
//}
//
//SHIFT METHOD

//var myFish=["angel", "cloun", "mandarin", "surgean"];
//var shifted=myFish.shift();
//console.log(shifted);
//for(i=0;i<myFish.length; i++){
//  console.log(myFish[i])  
//}


//var names =["Andrew", "Edward","Paul", "Chris", "John"];
//while (i=names.shift() !== undefined){
//console.log(names);
//}

//var names =["Andrew", "Edward","Paul", "Chris", "John"];
//while (names.length!=0){
//    names.shift();
//}
//console.log(names);


//
///to delete elements in an array
//var scores = [1,2,3,4,5]
//scores.splice(0,3);
//console.log(scores);
//
////to add or insert elements in an array
//var colors = ["red", "green", "blue", "yellow"];
//colors.splice(2,0, 'purple');
//console.log(colors);
//
////to substitute (or delete and add simultaneously) elements in an array
//var languages = ["C", "C++", "Java", "JavaScript"];
//languages.splice(1,1,'Python');
//console.log(languages);
//
//var languages = ["C", "C++", "Java", "JavaScript"];
//languages.splice(1,2,"Python");
//console.log(languages);
 

//var myFish=["angel", "cloun", "mandarin", "surgean"];
//myFish.splice(1, 0, "drum");
//console.log(myFish);
//
//myFish.splice(3, 1, );
//console.log(myFish);
//
//myFish.splice(2, 0, "trumpet");
//console.log(myFish);
//
//myFish.splice(0, 2, "parrot" , "animon", "blue");
//console.log(myFish);
//
//myFish.splice(2,3);
//console.log(myFish);
//
//myFish.splice(1, 1,);
//console.log(myFish);


//
//-----------1 solution--------------


//var array =["a", "b", "a", "c", "a","d"]
//var indices = [];
//var element = "a";
//for (i=0;i<array.length;i++){
//    if (element == array[i]){
//    indices.push(array.indexOf(element,i));
//    }}
//console.log (indices)

//--------------2 solution------------

//var array =["a", "b", "a", "c", "a","d"]
//var indices = [];
//var element = "a";
//for (i=0;i<array.length;i++){
//    if (element == array[i]){
//    indices.push(i);
//    }}
//console.log (indices);
//



















