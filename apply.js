function greet(city, country) {
    console.log(
        `Hello, I'm ${this.name} from ${city}, ${country}`
    );
}

const person = {
    name: "Hiren"
};

greet.apply(person, ["Mumbai", "India"]);