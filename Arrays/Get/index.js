//indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const numbers = [1, 2, 3, 4]
const result = numbers.indexOf(3);
console.log(result);
// 2

//find() method returns the value of the first element in the provided array that satisfies the provided testing function. Otherwise undefined is returned.
const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 35 }
];
const user = users.find(item => item.age >= 30);
console.log(user);
// { name: 'John', age: 30 }

const arr = [1, 2, 3, 4]
const arrResult = arr.find((item) => item%2 === 0);
console.log(arrResult);
// 2

//filter();
const filter = [1, 2, 3, 4]
const filterRes = filter.filter((item)=>item%2 === 0);
console.log(filterRes);
// [ 2, 4 ]

const filterDetail = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Doe', age: 35 }
];
const filterResult = filterDetail.filter((item) => item.name === 'Jane' && item.age >= 28)
console.log(filterResult);
//[ { name: 'Jane', age: 25 } ]

// slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const slice = [1, 2, 3, 4]
const resSlice = slice.slice(1, 3)
console.log(resSlice); // [ 2, 3 ]
console.log(slice); // [ 1, 2, 3, 4 ]
