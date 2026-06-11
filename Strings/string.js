//1. add multiple strings together
const str1 = 'Hiren'
const str2 = 'Siyodia'
let result = str1 + " " + str2
console.log(result);

//2. Concat
let concat = str1.concat(' ', str2)
console.log(concat);


//3. extract portion of string
let extract = result.substring(4, 10)
console.log(extract);

//4. retrieve result of length
console.log(result.length);

//5. Convert string to UpperCase and LowerCase:-
console.log(result.toUpperCase());
console.log(result.toLowerCase());

//6. split string to array of substrings
let arr = result.split(" ")
console.log(arr);

//7. replace substring with a string
let str = result.replace('Siyodia', 'Patel')
console.log(str);

//8. remove space:-
let name = ' Jay '
let remove = name.trim();
console.log(remove);


