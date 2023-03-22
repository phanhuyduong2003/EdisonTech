let spacecraftName: string = 'Determination'
let speedMph: number = 17500
let kilometersToMars: number = 225000000
let kilometersToTheMoon: number = 384400
let milesPerKilometer: number = 0.621

function daysToMars() {
    let milesToMars: number = kilometersToMars * milesPerKilometer;
    let hours: number = milesToMars / speedMph
    return hours / 24
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
        return hours / 24
    }
    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation().toFixed(2)} days to get to ${location.name}`);
    }
}

class SpaceLocation {
    kilometersAway: number
    name: string
    constructor(name: string, kilometersAway: number) {
        this.name = name
        this.kilometersAway = kilometersAway
    }
}

let spaceCraft = new Spacecraft('SpaceX', speedMph)
let spaceLocation = new SpaceLocation('Moon', kilometersToTheMoon)

console.log(`${spacecraftName} would take ${daysToMars().toFixed(2)} days to Mars`)
spaceCraft.printDaysToLocation(spaceLocation)