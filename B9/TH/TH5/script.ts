function SumNumber(a: any, b: any) {
    return new Promise((resolve, reject) => {
        if (typeof a === 'number' && typeof b === 'number') {
            let sum = a + b
            resolve(sum)
        } else {
            reject('Not number')
        }
    })
} 
const GetData = async (a: any, b: any) => {
    SumNumber(a, b)
        .then(val => {
        console.log(val)
        })
        .catch(err => {
        console.log(err)
    })
}
GetData(1, 'a')