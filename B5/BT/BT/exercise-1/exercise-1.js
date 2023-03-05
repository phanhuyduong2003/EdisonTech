function repeatString(string, num) {
  // Coding here
  if (!string || !num) {
    return
  }
  let result = ''
  for (let i = 0; i < num; i++) {
    result += string
  }
  return result
}

console.log(repeatString('hey', 3));
