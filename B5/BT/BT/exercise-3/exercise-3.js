function removeFromArray(array, deleteItem) {
  // Coding here
  if (!array || !deleteItem) {
    return
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] == deleteItem) {
      array.splice(i, 1)
    }
  }
  return array
}
console.log(removeFromArray([1, 2, 3, 4, 5, 3], 3));
