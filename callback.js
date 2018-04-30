var callback = function(){

    console.log("Done!!!");
}

setTimeout(callback, 5000);

// another example

setTimeout(function(){

    console.log("Printed after 5 seconds.");
}, 5000);

