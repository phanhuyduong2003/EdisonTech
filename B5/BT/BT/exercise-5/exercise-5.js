function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (submittedUsers) {
      return goodUsers.some(function (goodUsers) {
        return goodUsers.id == submittedUsers.id
      })
    })
  };
}
let goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
let testAllValid = checkUsersValid(goodUsers);
console.log(testAllValid([{ id: 2 }, { id: 1 }]));
