//
//
var strVar = "In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees."
////
//////1) Display how many sentences in the string.
////
//var sentenestrVar= strVar.split(". ")
//console.log(sentenestrVar.length+ " sentenses");
//console.log(sentenestrVar);
////
//////2) Display how many words in the string.
////var wordstrVar=strVar.split(" ")
////console.log(wordstrVar.length + " words");
////
//// //3) Display todays date.
////console.log(sentenestrVar[1]);
////
//////4) Pick today's weather from the string and convert to Celsius and display the result.
////var F = strVar.substr(strVar.indexOf("7"),2);
////var celsius=(F-32)*5/9;
////console.log(celsius);
////
//////5) Separate Numbers and non numerical characters to 2 separate variables and display the result.
//////
//////         Please use isNaN() = is not a number method to check if it is a number or not.
//////         console.log(isNaN(1));  -- >false 
//////         console.log(isNaN("apple")); -- >true
//////
//////        Output Should Be:
//////            InordertoBecomeaNumberTestAutomationDeveloper,ineedtopracticeatleasttohoursaday.Todayis//.WeatherisFdegrees.
//////           1230811201870
////
////var strVar = "In order to Become a Number 1 Test Automation Developer, i need to practice at least 2 to 3 hours a day. Today is 08/11/2018. Weather is 70 F degrees."
////var letters ="";
////var numbers ="";
////for(i=0; i<strVar.length; i++){
////    if (isNaN(strVar.charAt(i))==true ){
////        var letters=letters+strVar.charAt(i);
////}else if(isNaN(strVar.charAt(i))==false && strVar.charAt(i)!= " "){
////    var numbers=numbers+strVar.charAt(i);
////}
////}
////console.log(letters);
////console.log(numbers);
////  
////
//////6) in the String instead of '2 to 3 hours' , display '3 to 4 hours'.
//////
////var replaced = strVar.replace("2 to 3 hours", "3 to 4 hours");
////console.log(replaced);
////
////
//////7) Display first sentence in Uppercase and other sentences in Lowercase.
////
////var up= sentenestrVar[0].toUpperCase();
////var lower= sentenestrVar[1].toLowerCase()+". "+ sentenestrVar[2].toLowerCase();
////console.log(up + ". " + lower)
////
////  
//////8) Remove all spaces from the string and display the result. 
////var noSpace=""
////for (var i=0; i<strVar.length; i++){
////     if (strVar.charAt(i)!= " "){
////     
////    noSpace =noSpace+strVar.charAt(i)
//// }
//// }console.log (noSpace)
////
////
////
////// Q9 Reverse all words order in the string and replace all "." and "," with ""
////
//////      Output Should Be:
//////      degrees F 70 is Weather 08/11/2018 is Today day a hours 3 to 2 least at practice to need i Developer Automation Test 1 Number a Become to order In
////
//
////
////
