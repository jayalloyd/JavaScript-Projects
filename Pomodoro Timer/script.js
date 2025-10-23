
let timerInterval = null;
// 'seconds' is the key: it stores the total elapsed seconds for the stopwatch, 
// OR the total remaining seconds for the countdown timer.
let seconds = 0; 
let isCountdown = false; // Flag to track if we're in countdown mode

// Get the display element
const timerDisplay = document.getElementById('timer-display');

// --- Core Helper Function ---

/**
 * Updates the display element with the current MM:SS format 
 * calculated from the global 'seconds' variable.
 */
function updateTimerDisplay() {
    // Math.max(0, seconds) prevents the display from going negative briefly
    const totalSeconds = Math.max(0, seconds);
    
    // Calculates minutes and seconds from the total 'seconds' stored globally
    let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    let secs = String(totalSeconds % 60).padStart(2, '0');

    timerDisplay.textContent = `${minutes}:${secs}`;
    
    // Optional: Add a visual cue when time is almost up
    if (isCountdown && seconds > 0 && seconds <= 10) {
        timerDisplay.classList.add('text-red-600', 'animate-pulse');
    } else {
        timerDisplay.classList.remove('text-red-600', 'animate-pulse');
    }
}

// --- Timer Control Functions ---

/**
 * Stops the timer and clears the interval.
 */
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null; // IMPORTANT: Reset the interval variable
        
        // Optional: Update the Pause/Resume button text
        const toggleButton = document.querySelector('.btn-toggle');
        if (toggleButton) {
            toggleButton.textContent = 'Resume';
        }
    }
    console.log("Timer stopped.");
}

/**
 * Starts the timer interval. Uses the global 'isCountdown' flag to determine 
 * the function to execute every second.
 */
function startTimer() {
    // Only start if a timer isn't already running
    if (timerInterval) return;

    if (isCountdown && seconds <= 0) {
        // Prevent starting a countdown that has already finished
        console.log("Cannot start: Countdown is finished.");
        return;
    }
    
    // Determine which function to run every second
    const tickFunction = isCountdown ? countdownTick : stopwatchTick;

    timerInterval = setInterval(tickFunction, 1000);

    // Optional: Update the Pause/Resume button text
    const toggleButton = document.querySelector('.btn-toggle');
    if (toggleButton) {
        toggleButton.textContent = 'Pause';
    }

    console.log(isCountdown ? "Countdown timer started." : "Stopwatch started.");
}

/**
 * Resets the timer to 00:00.
 */
function resetTimer() {
    stopTimer();       // Stop any running timer
    seconds = 0;       // Reset global seconds to 0
    isCountdown = false; // Always reset the mode flag
    updateTimerDisplay();
    console.log("Timer reset.");
}

/**
 * Toggles the timer between paused and running state.
 */
function togglePauseResume() {
    if (timerInterval) {
        // Timer is running -> Pause it
        stopTimer();
    } else {
        // Timer is stopped/paused -> Resume it
        startTimer();
    }
}

// /**
//  * Stops, resets, and immediately starts the timer again.
//  */
// function restartTimer() {
//     resetTimer(); // Stop and set seconds to 0
//     startTimer(); // Start immediately as a stopwatch
//     console.log("Timer restarted (as Stopwatch).");
// }

// --- Tick Logic ---

/**
 * Logic for the standard Stopwatch (Up-Counter) mode.
 */
function stopwatchTick() {
    seconds++; // Increment total seconds
    updateTimerDisplay();
}

/**
 * Logic for the Countdown Timer mode.
 */
function countdownTick() {
    seconds--; // Decrement the total seconds

    if (seconds <= 0) {
        seconds = 0; // Ensure it doesn't go negative
        updateTimerDisplay();
        stopTimer();
        console.log("--- COUNTDOWN FINISHED! ---");
        // You could add an alert here: alert("Time's Up!");
        return; // Stop execution of this interval run
    }
    
    updateTimerDisplay();
}

// --- Countdown Setup Function ---

/**
 * Prompts the user for a time limit and starts a countdown timer.
 */
function timeChooser() {
    stopTimer(); // Always stop the current timer before starting a new one

    let timeLimitInput = prompt("Enter the time limit in minutes for the countdown:");
    let timeLimit = parseInt(timeLimitInput);

    // Validate the input: must be a positive number
    if (!isNaN(timeLimit) && timeLimit > 0) {
        
        // 1. Set mode and starting point
        isCountdown = true;
        seconds = timeLimit * 60; // Convert minutes to total seconds

        // 2. Initial display update
        updateTimerDisplay(); 

        // 3. Start the timer with the countdown logic
        startTimer();
    
    } else {
        // Reset the state and show an error if input is invalid
        resetTimer();
        alert("Invalid input. Please enter a positive number for the time limit.");
        console.log("Invalid input. Please enter a positive number for the time limit.");
    }
}

// Initial call to display 00:00 when the page loads
updateTimerDisplay();