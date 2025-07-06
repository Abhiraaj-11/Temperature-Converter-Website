function convert() {
  const degrees = parseFloat(document.getElementById('degrees').value);
  const type = document.getElementById('type').value;

  if (isNaN(degrees)) {
    document.getElementById('result').textContent =
      'Please enter a valid number';
    return;
  }

  let result;
  let symbol;

  switch (type) {
    case 'fahrenheit':
      result = ((degrees - 32) * 5) / 9;
      symbol = 'C';
      break;
    case 'celsius':
      result = (degrees * 9) / 5 + 32;
      symbol = 'F';
      break;

    default:
      break;
  }

  document.getElementById('result').textContent = `${result.toFixed(2)} °${symbol}`;
}
