let spacecraftName: string = 'Determination'
let speedMph: number = 17500
let kilometersToMars: number = 225000000
let kilometersToTheMoon: number = 384400
let milesPerKilometer: number = 0.621
console.log(`${spacecraftName} would take ${daysToMars().toFixed(2)} days`);
function daysToMars() {
    let milesToMars: number = kilometersToMars * milesPerKilometer;
    let hours: number = milesToMars / speedMph
    return hours/24
}
class Spacecraft {
    milesPerKilometer: number = 0.621
    name: string
    speedMph: number
    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation() {
        let milesToMars: number = kilometersToMars * milesPerKilometer
        let hours: number = milesToMars / this.speedMph
        return hours/24
    }
    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation().toFixed(2)} days to ${location.name}`);
    }
}
export class SpaceLocation {
    kilometersAway: number
    name: string
    constructor(name: string, kilometersAway: number) {
        this.name = name
        this.kilometersAway = kilometersAway
    }
}