// let myString = 'Hello, World!'
// console.log(myString.length)
// console.log(myString.indexOf('World'))
// console.log(myString.slice(0, 5))
// console.log(myString.replace('World', 'Javascript'))
// console.log(myString.toUpperCase())
// console.log(myString.toLowerCase())

// let myNumber = 3.14159265359
// console.log(myNumber.toFixed(2))
// console.log(myNumber.toString())
// console.log(parseInt('123'))
// console.log(parseFloat('3.14'))

// let array = [1, 2, 3]
// console.log(typeof (array))
// console.log(array[2])

// var array = [1, 2, 3]
// array.push(4)
// console.log(array)
// array.pop()
// console.log(array)
// array.shift()
// console.log(array)
// array.unshift(0, 1)
// console.log(array)

// function checkNumber(a) {
//     if (a > 0) {
//         console.log('So duong')
//     } else {
//         console.log('So am')
//     }
// }
// checkNumber(10)

// console.log(a.toString());
// console.log(a.join(" "));
// console.log(a.concat(b));
// console.log(a.splice(1, 1), a);
// console.log(a.slice(1, 2), a);
// function getName(name) {
//     return "Xin chao" + " " + name;
// }
// console.log((getName("Viet Nam")));
// let name = "Viet Nam";
// console.log(`Xin chao ${name}`);
// function name(params) {
//     // console.log(params);
//     params();
// }
// name (function log() {
//     console.log(9999);
// })
// function multiply(a, b, callback) {
//     let result = a * b;
//     callback(result)
// }
// function printResult(result) {
//     console.log('Result is: ' + result);
// }
// multiply(5, 10, printResult)
// a.forEach(function())
// let a = ['A', 'B', 'C']
let a = [7, 9, 5]
let b = ['D', 'E', 'F']
// const a2 = a.map(function (value, index, a) {
//     console.log(value, index, a);
//     return value*2
// })
// console.log(a2);
// const a2 = a.filter(function (value) {
//     return value > 5
// })
// const a2 = a.find(function (value) {
//     return value > 5
// })
// const a2 = a.some(function (value) {
//     return value > 8
// })
// const a2 = a.every(function (value) {
//     return value > 5
// })
/*every tất cả phải trả về true*/
// const a2 = a.reduce(function (previousValue, current, index, a) {
//     console.log(previousValue, current, index, a);
//     return previousValue + current
// }, 0)
// console.log(a2);
// let Info = new Object()
// Info.name = 'Duong'
// Info.age = '19'
// console.log(Info.name);
// // console.log(Info.age);
// console.log(Info["age"]);
// function Person(name, age, method) {
//     this.name = name
//     this.age = age
//     this.method = method
// }
// const user = new Person('Duong', 19, function () {
//     console.log('Run');
// })
// console.log(user);
// const user2 = new Person('Huy', 20, function () {
//     console.log('Sleep');
// })
// console.log(user2);
// Person.prototype.avt = 'string'

// try {
//     var x = y + 10
// } catch (exception) {
//     console.log(exception.name + ': ' + exception.message);
// } finally {
//     console.log('Try-catch block finished');
// }
let i = 0;

do {

  i = i + 1;

} while (i < 4);

console.log(i);