//You are in the market to buy a car and visited a dealer
//
//1- create a dealer array with some objects inside. Objects will have car informations like make,model,year,mileage,and state.
//
//2- create a function that checks if the car state is VA
//
//3- print all the cars where the year is more than 2010 that belongs to va 
//
//4- print total mileage of the cars that belongs to va 


let  dealer=[
    {make:"Honda", model:"Civic", year:2000, mileage:2000, state:"VA"},
    {make:"Toyota", model:"Corolla", year:2010, mileage:1500, state:"PH"},
    {make:"Ford", model:"Fiesta", year:2015, mileage:1000, state:"MD"},
    {make:"Audi", model:"Q5", year:2018, mileage:100, state:"VA"},
    {make:"KIA", model:"JET", year:2014, mileage:100, state:"VA"},
    {make:"Lexus", model:"XXX", year:1990, mileage:5000, state:"VA"}
]

var checkState = function(data,callback){
    for (let i= 0; i<data.length; i++){
        if(data[i].state.toLowerCase()=="va"){
 
    if(typeof callback == "function"){
            callback(data[i]);
         }
       }
    }
}
checkState(dealer, function(x){
    if (x.year>2010){
        console.log(`${x.make} ${x.model} ${x.year}  belongs to ${x.state} and older the 2010 year`)
//        if(typeof totalMileage == "function"){
//            totalMileage(data[i]);
//     }
    }
})
  let TotalMileage = function(){
    let total = 0;
     checkState(dealer, function(x){ 
        total = total + x.mileage
     })
      console.log("Total mileage of cars that belongs to VA: " + total)  
         }
                
TotalMileage ();  


