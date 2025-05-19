// Why Use Callbacks?
// To handle asynchronous code like I/O, API requests, events.

// To customize behavior without modifying a function’s internal code.

// To decouple logic, making functions more flexible and reusable.

// 1. What is a Callback Function in JS ?
//Ans;- A callback is a function or a piece of code that is passed as an argument to another function

function userData(data){
    console.log("Inserting " + data);
}
function deleteData(data){
    console.log("Deleted " + data);
    // userData(" hello");
}
function func() {
    deleteData("Hiren");
}
func(deleteData);
// Example 2:- Here it's with example of setTimeout so async method will apply.
setTimeout(() => {
    console.log("Hello JS 3");
}, 5000);

function outer(data, value){
    console.log("hello Hiren 1", data, "-", value);    
}
function inner(data, value){
    console.log(`Hello Hiren 2 ${data} is ok and value is ${value} Good.`);
}
function func(final){
    final("namaste", 123)
}
func(outer);
func(inner);

// 2. Js is a Synchronous and Single-threaded Language ?

// 3. Blocking the main thread

// 4. Power of Callbacks ?

// 5. Deep about Event Listners

// 6. Closures Demo with Event Listners

// 7. Scope Demo with Event Listners

// 8. Garbage Collection & removeEventListners