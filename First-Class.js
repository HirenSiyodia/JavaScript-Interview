//***********Differnce between these two are we can call function a() anywhere in code 
// but we can't call b(), We only can exeute after it intialization */
// Function Statement
function a(){
    console.log("a called");
}
a();
// Function Expressions
var b = function b() {
    console.log("b called");
}
b();

//******When there is no name to a function is called Anonymous function */
// Anonymous Function
var xyz = function () {
    // Later we can add function name and assign in variable
}
// Named Function Expressions
let c = function xyz(){
    console.log("hello Hiren");
}
xyz(); //It gives Reference error that xyz() is not defined.


// ********Parameter and arguments*******

//Difference betwn Parameter & arguments
// Parameter:- Parameters are placeholders or variable names used in a function declaration or expression.
var d = function greet(param1, param2) {
     console.log(param1, param2);
}
d("hi", "Hiren")

// Here, name and age are parameters.
function greet(name, age) {
    console.log(`Hello ${name}, you are ${age} years old.`);
  }

//   Arguments are the actual values you pass to the function when calling it.
greet("Hiren", 25);

// How Parameters and Arguments Work Together:
function add(x, y) {   // x and y are parameters
    return x + y;
  }
  
  add(10, 5); 

//  1. Required Parameters
function sayHi(name) {
    console.log("Hi " + name);
  }
  sayHi();  // Output: Hi undefined

//  2. Default Parameters
function greet(name = "Guest") {
    console.log("Hello " + name);
  }
  greet();         // Output: Hello Guest
  greet("Hiren");  // Output: Hello Hiren

//  3. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(sum(1, 2, 3, 4));  // Output: 10


// First Class Functions:- The ability to to use functions as values and which can be passed as arguments to another function, and also can be returned from functions.
var b = function (param1){
    return function hello(){
        console.log("hello");
    }
}
console.log(b());

// Arrow Functions