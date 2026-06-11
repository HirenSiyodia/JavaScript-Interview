function multiply(a){
    return function(b){
        return a * b
    }
}

const double = multiply(2);
console.log(double(4));

const triple = multiply(3);
console.log(triple(5));
