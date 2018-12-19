//In Java we created classes and put methotods inside and inheriteted these methods by using extends.
//JS (ES5) does not have classes but have prototipe.
//it is not  exectly same as class, because you do not create instance of it, but you can create methos that affect multiple objects by using prototype.
//
//fuction Bicycle(cadence, speed, gear, tirePressure){
//    this.cadence=cadence;
//    this.speed=speed;
//    this.gear=gear;
//    this.tirePressure=tirePressure;
//    this.inflateTires=function{
//       return  this.tirePressure+=3;
//    }
//}
//var b1= new Bicycle(50,20,4,25);
//b1.inflateTires();
//
//function Mechanic(name){
//    this.name=name;
//}
//var m1=new Mechanic(Mike);// I want to give Mike access to inflateTires method
/////////////////////
// Whenever you created a function, JS creates 2 objects automaticaly:
// 1 - function name object
// 2 - prototype object
//
//function foo(){}
//function bsr(){}

//function greet(){
//    console.log ("Hello")
//}
//
//console.log(greet());// hello
//console.log (greet)// function object
//console.log (greet.prototype);// prototype object

//When you create an Object, __proto__is created by JS Engine

//function Foo(){}
//var obj =  new Foo();
//console.log(obj);// Foo {}
//// Set a property to foo prototype and access it from obj
//
//Foo.prototype.test = "this is object";
//console.log(obj.__proto__.test)
//console.log(obj.hello)
//obj.__proto__.hello="test"
//console.log(obj.hello)
//
//obj.test=10;
//console.log(obj);

//////////////

//function Employee(name){
//    this.name=name;
//}
//var emp1 =  new Employee("Mike");
//var emp2 =  new Employee("Smith");
//Employee.prototype.playPranks=function (){
//    console.log("Plank played")
//}
//emp1.playPranks();
//emp2.playPranks();
//
////\\\\\\
////in class modules, you have to define all methods upfront.
////
////In prototype, you can put things at runtime.
////
////The minute you add that property, every object that was created from the employee as a constractor, even the ones that was created befoe you added befor that on the property would still work. Because prototype look up happens at runtime.
////==================================
//
//var simple = {}
//var obj = new Object()
//console.log(simple.__proto__ === obj.__proto__)
//console.log(simple.__proto__ === Object.prototype)
//           
//function Employee(){};
//var emp=new Employee();
//console.log(emp.test);
//emp.prop="Employee";
//
//emp.__proto__.parentProp="Parent of Employer";
//console.log(emp.__proto__.__proto__===Object.prototype);
//
//Object.prototype.grandParentProp="Grand Parent"
//
//function foo(){}
//var tmp= new foo();
//console.log(tmp.grandParentProp);
//
//console.log(tmp.__proto__.__proto__.grandParentProp)


//function Employee(name){
//    this.name=name;
//}
//    Employee.prototype.getName=function (){
//   return this.getName;  
//};
//var emp1 =new Employee("Mike");
//console.log(emp1.getName());
//
//function Manager(name, dept){
//    this.name=name;
//    this.dept=dept;
//}
//Manager.prototype.getDept=function(){
//    return this.dept;
//}
//var mgr =new Manager ("Michael", "Sales");
////console.log(mgr.getDept())
//
//
//
//function Employee(name, hjkj, aaa){
//    this.name=name ;
//}
//    Employee.prototype.getName=function (){
//   return this.aaa;  
//};
//var emp1 =new Employee("Mike");
//console.log(emp1.name);
//
//function Manager(name, dept){
//    this.name=name;
//    this.dept=dept;
//}
//Manager.prototype.getDept=function(){
//    return this.dept;
//}
//var mgr =new Manager ("jjj", "Sales");
//console.log(mgr.getDept())
//
//mgr.__proto__.__proto__ =Employee.prototype;
//console.log(mgr.getName())







var arg= [];
function m1(i){
    return ++i;
}
var k=m1(arg.length);
k+=3+ ++k;
console.log(k)
