//Q 1 Write a function that accepts an array and return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.
//Sample Output:
//firstLast6([1, 2, 6]) → true
//firstLast6([6, 1, 2, 3]) → true
//firstLast6([13, 6, 1, 2, 3]) → false

 function firstLast6(myArray) {
if (myArray.indexOf(6) == 0 || myArray.lastIndexOf(6) == array.length-1 ){
    console.log ("true")
     } else{
         console.log ("false")
 }
 }
firstLast6([1, 2, 6]) 
firstLast6([6, 1, 2, 3]) 
firstLast6([13, 6, 1, 2, 3])



// Q2 Write a function that accepts an array and check the length of the array first. If the length is more than one, check if the first element and last element are equal. if it is print true, if not print false. If the length is not more than 1, print not valid an array
//Sample Output:
//sameFirstLast([1, 2, 3]) → false
//sameFirstLast([1, 2, 3, 1]) → true
//sameFirstLast([1, 2, 1]) → true
//sameFirstLast([1]); → not a valid array



function sameFirstLast (myArray){
    var x = myArray.length;
if(x>1){
    if (myArray[0]==myArray[myArray.length-1]){
        console.log (true);
    }else {
        console.log(false);
    }
    }else if (x<=1){
        console.log ("not a valid array")
    }
}
sameFirstLast([1, 2, 3]) 
sameFirstLast([1, 2, 3, 1]) 
sameFirstLast([1, 2, 1]) 
sameFirstLast([1])


//Question-3
//Write a function that accepts 2 arrays and checks the lengths of the arrays first. If lengths are more than 1, it prints true if the arrays have the same first element or they have the same last element. If the length of the array is not more than 1, it prints the "array1 is not a valid array " or "array2 is not a valis array"
//Sample Output:
//commonEnd([1, 2, 3], [7, 3]); - >true
//commonEnd([1, 2, 3], [7, 3, 2]); - >false
//commonEnd([1, 2, 3], [1, 3]); - >true
//commonEnd([1], [7, 3]); - >array1 is not a valid array
//commonEnd([1, 2, 3], [1]); - >array2 is not a valid array

//
function commonEnd(array1, array2){
    var x = array1.length;
    var y = array2.length;
    if (x>1 && y>1 ){
        if (array1[0]==array2[0]|| array1[array1.length-1]==array2[array2.length-1]){
            console.log(true)
        }else{
            console.log(false)
        }           
        }else if (x<=1){
           console.log ("array1 is not a valid array ")
        }else if (y<=1){
           console.log ("array2 is not a valid array ")
    }
}
commonEnd([1, 2, 3], [7, 3])
commonEnd([1, 2, 3], [7, 3, 2])
commonEnd([1, 2, 3], [1, 3])
commonEnd([1], [7, 3]); 
commonEnd([1, 2, 3], [1])

//
//Question-4
//Write a function that accepts an array and prints the sum of all elements in the array
//Sample Output:
//sum([1, 2, 3]); - >6
//sum([5, 11, 2]); - > 18
//sum([7, 0, 0]); - >7
//sum([3, -2, 10,4]); - >15

function sum(array){
    x=0
    for(i=0;i<array.length; i++){
        x=x+array[i]
    }
    console.log(x)
}
sum([1, 2, 3])
sum([5, 11, 2])
sum([7, 0, 0])
sum([3, -2, 10,4])


//Question-5
//Write a function that accepts an array and prints an array with the elements "rotated left"
//so [1,2,3] yields [2,3,1]
//Sample Output:
//rotateLeft([1, 2, 3]);  - >[2,3,1]
//rotateLeft([5, 11, 9]); - >[11,9,5]
//rotateLeft([7, 0, 0]); - >[0,0,7]
//rotateLeft([17, 12, 10, 8]); - >[12,10,8,17]

function rotateLeft(array){
   var x = array.shift()
   array.push(x)
   console.log(array)
}

rotateLeft([1, 2, 3])
rotateLeft([5, 11, 9])
rotateLeft([7, 0, 0])
rotateLeft([17, 12, 10, 8])


//Question-6
//Write a function that accepts an array and figure out which is greatest element in the array, and set all the other elements to be that value. Print the changed array.
//Sample Output:
//maxEnd([1,2,3]); - > [3,3,3]
//maxEnd([11,5,9]); - > [11,11,11]
//maxEnd([2,11,17]); - > [17,17,17]


function maxEnd(array){
   var counter=0;
   for(var i=0; i<array.length; i++){
     if(counter<array[i]){
         counter=array[i]
     }
   }
for (var j=0; j<array.length; j++){
   
   array[j]=counter
}
   console.log(array)

}
maxEnd([1,2,3])
maxEnd([11,5,9])
maxEnd([2,11,17])


//Q#7
//Write a function that accepts 2 arrays and prints the second array containing the first and last elements from the first array.
//Sample Output:
//makeEnds([1,2,3],[]);  - >[1,3]
//makeEnds([1,2,3,4],[]); - >[1,4]
//makeEnds([7,4,6,2],[]); - >[7,2]

function makeEnds(array1, array2){
 array2.push(array1[0],array1[array1.length-1])  
    console.log(array2)  
}
makeEnds([1,2,3],[])
makeEnds([1,2,3,4],[])
makeEnds([7,4,6,2],[])


//Question-8
//Write a function that accepts an array and prints true if it contains a 2 or a 3
//Sample Output:
//has23([2,5]); - >true
//has23([4,3]); - >true
//has23([4,5]); - >false


function has23(array){
    for (var i=0; i<array.length; i++){
        if (array[i]==2||array[i]==3){
            console.log(true)
            break;
        }else  if(i==array.length-1){
            console.log(false)
            break;
        }
    } 
}
has23([2,5])
has23([4,3])
has23([4,5,7,8,9])

//Question-9
//Write a function that accepts an array and prints a new array with double the length where its last element is the same as the original array, and all the other elements are 0.
//Sample Output:
//makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
//makeLast([1, 2]) → [0, 0, 0, 2]
//makeLast([3]) → [0, 3]
//
function makeLast(array1){
 var array2=Array(array1.length*2)
 for(i=0; i<=array2.length;i++){
     array2[i]=0;
 }
 array2[array2.length-1]=array1[array1.length-1]
    console.log(array2)
}
makeLast([4, 5, 6]) 
makeLast([1, 2])
makeLast([3]) 

//Question-10
//Write a function that accepts an array and prints true if the array contains 2 twice or 3 twice.
//Sample Output:
//double23([2,2]); - >true
//double23([3,3]); - >true
//double23([2,3]); - >false
//double23([12,20,42]); - >false
//double23([2,2,2]); - >false

function double23(array){
    var counter1=0;
    var counter2=0;
    
for (var i=0; i<array.length; i++){    

 if (array[i]==2){
     counter1++;
     
 }else if(array[i]==3){
     counter2++;
 }
}
if (counter1==2||counter2==2 ){
console.log("true")
        
}else{
            console.log(false)
        }
    } 
double23([2,2])
double23([3,3])
double23([2,3])
double23([12,20,42])
double23([2,1,2,2])
