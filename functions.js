// 1. Function Declaration:-
greet();

function greet() {
    console.log('Hello Hiren');
}
//output:- Hello Hiren
// Features
// - Hoisted completely.
// - Can be called before declaration.

// 2. Function Expression:-
// greet1(); // Uncaught ReferenceError: Cannot access 'greet1' before initialization

const greet1 = function() {
    console.log('Hello Hiren');
}

greet1();
//output:- Hello Hiren
// Features
// - Not hoisted.
// - Cannot be called before declaration.

// 3. Arrow Function:-
// greet2(); // Uncaught ReferenceError: Cannot access 'greet2' before initialization

const greet2 = () => {
    console.log('Hello Hiren');
}

greet2();
//output:- Hello Hiren
// Features
// - Not hoisted.
// - Cannot be called before declaration.

// With parameters:-
const add = (a, b) => {
   return a + b;
}
console.log(add(2, 3));

// if you do not write a return then don't use {} this braces otherwise it will show undefined.

// 4. anonymous function:-
setTimeout(function() {
    console.log('Hello Hiren');
}, 1000)
//Ans : Hello Hiren

// 5. IIFE (Immediately Invoked Function Expression):-
(function() {
    console.log('Hello Hiren');
})()

//Ans : Hello Hiren

//6. callback function:-
function user(a){
    a(20);
}

function detail(age){
    console.log(age);
}

user(detail);

