function onlyNumbers(array: any[]) {
    let check = true
    array.map(element => {
        if (typeof element !== "number") {
            check = false
        }
    })
    return check
}
function sumNumber(array: any[]) {
    return new Promise((resolve, reject) => {
        if (onlyNumbers(array)) {
            let sum = 0
            for (const value of array) {
                sum += value
            }
            resolve(sum)
        } else {
            reject('Has a non-integer element')
        }
    })
}
const getData = async function () {
    try {
        const allPromise = Promise.all([
            sumNumber([1, 2]),
            sumNumber(['5', 4.5])
        ])
        const list = await allPromise
        console.log(list)
    } catch (error) {
        console.log(error)
    }
}
getData()