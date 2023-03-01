function calculate() {
  let amount = prompt("Enter amount: ")
  let rate = prompt("Enter rate: ")
  let months = prompt("Enter months: ")
  const interest = (amount * (rate * 0.01)) / months;
  const total = ((amount / months) + interest).toFixed(2);
  alert("Total: " + total)
}
