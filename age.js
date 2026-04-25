function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();

  if (!isNaN(dob)) {
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
          age--;
      }
      document.getElementById("ageResult").innerHTML = `You are ${age} years old.`;
  } else {
      document.getElementById("ageResult").innerHTML = "Please select your date of birth.";
  }
}
