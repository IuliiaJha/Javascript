//1- Ask employee to enter the hours he/she worked for 4 weeks. and put those hours into an array
//
//2- Ask employee to enter his/her wage and assign it to a variable
//
//3- Create an employee constructor with properties   ' fName, lName, birthYear'
//
//4- Add a method to employee constructor that creates an employee id. 
//
//    Employee id will be first character of first and last name and the age. 
//
//    Example: First Name: Mike
//
//                    Last Name:Smith
//
//                    Age:30
//
//                    Employee ID: MS30
//
//    **For age calculation, use date object.
//
//5- Create a Payroll constructor with properties 'hours and insurance'
//
//6- Add a method to Payroll constructor that calculates the total hours that employee worked for 4 weeks. 
//
//    **You have the hours from requirement-1
//
//7- Add a method to Payroll constructor that calculates the earning for 1 month
//
//    ** earning is wage * total hours
//
//    if employee has insurance, add another $600
//
//8- Create a method that will calculate the overtime hours that employee worked for 4 weeks.
//
//    **work hours is weekly 40 hours. Anything more than is overtime.
//
//9- For the overtime hours, increase the wage %50.
//
//    **if employee worked 20 hours overtime, his earning will be  "earning + (wage * 1.5 * 20)"
//
//10-Run the program
//
//     Output should be : Employee ID:___'s overtime hours for this month is:__ and earning is $__
//
//11- Develop your code such a way that calculate overtime hours method (requirement-8) should be shared by both constructor. 
//
//12- Try to use ES6 methods we learned like let, const, spread/rest operators, arrow functions, etc
//
// 
//
//Sample Output:
//
//Week1 hours: 45
//
//Week2 hours: 45
//
//Week3 hours: 45
//
//Week4 hours: 45
//
//var emp1=new Employee("mike","smith",1980);
//let p1=new Payroll(arr,true);
//let wage=20;
//
//Console: Employee ID:ms38's overtime hours for this month is:20 and earning is $4800
//
//======================================
let workHours =[];
for (let i=0; i<4;i++){
let  ask= parseInt(prompt("Please, Enter how many hours you worked for 4 weeks"));
  workHours.push(ask);
    
}
let wage =parseInt(prompt("Please, Enter your wage"));
function Employee(firstName, lastName,birthOfYear){
    this.firstName=firstName;
    this.lastName=lastName;
    this.birthOfYear= birthOfYear;
    this.id= function(){
        var year = new Date;
        var age = year.getFullYear()-this.birthOfYear;
     return firstName.charAt(0)+lastName.charAt(0)+age
       }
    } 
function Payroll(workHours,insurance){
    this.insurance=insurance;
    this.workhours=workHours;
    this.totalHours=function (){
        var sum = 0
        for(var i of this.workhours){
            sum=sum+i
        }
       return (sum);
    }
    this.overTime = function(){
    var over=this.totalHours()-160;
    if (over <= 0){
     return 0;
    }else 
        return over;
    }
    
    this.calculateSalary = function(){
        if(this.overTime()==0){
        if (this.insurance){
           return wage*this.totalHours()+600;
        
        }else{
                return wage*this.totalHours()
                }
            
        }else{
        var  baseSalary = wage*160;
        var wageOvertime = wage+wage/2;
            if(this.insurance){
        return  baseSalary + 600 + (wageOvertime*this.overTime());
            } else {
                  return baseSalary+(wageOvertime*this.overTime()) 
               }
        }  
      }  
    }

var emp1 =new Employee("Mike","Smith",1980)
var pay1= new Payroll(workHours, true);
console.log(pay1.totalHours() + "Employee ID: " + emp1.id()+ "  overtime hours for this month is: " + pay1.overTime()+ " = and earning is " + pay1.calculateSalary()) 
//======================================2 var===
//    let workHours =[];
//for (let i=0; i<4;i++){
//let  ask= parseInt(prompt("Please, Enter how many hours you worked for 4 weeks"));
//  workHours.push(ask);
//    
//}
//let wage =parseInt(prompt("Please, Enter your wage"));
//function Employee(firstName, lastName,birthOfYear){
//    this.firstName=firstName;
//    this.lastName=lastName;
//    this.birthOfYear= birthOfYear;
//    this.id= function(){
//        var year = new Date;
//        var age = year.getFullYear()-this.birthOfYear;
//     return firstName.charAt(0)+lastName.charAt(0)+age
//       }
//    } 
// Employee.prototype.overTime = function(){
//   var  over=this.totalHours()-160;
//    if (over <= 0){
//     return 0;
//    }else 
//        return over;
//    }
// Payroll.prototype=Employee.prototype;
//function Payroll(workHours,insurance){
//    this.insurance=insurance;
//    this.workhours=workHours;
//    this.totalHours=function (){
//        var sum = 0
//        for(let i of this.workhours){
//            sum=sum+i
//        }
//       return (sum);
//    }
//    this.calculateSalary = function(){
//        if(this.overTime()==0){
//        if (this.insurance){
//           return wage*this.totalHours()+600;
//        
//        }else{
//                return wage*this.totalHours()
//                }
//            
//        }else{
//        var  baseSalary = wage*160;
//        var wageOvertime = wage+wage/2;
//            if(this.insurance){
//        return  baseSalary + 600 + (wageOvertime*this.overTime());
//            } else {
//                  return baseSalary+(wageOvertime*this.overTime()) 
//               }
//        }  
//      }  
//    }
//   
//
//var emp1 =new Employee("Mike","Smith",1980)
//var pay1= new Payroll(workHours, true);
////console.log("Eployee ID: " + emp1.id()+ "  overtime hours for this month is: " + pay1.overTime()+ " = and earning is " + pay1.calculateSalary())
//
//console.log(`Employee ID:${emp1.id()}'s overtime hours for this month is:${pay1.overTime()} = and earning is ${pay1.calculateSalary()}`)



