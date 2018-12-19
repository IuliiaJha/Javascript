let Age = function(yeras){
    return new Promise(function(resolve, reject){
        if (years>=18){
            resolve ()
        } else {
            reject ()
        }
    
    })
} 
    

let Car = function(){
    return new Promise(function(resolve,reject){
         let happy = true;
    if (happy){
        resolve ()
    } else {
        reject ()
    }
    })
}

Age(18).then(function(){
return Car()
}).then(function(){
    console.log("I will get a car for birthday");
}).catch(function(){
    console.log("I will not get a car for birthday");
})