
//CAR GAS PRICE CALCULATOR
//
//1-Ask user to enter min and max mileage and create 4 random mileage between max and min and store them into an array
//
//2-Ask user to enter the gas prices for regular, premium and supper and put them into an object with key and values
//
//3-Create a constructor called Car which includes properties:
//make,model,year,mileage,level,tank
//
//4-Add a method to calculate the average mileage
//
//5-Add a method to calculate the how much gas comsume:
//if average mileage is between 0 and 500, car comsumes 10 percent more than full tank
//if average mileage is between 500 and 1000, car comsumes 20 percent more than full tank
//if average mileage is between 1000 and 5000, car comsumes 30 percent more than full tank
//if average mileage is between 5000 and 10000, car comsumes 40 percent more than full tank
//otherwise car consumes 50 percent more than full tank
//
//
//6-Add a method to calculate the cost of the gas:
//if car year is 2018, that car needs super level gas
//if car year is between 2010 and 2018, that car needs premium level gas
//if car year is between 2000 and 2010, that car needs regular gas
//
//cost of the gas = gas price * tank
//
//7-Create couple of car objects and console the cost of the gas
//===========


==============
   var minMileage = parseInt(prompt("Please, enter min mileage"));
var maxMileage = parseInt(prompt("Please, enter max mileage"));
var mileage=[];
for (i=0; i<4;i++){
   mileage.push(Math.floor(Math.random(minMileage )*maxMileage+1))
}
console.log (mileage)

var gasPrice = {
    premiumGas: function() {
    return  parseInt(prompt("Please, enter the price of premium gas"));
},
     supperGas: function(){
         return  parseInt(prompt("Please, enter the price of  supper gas"))
    },
    regularGas: function(){
         return  parseInt(prompt("Please, enter the price of  regular gas"))
    }
}
function Car(make,model,year,tank,mileage,level,calculateAverageMLG, calculateGasConsumes, calculateCostOfGas){
    this.make=make;
    this.model=model;
    this.year=year;
    this.tank=tank;
    this.mileage=mileage;
    this.level=level;
    this.calculateAverageMLG = function() {
        var sum=0;
           for (var i=0; i<this.mileage.length;i++){
               sum=sum+this.mileage[i];
        }
       var AverageMLG= sum/this.mileage.length;
        return AverageMLG;
        
    }
    this.calculateGasConsumes=function(){
        if (this.calculateAverageMLG()>=10000){
            var GasConsumes=this.tank+this.tank*0.5;
        }else if(this.calculateAverageMLG()>=5000){
            var GasConsumes=this.tank+this.tank*0.4
        }else if (this.calculateAverageMLG()>=1000){
            var GasConsumes=this.tank+this.tank*0.3;
        }else if (this.calculateAverageMLG()>=500){
            var GasConsumes=this.tank+this.tank*0.2;
        }else if(this.calculateAverageMLG()>=0){
            var GasConsumes=this.tank+this.tank*0.1
            }
        return GasConsumes;
    }
    
        this.calculateCostOfGas = function(){
    if (this.year==2018){
var finalPrice= this.level[0]*this.calculateGasConsumes()
      } else if (this.year>=2000 && this.year<2018 ){
var finalPrice= this.level[1]*this.calculateGasConsumes()
      }else if (this.year<2000){
var finalPrice= this.level[2]*this.calculateGasConsumes()
} 
    console.log("For " + this.make + " "+ this.model+ " " + this.year + " year cost of gas is " + finalPrice)
            return finalPrice
            }
        }
var car1= new Car("Toyota", "Corolla", 2014, 50, mileage,[gasPrice.premiumGas(),gasPrice.supperGas(), gasPrice.regularGas()]);
var car2= new Car("Audi", "Q5", 2018, 100, mileage,[gasPrice.premiumGas(),gasPrice.supperGas(), gasPrice.regularGas()]);
var car3= new Car("Honda", "Civic", 2000, 70, mileage,[gasPrice.premiumGas(),gasPrice.supperGas(), gasPrice.regularGas()]);
car1.calculateCostOfGas();
car2.calculateCostOfGas();
car3.calculateCostOfGas();

 ======
 var min = parseInt(prompt("Please, enter min mileage"));
var max = parseInt(prompt("Please, enter max mileage"));
var mileage=[];
for (i=0; i<4;i++){
mileage.push(Math.floor(Math.random()*(max-min+1)+min))
}
var premium = parseInt(prompt("Please, enter the price of premium gas"));
var supper = parseInt(prompt("Please, enter the price of supper gas"));
var regular= parseInt(prompt("Please, enter the price of regular gas"));

var gasPrice={
    premiumGas:premium,
    supperGas: supper,
    regularGas:premium
}
function Car(make,model,year,tank,mileage,level,calculateAverageMLG, calculateGasConsumes, calculateCostOfGas){
    this.make=make;
    this.model=model;
    this.year=year;
    this.tank=tank;
    this.mileage=mileage;
    this.level=level;
    this.calculateAverageMLG = function() {
        var sum=0;
           for (var i=0; i<this.mileage.length;i++){
               sum=sum+this.mileage[i];
        }
       var AverageMLG= sum/this.mileage.length;
        return AverageMLG;
        
    }
    this.calculateGasConsumes=function(){
        if (this.calculateAverageMLG()>=10000){
            var GasConsumes=this.tank+this.tank*0.5;
        }else if(this.calculateAverageMLG()>=5000){
            var GasConsumes=this.tank+this.tank*0.4
        }else if (this.calculateAverageMLG()>=1000){
            var GasConsumes=this.tank+this.tank*0.3;
        }else if (this.calculateAverageMLG()>=500){
            var GasConsumes=this.tank+this.tank*0.2;
        }else if(this.calculateAverageMLG()>=0){
            var GasConsumes=this.tank+this.tank*0.1
            }
        return GasConsumes;
    }
    
        this.calculateCostOfGas = function(){
    if (this.year==2018){
var finalPrice= gasPrice.premiumGas*this.calculateGasConsumes()
      } else if (this.year>=2000 && this.year<2018 ){
var finalPrice= gasPrice.supperGas*this.calculateGasConsumes()
      }else if (this.year<2000){
var finalPrice= gasPrice.regularGas*this.calculateGasConsumes()
} 
    console.log("For " + this.make + " "+ this.model+ " " + this.year + " year cost of gas is " + finalPrice)
            return finalPrice
            }
        }
var car1= new Car("Toyota", "Corolla", 2014, 50, mileage, gasPrice);
var car2= new Car("Audi", "Q5", 2018, 100, mileage, gasPrice);
var car3= new Car("Honda", "Civic", 2000, 70, mileage, gasPrice);
car1.calculateCostOfGas();
car2.calculateCostOfGas();
car3.calculateCostOfGas();