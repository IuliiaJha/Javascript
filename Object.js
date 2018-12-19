//var plan1Name="Basic";
//var plan1Price=3.99;
//var plan1Space=100;
//var plan1Data=100;
//var plan1Pages=10;
//
//var plan2Name="Professional";
//var plan2Price=5.99;
//var plan2Space=500;
//var plan2Data=5000;
//var plan2Pages=50;
//
//var plan3Name="Ultimate";
//var plan3Price=9.99;
//var plan3Space=2000;
//var plan3Data=20000;
//var plan3Pages=500;
//
// var plan1={
//     name:"Basic",
//     price:3.99,
//     space:100,
//     data:100,
//     pages:10
// };
//
//var plan2={
//    name:"Professional",
//    price:5.99,
//    space:500,
//    data:5000,
//    pages:500
//}
//
//var plan3={
//    name:"Ultimate",
//    price:9.99,
//    space:2000,
//    data:20000,
//    pages:500
//}
//
//console.log("The cost of the "+plan1.name+" plane is $ " + plan1.price);
//
//console.log("The cost of the "+plan2.name+" plane is $ " + plan2.price);
//console.log("The cost of the "+plan3.name+" plane is $ " + plan3.price)
//
//
//var fiat={
//    make: "Fiat",
//    model: 500,
//    year: 1957,
//    color: 'Medium blue',
//    pasengers: 2,
//    convertible: true,
//    milege:8800
//};
//
//if (fiat.make=="Fiat"&& fiat.milege<5000){
//    console.log("Buy it");
//}else {
//    console.log("Do not buy it");
//}
//console.log (plan1)
////
////if the curent month is July, Augast or December, the castomer get discount 20% discount
//
//plan1.discountMonth=[7, 8, 12]
//console.log (plan1);
//
//plan1.price=4.99;
//delete plan1.data;
//console.log(plan1)
//
//console.log("name" in plan1)
//
//
//
//
//var salaries={
//    John:100,
//    Ann:160,
//    Pety:130
//};
//if (salaries.John<=100){
//    salaries.John=120;
//    }
//if ("Adam" in salaries ==false){
//    salaries.Adam=150;
//}
//console.log(salaries)
//
//
//var myHonda={
//    color:"Red",
//    wheels:4,
//    engine :{
//        cylinder:4,
//        size:2.2,
//    },
//    hp:[300,500,100]
//}
//console.log("My Honda engine size is  " + myHonda.engine.size + " and hp is " +  myHonda.hp[1]);
//
//
//var car={
//    make: "Honda",
//    model: "red",
//    drive: function(){
//        console.log("I am driving Honda");
//    }
//}
//car.drive();
//
//
////If user signs up in certan month, he gets discount for the entire year
////
////If user signs up for basic plan in Julay, or August he gets 20 percent discount.
//
////var plan1={
////     name:"Basic",
////     price:3.99,
////     space:100,
////     data:100,
////     pages:10,
////    discountMonth:[7,8,12],
////    calculate: function(percentDisc){
////function calculate (percentDisc){
////    var bestPrice=plan1.price;
////    for (var i=1; i<plan1.discountMonth.length;i++){
////if(plan1.discountMonth[i]==7 ||plan1.discountMonth[i]==8){
////    bestPrice=plan1.price*percentDisc;
////}
////    }
////    return bestPrice*12;
////}
////}
////var annualPrice=calculate (0.75);
////console.log(annualPrice); 
//
// var car={
//    make: "Honda",
//    model:"Civic",
//    year: 2000,
//    color: "Red",
//    milege: 75000,
//    started: false,
//    start:function(){
//    this.started=true;
//},
//    stop:function(){
//       this.started=false;
//    },
//        drive:function(){
//            if(this.started){
//                console.log ("It is ranning");
//            }else{
//                console.log("You need to start the engine first")
//            }
//        }
//};
//
//car.drive();
//car.start();
//car.drive();
//car.stop();
//car.drive();
//
//var song = {
//    name:"Walk this way",
//    artist: "run-D.M.C",
//    model:"Civic",
//    minuties:4,
//    seconds:3,
//    genri:"80c",
//    playing:false,
//    play:function(){
//    if (!this.playing){
//    this.playing = true;
//    console.log("Playing " + this.name+ " by "+ this.artist);
//}
//},
//    pause:function(){
//        if (this.playing){
//            this.playing=false;
//        }
//    }
//};
//song.play();
//song.pause()
//
//
//var person={
//    name: "Iuliia",
//    lastName:"Jha",
//    yearOfBirth:1980,
//    job:"Automation engener",
//    isMarried: true,
//    family:["Rajesh", "Arina"],
//    calculateAge: function() {
//   var age=2018 - this.yearOfBirth;
//    return age;   
//    } 
//};
//
//console.log (person.calculateAge())
//
//
//
//var car={
//    make: "Honda",
//    model:"Civic",
//    year: 2000,
//    color: "Red",
//    milege: 75000
//}
//for (var i in car){
//    console.log(i + ": "+ car[i])
//}
//
//
var object={a:1, b:2, c:3}
var x = ""
for (var i in object){
    x = x + object[i]; 
}
console.log(x)
////
////==========Object. Day 2=========
//    
//    
//    var car={};
//car.make="Honda";
//car.model="Civic";
//car.milege=5000;
//car.drive=function(){
//    console.log("I am driving");
//}
//console.log (car);
//car.drive()
//
//var car=new Object();
////var car={};
//car.make="Honda";
//car.model="Civic";
//car.milege=5000;
//
//console.log (car);
//
////=====Object Constructor Function======
//
//function Hotel(name,room,booked){
//    this.name = name;
//    this.rooms = rooms;
//    this.booked=booked;
//    this.checkAvialability= function(){
//        return this.room - this.booked;
//    };
//}
// var guayHotel = new Hotel("Ouay",40,25);
//var parkHotel = new Hotel("Park",120,77);


//function person(name,lastName, age){
//    this.name = name;
//    this.lastName = lastName;
//    this.age = age;
//};
//
//var person1=new person("Jhon","Mike",20);
//var person2=new person("Mike","Jhon",25)
//var person3=new person("Kevin","Eric",30);
//
//console.log (person1.name + " " + person1.age);
//console.log (person2);
//console.log (person3);
//
//
////Task
////create a function constraction named Rectangle that accepts 2 parameters: Width and Height. Constructor should have a method that calculates and returns the area of the rectangle. Create different Rectangle objects and find the areas of them.
//
//
////function  Rectangle(width, height){
////    this.width = width;
////    this.height= height;
////    this.area=function(){
////       return this.width*this.height;
////    }
////};
////
////var r = new Rectangle(5,4);
////var r1 = new Rectangle(6,4);
////console.log (r.area());
////console.log (r1.area());
///
//
// 
//function Plan(name,price,space,transfer,pages,discountMonths){
//    
//    this.name=name;
//    this.price=price;
//    this.space=space;
//    this.transfer=transfer;
//    this.pages=pages;
//    this.discountMonths=discountMonths;
//    
//    this.calcAnnual=function(percentOfDisc){
//        var bestPrice=this.price;
//        for(var i=0;i<this.discountMonths.length;i++){
//            if(this.discountMonths[i]==7 || this.discountMonths[i]==8 || this.discountMonths[i]==12){
//               bestPrice=this.price*percentOfDisc;
//                break;
//            }
//        }
//        
//        return bestPrice*12;
//    }
//}
//
//
//var p1=new Plan("Basic",3.99,100,1000,10,[7,8]);
//var p2=new Plan("Professional",5.99,500,5000,50,[7,8,12]);
//var p3=new Plan("Ultimate",9.99,2000,20000,500,[7,8]);
//
//var annualPrice1=p1.calcAnnual(0.8);
//console.log(annualPrice1);
//
//var annualPrice2=p2.calcAnnual(0.8);
//console.log(annualPrice2);
//
//
//var annualPrice3=p3.calcAnnual(0.8);
//console.log(annualPrice3);