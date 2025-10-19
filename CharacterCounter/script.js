let textContainer = document.getElementById('text-container');
let textArea = document.getElementById('text-area');

// 1. Create the <p> element for displaying the count
let para = document.createElement('p');


if (textContainer) {
    textContainer.appendChild(para);
} 


function charCounter(event) {
    // Get the current value from the textarea
    let typedText = event.target.value;

    // Calculate the length (character count)
    let charCount = typedText.length;

    // 3. Update the text content of the 'para' element
    para.textContent = `Character Count: ${charCount}`; // Added descriptive text
}

// 4. Use 'input' event for real-time counting
textArea.addEventListener('input', charCounter);
