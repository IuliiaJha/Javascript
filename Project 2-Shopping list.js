//
//    
//var price=0;
//do{
//var keepShopping=true;
//var Veg =["Cucumber","Tomatoes","Onion","Pepper", "Carrot", 2.5, 3, 1.5, 2, 4];
//var Fruit = ["Orange","Banana","WaterMelon","Apple", "Cherry", 3.5, 4, 7, 8, 4];
//var choose=true;
//do{
//var cart = parseInt(prompt("What would you like to buy?" +"\n" + "1. Vegetables"+"\n" + "2. Fruits"));
//  if (cart ==1){
//      choose=false;
//      var VegList="";
//      for (i=0; i<=Veg.length/2-1; i++){
//var VegList = VegList + (i+1) + "." + Veg[i] +" $"+ Veg[i+Veg.length/2] +"\n" 
//}
//var goodVeg=true;
//while(goodVeg){
//   var VegBasket=parseInt(prompt(VegList));
//    if (VegBasket <=0 || VegBasket>5|| isNaN(VegBasket)){
//        alert("Please enter valid option")
//    }else {
//        goodVeg=false;
//      for (i=0; i<=Veg.length/2; i++){
//          if (VegBasket==i){
//              var Veg1=Veg[i-1];
//              var priceVeg1=Veg[i+Veg.length/2-1];
//               break;
//          }
//      }
//    }
//}
//    var goodAmount=true;
//while (goodAmount){
//    var amount = parseInt(prompt( "Please, Enter amount of " + Veg1 ));
// if (amount<=0 || amount>100 || isNaN(amount)){
//          alert("Please enter amount between 1 to 100");
//    }else {
//    goodAmount=false;
//     var price = price+(priceVeg1*amount);
//     alert("Your cart total is  $" + price);         
//     } 
//  };
//    }else if (cart ==2){
//choose=false;
//var FruitList="";
//      for (i=0; i<=Fruit.length/2-1; i++){
//var FruitList = FruitList + (i+1) + "." + Fruit[i] +" $"+ Fruit[i+Fruit.length/2] +"\n" 
//}
//  var goodFruit=true;
//while (goodFruit){
//   var FruitBasket=parseInt(prompt(FruitList));
//    if (FruitBasket <=0 || FruitBasket>5 || isNaN(FruitBasket)){
//        alert("Please enter valid option");
//    }else {
//        goodFruit=false;
//      for (i=0; i<=Fruit.length/2; i++){
//          if (FruitBasket==i){
//              var Fruit1=Fruit[i-1];
//            var priceFruit1=Fruit[i+Fruit.length/2-1]
//            break;
//          }
//      }
//    }
//}
//    var goodAmountOfFruits=true;
//    while(goodAmountOfFruits){
//    var amountOfFruits = parseInt(prompt( "Please, Enter amount of " + Fruit1));
// if (amountOfFruits<=0 || amountOfFruits>100|| isNaN(amountOfFruits)){
//          alert("Please enter amount between 1 to 100")
// }else { 
//     goodAmountOfFruits=false;
//     var price = price+(priceFruit1*amountOfFruits);
//     alert("Your cart total is  $" + price);         
//     }
//    }
//}else if (cart <1 || cart >2 || isNaN(cart)){
//    alert ("Please enter valid option");
//}
//}while(choose);    
//var openShop=true;
//while (openShop){
//var keepShopping = parseInt(prompt("Do you want to shop more ?" + "\n"+ "1. Yes "+ "\n"+ "2. No"));
//if  (keepShopping<1||keepShopping>2||isNaN(keepShopping)){
//    alert("Please enter valid option");
//}else if  (keepShopping==1){
//    break;
//}else  if (keepShopping==2) {
//    alert ("Your cart total is  $" + price+ "\n"+ "Thank you for shopping");
//    var openShop=false;
//   var keepShopping=false;
//} 
//}
//}while(keepShopping);
//
//============Jamal solution=========
    
    
    var v1,v2,v3,v4,v5, pv1,pv2,pv3,pv4,pv5, f1,f2,f3,f4,f5, pf1,pf2,pf2,pf3,pf4,pf5, mainProduct, vegiProduct, fruitProduct, amountV, totalV,totalF, total
  
v1 = "Cucumber";  
v2 ="Tomatoes" ;  
v3 = "Onion";
v4= "Pepper" ;      
v5= "Carrot"  ;
//price of vegies
pv1= 2.5;
pv2= 3;
pv3= 1.5;
pv4=2;
pv5= 4;

f1="Orange" ;       
f2="Banana";      
f3="WaterMelon";
f4="Apple";             
f5="Cherry"; 
//price of fruits
pf1=3.5;
pf2=4;
pf3=7;
pf4=8;
pf5=4;
total=0;
mainloop:
do {        
  mainProduct= prompt("What type of product you want to buy? \n1-Vegetable \n2-Fruits" ) ;
if (mainProduct==1){
    VegiLoop:
    do{
    vegiProduct= prompt("1-"+v1+" $"+pv1+ "\n2-"+v2+" $"+pv2+ "\n3-"+v3+" $"+pv3+ "\n4-"+v4+" $"+pv5+ "\n5-"+v5+" $"+pv5);
    if (vegiProduct==1){
        do{
 amountV =prompt("Please enter amount  of " + v1) 
    if(amountV >0 && amountV <=100){
       amountV = parseInt(amountV);
      totalV=amountV*pv1;
        break VegiLoop;
    }else {
        alert("Please enter amount between 1 to 100")
    }
            //amount loop;
        }while(true);
    }
     if (vegiProduct==2){
               do{
 amountV =prompt("Please enter amount of " + v2) 
    if(amountV >0 && amountV <=100){
       amountV = parseInt(amountV);
      totalV=amountV*pv2;
             break VegiLoop;
    }else {
        alert("Please enter amount between 1 to 100")
    }
            //amount loop;
        }while(true)
    }else if (vegiProduct==3){
        do{
 amountV =prompt("Please enter amount of" + v3) 
    if(amountV >0 && amountV <=100){
       amountV = parseInt(amountV);
      totalV=amountV*pv3;
          break VegiLoop;
    }else {
        alert("Please enter amount between 1 to 100")
    }
            //amount loop;
        }while(true);
        total+=totalV;
    }else if (vegiProduct==4){
        do{
 amountV =prompt("Please enter amount of " + v4) 
    if(amountV >0 && amountV <=100){
       amountV = parseInt(amountV);
      totalV=amountV*pv1;
           break VegiLoop;
    }else {
        alert("Please enter amount between 1 to 100")
    }
            //amount loop;
        }while(true);
        total+=totalV;
        
    }else if (vegiProduct==5){
        do{
 amountV =prompt("Please enter amount of " + v5) 
    if(amountV >0 && amountV <=100){
       amountV = parseInt(amountV);
      totalV=amountV*pv5;
        break VegiLoop;
    }else {
        alert("Please enter amount between 1 to 100")
    }
            //amount loop;
        }while(true)
            
    }
            total+=totalV;
            alert("Your cart total is: " + total);
    
        do{ 
        var askAgain= prompt("Do you want to continue shopping? \n1.-Yes |n2-No");
        if (askAgain==1){ 
            continue mainloop;
        }else if (askAgain==2){
            break mainloop;
            alert ("Your total cost is "+ total+". Thank you for shopping")
    }
        }while(true);
     }while(true);
    } else if (mainProduct==2){
    fruitProduct = prompt("1-"+f1+" $"+pf1+ "\n2-"+f2+" $"+pf2+ "\n3-"+f3+" $"+pf3+ "\n4-"+f4+" $"+pf5+ "\n5-"+f5+" $"+pf5)
    
    }else{ 
            alert("Please, put valid option")

 }
    }while (true)
     
