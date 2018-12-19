//// Creating an empty Object
//var obj = {}
//var obj1= new Object();
//
//
//var Car = function(make, year, model){
//    this.make = make;
//    this.year=year;
//    this.model=model;
//    this.lightcontrol= function (lights){
//        if(lights == "ON" ){
//            lights = "OFF"
//        }else {
//            lights = "ON";
//    }
//        return lights
//}
//}
//let myCar= new Car("Honda",2018, "Civic")
////console.log(Car.prototype.__proto__=== myCar.__proto__.__proto__)// true
//
//
//Car.prototype.getAnswer= function (){
//    var ask = prompt ("Would you like to update your navigation sistem? \n 1. Yes \n 2. NO ");
//    if (ask == "1"){
//Car.prototype.LiveTraffic = function (){
//        console.log ("Your GPS  had been updated")}
//    }else{
//        console.log ('Thank you')
//    }
//}
//myCar.getAnswer()
//myCar.LiveTraffic()


//var PersonelVehicle= function(){}
//var customerChoice = prompt("Would you like to update your navigation software?Enter 1 or 2. \n1. Yes\n2. No")
//	if (customerChoice=="1"){
//	
//	PersonelVehicle.prototype.liveTraffic=function(){
//		console.log("Your GPS software is updated. Now you can avoid traffic jam!")
//	}	
//}else{
//	console.log("Thank You")
//}
//
//console.log(PersonelVehicle.prototype.liveTraffic)

//
//var SUV = function(make, year, model){
//    this.make = make;
//    this.year=year;
//    this.model=model;
//    this.allroad4x4= true;
//    this.lightcontrol= function (lights){
//        if(lights == "ON" ){
//            lights = "OFF"
//        }else {
//            lights = "ON";
//    }
//        return lights
//}
//}
//var mySUV= new SUV ("Chevrolet", 2018, "uppp")
//mySUV.__proto__.__proto__=Car.prototype;
//console.log(mySUV.__proto__.__proto__==Car.prototype)
////mySUV.getAnswer()
//
//+++++++++++++++++++++++++++++++++++

function Game (){
  this.level=0;
}

function Robot(name,year,owner){
this.name=name;
    this.year=year;
    this.owner=owner;
}
 
Game.prototype.play=function(level){
    level++
    console.log(`Welcome to level ${level}`)
    this.unlock(level);
    return level;
}
Game.prototype.unlock=function(level){
    if(level==10){
    Game.prototype.deployLaser=function(){
     console.log(`${this.name} blasting you with laser beams`)
       }; 
    }
}

let robot1=new Robot("Robby",23,"owner");
let robot2=new Robot("Rosie",25,"owner");
let game=new Game();

robot1.__proto__.__proto__=Game.prototype;

let level=game.level;
do {
    level=game.play(level);
    
} while(level<10)
robot1.deployLaser();
robot2.deployLaser();