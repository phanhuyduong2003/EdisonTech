var array = [10, 50, 60, 80]

if (array.length < 0) {
    return
}
var count = 0;
for (let i = 0; i < array.length; i++) {
    count += array[i];
}
var avg = count / array.length
console.log(avg)
switch (avg) {
    case avg > 0 && avg <= 70:
        console.log('D')
        break;
    case avg > 70 && avg <= 80:
        console.log('C')
        break;
    case avg > 80 && avg <= 90:
        console.log('B')
        break;
    default:
        console.log('A')
        break;
}
