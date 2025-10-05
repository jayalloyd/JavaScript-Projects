let bulbToggle = document.getElementById('bulb-toggle');
let bulb = document.getElementsByClassName('bulb')[0]; // Get the first bulb element

function switchBulb() {
    // Check if the bulbToggle is currently checked (ON state)
    if (bulbToggle.checked) {
        // Bulb ON logic
        bulb.style.backgroundColor = "yellow";
        bulb.style.boxShadow = "0 0 20px 5px yellow";
    } else {
        // Bulb OFF logic
        bulb.style.backgroundColor = "black"; // Or whatever your default background is
        bulb.style.boxShadow = "none";
    }
}

// Attach a single event listener to handle both ON and OFF states
bulbToggle.addEventListener('change', switchBulb);



