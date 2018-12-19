//Write a function that accepts a string and a non-negative number, and prints a larger string that is number copies of the original String•stringTimes("Hi", 2) → "HiHi"•stringTimes("Hi", 3) → "HiHiHi"•stringTimes("Hi", 1) → "Hi"


stringTimes= function(string1,number){
    var x=""
  for(i=0; i<number; i++){
      x = x+string1;
  }
    console.log(x);
}
stringTimes("Hi",5);

// Q2 The number 6 is a truly great number. Write a function that accepts num1 and num2, prints true if either one is 6. 
//Or if their sum or difference is 6.
//•love6(6, 4) → true
//•love6(4, 5) → false
//•love6(1, 5) → true
//•love6(12, 6); ->true


function love6(num1,num2){
    if (num1==6||num2==6||num1-num2==6||num1+num2==6)
    {
    console.log(true);
    }else{
        console.log(false);
    }
}
love6(6,4);
love6(4,5);
love6(1,5);
love6(12,6);


// Q 3 We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Write a function that accepts a number and prints true if the given number is special.
//•specialEleven(22) → true
//•specialEleven(23) → true
//•specialEleven(24) → false
//
 function specialEleven(number){
     if (number%11<=1){
       console.log("true")
     } else {
         console.log(false);
 }
 }
specialEleven(22)
specialEleven(23)
specialEleven(24)


//4•The deersin VA spend most of the day playing. In particular, they play if the temperature is between 60 and 90. Unless it is summer, then the upper limit is 100 instead of 90.
//•Write a function that accepts temperature and a booleanisSummer, prints true if the deersplay and false otherwise.•
//•deerPlay(70, false) → true•
//deerPlay(95, false) → false•
//deerPlay(95, true) → true

function deerPlay(temp,isSummer){
    if (isSummer==true){
    (temp>=60 && temp<=100);
    console.log(true);
    }else if (isSummer!=false){
    (temp>=60 && temp<=90);
    console.log(true);
    }else{
        console.log(false);
    }
}
deerPlay(70, false);
deerPlay(95, false);
deerPlay(95, true);

//5•Write a function that accepts an array and prints the number of 9 s in the array•
//•arrayCount9([1, 2, 9]) → 1
//•arrayCount9([1, 9, 9]) → 2
//•arrayCount9([1, 9, 9, 3, 9]) → 3


function arrayCount9(numbers){
    var counter=0;
    for (var i=0;i<numbers.length;i++){
        if(numbers[i]==9){
         counter++;
        }
        }console.log(counter)
    }
arrayCount9([1, 2, 9]) 
arrayCount9([1, 9, 9]) 
arrayCount9([1, 9, 9, 3, 9]) 

//
//6•When chipmunks get together for a party, they like to have cigars. A chipmunk party is successful when the number of cigars is between 40 and 60. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Write a function that accepts number of cigars and a booleanfor weekend, and prints true if the party with the given values is successful, or false otherwise.
//•cigarParty(30, false) → false
//•cigarParty(50, false) → true
//•cigarParty(70, true) → true 

cigarParty=function (numberOfcigars, isWeekend){
if (isWeekend==true){
numberOfcigars>=40;
console.log(true);
}else if (isWeekend==false){
numberOfcigars>=40 && numberOfcigars<=60;
console.log(false);
}
}
cigarParty(30, false) 
cigarParty(50, false) 
cigarParty(70, true) 


//7•Write a function that accepts an array and prints true if the first instance of "x" in the array is immediately followed by another "x". if array doesn't have "x", print "not found"
//•doubleX(["a","x","x","b","b"]) → true
//•doubleX(["a","x","a","x","a","x"]) → false
//•doubleX(["x","x","x","x","x"]) → true
//•doubleX(["a","a"]); -> not found


function doubleX(letters){
    for (var i=0; i<letters.length;i++){
if(letters[i]=="x" && letters[i+1]=="x") {
            console.log("true")
            break;
}else if (letters[i]=="x" && letters[i+1]!=="x"){
            console.log("false")
            break;
}else if (i == letters.length -1){
        console.log( " Not found")
        }
    }
}

doubleX(["a","x","x","b","b"]) 
doubleX(["a","x","a","x","a","x"])
doubleX(["x","x","x","x","x"])
doubleX(["a","a"])


//8•You are driving a little too fast, and a police officer stops you. Write a function to compute the result: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday --on that day, your speed can be 5 higher in all cases.
//•caughtSpeeding(60, false) → 0
//•caughtSpeeding(65, false) → 1
//•caughtSpeeding(65, true) → 0
//  
function caughtSpeeding(speed,isBirthday){
    if (isBirthday==false){
    if (speed>=81){
        console.log(2);
    }else if(speed>=61){
        console.log(1);
    }else if(speed<=60){
        console.log(0)
    }
    }
    if (isBirthday==true){
    if (speed>=81+5){
        console.log(2);
    }else if(speed>=61+5){
        console.log(1);
    }else if(speed<=60+5){
        console.log(0)
    }
}
}
caughtSpeeding(60, false) 
caughtSpeeding(65, false) 
caughtSpeeding(65, true)
//
//Question-4
//You and your date are trying to get a table at a restaurant. The parameter "yourStyle" is the stylishness of your clothes, in the range 0..10, and "dateStyle" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe). 
//Write a function that accepts yourStyle and dateStyle and prints the result
//dateFashion(5, 10) → 2
//dateFashion(5, 2) → 0
//dateFashion(5, 5) → 1


function dateFashion (you,date){
    if (you>=8||date>=8){
        console.log(2)
    }else if (you<=2||date<=2){
        console.log(0)
    }else{ 
        console.log(1)
    }
}
dateFashion(5, 10) 
dateFashion(5, 2) 
dateFashion(5, 5) 

//Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, write a funtion that accepts the indexOfDay and isVacation and prints a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".
//alarmClock(1, false); ->"7:00"
//alarmClock(5, false); ->"7:00"
//alarmClock(0, false); ->"10:00"
//alarmClock(2,true); ->"10:00"
//alarmClock(6,true); ->off

function alarmClock(indexOfDayday, isVacation){
      if (isVacation==false){
    if (indexOfDayday==0 ||indexOfDayday==6){
        console.log("10:00");
    }else {
        console.log("7:00");
    }
      }
    if (isVacation==true){
  if (indexOfDayday==0 ||indexOfDayday==6){
        console.log("Off");
    }else {
        console.log("10:00");
    }
      }
}
alarmClock(1, false)
alarmClock(5, false)
alarmClock(0, false)
alarmClock(2,true)
alarmClock(6,true)




