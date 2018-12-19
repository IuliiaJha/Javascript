var shoppingList=["Orange", "Apple"];
var product = prompt("Currently you have: " + shoppingList + ". What would you like to add?" );
shoppingList.push(product);
      alert ("New list: " + shoppingList);
var remove= prompt("Currently you have: " + shoppingList + ". What would you like to remove?" );
var found=false;
for (i=0; i<shoppingList.length; i++){
    if (shoppingList[i]==remove){
           shoppingList.splice(i,1,);
              found=true;
    } 
}   
    if(found){
          alert(remove + " succesfully removed! New list: " + shoppingList)  
    }else{
        alert(remove + " could not be found!") 
    }
var remove= prompt("Currently you have: " + shoppingList + ". What would you like to change?" );
var change= prompt("What is the new product that you want to enter?" );
var found=false;
for (i=0; i<shoppingList.length; i++){
    if (shoppingList[i]==remove){
           shoppingList.splice(i,1,change);
              found=true;
    } 
}
       if(found){
          alert("Succesfully change! New list: " + shoppingList);
        
    }else{
        alert(remove + " could not be found!") 
        
    }

for (x=0; x<shoppingList.length;x++){
    alert(shoppingList[x]) ;  
}
alert( "Thank you");