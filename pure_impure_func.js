// pure function
function add(a,b){
    return a + b;
}

console.log(add(4, 3));

//impure function
let total = 0;

function addToTotal(value){
    total += value;
    return total;
}

console.log(addToTotal(5));
console.log(addToTotal(5));