function greet() {
    console.log(`Hello ${this.name}`);
}

const person = {
    name: "Hiren"
};

const newFunction = greet.bind(person);

newFunction();