//Part #6: Spread Syntax
export function part6() {
    let arr1 = [1, 2, 3]
    let arr2 = [4, 5, 6]
    let arr3 = [...arr1, ...arr2]
    console.log(arr3);
    function findLength(...args) {
        console.log("Length: "+args.length);
    }
    findLength(2, 3, 4)
}