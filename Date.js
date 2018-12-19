//if no arguments are provided, the constractors creates a JS Date Object for the current date and time according to system settings for timezone offset. 
var d = new Date();//Thu Aug 16 2018 10:20:49
console.log (d);//

var d = new Date(000000);
console.log (d);// Sun Apr 26 1970 13:46:40

var d = new Date("October,13, 2018, 11:13:00");
console.log (d);// Sat Oct 13 2018 11:13:00
  

//(year, month(months are zero index), day, time )
var d = new Date(99, 5, 24, 11,33,30,0);
console.log (d);//Thu Jun 24 1999 11:33:30


var d= new Date(2018,9 )//Mon Oct 01 2018 00:00:00 
console.log(d) // If at list two arguments are supplied, missing arguments are either  set to 1 (is day is missing) or 0 for all others/

//======Date Format=====

//    ISO Date  -  "2015-03-25"
//    Short date - "03/25/2015"
//    Long Date   - "Mar 25 2015" or "25 Mar 2015"
//       full date - "Wednesday March 25 2015"

var d = new Date ("2015-03-25")
console.log (d)//Tue Mar 24 2015 20:00:00
    
  var s = new Date ("03/25/2015")
console.log (s)//Wed Mar 25 2015 00:00:00 

var a = new Date ("Mar 25 2015")
console.log (a)//Wed Mar 25 2015 00:00:00
             
var x = new Date ("Wednesday March 25 2015")
console.log (x)// Wed Mar 25 2015 00:00:00 



//
//==============getFullYear()Method=====
var moonlanding=new Date("July, 20,69,00:20:18");
console.log(moonlanding.getFullYear());//1969

var today = new Date();
var year = today.getFullYear();
console.log(year);// 2018

//==============getFullMonth()Method=====

var moonlanding=new Date("July, 20,69,00:20:18");
console.log(moonlanding.getMonth());//6

var today = new Date();
var month = today.getMonth();
console.log(month);// 7

//========gaeDate============
    
var moonlanding = new Date("July 20, 69 00:00:18")
console.log(moonlanding.getDate());// 20

var today =  new Date ();
var date = today.getDate();
console.log(date);//16

//==========getHours()Method======
    
var moonlanding = new Date("July 20, 69 00:00:18")
console.log(moonlanding.getDate());// 20

var today =  new Date ();
var date = today.getDate();
console.log(date);//

//========getMinutes() Method====
    
  var moonlanding = new Date("July 20, 69 08:20:18")
console.log(moonlanding.getMinutes());// 20

var today =  new Date ();
var minutes = today.getMinutes();
console.log(minutes);
  


//========getMinutes() Method====
    
  var moonlanding = new Date("July 20, 69 08:20:18")
console.log(moonlanding.getMinutes());// 20

var today =  new Date ();
var minutes = today.getMinutes();
console.log(minutes);
  

//========getTime() Method====
    
  var moonlanding = new Date("July 20, 69 08:20:18")
console.log(moonlanding.getTime());//-14211582000

var today =  new Date ();
var time = today.getTime();
console.log(time);


//========getDay() Method====
//   "0"  represents  Sanday
   
  var moonlanding = new Date("July 20, 69 08:20:18")
console.log(moonlanding.getDay());//0

var today =  new Date ();
var day = today.getDay(); 
console.log(day);//4


//
//=======SET DATE METHODS=========
    
    var event = new Date("August 19,1975 23:15:30");// 
event.setDate(24);
console.log(event.getDate());
console.log (event)////Sun Aug 24 1975 23:15:30 

var theBigDate=new Date (1962,6,7);
theBigDate.setDate(24)
console.log (theBigDate);//Tue Jul 24 1962 00:00:00
theBigDate.setDate(32);
console.log (theBigDate);//Wed Aug 01 1962 00:00:00 
theBigDate.setDate(42);
console.log (theBigDate);//Tue Sep 11 1962 00:00:00 

//======setFullYear=====

var event = new Date("August 19,1975 23:15:30");// 
event.setFullYear(2016);
console.log(event.getFullYear());// 2016
console.log (event)//Fri Aug 19 2016 23:15:30 

var theBigDate=new Date (1962,6,7);
theBigDate.setFullYear(2018,11,3)
console.log (theBigDate);//Mon Dec 03 2018 00:00:00 

//======setHours() Method=====

var event = new Date("August 19,1975 23:15:30");// 
event.setHours(20);
console.log(event.getHours());//20 
console.log (event)//Tue Aug 19 1975 20:15:30 

event.setHours(20,21,22);
console.log (event)//Tue Aug 19 1975 20:21:22

var theBigDate=new Date ();
theBigDate.setHours(7)
console.log (theBigDate);//Thu Aug 16 2018 07:54:57

//======setMinutes() Method=====

var event = new Date("August 19,1975 23:15:30");// 
event.setMinutes(45);
console.log(event.getMinutes());//45
console.log (event)//Tue Aug 19 1975 20:45:30 


var theBigDate=new Date ();
theBigDate.setMinutes(7)
console.log (theBigDate);//Thu Aug 16 2018 11:07:32


//======setMonth() Method=====

var event = new Date("August 19,1975 23:15:30");// 
event.setMonth(3);
console.log (event)//Sat Apr 19 1975 23:15:30  

var theBigDate=new Date ();
theBigDate.setMonth(10)
console.log (theBigDate);// Fri Nov 16 2018 12:18:32 

//======setTime() Method=====

var event1 = new Date("july 1,1999");
var event2 = new Date();
event2.setTime(event1.getTime());
console.log (event1)//Thu Jul 01 1999 00:00:00 
console.log (event2)//Thu Jul 01 1999 00:00:00 



//Write a programm to calculate your age/ 
 var birthDay= new Date ("10/15/2000");
var today = new Date();
var years=today.getFullYear()-birthDay.getFullYear();
birthDay.setFullYear(today.getFullYear())
console.log (today<birthDay);
if (today<birthDay){
    years--;
}
console.log(years)






