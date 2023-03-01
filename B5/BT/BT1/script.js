function avgMark(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    let avg = (sum / a.length).toFixed(2)
    return avg
}
let average = avgMark([40, 50, 50, 80, 70, 90, 100, 60, 20, 40])
if (0 < average && average <= 70) {
    console.log('Mark average grade of [40, 50, 50, 80, 70, 90, 100, 60, 20, 40]: Grade D -', average)
} else if (71 <= average && average <= 80) {
    console.log('Mark average grade of [40, 50, 50, 80, 70, 90, 100, 60, 20, 40]: Grade C -', average)
} else if (81 <= average && average <= 90) {
    console.log('Mark average grade of [40, 50, 50, 80, 70, 90, 100, 60, 20, 40]: Grade B -', average)
} else if (91 <= average && average <= 100) {
    console.log('Mark average grade of [40, 50, 50, 80, 70, 90, 100, 60, 20, 40]: Grade A -', average)
}