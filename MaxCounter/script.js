let counter = 0;
const counterButton = document.getElementById('count');
const counterDisplay = document.getElementById('counterValue');

function Counter() {
  counter++;
  if (counter >= 10) {
    counterButton.disabled = true;
    counterButton.innerText = "Limit reached";
  }
  counterDisplay.innerText = counter;
}

counterButton.addEventListener('click', Counter);
