// REduce method in HOF0
const num = [1,2,3,4,5];

const result1 = num.reduce(function xyz(acc, crr){
    acc = acc + crr;
    return acc;
}, 0)
console.log(result1);

// Find the max value;

const nums = [1,2,13,4,5,14];

const oupt = nums.reduce(function zyx(max, crr){
    if(crr > max){
        max = crr;
    }
    return max;
}, 0) 
console.log(oupt);
