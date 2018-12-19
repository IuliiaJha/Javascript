Question-1
For Mark and John:
1. For each of them, create an object with properties for their full name,mass,and height 
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Do not forget they might have the same BMI 
Remember: BMI = mass/(height*height);

var person1={
    fullname: "Mark",
    mass: 180,
    height: 4.30,
    BMI: function() {
     var BMI1=this.mass/(this.height*this.height)
     return BMI1.toFixed(2)
}
}
var person2={
    fullname: "John",
    mass: 180 ,
    height: 4.30,
    BMI: function() {
     var BMI2= this.mass/(this.height*this.height)
     return BMI2.toFixed(2)
    }
}
 
if (person1.BMI()>person2.BMI()){
    console.log("BMI of "+person1.fullname+ " = " + person1.BMI() + " what it is bigger then BMI of " + person2.fullname+ " = " + person2.BMI())
}
else if (person2.BMI()>person1.BMI()){
    console.log ("BMI of "+person2.fullname+ " = " + person2.BMI() + " what  is bigger then BMI of " + person1.fullname+ " = " + person1.BMI())
}else {
    console.log ("BMI of "+person1.fullname + " = " + person1.BMI() + " is equel to BMI of " + person2.fullname+ " = " + person2.BMI()) }

========================

Question-2

1. Build a function constructor called Salary to calculate the average salary of Cybertek Student. Salary constructor should include:

    - First Name of the student

    - Last Name of the student

    - Gender of the student

    - Age of the student

    - Studying Hours of the student

2. Ask student to enter how many hours he/she studied for 5 weeks and store these hours in the array. (Weekly hours should be 0-10 hours max)

3. Create a method in your constructor to calculate your average studying hours for 5 weeks.

4. Create another method to calculate the salary.

        - if average hours is less than 4 hours, you need to tell student: "Not eligible to go to market, and study more"

        - if average hours is between 4 and 6(included) , salary for that person will be 10 percent more than base salary

        - if average hours is between 6 and 8(included) , salary for that person will be 20 percent more than base salary

        - if average hours is between 8 and 10(included) , salary for that person will be 50 percent more than base salary      

        base salary will be a parameter of the salaryCalculate method. 

5- Print the student salary with his name:  "Mike Smith Salary is $150000"

var workHours =[];
for (var i=0; i<5;i++){
    var ask= prompt("Please, Enter how many hours you studied for 5 weeks");
    var ask = parseInt(ask)
    workHours.push(ask); 
}
function Salary(firstName, lastName, gender, studiygHours){
    this.firstName=firstName;
    this.lastName=lastName;
    this.gender=gender;
    this.studiygHours=studiygHours;
    this.averageStudy=function(){
    var sum=0
    for (i=0; i<5; i++){
            var sum =sum + this.studiygHours[i];
    }
        return sum/5
        }
    this.calculateSalary=function(baseSalary){
        if (this.averageStudy()>8&&this.averageStudy()<=10){
            var salaryStudent= baseSalary+(baseSalary*0.5)
        }else if (this.averageStudy()>6&&this.averageStudy()<=8){
            var salaryStudent= baseSalary+(baseSalary*0.2)
    }  else if (this.averageStudy()>=4&&this.averageStudy()<=6) {
        var salaryStudent= baseSalary+(baseSalary*0.1) 
    }else if (this.averageStudy()<4){
        salaryStudent = 0;
    }
        return salaryStudent;
    }
}
var salary1 =new Salary("Mike", " Smith", "male", workHours);
if (salary1.calculateSalary(100000)==0){
    console.log(salary1.firstName + salary1.lastName + " is " +"Not eligible to go to market, he shoud study more")
}else {
console.log(salary1.firstName + salary1.lastName + " salary is $" + salary1.calculateSalary(100000) )
}




