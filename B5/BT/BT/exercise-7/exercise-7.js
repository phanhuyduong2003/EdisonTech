function count(inputWords) {
    return inputWords.reduce(function (previousValue, currentValue) {
        console.log(previousValue, currentValue);
        if (previousValue[currentValue]) {
            ++previousValue[currentValue];
        } else {
            previousValue[currentValue] = 1;
        }
        return previousValue;
    }, {})
}
let inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
count(inputWords);