function greet(name) {
    console.log("Hello", name);
}

function processUser(callback) {
    const username = "Hiren";
    callback(username);  // passing function as argument
}

processUser(greet);

// Map
// Old method
const arr = [2, 4, 1, 5];
function double(x){
    return x * 2;
}
const result = arr.map(double);
console.log(result);

// Array to string
let numbers = [2, 3]

const final = numbers.map((value)=>value.toString (2))
console.log(final);

// Usimg callback new method
const up = arr.map ((x)=> x * 2);
console.log(up);

// Filter method in HOF
const arr1 = [2, 4, 1, 5];
const opf = arr1.filter((y)=> y > 2);
console.log(opf);