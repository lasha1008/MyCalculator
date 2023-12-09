function appendToDisplay(value) {
  let currentDisplay = document.getElementById('display').value;

  const lastChar = currentDisplay.slice(-1);
  const operators = ['+', '-', '*', '/'];

  if (value === '.' && currentDisplay.includes('.')) {
    return;
  }

  if (value === '0' && currentDisplay === '0') {
    return;
  }

  if (operators.includes(lastChar) && operators.includes(value)) {
    document.getElementById('display').value = currentDisplay.slice(0, -1) + value;
  } else {
    document.getElementById('display').value += value;
  }
}
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  function backspace() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
  }
  
  function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

  function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.getElementById('calculator-container').classList.toggle('dark-theme');
  }
