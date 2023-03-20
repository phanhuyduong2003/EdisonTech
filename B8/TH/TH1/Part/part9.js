//Part #9: Class
export class Car {
    constructor(wheels, doors) {
        this.wheels = wheels
        this.doors = doors
    }
    describeMe() {
        console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
    }
}