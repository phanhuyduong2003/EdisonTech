let a1 = [3, 5, 8, 6, 6, 2, 7, 1, 7, 9]
let a2 = [8, 3, 5, 0, 6, 1, 6, 9, 5, 2]
console.log('\na1[3, 5, 8, 6, 6, 2, 7, 1, 7, 9]\na2[8, 3, 5, 0, 6, 1, 6, 9, 5, 2]\n')
function check(a1, a2) {
    let max1 = min1 = a1[0]
    let max2 = min2 = a2[0]
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] > max1) {
            max1 = a1[i]
        }
        if (a1[i] < min1) {
            min1 = a1[i]
        }
    }
    for (let i = 0; i < a2.length; i++) {
        if (a2[i] > max2) {
            max2 = a2[i]
        }
        if (a2[i] < min2) {
            min2 = a2[i]
        }
    }
    console.log('Max1:', max1, '\nMin1:', min1, '\nMax2:', max2, '\nMin2:', min2)
    if (min1 > min2 && max1 < max2) {
        return true
    } else {
        return false
    }
}
console.log('\nResult:', check(a1, a2))