// lexical scope
function outer() {
    let name= 'Hiren'
    function inner() {
        console.log(name);
    }
    inner();
}
outer();

// scope chain
let Fname = 'Jay'
function outing() {
    let Lname = 'Patel'
    function inner () {
        let Mname= 'Manubhai'
        function inner1(){
            console.log(Mname);
            console.log(Lname);
            console.log(Fname);
        }
        inner1()
    }
    inner()
}
outing()

// closure
let number = 1;
function num(){
    return function num1(){
        number++;
        console.log(number);
    }
}
const res = num();
res();
res();
res()

//this keyword
const obj = {
    name:'Hiren',
    age:28,
    Details: function() {
        console.log(this.name + " " + this.age);
    }
} 
// obj.Details();

const obj1 = {
    name:'Jay',
    age:30,
    Details: obj.Details
}

obj1.Details();
// Answrr : Jay 30

//this keyword with arrow function
const obj2 = {
    name: 'Ishita',
    Details: () => {
        return this.name
    }
}
const resu = obj2.Details()
console.log(resu);
//Ans : undefined


//setTimeout and this using function
const obj3 = {
    name:'Yash',
    Details: function(){
        setTimeout(function(){
            console.log(this.name);
        })
    }
}
obj3.Details()
//Ans : undefined

//setTimeout and this using callback so it will give a value
const obj4 = {
    name:'Mukesh',
    Details: function(){
        setTimeout(()=> {
            console.log(this.name);
        }, 1000)
    }
}
obj4.Details();
//Ans : Mukesh

// call - The call() method is a function method that allows you to call a function with a specified this value and arguments provided individually.    
function greet(city, country){
    console.log(`your name is ${this.name} and city is ${city} and country is ${country}`);
}

const person = {
    name: 'Hiren'
};
greet.call(person, 'Mumbai', 'London')

// apply - The apply() method is similar to call(), but it takes an array of arguments instead of a list of arguments.
const family = {
    detail: function(city, state){
        return `Your name is ${this.Father} and your name is ${this.name} and your city is ${city} and state is ${state}`
    }
}

const final = {
    Father:'Nanu',
    name:'Hiren',
}
const resul = family.detail.apply(final, ['Navsari', 'maroli'])
console.log(resul);

// bind - bind method creates a new function that, when called, has its this keyword set to the provided value, 
// with a given sequence of arguments preceding any provided when the new function is called.
const person1 = {
    name: 'Jay'
}

function greet1(city, country){
    console.log(`your name is ${this.name} and city is ${city} and country is ${country}`);
}

const boundGreet = greet1.bind(person1);
boundGreet('Surat', 'India');





