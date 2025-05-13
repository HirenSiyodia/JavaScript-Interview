// Outer function cannot use the data of inner o innerTwo but inner and innerTwo can access.
// Simple as child can access the data but parent can't use it.
function outer(){
    let name = "Hiren"
      
    function inner(){
        let age = 28;
        console.log(name);
        console.log(`your age in inner one ${age}`);        
    }
    function innerTwo(){
        let email = "h@gmail.com";
        console.log(name);
        console.log(`inner two content ${email}`);        
    }

    inner();
    innerTwo();
}
outer();


// 
function first() {
    const fName = "Hiren"
    console.log(fName);
    function second() {
        const score = 99;
        console.log(`your first name is ${fName} and score is ${score}`);
    }
    second()
}
first()

// SetTimeout + Closure..
function outer(){
    for (let index = 1; index <= 5; index++) {
        setTimeout(() => {
            console.log(index);        
        }, index * 1000);        
    }
}
outer()

// o/p= 1, 2, 3, 4, 5

// Using "var" how to get a 12345 in a queue.
function outer1(){    
        for (var i = 0; i <= 5; i++) {
            function result(i){
            setTimeout(() => {
                console.log(i); 
            }, i * 1000);
        }
        result(i)
    }
   
}
outer1(); //o/p: 6, 6, 6, 6, 6

// Closure in interview
function outest(){
    let c = 20;
    function inside(b){
    function outside(){
        console.log(a, b, c);        
    }
    let a = 100;
    return outside;
}
return inside;
}
let a = 50;
let final = (outest())("helllo");
final()


// Data hiding
function counter(){
let count = 10;
return function incrementCounter(){
    count++;
    console.log(count);
}
}
const result = counter();
result();
result();


