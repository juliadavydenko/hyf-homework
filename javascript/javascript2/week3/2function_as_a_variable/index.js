//2.1 Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

var functions = {
    hello: function() { console.log("hello"); },
    question: function() { console.log("how are you?"); },
  reply: function() { console.log("nice to meet you!"); },
};


functions.hello();
functions.question();
functions.reply();

//2.2 Create a function as a const and try creating a function normally, call both functions.


function hello() { console.log("Hello, I am declared function!"); }

const anonymous = function() { console.log("Hello, I am an anonymous function expression! I don't have a name, but still work. Don't try to call me before my line of code is loaded, you'll get an error"); }

const functionAsConst = function functionAsConst() { console.log("Hello, I am a function created with a const! I will also not going to work if you try to call me before my line of code is loaded, you'll get an error here too. Otherwise, you can call me anytime to your service"); }
hello();
console.log(anonymous);
functionAsConst();

//3.Create an object that has a key whose value is a function. Try calling this function.

const object = {};
object.new = function() { return 5; };
console.log(object.new);
