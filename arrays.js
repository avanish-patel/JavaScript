var myArray = [12,34,45,56,65];

var objArray = new Array(23,45,56,67,69);

console.log(myArray);
console.log(objArray);


// array as stack

var myStack = [];

myStack.push(23);
myStack.push(56);
myStack.push("Avanish");

console.log(myStack);

console.log(myStack.pop());
console.log(myStack);

// arrays as queue

var myQueue = [];

myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

console.log(myQueue);
console.log(myQueue.shift());
console.log(myQueue);

myQueue.unshift(0);
console.log(myQueue);


// splicing an array

var arraySplice = [1,2,3,4,5,6,7,8,9,10];
var splice = arraySplice.splice(3,4);
console.log(splice);
console.log(arraySplice);