for (var i=1; i<=3;  i++){ //CZ of using "var"
    setTimeout (function() {
        console.log(i);
    } 
    ,1000);
       
}
// o/p => 3,3,3

var n = 2;
function sqaure(num){
    var ans = num*num;
    return ans;
}
var sqaure2 = sqaure(n);
console.log(sqaure2);

var sqaure3 = sqaure(3);
console.log(sqaure3);

// new prog.

function greet() {
    let name = "Hiren";
    return function() {
      console.log(`Hello, ${name}`);
    };
  }
  const sayHello = greet();
  sayHello();

//   new
  function first() {
    const fName = "Hiren"
    console.log(fName);
    return function outer(){
        const score = 99;
        console.log(`your first name is ${fName} and score is ${score}`);
    }
}
const result = first();
result()