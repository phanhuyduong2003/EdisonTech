function reverseString(string) {
  // Coding here
  if (!string) {
    return
  }
  let result = ""
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i]
  }
  return result
}
console.log(reverseString('hello there'));