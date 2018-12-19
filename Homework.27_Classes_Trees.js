//Suppose that you are working in a small town administration, and you are in charge of two town elements:
//1-Parks
//2-Streets
//It is a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
//At an end-of-year meeting, your boss wants a final report with the following:
//1. Tree density of each park in the town (formula: number of trees / park area)
//3. The name of the park that has more than 1000 trees
//5. Size classification of all streets: tiny/small/normal/big/huge. 
//All the report data should be printed to the console.
//Hint: Use some of the ES6 features: classes, subclasses, template strings, maps, arrow functions, destructing, etc

    
class Facilities{
    constructor(name,yearOfBuild){
        this.name=name;
        this.yearOfBuild=yearOfBuild;
    }
}
class Parks extends Facilities{
    constructor(name,yearOfBuld,numberOfTrees, parkArea){
        super (name,yearOfBuld);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
    }
    calculateDensity() {
        var d= new Array (this.numberOfTrees.length)
        for (var i=0; i<this.numberOfTrees.length;i++){
        d[i]=this.numberOfTrees[i]/this.parkArea[i]
            console.log(`Tree density of ${this.name[i]} is ${d[i]}`)
        } 
     }
    bigPark (numberOfTrees){
    for(var p in this.numberOfTrees){
        if (this.numberOfTrees[p]>1000){
            console.log(`${this.name[p]} has more than 1000 threes`);
        }                 
    }
}
}
class Streets extends Facilities {
    constructor(name, yearOfBuld,size) {
        super (name,yearOfBuld)
        this.size=size;
    }
    streetSize(){
		let Street=new Map();
		Street.set("T","tiny");
		Street.set("S", "small")
		Street.set("N", "normal")
		Street.set("B", "big")
        for (var a=0; a<=this.name.length-1; a++ ){
		console.log(`${this.name[a]} is a ${Street.get(this.size[a])} street.`)
}
}
}
var park= new Parks(["AAA","BBB","CCC"],[1970,1980,1990],[5000,4000,3000],[10,2,1]);

var st = new Streets(["st1","st2","st3","st4"],[1970,1980,1990,1995],["T","S","N","B"])
park.calculateDensity();
park.bigPark();
st.streetSize();