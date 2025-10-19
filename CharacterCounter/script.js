// 1. Define constants for elements and the character limit
const textContainer = document.getElementById('text-container');
const textArea = document.getElementById('text-area');
const MAX_CHARS = 100; 

// 2. Create and correctly insert the <p> element
const para = document.createElement('p');

if (textContainer) {
    // Correct method to insert element as the last child
    textContainer.appendChild(para);
}

// 3. Define the robust counter function
function charCounter(event) {
    const typedText = event.target.value;
    const charCount = typedText.length;
    const remaining = MAX_CHARS - charCount;

    // A. Update the text with context
    para.textContent = `${charCount} / ${MAX_CHARS} characters used. (${remaining} remaining)`;
    
    // B. Provide visual feedback based on the remaining count (using inline CSS for simplicity)
    if (remaining < 0) {
        para.style.color = 'red';
    } else if (remaining <= 20) {
        para.style.color = 'orange';
    } else {
        para.style.color = 'green';
    }
}

// 4. Use the optimal 'input' event listener
textArea.addEventListener('input', charCounter);

// 5. Initialize the counter immediately (if the textarea has content)
if (textArea) {
    // Manually call the function to initialize the display
    // We pass a dummy 'event' structure that matches what 'input' provides
    charCounter({ target: textArea }); 
}