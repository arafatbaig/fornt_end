
function calculateTotal() {
  let bill = Number(document.getElementById("bill").value);
  let tipPercentage = Number(document.getElementById("tip").value);
  let total = bill + tipPercentage;
  document.getElementById("total").innerHTML = `Total: ${total}`;
}
