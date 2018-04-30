var a = 10;
var b = 40;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a % 2);
console.log(a*=2);
console.log(b/=2);


var fname = "Avanish";
var lname = "Patel";

console.log(fname+" "+lname);

var myNumber = 12.894458;


console.log(Math.abs(myNumber));
console.log(Math.exp(12));
console.log(Math.pow(2,4));
console.log(Math.floor(myNumber));
console.log(Math.random());

console.log(true && false);
console.log(true || false);
console.log(!true);


// switch statment

var name = "Avanish";

switch(name){

    case "Avanish":
        console.log("Avanish is selected.");
        break;
    case "Raj":
        console.log("Raj is selected.");
        break;
    default:
        console.log("Different thing is selected.");
        break;

}
