
function greet(name){

    console.log("Hello, "+ name);
}

greet("Avanish");

// function with return 

function greetPerson(name){

    return "Hello, "+name + "!";
}

console.log(greetPerson("Raj"));

// anonymous function

var greetAno = function(name){

    console.log("Hello, "+ name);
}

greetAno("Ankit");


var multiply = function(x,y){

    return x*y;
}

console.log(multiply(23,45));

