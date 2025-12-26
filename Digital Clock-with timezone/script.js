
 // Cache DOM elements
const dateCard = document.querySelector('.date-card');
const timezoneSelect = document.getElementById('Time-Zonez');

// Validate elements
if (!dateCard || !timezoneSelect) {
    console.error('Clock elements or timezone select not found');
}

// Create formatters for each timezone (cached for performance)
const formatters = {
    'Asia/Kolkata': new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }),
    'UTC': new Intl.DateTimeFormat('en-IN', {
        timeZone: 'UTC',
        hour: '2-digit',
        minute: '2-digit', 
        second: '2-digit',
        hour12: false
    }),
    'America/New_York': new Intl.DateTimeFormat('en-IN', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit', 
        hour12: false
    })
};

function updateDateTime() {
    const now = new Date();
    const selectedValue = timezoneSelect.value;
    const formatter = formatters[selectedValue];
    
    if (formatter) {
        dateCard.textContent = formatter.format(now);
    }
}

// Start clock
updateDateTime();
setInterval(updateDateTime, 1000);

// Update when timezone changes
timezoneSelect.addEventListener('change', updateDateTime);
