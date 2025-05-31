const form = document.querySelector('form');
const results = document.getElementById('results');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  if (height === '' || isNaN(height) || height < 0) {
    results.innerHTML = 'Enter valid height';
  } else if (weight === '' || isNaN(weight) || weight < 0) {
    results.innerHTML = 'Enter valid weight';
  } else {
    results.style.color = 'black';
    const heightInMeter = height / 100;
    const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is <span>${bmi}</span><div>You are Under Weight</div>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Your BMI is <span>${bmi}</span><div>Your BMI report is Normal</div>`;
    } else {
      results.innerHTML = `Your BMI is <span>${bmi}</span><div>You are Overweight</div>`;
    }
  }
});
