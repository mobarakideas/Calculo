function calculateEMI() {
  const loan = parseFloat(document.getElementById("loan").value);
  const rate = parseFloat(document.getElementById("rate").value) / 12 / 100;
  const time = parseFloat(document.getElementById("time").value) * 12;

  if (loan && rate && time) {
      const emi = (loan * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
      document.getElementById("emiResult").innerHTML = `Your EMI is ₹${emi.toFixed(2)}`;
  } else {
      document.getElementById("emiResult").innerHTML = "Please enter all values.";
  }
}
