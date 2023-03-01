let a = [1, 3, 5, 4, 7, 8]

function findMax(a) {
    let max = a[0]
    for (let index = 0; index < a.length; index++) {
        if (a[index] > max) {
            max = a[index]
        }
    }
    return max
}

console.log("Max of [1, 3, 5, 4, 7, 8]: ", findMax(a))