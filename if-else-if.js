/*1-Mondday
2-Tuesday
3-Wednesday
4-Thursday
5-Friday
6-Saturday
7-Sundays


var day=1;
if (day==1){
console.log("Mo");
}else 
if (day==2)
{console.log("Tu");
    }else 
if (day==3){
console.log("Wed");}
else {
if (day==4)
{console.log("Th");
    }else 
if (day==5)
{console.log("Fr");
    }else 
if (day==6){
console.log("Sat");
    }else 
if (day==7)
console.log("Tu");
} else{
    console.log("Not a valid data");
}
*/

//var num1,num2, num3;
//num1=prompt("Enter number 1");
//num1=parseInt(num1);
//num2=prompt("Enter number 2");
//num2=parseInt(num3);
//num3=prompt("Enter number 3");
//num3=parseInt(num3);
//if ((num1>num2) && (num1>num3))
//{
//console.log(num1 + " is greatest");
//} else if
//    ((num2>num1) && (num2>num3))
//    {console.log (num2 + " is greatest") ;
//    } else 
//        ((num3>num1) && (num3>num2))
//    {console.log (num3 + " is greatest");
//    }


var sub1= prompt("Enter your score for subject 1");
sub1 =parseInt(sub1);
var sub2= prompt("Enter your score for subject 2");
sub2 =parseInt(sub2);
var sub3= prompt("Enter your score for subject 3");
sub3 =parseInt(sub3);
var result=(sub1+sub2+sub3)/3;
result=parseInt(result);
if ((sub1<0||sub1>100)||(sub2<0||sub2>100)||(sub3<0||sub3>100)) {console.log("Enter valid score");       }else{
if((result>0)&&(result<=59))
{console.log ("Your result is " + result + ", your grade is F")}
else if ((result>=60)&&(result<=69))
{console.log ("Your result is " + result + ", your grade is D");
} 
else if ((result>=70)&&(result<=79))
{console.log ("Your result is " + result + ", your grade is C");
}
else if ((result>=80)&&(result<=89))
{console.log ("You grade is B");
}
else if ((result>=90)&&(result<=100))
{console.log ("Your result is " + result + ", your grade is A");
}
else {
    console.log("Your result is not valid")
}
}


     

    
    
    