document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  var weight = parseFloat(document.getElementById('weight').value);
  var height = parseFloat(document.getElementById('height').value);
  var bmi = weight / ((height / 100) ** 2);

  var resultElement = document.getElementById('result');
  resultElement.textContent = 'Your BMI: ' + bmi.toFixed(2);
});
