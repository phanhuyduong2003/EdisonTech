function convertNumber(number) {
  // Coding here
  let a = 0, i = 0
  while (number > 0) {
    a += (number % 2) * (10**i)
    i += 1
    number = parseInt(number/2)
  }
  return a
}
console.log(convertNumber(47));