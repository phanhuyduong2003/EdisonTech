function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
let max = findMax(3, 4)

console.log('findMax(3, 4): ', max)