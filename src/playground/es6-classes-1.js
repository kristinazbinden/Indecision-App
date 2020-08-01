
class Person {
    constructor(name = 'anonymous', age = '0', location = 'location hidden') {
        this.name = name;
        this.age = age
        this.location = location;
    }
    getGreeting() {
        return `Hi, I'm ${this.name}!`
    }
    getDescription() {
        return `${ this.name } is ${ this.age } years old, and lives in ${ this.location }.`
    }
}

class Student extends Person {
    constructor(name, age, location, major) {
        super(name, age, location);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location, major, homeLocation) {
        super(name, age, location, major, homeLocation);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Student('Kristina Zbinden', 33, 'Portland, ME', 'Software Engineering', 'Milford, PA');
console.log(me.getGreeting());

const grinch = new Traveler('The Grinch', 36, 'Whoville');
console.log(grinch.getGreeting());
