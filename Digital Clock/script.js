let digitalClock = document.getElementById('digitalClock'); // Renamed variable for clarity (from 'clock')
let clockDay = document.querySelector('.clock-day');
let clockDate = document.querySelector('.clock-date');

function updateClock() {
  let now = new Date();

  // Time Formatting
  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');
  digitalClock.textContent = `${hours} : ${minutes} : ${seconds}`; // Updated variable name

  // Date & Day Formatting
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let day = days[now.getDay()];
  let date = now.getDate();
  // Using 'default' and 'long' for the full month name
  let month = now.toLocaleString('default', { month: 'long' }); 
  let year = now.getFullYear();

  // Update the elements
  clockDay.textContent = day;
  clockDate.textContent = `${date} ${month} ${year}`;
}

// Run once immediately to prevent a 1-second delay on page load
updateClock(); 

// Set the interval to update every second
setInterval(updateClock, 1000);