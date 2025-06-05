document.getElementById('bmi-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const resultDiv = document.getElementById('result');

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultDiv.textContent = 'Please enter valid height and weight values.';
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const bmiRounded = bmi.toFixed(1);

  let category = '';

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  resultDiv.textContent = `Your BMI is ${bmiRounded} (${category}).`;
});
