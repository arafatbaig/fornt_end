function calculateTotal() {
  let billAmount = Number(document.getElementById("bill").value);
  let tip = Number(document.getElementById("tip").value);

  let tipPercentage = tip/100;
  let totalBillAmount = billAmount + tipPercentage;

  let totalElement = document.getElementById("total");
  totalElement.innerHTML = `Total bill amount: ₹${totalBillAmount.toFixed(2)}`;
  
  conosole.log("Output");
}
