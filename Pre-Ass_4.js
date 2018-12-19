//Question-1
//How do you define an Array in JavaScript?
//


// 1. Array in JavaScript it is an variable that can hold multiple values.


//Question-2
//Read the entries of an array of 10 integers from a user. Compute x as the
//average of the 10 entries and then compute the average of those entries that
//are greater than or equal to x. Print this final average.
//



//var arr=[]
//var sum=0
//for(var i=0; i<=9; i++) {
//var askNum = parseInt (prompt('Enter any number'));
//arr.push(askNum);
//sum=sum+askNum;
//}
////console.log (arr);
//var avg = sum/arr.length;
////console.log (avg)
//var arr1=[];
//var sum1=0
//for(let i in arr){
//    if (arr[i] >= avg ){
//   arr1.push(arr[i]); 
//        sum1=sum1+arr[i];
//    }
//}
////console.log (arr1)
//var avg1=sum1/arr1.length;
//console.log (avg1)


//
//Question-3
//Write a JAVASCRIPT program that sets up an array of integers with capacity 20.
//It should then generate the 20 entries randomly in turn. Each entry must be
//an integer between l and 20, however it must also be different from all previous
//entries in the array. Generate the entries as random numbers and repeatedly make
//new numbers until a legal entry value is found. The program should finish
//by printing the list of 20 array values that it has selected.

//var arr = Array(20);
//outer:
//       for(var x=0; x<=arr.length;x++){
//        var random = Math.floor(Math.random()*20,+1);
//inner: for (var i=0; i<=x;i++){
//       if (arr[i] !== random){
//		   if
//			   (typeof arr[19] !== 'undefined'){
//		             break outer;
//            }else if (x==i){
//              arr[i] = random;
//		        break inner;
//	         }
//	
//	}else if (arr[i] == random)	{
//		   x--;
//		 break inner;
//	   }		
//	}
//}
//	console.log(arr);



console.log((125/60)%2*60)

