
var emptyObject = {};

var personObject = {

    firstName : "Avanish",
    lastName : "Patel"
}

// inserting new key and value pair 
personObject.age = 24;
personObject["salary"] = 14000;

console.log(personObject);

// iterating throught the object
for(var i in personObject){

    console.log(i +" : "+ personObject[i]);
}
