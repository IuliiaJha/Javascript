Question1

Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.

sameStarChar("xy*yzz") → true

sameStarChar("xy*zzz") → false

sameStarChar("*xa*az") → true

function sameStarChar(str){
    for (i=0; i<str.length;i++){
    if (str.charAt(i)=="*" && str.charAt(i-1)==str.charAt(i+1)){
            console.log ("true")
        break; 
       
    }else if 
        (i==str.length-1){
            console.log ("false")
            break;
        }
    }
}

sameStarChar("xy*yzz")
sameStarChar("xy*zzz") 
sameStarChar("xa*az") 



Question2

We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

countTriple("abcXXXabc") → 1

countTriple("xxxabyyyycd") → 3

countTriple("a") → 0

function countTriple (str){
    var counter=0;
    for (i=0; i<str.length;i++){
        if(str.charAt(i)==str.charAt(i+1) &&str.charAt(i)==str.charAt(i+2)){
            counter++;
        
        }else if (i==str.length-1)
           break;
    }
console.log (counter)
}

countTriple("abcXXXabc") 

countTriple("xxxabyyyycd") 

countTriple("a") 

Question3

We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

gHappy("xxggxx") → true

gHappy("xxgxx") → false

gHappy("xxggyygxx") → false


function gHappy(str){
    var counterG=0;
for (i=0; i<str.length;i++){
    if(str.charAt(i)!=str.charAt(i-1)&&str.charAt(i)!=str.charAt(i+1)){
        counterG++
}
}
    if (counterG>0){
        console.log (false);
    }else {(i==str.length-1 )
        console.log(true)
    }
}
gHappy("xxggxx") 

gHappy("xxgxx") 

gHappy("xxggyygxx") 



Question4

Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

equalIsNot("This is not") → false

equalIsNot("This is notnot") → true

equalIsNot("noisxxnotyynotxisi") → true



function equalIsNot (str){
    counterIs=0;
    counterNot=0;
    for (i=0; i<str.length-1;i++){
        if(str.substring(i,i+2)=="is"){
            counterIs++;
        }else if(str.substring(i,i+3)=="not"){
            counterNot++;
        }
}
 if (counterIs == counterNot){
            console.log(true);
}else{
      console.log(false);
      }
    }    

}
equalIsNot("This is not") 
equalIsNot("This is notnot") 
equalIsNot("noisxxnotyynotxisi") 

Question5

A sandwich is two pieces of bread with something in between. Return the string that is between the first and last appearance of "bread" in the given string, or return the empty string "" if there are not two pieces of bread.

getSandwich("breadjambread") → "jam"

getSandwich("xxbreadjambreadyy") → "jam"

getSandwich("xxbreadyy") → ""

 

function getSandwich(str){
    counter=0;
    for (i=0; i<str.length;i++){
        if (str.substring(i,i+5)=="bread"){
            counter++
            var x = str.substring(str.indexOf("bread")+5, str.lastIndexOf("bread"))
        }
        }
    
    if (counter == 1){
     console.log('""');
}else {console.log (x)
}
}

getSandwich("breadjambreadhhhbreadbutterbread") 
getSandwich("xxbreadjambreadyy") 
getSandwich("xxbreadyy")




Question6

Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.=

endOther("Hiabc", "abc") → true

endOther("AbC", "HiaBc") → true

endOther("abc", "abXabc") → true



function endOther(str1, str2){
    var x =str1.toLowerCase()
     var y =str2.toLowerCase()
     
     if (x.includes(y)){
         if (x.substr(-y.length)==y){
     console.log(true);
     }
}
     if (y.includes(x)){
         if (y.substr(-x.length)==x){
     console.log(true);        
     }
    } else if ((x.includes(y))==false){ 
        console.log(false)
        }
}
endOther("Hiabc", "abc") 
endOther("AbC", "HiaBc") 
endOther("abc", "abXabc") 
  

Question 6

Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

hasBad("badxx") → true

hasBad("xbadxx") → true

hasBad("xxbadxx") → false


function hasBad(str){
if (str.indexOf("bad")==0||str.indexOf("bad")==1){
         console.log(true);
    }else console.log(false);
}
hasBad("badxx") 
hasBad("xbadxx") 
hasBad("xxbadxx") 


Question7

Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

seeColor("redxx") → "red"

seeColor("xxred") → ""

seeColor("blueTimes") → "blue"


function seeColor(str){
    if (str.search("red")==0){
        str="red";
}else if (str.search("blue")==0){
        str="blue";
}else {
        str= " "
}
console.log(str)
}
seeColor("redxx");
seeColor("xxred") ;
seeColor("blueTimes"); 



function getSandwich(str){
    var counter=0;
   var  boolean=false;
    var x =""
    for (i=0; i<str.length;i++)
        if (str.substring(i,i+5)=="bread"){
            counter++;
        if (str.substring(i,i+5)!="bread" )
        {var x = x+str.charAt(i+4);
    } console.log(x)
   if (counter == 1){
     console.log('""');
}
}
}
getSandwich("breadjambreadhhhbreadbutterbread") 
getSandwich("xxbreadjambreadyy") 
getSandwich("xxbreadyy")