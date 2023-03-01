let value1 = 'one'
let value2 = 'two'

console.log('value1 before: ', value1)
console.log('value2 before: ', value2)

let temp = value1
value1 = value2
value2 = temp

console.log('value1 after: ', value1)
console.log('value2 after: ', value2)