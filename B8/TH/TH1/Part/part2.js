//Part #2: Destructuring Objects
export function part2() {
    let information = { firstName: 'Dylan', lastName: 'Israel' }
    let { firstName, lastName } = information
    console.log(firstName+"\n"+lastName);
}