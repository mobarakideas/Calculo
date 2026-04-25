function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);

  if (height && weight) {
      const bmi = weight / (height * height);
      document.getElementById("bmiResult").innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
  } else {
      document.getElementById("bmiResult").innerHTML = "Please enter height and weight.";
  }
}
