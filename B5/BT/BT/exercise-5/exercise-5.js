function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (submitUser) {
      return goodUsers.some(function (goodUser) {
        return submitUser.id === goodUser.id;
      })
    })
  };
}
let goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
let testAllValid = checkUsersValid(goodUsers);
console.log(testAllValid([{ id: 2 }, { id: 1 }]));
